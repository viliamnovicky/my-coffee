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
           {
            protocol: "https",
            hostname: "firebasestorage.googleapis.com",
            port: "",
            pathname: "/v0/b/my-coffee-930912.firebasestorage.app/**",
          },
          {
            protocol: "https",
            hostname: "lh3.googleusercontent.com",
            port: "",
            pathname: "/**",
          },
        ],
      },
};

export default nextConfig;
