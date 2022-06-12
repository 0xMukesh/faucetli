use crate::cli::app::App;
use anyhow::Result;
use clap::Values;

pub fn request(app: App, args: Option<Values>) -> Result<()> {
    println!("request");
    println!("{:?}", args);
    Ok(())
}
