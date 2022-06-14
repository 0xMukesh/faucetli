use std::process::exit;

use crate::{
    cli::app::App,
    core::{config::write_key, constants::Chains},
};
use anyhow::Result;
use clap::Values;
use colored::Colorize;
use inquire::{Select, Text};
use serde_json::Value;
use strum::IntoEnumIterator;

pub fn request(app: &mut App, args: Option<Values>) -> Result<()> {
    let mut args = args.unwrap_or_default();
    let config = &app.config;

    let chain: Chains;

    if args.len() == 0 {
        let chain_list = Chains::iter()
            .map(|c| c.display_name().to_string())
            .collect::<Vec<_>>();

        let chain_display_name = Select::new("select chain ser", chain_list)
            .prompt()
            .unwrap();

        chain = Chains::from_display_name(&chain_display_name).unwrap()
    } else {
        let chain_name = args.next().unwrap().to_string();

        let allowed_chains = Chains::iter()
            .map(|c| c.arg_name().to_string())
            .collect::<Vec<_>>();

        if !allowed_chains.contains(&chain_name) {
            println!("{}", "Invalid chain".red());
            exit(1);
        }

        chain = Chains::from_arg(&chain_name).unwrap()
    }

    let wallet_address: &str;

    match config.get(chain.address_config_name()) {
        Some(pubkey) => {
            wallet_address = pubkey.as_str().unwrap();
        }
        None => {
            let address = Text::new(chain.wallet_address_question())
                .with_validator(&|s| {
                    if s.is_empty() {
                        Err("Wallet address cannot be empty".to_string())
                    } else {
                        Ok(())
                    }
                })
                .prompt()
                .unwrap();

            write_key(chain.address_config_name(), &address);

            app.config[chain.address_config_name()] = Value::String(address);
            wallet_address = app
                .config
                .get(chain.address_config_name())
                .unwrap()
                .as_str()
                .unwrap();
        }
    }

    println!("{}", wallet_address);

    println!(
        "Sending tokens to {} on {} (ps: still not functioniong, just making UI lol)",
        wallet_address.green(),
        chain.display_name().cyan(),
    );

    Ok(())
}
