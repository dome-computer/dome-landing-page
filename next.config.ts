import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        port: "",
        pathname: "/eleven-public-cdn/images/**",
      },
    ],
  },
  headers: async () => {
    return [
      {
        headers: [
          {key: 'Access-Control-Allow-Origin', value: process.env.NODE_ENV === 'production' ? "https://dome.computer" : '*'},
          {key: 'Access-Control-Allow-Methods', value: 'GET, POST, OPTIONS'},
          {key: 'Access-Control-Allow-Headers', value: 'Content-Type, Authorization'},
          {key: 'Access-Control-Allow-Credentials', value: 'true'},
        ],
        source: "https://dome.computer"
      },
      {
        headers: [
          {key: 'Access-Control-Allow-Origin', value: process.env.NODE_ENV === 'production' ? "https://dome.computer" : '*'},
          {key: 'Access-Control-Allow-Methods', value: 'GET, POST, OPTIONS'},
          {key: 'Access-Control-Allow-Headers', value: 'Content-Type, Authorization'},
          {key: 'Access-Control-Allow-Credentials', value: 'true'},
        ],
        source: "https://dome.computer/api/novaa-desktop-auth/sign-in/social"
      },
    ]
  }
};

export default nextConfig;
