# Commands

`Usage: terraform [-version] [-help] <command> [args]`

The available commands for execution are listed below. The primary workflow commands are given first, followed by less common or more advanced commands.

### Main commands

```bash
brew install terraform

init          Prepare your working directory for other commands
validate      Check whether the configuration is valid
plan          Show changes required by the current configuration
apply         Create or update infrastructure
destroy       Destroy previously-created infrastructure
```

### Global options (use these before the subcommand, if any)

```bash
-chdir=DIR    Switch to a different working directory before executing the
   given subcommand.
-help         Show this help output, or the help for a specified subcommand.
-version      An alias for the "version" subcommand.
```

### All other commands

```bash
console       Try Terraform expressions at an interactive command prompt
fmt           Reformat your configuration in the standard style
force-unlock  Release a stuck lock on the current workspace
get           Install or upgrade remote Terraform modules
graph         Generate a Graphviz graph of the steps in an operation
import        Associate existing infrastructure with a Terraform resource
login         Obtain and save credentials for a remote host
logout        Remove locally-stored credentials for a remote host
metadata      Metadata related commands
output        Show output values from your root module
providers     Show the providers required for this configuration
refresh       Update the state to match remote systems
show          Show the current state or a saved plan
state         Advanced state management
taint         Mark a resource instance as not fully functional
test          Experimental support for module integration testing
untaint       Remove the 'tainted' state from a resource instance
version       Show the current Terraform version
workspace     Workspace management
```

#### Terraform refresh

The `terraform refresh` command reads the current settings from all managed remote objects and updates the Terraform state to match.
