const { ROOT_URL, SCENARIO_DEFAULTS, VIEWPORTS, PROJECT_ID} = require('./config');
const { SCENARIOS } = require('./scenarios');

const scenarios = [];
SCENARIOS.map(scenario => {
    scenarios.push({
        ...SCENARIO_DEFAULTS,
        ...scenario,
        label: scenario.url,
        url: `${ROOT_URL}${scenario.url}`
    });
});

let project_id = ROOT_URL
    .replace(/(^\w+:|^)\/\//, '')
    .replace(/[^a-z0-9]/gi, '_')
    .toLowerCase();

module.exports = {
    "id": project_id,
    "viewports": VIEWPORTS,
    "scenarios": scenarios,
    "onBeforeScript": "playwright/onBefore.js",
    "onReadyScript": "playwright/onReady.js",
    "paths": {
        "bitmaps_reference": __dirname + "/bitmaps_reference",
        "bitmaps_test": __dirname +"/bitmaps_test",
        "engine_scripts": __dirname +"/engine_scripts",
        "html_report": __dirname +"/html_report",
        "ci_report": __dirname +"/ci_report"
    },
    "report": ["browser"],
    "engine": "playwright",
    "engineOptions": {
        "args": ["--no-sandbox"],
        "browser": "chromium",
        "storageState": __dirname +"/engine_scripts/cookies.json"
    },
    "asyncCaptureLimit": 5,
    "asyncCompareLimit": 50,
    "debug": false,
    "debugWindow": false
}
