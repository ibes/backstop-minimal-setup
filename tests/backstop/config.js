exports.ROOT_URL = `https://example.com`;

exports.SCENARIO_DEFAULTS = {
    misMatchThreshold: 0.015,
    delay: 3000,
    requireSameDimensions: false
}

exports.VIEWPORTS = [
    {
        "label": "desktop",
        "width": 1920,
        "height": 1080
    },
    {
        "label": "phone",
        "width": 375,
        "height": 667
    },
    {
        "label": "tablet",
        "width": 768,
        "height": 1024
    }
];
