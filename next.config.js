module.exports = {
    future: {
        webpack5: true,
    },
    webpack: (config, { isServer }) => {
        if (isServer) {
            require('./utils/generateSiteMap')
        }

        return config
    }
}