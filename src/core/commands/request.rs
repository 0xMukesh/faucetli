use crate::{cli::app::App, core::constants::Chains};
use anyhow::Result;
use clap::Values;
use colored::Colorize;
use inquire::{Select, Text};
use strum::IntoEnumIterator;

pub fn request(_app: App, args: Option<Values>) -> Result<()> {
    let mut args = args.unwrap_or_default();

    let chain: Chains;

    if args.len() == 0 {
        let chain_list = Chains::iter()
            .map(|c| c.display_name().to_string())
            .collect::<Vec<_>>();

        let chain_display_name = Select::new("select chain ser", chain_list)
            .prompt()
            .unwrap();

        chain = Chains::from(&chain_display_name).unwrap()
    } else {
        let chain_name = args.next().unwrap().to_string();
        chain = Chains::from(&chain_name).unwrap()
    }

    let wallet_address = Text::new("Enter ur wallet address ser:").prompt().unwrap();

    println!(
        "Sending tokens to {} on {} (ps: still not functioniong, just making UI lol)",
        wallet_address.green(),
        chain.display_name().cyan(),
    );

    Ok(())
}
