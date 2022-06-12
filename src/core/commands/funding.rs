use crate::cli::app::App;
use anyhow::Result;
use clap::Values;
use colored::Colorize;

pub fn funding(app: App, _args: Option<Values>) -> Result<()> {
    const DONATIONS_ADDRESS: &str = "0x894b6579524c61b56B3aB5624740464EaDF5237E";

    println!(
        "🤩 If you found {} useful and want to keep it going, we accept donations on this address: {}",
        "faucetli".cyan(),
        DONATIONS_ADDRESS.blue().bold()
    );
    println!(
        "🔗 Link: {}{}",
        "https://rinkeby.etherscan.io/address/".blue().bold(),
        DONATIONS_ADDRESS.blue().bold()
    );

    Ok(())
}
