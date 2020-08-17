const Discord = require("discord.js");

const client = new Discord.Client();

const botChannelId = '745048746055958560';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

const help = `
Commands:
  help
  hi
  deadlines
`;

const deadlines = `
| Email              |  Deadline  | Points |
|:------------------:|------------|:------:|
| Progress Report 1  |    Aug 31  |    4   |
| Progress Report 2  |    Sep 14  |    8   |
| Progress Report 3  |    Sep 28  |    8   |
| Progress Report 4  |    Oct 12  |    8   |
| Progress Report 5  |    Oct 26  |    8   |
| Progress Report 6  |    Nov  9  |    8   |
| Progress Report 7  |    Nov 23  |    8   |
| Progress Report 8  |    Dec  7  |    8   |
`;

client.on('message', message => {
  if (message.channel.id != botChannelId) return;
  if (message.content == 'help') {
    message.reply('> ' + help);
  } else if (message.content == 'hi') {
    message.reply('> hello');
  } else if (message.content == 'deadlines') {
    message.reply('> ' + deadlines);
  }
});

client.login(process.env.bot_token);

