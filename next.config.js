/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["npuxpuelimayqrsmzqur.supabase.co"],
    remotePatterns : [
      {
        protocol: 'https',
        hostname: 'npuxpuelimayqrsmzqur.supabase.co',
        port: '',
      }
    ]
  }
};

module.exports = nextConfig;

// export const images ={
//   remotePatterns: [
//     {
//       protocol: 'https',
//       hostname: 'npuxpuelimayqrsmzqur.supabase.co',
//       port: '',
//       pathname: '/storage/v1/object/public/images',
//     },
//   ],
// };
