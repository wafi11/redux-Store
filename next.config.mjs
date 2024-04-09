/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      net: false,
      dns: false,
      child_process: false,
      tls: false,
    };
    return config;
  },
    // experimental : {
    //     serverActions : true
    // },
    images : {
        remotePatterns : [
            {
                hostname : "fakestoreapi.com"
            },
            {
                hostname : 'images.pexels.com'
            },
            {
                hostname : 'as2.ftcdn.net'
            },
            {
                hostname : 'github.com'
            }
        ]
    }
};

export default nextConfig;
