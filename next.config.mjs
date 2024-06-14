/** @type {import('next').NextConfig} */
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// # 리소스 분석 시각화
// - 실행 명령어 : npm run build & next run
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: true,
    openAnalyzer: true,
});
// export default withBundleAnalyzer(nextConfig);

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
