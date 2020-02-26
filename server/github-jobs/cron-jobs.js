const CronJob = require('cron').CronJob;

 
const fetchGihubJobs = require('./github-jobs')

new CronJob('* * * * *', fetchGihubJobs, null, true, 'America/Los_Angeles');
// new CronJob('* * * * *',function() {
//     console.log('evry minute message')
// }, null, true, 'America/Los_Angeles');
