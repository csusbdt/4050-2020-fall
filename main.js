const Discord = require("discord.js");

const botChannelId   = '745048746055958560'       ;
const client         = new Discord.Client()       ;
const hiReply        = new Discord.MessageEmbed() ;
const helpReply      = new Discord.MessageEmbed() ;
const deadlinesReply = new Discord.MessageEmbed() ;
const dontKnowReply  = new Discord.MessageEmbed() ;

hiReply        .type = 'rich'                     ;
helpReply      .type = 'rich'                     ;
deadlinesReply .type = 'rich'                     ;
dontKnowReply  .type = 'rich'                     ;

hiReply        .setColor(0x00ff00)                ;
helpReply      .setColor(0x00ff00)                ;
deadlinesReply .setColor(0x00ff00)                ;
dontKnowReply  .setColor(0x00ff00)                ;

helpReply      .setTitle('Bot Commands')          ;
deadlinesReply .setTitle('Deadlines'   )          ;

hiReply.setDescription('hello');

helpReply.setDescription([ 'hi', 'help', 'deadlines' ].join('\n'));

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

dontKnowReply.setDescription("I don't understand.\nTry typing help.");

// I believe a handler must be set for ready event.
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  if (message.author.bot                     ) return; // to avoid infinite recursion
  if (message.type != 'dm'                   ) return;
//  if (!message.recipient.bot                 ) return;
  if (message.content        == 'hi'        ) {
    message.author.send(hiReply);
  } else if (message.content == 'help'      ) {
    message.author.send(helpReply);
  } else if (message.content == 'deadlines' ) {
    message.author.send(deadlinesReply);
  } else {
    message.author.send(dontKnowReply);
  }
});

client.login(process.env.bot_token);

