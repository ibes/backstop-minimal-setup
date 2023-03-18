# Inofficial minimal setup for BackstopJS

See: [BackstopJS](https://github.com/garris/BackstopJS) automates visual regression testing of your responsive web UI by comparing DOM screenshots over time.

BackstopJS is an awesome tool to do visual regression tests. 
In the basic setup, there are a couple of configuration options that are required that I don't really care about. 
So this setup has the goal to need as little configuration as needed. 

To use this setup:
- merge you `package.json` with the one in this repo.
- add `tests/backstop` to you repo.
- install npm packages 
- adjust `config.js` and `scenarios.js`
- run backstop eg. `npm run backstop:test` and `npm run backstop:approve` - see `package.json` for scripts 

Thanks to the BackstopJS contributors for providing such a valuable tool!