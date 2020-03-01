const CronJob = require("cron").CronJob
const fetchGihubJobs = require("./github-jobs")

new CronJob("0 0 * * *", fetchGihubJobs, null, true, "America/Los_Angeles")
