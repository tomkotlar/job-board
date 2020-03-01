in progress
# :briefcase: Job-board Server

The aplication is deployed with GitHub Pages [Job-board](https://tomkotlar.github.io/job-board/)

For the visual purpuse I changed from server to actual api.  
The change is in App.js 


## :clipboard: Instructions 

On GitHub create your own **public** repository for your project. **Make sure NOT to initialise it with a README or .gitignore.**

```bash
git remote remove origin

# This will prevent you from pushing to the original repo.
```

```bash
git remote add origin <YOUR-GITHUB-URL>

# This will add your GitHub location to your local git repository.
# You can confirm this by checking the new git remote.
``` 

###  :open_file_folder: Setting up your own repository

```bash
git clone https://github.com/tomkotlar/job-board.git

cd job-board
```


###  :dvd: Install

```bash
npm install
```
You will install dependencies: 
[NodeJS](https://nodejs.org/en/) | [Cron](https://crontab.guru/) |  [Redis](https://www.npmjs.com/package/redis) | [Axios](https://github.com/axios/axios) | [Express](https://www.npmjs.com/package/express)
|  [React](https://reactjs.org) | [Gh-Pages](https://github.com/gitname/react-gh-pages)  <br />


:computer: Run Your App locally: 

```bash
cd client
npm start

```
This will run the app in development mode. It opens http://localhost:3000 in the browser. The page will reload if you make edits.

:computer: Run Your server locally: 

```bash
#in separate terminal window
cd server
node app/listen.js

```
This will run the server / listen.js file in development mode. Port http://localhost:9090. The port needs to run in same time with react app / port 3000.


## User actions
- view a list of all jobs
- view the job description
- apply for the job
- search for job title


## Api 
The app is based on [Code Drip](https://www.youtube.com/watch?v=BPJSmlTMsQ4).

The [API](https://jobs.github.com/api) GitHub Jobs:

```http
GET /positions.json
```

