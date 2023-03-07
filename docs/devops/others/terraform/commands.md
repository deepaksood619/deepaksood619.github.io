# Commands

`Usage: terraform [-version] [-help] <command> [args]`

The available commands for execution are listed below. The most common, useful commands are shown first, followed by less common or more advanced commands. If you're just getting started with Terraform, stick with the common commands. For the other commands, please read the help and docs before usage.

```bash
Common commands:
    apply              Builds or changes infrastructure
 The prefix -/+ means that Terraform will destroy and recreate the resource, rather than updating it in-place.

    console            Interactive console for Terraform interpolations
    destroy            Destroy Terraform-managed infrastructure
    env                Workspace management
    fmt                Rewrites config files to canonical format
    get                Download and install modules for the configuration
    graph              Create a visual graph of Terraform resources
    import             Import existing infrastructure into Terraform
    init               Initialize a Terraform working directory
 terraform init to download the latest version of the provider and build the .terraform directory.

    output             Read an output from a state file
    plan               Generate and show an execution plan
    providers          Prints a tree of the providers used in the configuration
    push               Upload this Terraform module to Atlas to run
    refresh            Update local state file against real resources
    show               Inspect Terraform state or plan
    state                This command has subcommands for advanced state management.
     list    List resources in the state
     mv      Move an item in the state
     pull    Pull current state and output to stdout
     push    Update remote state from a local state file
     rm      Remove instances from the state
     show    Show a resource in the state

    taint              Manually mark a resource for recreation
 terraform taint aws_instance.example
    untaint            Manually unmark a resource as tainted
 terraform untaint aws_instance.example
    validate           Validates the Terraform files
    version            Prints the Terraform version
    workspace          Workspace management

All other commands:
    debug              Debug output management (experimental)
    force-unlock       Manually unlock the terraform state
    state              Advanced state management
```
