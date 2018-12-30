# Boilerplate
This is a boilerplate for quickly getting started with a [node express server](https://expressjs.com/) and [vue client](https://vuejs.org/) with automatic deploy on [Heroku](https://heroku.com/).

## Setting up a GIT repository
There are two suggested methods.

The easiest one is to just fork this repo.

The other solution is cloning it and updating the url to point to your own repo
- Create a empty repository on github
- Open a terminal and go to desired folder
```bash
$ git clone https://github.com/zyrica/boilerplate $REPOSITORYNAME$
$ cd $REPOSITORYNAME$
$ git remote set-url origin https://github.com/$USERNAME$/$REPOSITORYNAME$
$ git push
```

## Local development with HMR

To start a dev server
```bash
$ npm install
$ npm run dev
```

Now a dev server should be running on http://localhost:1337

To develop the [VUE](https://vuejs.org/) application just edit the `/client/App.vue` and the changes will be applied in your browser as soon as you save your changes.

To develop the [Express](https://expressjs.com/) server head to `/server/api.js` that is reachable from http://localhost:1337/api and will restart every time you save your changes.

## Heroku deploy
- Log into your heroku account in your browser
- Create a new app from your dashboard
- In the settings for your app choose deploy -> github
  - Specify your github acoount and connect to your repository
  - Enable Automatic deploys
  - Do an initial manual deploy by pressing "Deploy branch"
- Press  "Open app" button in the header

If everything worked you should now have a https page saying "Hello vue"