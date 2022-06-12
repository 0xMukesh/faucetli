use crate::cli::app::App;
use anyhow::Result;
use clap::Values;
use colored::Colorize;
use inquire::Text;

pub fn request(app: App, args: Option<Values>) -> Result<()> {
    let mut args = args.unwrap().into_iter();
    let chain = args.next().unwrap();

    let wallet_address = Text::new("Enter ur wallet address ser:").prompt().unwrap();

    println!(
        "Sending tokens to {} on {} (ps: still not functioniong, just making UI lol)",
        wallet_address.green(),
        chain.cyan()
    );

    Ok(())
}
