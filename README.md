I'll use this file to record the steps I used to create
the discord bot I will use for CSE 4050 Fall 2020.

These notes are mainly for me to use in the future if I create
another bot or if I want to update the current bot.
They are going to be difficult for other people to follow.

I will run the bot using free tier service level on heroku.
So no money needed for this.

I will store the deployable code in a git branch named discord.
Changed my mind.  Maybe later.

Create .gitignore with the following line.
I beleive this is recommended practice.
Heroku will install the node modules needed by looking at package.json file.
Add other stuff as needed to .gitignore

~~~
node_modules
~~~

Run the following to install the discord module and all dependencies.
This generates node_modules.

~~~
npm init
npm install discord.js --save
~~~

In heroku, create an app named __cse4050__.
Instructions on how to setup a project are displayed after app creation.

Let heroku cli create a remote with correct url.

~~~
heroku git:remote -a cse4050
~~~

Create __Procfile__ with the following contents:

~~~
worker: node main.js
~~~

Create __main.js__ with the following for a hello version of bot.
This is a starting point to expand from.

~~~
# see repo or other example code and write a hello bot
~~~

Go to https://discord.com/developers/applications and do following.
Create a new application.
Give it the name _cse4050_. 
Add a bot.
Copy the bot token and replace 99999999 in the following with it.
This should be kept secret.

~~~
heroku config:set bot_token=99999999999999
~~~

I wanted my bot to only respond to commands issued in a bot channel.
In target discord server, create a text channel named __bot__.
Get the channel id for the bot channel.
To get the channel id, you need to turn on developer mode.
Discord -> Preferences -> Appearance -> Developer mode
Right click the bot channel and select _Copy ID_.
Use this in your code to restrict bot to the bot channel.
(There may be an easier way to do this.)

Push the hello bot code to heroku.
This step makes heroku set up the app as a web app
with a default web dyno set.
This is needed so that you can turn of the default web dyno
and turn on a worker dyno (to get the websocket that discord needs).

~~~
git add .
git commit -m "X"
git push heroku master
~~~

In heroku, select Resources.
Turn off `web npm start`
Turn on `worker node main.js`

The free tier supports only a single dyno so the above steps
are needed if you want a free bot.

In https://discord.com/developers/applications/ go to the bot app.
Select the OAuth2 tab.
In the scopes section, check __bot__.
Check __Send Message__ permission.  Add other permissions as needed.
Do the above before copying the url because the url needs a permissions code.
Copy the url.  
To add the bot to the server, go to the bot url in a browser.

The bot url looks like the following:
https://discord.com/api/oauth2/authorize?client_id=745040301600538676&permissions=2048&scope=bot

Probably need to restart or you can alternatively push changes to the heroku remote.

~~~
heroku restart
~~~

To see heroku logs

~~~
heroku logs -n 100 --tail
~~~

The following tool was useful to testing embed code:
https://leovoel.github.io/embed-visualizer/


