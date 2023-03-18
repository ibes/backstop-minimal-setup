# BackstopJS

[BackstopJS](https://github.com/garris/BackstopJS) automates visual regression testing of your responsive web UI by comparing DOM screenshots over time.

This is an opinionated setup to reduce the configuration when using BackstopJS.

See `package.json` for commands to run. 
`backstop.js` is a file that generates needed configuration for BackstopJS. You usually will not modify this file.
`config.js` is where you configure the basic settings for the current project. You likely modify this file once when you setup the project.
`scenarios.js` is where you will add your scenarios - meaning: the pages or elements you want to test. This is the file you will focus on.

To find out, how you can configure scenarios, check the [BackstopJS documentation](https://github.com/garris/BackstopJS).
The `url` is expected to be relative to the `ROOT_URL`.
`label` will be auto generated. So `url` is the only required parameter in this setup.
All other BackstopJS parameters can be used, if needed. 


