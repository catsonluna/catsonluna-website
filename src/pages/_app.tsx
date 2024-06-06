import { type AppType } from "next/dist/shared/lib/utils";
import "@/styles/globals.css";

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
      <Component {...pageProps} />
    </main>
  );
};

export default MyApp;
