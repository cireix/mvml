/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
      styledComponents: true,
    },
    env: {
      HF_API_KEY: process.env.HF_API_KEY,
    },
    webpack(config) {
      config.module.rules.push({
        loader: '@svgr/webpack',
        options: {
          prettier: false,
          svgo: true,
          svgoConfig: {
            plugins: [
              {
                name: 'preset-default',
                params: {
                  overrides: { removeViewBox: false },
                },
              },
            ],
          },
          titleProp: true,
        },
        test: /\.svg$/,
      });
  
      return config;
    }
  }
  
  module.exports = nextConfig
  