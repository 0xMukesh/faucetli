# 🦄 faucetli

A command line tool to get tokens on testnets quickly!

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/faucetli.svg)](https://npmjs.org/package/faucetli)
[![Downloads/week](https://img.shields.io/npm/dw/faucetli.svg)](https://npmjs.org/package/faucetli)
[![License](https://img.shields.io/npm/l/faucetli.svg)](https://github.com/kira272921/faucetli/blob/main/package.json)

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

_See code: [src/commands/request.ts](https://github.com/Kira272921/faucetli/blob/main/src/commands/request.ts)_

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

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/main/src/commands/help.ts)_

<!-- commandsstop -->
