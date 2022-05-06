/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MORALIS_URL: 'https://eus7yo4mxpac.usemoralis.com:2053/server',
    MORALIS_ID: '8hqMMUtqs2ZnZju950BeFeXhUQyJeLrPlXAHpDeU',
    MIDTRANS_SERVER_KEY: 'SB-Mid-server-o1egc5t23LgTd9t5dLgHQJIW',
    MIDTRANS_CLIENT_KEY: 'SB-Mid-client-Hmh2XvBknMYr7jDJ'
  }
}

module.exports = nextConfig
