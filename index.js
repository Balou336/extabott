console.log("teste")
const { Client,GatewayIntentbit, GatewayIntentBits, MessageFlags, WebhookClient } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

const data = new SlashCommandBuilder()
    .setName("botinfo")
    .setDescription("tous ce qui à a savoir sur le bot");

client.on("ready", () => {

    //Client.application.commands.create(data);
    //client.guilds.cache.get("1005824347023355935").commands.create(data);


    console.log("le bot marche")
});

client.on("guildMemberAdd", member => {
    console.log("un menbre est arriver");
});
    
client.on("guildMemberRemove", member => {
    console.log("un menbre a quitter le serveur");
});



client.on("interactionCreate", interaction => {
    if(interaction.isCommand()){
        if(interaction.commandName === "botinfo"){
            interaction.reply("propriétaire:Valou336 \n développer par :Valou336  \n utiliter: zero");

        }
    }
});





client.on("messageCreate", message => {
    if(message.author.bot) return

    console.log(message);
    if(message.content === "quoi"){
        message.reply("feur");

    }
    else if(message.content === "qu oi"){
        message.reply("feur")
    }
    else if(message.content === "q uoi,"){
        message.reply("feur")
    }
    
});




client.login(process.env.TOKEN);