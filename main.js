const Discord = require("discord.js");

const botChannelId   = '745048746055958560' ;
const client         = new Discord.Client() ;

const hiReply        = 'hi';
const helpReply      = 'I respond to hi, help, about and deadlines.';
const dontKnowReply  = "I don't understand. Try typing help.";
const aboutReply     = 'I was written by David Turner to illustrate Web App Dev in Discord. To see how he did it, go to the course repo at https://github.com/csusbdt/4050-2020-fall';
const deadlinesReply = new Discord.MessageEmbed();

deadlinesReply.type = 'rich';
deadlinesReply.setTitle('Deadlines');
deadlinesReply.setDescription([
'`| Email              |  Deadline  | Points |`',
'`|--------------------|------------|:------:|`',
'`| Progress Report 1  |    Aug 31  |    4   |`',
'`| Progress Report 2  |    Sep 14  |    8   |`',
'`| Progress Report 3  |    Sep 28  |    8   |`',
'`| Progress Report 4  |    Oct 12  |    8   |`',
'`| Progress Report 5  |    Oct 26  |    8   |`',
'`| Progress Report 6  |    Nov  9  |    8   |`',
'`| Progress Report 7  |    Nov 23  |    8   |`',
'`| Progress Report 8  |    Dec  7  |    8   |`'
].join('\n'));

// I believe a handler must be set for ready event.
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async message => {
  if (message.channel.id != botChannelId) {
    return;
  }
  if (message.author.bot) return; // to avoid infinite recursion
  if (message.content == 'hi')               {
    message.channel.send(hiReply);
  } else if (message.content == 'help')      {
    message.channel.send(helpReply);
  } else if (message.content == 'deadlines') {
    message.channel.send(deadlinesReply);
  } else if (message.content == 'about') {
    message.channel.send(aboutReply);
  } else                                     {
    message.channel.send(dontKnowReply);
  }
});

client.login(process.env.bot_token);

