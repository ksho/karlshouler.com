const path = require('path')

module.exports = {
    output: 'export',
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    productionBrowserSourceMaps: true,

    // Pin the workspace root; a stray lockfile in a parent directory otherwise
    // makes Next infer the wrong one.
    outputFileTracingRoot: __dirname,

    // Replaces babel-plugin-styled-components (SWC handles SSR style injection)
    compiler: {
        styledComponents: {
            ssr: true,
            displayName: true,
        },
    },

    webpack(config, { dev, defaultLoaders }) {
        config.module.rules.push({
            test: /\.md$/,
            include: path.join(__dirname, 'pages/posts'),
            use: [
                defaultLoaders.babel,
                {
                    loader: './src/post-loader'
                }
            ]
        })

        // Absolute import paths https://moduscreate.com/blog/es6-es2015-import-no-relative-path-webpack/
        config.resolve.modules.push(path.resolve('./'))

        return config
    },
    trailingSlash: true,
    exportPathMap: async function(
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }
    ) {
        return {
            '/': { page: '/' },
            '/posts': { page: '/postsPage' },
            ...defaultPathMap
        }
    },
}
