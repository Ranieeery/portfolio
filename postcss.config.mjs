/** @type {import('postcss-load-config').Config} */
const config = {
    plugins: {
        tailwindcss: {},
        cssnano: {
            preset: [
                "default",
                {
                    discardComments: {
                        removeAll: true,
                    },
                    normalizeWhitespace: true,
                    minifyFontValues: true,
                    colormin: true,
                    calc: true,
                    convertValues: true,
                    reduceIdents: true,
                    mergeLonghand: true,
                    mergeRules: true,
                    minifySelectors: true,
                    minifyParams: true,
                },
            ],
        },
    },
};

export default config;
