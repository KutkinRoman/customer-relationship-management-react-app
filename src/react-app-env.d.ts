/// <reference types="react-scripts" />

declare namespace NodeJS {
    interface ProcessEnv {
        NODE_ENV: 'development' | 'production' | 'test'
        PUBLIC_URL: string
        REACT_APP_HASH: string
        REACT_APP_API_URI: string
        REACT_APP_WS_URI: string
        REACT_APP_PROFILE: 'development' | 'production' | 'test'
        REACT_APP_DEV_USERNAME: string
        REACT_APP_DEV_PASSWORD: string
    }
}

interface Window {
    Stripe: any
}