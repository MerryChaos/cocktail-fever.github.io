// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-headlessui',
        'nuxt-icon'
    ],
    plugins: [
        { src: '@/plugins/v-calendar.client.ts', mode: 'client' }
    ],
    headlessui: {
        prefix: 'Headless'
    },
    app: {
        head: {
            title: 'Cocktail Fever'
        }
    },
    css: [
        '@/assets/css/main.css',
    ]
})
