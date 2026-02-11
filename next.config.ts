import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // اطمینان حاصل کنید که این دامنه را اضافه کرده‌اید
    remotePatterns: [
      {
        protocol: "https",
        hostname: "htmlstream.com",
        port: "",
        pathname: "/preview/unify-v2.6/assets/img-temp/400x450/**", // مسیرهای احتمالی دیگر از این سایت
      },
      // اگر تصاویر Supabase هم دارید، دامنه آن را هم اینجا اضافه کنید.
    ],
  },
};

export default nextConfig;
