/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "firebasestorage.googleapis.com",
            port: "",
            pathname: "/v0/b/my-home-d1851.appspot.com/**",
          },
        ],
      },
};

export default nextConfig;
