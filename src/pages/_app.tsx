import { type AppType } from "next/dist/shared/lib/utils";
import "@/styles/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

import { Nunito } from "next/font/google"

const font = Nunito(
  {    
    subsets: ["latin"],
    weight: '400',
  }
);
const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={font.className}>
      <SpeedInsights />
      <Analytics />
      <Component {...pageProps} />
    </main>
  );
};

export default MyApp;
