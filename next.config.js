module.exports = {
    images: {
        domains: ['miro.medium.com'],
    },
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