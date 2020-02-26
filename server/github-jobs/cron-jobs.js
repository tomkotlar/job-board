const CronJob = require("cron").CronJob
const fetchGihubJobs = require("./github-jobs")

new CronJob("* * * * *", fetchGihubJobs, null, true, "America/Los_Angeles")
