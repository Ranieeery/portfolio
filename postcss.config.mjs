/** @type {import('postcss-load-config').Config} */
import cssnano from "cssnano";

const config = {
    plugins: [
        cssnano({
            preset: "default",
        }),
    ],
};

export default config;
