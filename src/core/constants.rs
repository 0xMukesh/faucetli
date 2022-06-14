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

    pub fn arg_name(&self) -> &'static str {
        match self {
            Chains::Mumbai => "mumbai",
            Chains::Rinkeby => "rinkeby",
            Chains::Devnet => "devnet",
        }
    }

    pub fn from_display_name(name: &str) -> Option<Chains> {
        match name {
            "Polygon Mumbai" => Some(Chains::Mumbai),
            "Rinkeby Testnet" => Some(Chains::Rinkeby),
            "Solana Devnet" => Some(Chains::Devnet),
            _ => None,
        }
    }

    pub fn from_arg(name: &str) -> Option<Chains> {
        match name {
            "mumbai" => Some(Chains::Mumbai),
            "rinkeby" => Some(Chains::Rinkeby),
            "devnet" => Some(Chains::Devnet),
            _ => None,
        }
    }

    pub fn wallet_address_question(&self) -> &'static str {
        match self {
            Chains::Devnet => "Enter your solana wallet address:",
            Chains::Mumbai | Chains::Rinkeby => "Enter your ethereum wallet address:",
        }
    }

    pub fn address_config_name(&self) -> &'static str {
        match self {
            Chains::Devnet => "solana_pubkey",
            Chains::Mumbai | Chains::Rinkeby => "ethereum_pubkey",
        }
    }
}
