/** @type {import('next').NextConfig} */
const API_KEY = process.env.API_KEY;

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/contact",
        // destination: "/form",
        destination: "https://nomadcoders.co",
        //source: "/old-blog/:path*",
        //destination: "/new-blog/:path*",
        permanent: false, // 브라우저나 검색엔진이 이 정보를 기억하는지 여부
      },
    ];
  },
  // 리다이렉트 되지만 URL 은 변하지 않는다
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
    ];
  },
};

module.exports = nextConfig;
