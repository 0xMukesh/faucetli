use crate::cli::app::App;
use anyhow::Result;
use clap::Values;

pub fn networks(app: App, _args: Option<Values>) -> Result<()> {
    println!("networks");
    Ok(())
}
