export default {
    head: {
        title: 'vite-nuxt-template',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: ''},
            {name: 'format-detection', content: 'telephone=no'}
        ],
        link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}]
    },

    // Global CSS to load everywhere
    css: ['~assets/style/main.scss'],
    styleResources: {
        scss: ['~assets/style/mixins.scss', '~assets/style/variables.scss']
    },

    plugins: [],
    components: true,
    buildModules: [
        '@nuxtjs/eslint-module',
        '@nuxtjs/style-resources',
        '@nuxtjs/svg',
        '@nuxt/image'
    ],
    modules: ['@nuxtjs/axios'],
    axios: {
        baseURL: '/'
    },
    build: {}
};
