use strum_macros::EnumIter;

#[derive(Debug, EnumIter)]
pub enum Chains {
    Mumbai,
    Rinkeby,
    Devnet,
}

impl Chains {
    pub fn display_name(&self) -> &'static str {
        match self {
            Chains::Mumbai => "Polygon Mumbai",
            Chains::Rinkeby => "Rinkeby Testnet",
            Chains::Devnet => "Solana Devnet",
        }
    }

    pub fn from(name: &str) -> Option<Chains> {
        match name {
            "Polygon Mumbai" => Some(Chains::Mumbai),
            "Rinkeby Testnet" => Some(Chains::Rinkeby),
            "Solana Devnet" => Some(Chains::Devnet),
            _ => None,
        }
    }
}
