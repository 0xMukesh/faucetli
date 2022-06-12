pub mod cli;
pub mod core;

use cli::app::App;

fn main() {
    App::new().run();
}
