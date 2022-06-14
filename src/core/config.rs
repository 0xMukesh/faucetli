use clap::crate_name;
use serde_json::{self, Value};
use std::{
    fs::{create_dir_all, File},
    io::Write,
    path::PathBuf,
};

pub fn get_config_path() -> PathBuf {
    let config_dir = dirs::config_dir().unwrap();
    let config_path = config_dir.join(format!("{}/config.json", crate_name!()));
    return config_path;
}

pub fn create_config_file() -> File {
    let config_path = get_config_path();
    // check if file exists
    if config_path.exists() {
        return File::open(config_path).unwrap();
    }
    let parent_dir = config_path.parent().unwrap();
    create_dir_all(parent_dir).unwrap();
    let mut config_file = File::create(config_path).unwrap();
    config_file.write("{}".as_bytes()).unwrap();
    return config_file;
}

pub fn get_config() -> Value {
    let config_path = get_config_path();
    let config_file = File::open(config_path).unwrap();
    let config: Value = serde_json::from_reader(config_file).unwrap();
    return config;
}
