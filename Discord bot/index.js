require("dotenv").config();

const fs = require('node:fs')
const { Client, Collection, Intents } = require("discord.js");
const { TOKEN: token, CLIENT_ID: clientId, GUILD_ID: guildId } = process.env;

// Loading env files varaibles

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.commands = new Collection()

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))

for(const files of commandFiles) {
    const command = require(`./commands/${files}`)

    client.commands.set(command.data.name, command)
}

client.once("ready", () => console.log("Ready!"));

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  const command = client.commands.get(interaction.commandName)

  if(!command) return

  try {
      await command.execute(interaction)
  } catch(e) {
      console.log(e)
      await interaction.reply({ content: 'There was an error while executing this command', ephemeral: true })
  }
});

client.login(token);
