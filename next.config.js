const path = require('path')

module.exports = {
    output: 'export',
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    productionBrowserSourceMaps: true,
    compiler: {
        styledComponents: true
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
