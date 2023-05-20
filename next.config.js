module.exports = {
 
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(graphql|gql)/,
      exclude: /node_modules/,
      loader: "graphql-tag/loader"
    });

    return config;
  },
  
  // swcMinify: true,
  reactStrictMode: true,
  /* eslint-enable */
 
  publicRuntimeConfig: {
    env: process.env.NEXT_PUBLIC_ENV,
  },
  
  compiler: {
    removeConsole: {
      exclude: ["error"],
    },
  },
  env: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    publicUrl: process.env.NEXT_PUBLIC_URL,
    basePathStatic: process.env.NEXT_BASE_PATH_STATIC,
    environment: process.env.NEXT_PUBLIC_ENV,
  },
};
