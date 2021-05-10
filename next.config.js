const withOptimizedImages = require('next-optimized-images')

module.exports = withOptimizedImages({
    future: {
        webpack5: true,
    },
    webpack: (config, { isServer }) => {
        if (isServer) {
            require('./utils/generateSiteMap')
        }

        return config
    }
})