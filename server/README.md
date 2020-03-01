in progress
# :briefcase: Job-board Server


The [API](https://jobs.github.com/api) GitHub Jobs:

```http
GET /positions.json
```
Parameters

* description — A search term, such as "ruby" or "java". This parameter is aliased to search.
* location — A city name, zip code, or other location search term.
*lat — A specific latitude. If used, you must also send long and must not send location.
* long — A specific longitude. If used, you must also send lat and must not send location.
* full_time — If you want to limit results to full time positions set this parameter to 'true'.
---

To view the example of JSON data Please click on the rocket 

#####  [:rocket:](https://jobs.github.com/positions.json?search=node) `/?search=node` 


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

cd server 
```


###  :dvd: Install

```bash
npm install

```
You will install dependencies: 
[NodeJS](https://nodejs.org/en/) | [Cron](https://crontab.guru/) |  [Redis](https://www.npmjs.com/package/redis) | [Axios](https://github.com/axios/axios) | 
[Express](https://www.npmjs.com/package/express)


###  :floppy_disk: Run local server

```bash
cd server 
node app/listen.js
```
You will run local server on port 9090



###  :closed_book: Redis

```bash
https://redis.io/
# Official web for redis. 

https://www.youtube.com/watch?v=oaJq1mQ3dFI

```
Step by step guide for instalation Redis by :space_invader: [traversymedia](https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA)


###  :pen: Run Redis client

```bash
redis-cli 

# open new terminal window and run: 
job-board  curl http://localhost:9090/jobs
```

Command cheatseet [redis](https://redis.io/commands)