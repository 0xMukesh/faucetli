use crate::cli::app::App;
use anyhow::Result;
use clap::Values;

pub fn funding(app: App, _args: Option<Values>) -> Result<()> {
    println!("funding");
    Ok(())
}
