import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter(),
        browser: {
            hydrate: false,
        },
        prerender: {
            crawl: true,
            enabled: true,
        }
    }
};

export default config;
