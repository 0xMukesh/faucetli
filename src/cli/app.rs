use crate::core::{
    commands::{funding::funding, networks::networks, request::request},
    config::{create_config_file, get_config},
};
use anyhow::Result;
use clap::{Arg, Command as ClapCommand, Values};
use serde_json::Value;
use std::{path::PathBuf, process::exit};

pub enum Command {
    Request(Option<Values<'static>>),
    Networks(Option<Values<'static>>),
    Funding(Option<Values<'static>>),
}

pub struct App {
    pub config: Value,
}

pub fn get_config_path() -> PathBuf {
    let config_dir = dirs::config_dir().unwrap();
    let config_path = config_dir.join("config.json");
    return config_path;
}

impl Default for App {
    fn default() -> Self {
        Self::new()
    }
}

impl App {
    #[must_use]
    pub fn new() -> Self {
        create_config_file();

        let config = get_config();

        Self { config }
    }

    fn build(&self) -> ClapCommand {
        ClapCommand::new("faucetli")
            .about("A CLI in Rust to store secrets")
            .subcommand(
                ClapCommand::new("request")
                    .about("Request $$$")
                    .arg(Arg::new("chain").takes_value(true).index(1)),
            )
            .subcommand(ClapCommand::new("networks").about("See all supported networks"))
            .subcommand(ClapCommand::new("funding").about("See details for funding faucetli"))
    }

    fn get_command(&self) -> Command {
        let options = self.build();

        let matches = Box::leak(options.clone().get_matches().into());

        match matches.subcommand() {
            Some(("request", sub)) => Command::Request(sub.values_of("chain")),
            Some(("networks", _)) => Command::Networks(None),
            Some(("funding", _)) => Command::Funding(None),
            _ => {
                println!("No command specified");
                exit(1);
            }
        }
    }

    pub fn run(mut self) -> Result<()> {
        let command = self.get_command();

        match command {
            Command::Request(args) => request(&mut self, args),
            Command::Networks(args) => networks(self, args),
            Command::Funding(args) => funding(self, args),
        }
    }
}
