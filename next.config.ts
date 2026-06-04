import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true, // เพิ่มบรรทัดนี้ลงไปเพื่อสั่งให้ข้ามการตรวจ TS
  },
};

export default nextConfig;
