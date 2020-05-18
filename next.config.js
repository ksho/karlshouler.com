const path = require('path')
const withSourceMaps = require('@zeit/next-source-maps')

module.exports = withSourceMaps({
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],

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

        config.node = {
            Buffer: false
        }

        return config
    },
    exportTrailingSlash: true,
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
})
