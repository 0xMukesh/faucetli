# 🦄 faucetli

![](https://imgur.com/9WQdXPl.png)

<a href="https://www.producthunt.com/posts/faucetli?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-faucetli" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=341862&theme=dark&period=daily" alt="Faucetli - 🦄&#0032;A&#0032;command&#0045;line&#0032;tool&#0032;to&#0032;get&#0032;tokens&#0032;on&#0032;testnets&#0032;quickly&#0033; | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a> <a href="https://www.producthunt.com/posts/faucetli?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-faucetli" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=341862&theme=dark" alt="Faucetli - 🦄&#0032;A&#0032;command&#0045;line&#0032;tool&#0032;to&#0032;get&#0032;tokens&#0032;on&#0032;testnets&#0032;quickly&#0033; | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>

🦄 A command line tool to get tokens on testnets quickly!

- [Usage](#usage)
- [Commands](#commands)

# Usage

```
$ npm install -g faucetli
$ faucetli COMMAND
running command...
$ faucetli (--version)
faucetli/0.0.0 win32-x64 node-v16.13.0
$ faucetli --help [COMMAND]
USAGE
  $ faucetli COMMAND
...
```

# Commands

- [`faucetli request`](#faucetli-request)
- [`faucetli solana`](#faucetli-solana)
- [`faucetli networks`](#faucetli-networks)
- [`faucetli funding`](#faucetli-funding)
- [`faucetli help [COMMAND]`](#faucetli-help-command)

## `faucetli request`

🦄 Get testnet tokens by using request command

```
USAGE
  $ faucetli request

DESCRIPTION
  🦄 Get testnet tokens by using request command

EXAMPLES
  $ faucetli request

    🎉 sent the tokens to 0xd24CA0297558f0827e2C467603869D1AC9fF435d on rinkeby, check https://rinkeby.etherscan.io/tx/0x1d769e3f6a57a5176b9d1c6fbd8c3692fa0b3764c314ca6c263140794fde2cbd to verify if the transaction was successful
```

## `faucetli solana`

🦄 Get devnet Solana by using the solana command

```
USAGE
  $ faucetli solana

DESCRIPTION
  🦄 Get devnet Solana by using the solana command

EXAMPLES
  $ faucetli solana

    🎉 sent the tokens to 8Dyk53RrtmN3MshQxxWdfTRco9sQJzUHSqkUg8chbe88 on devnet, check https://explorer.solana.com/tx/2hQ5NZzJieBfGvNhTzUQnAQ9ntZ3ybDy9B2o1TUjpFfMqvzD4VDDYp1XiK9kb1KPyCKrWARmvCVC175DBnGiksh2?cluster=devnet to verify if the transaction was successful
```

## `faucetli networks`

🌈 Get the list of all the supported testnets

```
USAGE
  $ faucetli networks

DESCRIPTION
  🌈 Get the list of all the supported testnets

EXAMPLES
  $ faucetli networks

  🌈 These are the testnets supported by faucetli:

  - mumbai
  - rinkeby
```

## `faucetli help [COMMAND]`

Display help for faucetli.

```
USAGE
  $ faucetli help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for faucetli.
```

## Authors

### Mukesh

- Website: https://mukeshdev.xyz
- Twitter: [@mukesh_272921](https://twitter.com/mukesh_272921)
- Discord: https://discord.gg/buidlershub

### Avneesh Agarwal

- Website: https://www.avneesh.tech/
- Twitter: [@avneesh0612](https://twitter.com/avneesh0612)
- Github: [@avneesh0612](https://github.com/avneesh0612)
- LinkedIn: [@avneesh0612](https://www.linkedin.com/in/avneesh0612)
