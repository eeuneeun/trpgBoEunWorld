/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode:false,
    trailingSlash: true,
    // async rewrites(){
    //     console.log("Rewrites called");
    //     return [
    //         {
    //             source : " http://localhost:3000/v2/geocode/:path*/",
    //             destination :`https://naveropenapi.apigw.ntruss.com/map-geocode:path*/`,
              
    //         }
    //     ]
    // },
    // experimental: {
    //     serverActions: {
    //         allowedOrigins: ['my-proxy.com', '*localhost*'],
    //     },
    // },
};
export default nextConfig;
