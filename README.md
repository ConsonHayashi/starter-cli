oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g hayashi
$ hayashi COMMAND
running command...
$ hayashi (--version)
hayashi/0.0.0 darwin-x64 node-v14.15.1
$ hayashi --help [COMMAND]
USAGE
  $ hayashi COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`hayashi hello PERSON`](#hayashi-hello-person)
* [`hayashi hello world`](#hayashi-hello-world)
* [`hayashi help [COMMAND]`](#hayashi-help-command)
* [`hayashi mvn [FIRSTARG] [SECONDARG]`](#hayashi-mvn-firstarg-secondarg)
* [`hayashi plugins`](#hayashi-plugins)
* [`hayashi plugins:install PLUGIN...`](#hayashi-pluginsinstall-plugin)
* [`hayashi plugins:inspect PLUGIN...`](#hayashi-pluginsinspect-plugin)
* [`hayashi plugins:install PLUGIN...`](#hayashi-pluginsinstall-plugin-1)
* [`hayashi plugins:link PLUGIN`](#hayashi-pluginslink-plugin)
* [`hayashi plugins:uninstall PLUGIN...`](#hayashi-pluginsuninstall-plugin)
* [`hayashi plugins:uninstall PLUGIN...`](#hayashi-pluginsuninstall-plugin-1)
* [`hayashi plugins:uninstall PLUGIN...`](#hayashi-pluginsuninstall-plugin-2)
* [`hayashi plugins update`](#hayashi-plugins-update)

## `hayashi hello PERSON`

Say hello

```
USAGE
  $ hayashi hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/ConsonHayashi/hayashi.io.git/hayashi.io/blob/v0.0.0/dist/commands/hello/index.ts)_

## `hayashi hello world`

Say hello world

```
USAGE
  $ hayashi hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

## `hayashi help [COMMAND]`

Display help for hayashi.

```
USAGE
  $ hayashi help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for hayashi.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.10/src/commands/help.ts)_

## `hayashi mvn [FIRSTARG] [SECONDARG]`

description of this example command

```
USAGE
  $ hayashi mvn [FIRSTARG] [SECONDARG] [--json] [-n <value>] [-f]

ARGUMENTS
  FIRSTARG   Person to say hello to
  SECONDARG  who to say hello to

FLAGS
  -f, --fast          skip lots of steps
  -n, --name=<value>  [default: world] sname

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  description of this example command
```

_See code: [dist/commands/mvn/index.ts](https://github.com/ConsonHayashi/hayashi.io.git/hayashi.io/blob/v0.0.0/dist/commands/mvn/index.ts)_

## `hayashi plugins`

List installed plugins.

```
USAGE
  $ hayashi plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ hayashi plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `hayashi plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ hayashi plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ hayashi plugins add

EXAMPLES
  $ hayashi plugins:install myplugin 

  $ hayashi plugins:install https://github.com/someuser/someplugin

  $ hayashi plugins:install someuser/someplugin
```

## `hayashi plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ hayashi plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ hayashi plugins:inspect myplugin
```

## `hayashi plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ hayashi plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ hayashi plugins add

EXAMPLES
  $ hayashi plugins:install myplugin 

  $ hayashi plugins:install https://github.com/someuser/someplugin

  $ hayashi plugins:install someuser/someplugin
```

## `hayashi plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ hayashi plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ hayashi plugins:link myplugin
```

## `hayashi plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ hayashi plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ hayashi plugins unlink
  $ hayashi plugins remove
```

## `hayashi plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ hayashi plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ hayashi plugins unlink
  $ hayashi plugins remove
```

## `hayashi plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ hayashi plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ hayashi plugins unlink
  $ hayashi plugins remove
```

## `hayashi plugins update`

Update installed plugins.

```
USAGE
  $ hayashi plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
