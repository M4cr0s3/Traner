// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', "@nuxt/image", 'nuxt-speedkit'],
    css: ['~/assets/css/style.css'],
    image: {

    },
    app: {
      head: {
          htmlAttrs: {
              lang: 'ru'
          }
      }
    },
    speedkit: {
        detection: {
            performance: true,
            browserSupport: true
        },

        performanceMetrics: {
            device: {
                hardwareConcurrency: {min: 2, max: 48},
                deviceMemory: {min: 2}
            },
            timing: {
                fcp: 800,
                dcl: 1200
            }
        },
        fonts: [{
            family: 'Gilroy',
            locals: ['Gilroy'],
            fallback: ['Arial', 'sans-serif'],
            variances: [
                {
                    style: 'normal',
                    weight: 400,
                    sources: [
                        {src: '~/assets/fonts/Gilroy-Regular.woff', type: 'woff'},
                    ]
                },
                {
                    style: 'normal',
                    weight: 500,
                    sources: [
                        {src: '~/assets/fonts/Gilroy-Medium.woff', type: 'woff'},
                    ]
                },
                {
                    style: 'normal',
                    weight: 600,
                    sources: [
                        {src: '~/assets/fonts/Gilroy-Semibold.woff', type: 'woff'},
                    ]
                },
                {
                    style: 'normal',
                    weight: 700,
                    sources: [
                        {src: '~/assets/fonts/Gilroy-Bold.woff', type: 'woff'},
                    ]
                },
                {
                    style: 'normal',
                    weight: 800,
                    sources: [
                        {src: '~/assets/fonts/Gilroy-Black.woff', type: 'woff'},
                    ]
                },
                {
                    style: 'normal',
                    weight: 900,
                    sources: [
                        {src: '~/assets/fonts/Gilroy-Black.woff', type: 'woff'},
                    ]
                },
                {
                    style: 'normal',
                    weight: 1000,
                    sources: [
                        {src: '~/assets/fonts/Gilroy-Heavy.woff', type: 'woff'},
                    ]
                },
            ]
        }],
        targetFormats: ['webp', 'avif', 'jpg|jpeg|png|gif'],
        componentAutoImport: false,
        componentPrefix: undefined,
        lazyOffset: {
            component: '0%',
            asset: '0%'
        }
    }
})