/** @type {import('next').NextConfig} */
const nextConfig = {
   experimental: {
      appDir: true
   },
   images: {
      remotePatterns: [
         {
            protocol: 'https',
            hostname: 'github.com',
            port: '',
            pathname: '/**'
         },
         {
            protocol: 'https',
            hostname: 'dolbwgqmdbcwkndxqbyb.supabase.co',
            port: '',
            pathname: '/**'
         },
         {
            protocol: 'https',
            hostname: 'ecgxmluxmbbokhxfukbt.supabase.co',
            port: '',
            pathname: '/**'
         }
      ]
   }
};

module.exports = nextConfig;
