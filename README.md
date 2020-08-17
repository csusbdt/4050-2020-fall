I'll use this file to record the steps I used to create
the discord bot I will use for CSE 4050 Fall 2020.

I will run the bot using free tier service level on heroku.
So no money needed for this.

I will store the deployable code in a git branch named discord.
Changed my mind.  Maybe later.

Create .gitignore with the following line.
I beleive this is recommended practice.
Heroku will npm install the node modules needed by looking at package.json file.
Add other stuff as needed to .gitignore

~~~
node_modules
~~~

I got a lot of info from:
https://shiffman.net/a2z/bot-heroku/

Also used https://discord.js.org/

Run the following to install the discord module and all dependencies.
This generates node_modules.

~~~
npm init
npm install discord.js --save
~~~

In heroku, create an app named __cse4050__.
Use different name for your bot app.
Instructions on how to setup project are displayed in heroku web page after app creation.

~~~
heroku git:remote -a cse4050
~~~

Create file __Procfile__ with the following contents:

~~~
worker: node main.js
~~~

Create file __main.js__ with following for hello version of bot.
This is a starting point to expand from.

~~~
# see repo or other example code and write a hello bot
~~~

Do following.
See link above because I'm probably skipping stuff.

~~~
heroku git:remote -a cse4050  // that's my app name i created on heroku
~~~

Go to https://discord.com/developers/applications and do following.

Create a new application.
Give it the name _cse4050_. (change name to what you want.)
Add a bot.
Set bot permissions to Send Messages.  Add more later as needed.
Copy the bot token and replace 99999999 in the following with it.

~~~
heroku config:set bot_token=99999999999999
~~~

In target discord server, create a text channel named __bot__.
Get the channel id for the bot channel.
To do this, Discord -> Preferences -> Appearance -> Developer mode on
Right click channel and select Copy ID.
Use this in your code to restrict bot replies to the bot channel.

~~~
git add .
git commit -m "X"
git push heroku master
~~~

In heroku, select Resources.
Turn off `web npm start`
Turn on `worker node main.js`

In https://discord.com/developers/applications/ go to the bot app.
Select OAuth2 tab.
In the scopes section, check __bot__.
Check Send Message permission to the bot.
Copy the url.
Use the bot url to add bot to the server.
https://discord.com/api/oauth2/authorize?client_id=745040301600538676&permissions=2048&scope=bot

Enter the url in browser to go there.

Run server app to connect to discord.

~~~
heroku restart
~~~



