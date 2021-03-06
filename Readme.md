# Boilerplate
This is a boilerplate for quickly getting started with a [node express server](https://expressjs.com/), [vue client](https://vuejs.org/) and automatic deploy from [Github](https://github.com/) to [Heroku](https://heroku.com/).

Prerequisite
- [Node](https://nodejs.org/en/)
- [Git](https://git-scm.com/downloads)
- [Github Account](https://www.heroku.com/)
- [Heroku Account](https://github.com/)

## Setting up a GIT repository
There are two suggested methods.

The easiest one is to just fork this repo.

The other solution is cloning it and updating the url to point to your own repo
- Create a empty repository on github
- Open a terminal and go to desired folder
```bash
git clone https://github.com/zyrica/boilerplate $REPOSITORYNAME$
cd $REPOSITORYNAME$
git remote set-url origin https://github.com/$USERNAME$/$REPOSITORYNAME$
git push
```

## Local development with HMR

To start a dev server
```bash
npm install
npm run dev
```

Now a dev server should be running on http://localhost:1337

To develop the [VUE](https://vuejs.org/) application just edit the `/client/App.vue` and the changes will be applied in your browser as soon as you save your changes.

To develop the [Express](https://expressjs.com/) server head to `/server/api.js` that is reachable from http://localhost:1337/api and will restart every time you save your changes.

## Heroku deploy
- Log into your heroku account in a browser
- Create a new app from the dashboard
- In the settings for your app go to `Deploy` and choose `Github`
  - Specify your github acoount and `Connect` to your repository
  - Enable `Automatic deploys` in the section bellow
  - Do an initial manual deploy by pressing `Deploy branch` the last section.
- Press `Open app` button in the header to verify the deployment
