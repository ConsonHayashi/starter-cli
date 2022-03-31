import {
  Command,
  Flags,
} from "@oclif/core"

export class Mvn extends Command {
  static enableJsonFlag = true
  static description = 'description of this example command'

  static flags = {
    name: Flags.string({ char: 'n', description: 'sname', required: false, default: 'world' }),
    fast: Flags.boolean({
      char: 'f',
      description: "skip lots of steps",
      required: false,
      default: true
    }),
  }

  static args = [
    { name: 'firstArg', description: 'Person to say hello to', required: false },
    { name: 'secondArg', description: 'who to say hello to', required: false }
  ]

  async run(): Promise<{ message: string }> {
    const { flags, args, argv } = await this.parse(Mvn)
    if (args.firstArg) console.log(`running my command with args: ${args.firstArg}, ${args.secondArg}`)
    if (args.secondArg) console.log(`running my command with args: ${argv[0]}, ${argv[1]}`)
    if (flags.fast) console.log('--fast is set ' + flags.fast)
    if (flags.name) console.log('--name is set ' + flags.name)
    return { message: "mvn" }
  }
}