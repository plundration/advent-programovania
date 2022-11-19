export const config = {
    port: 3001,
    domain: 'https://advent.gympos.sk',
    sslCertPath: '/etc/letsencrypt/live/advent.gympos.sk/cert.pem',
    sslKeyPath: '/etc/letsencrypt/live/advent.gympos.sk/privkey.pem',

    captchaApi: 'https://www.google.com/recaptcha/api/siteverify',
} as const;

export default config;