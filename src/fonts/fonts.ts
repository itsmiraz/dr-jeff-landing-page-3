import { Source_Sans_3 } from "next/font/google";
import localFont from "next/font/local";
export const sourceSansPro = Source_Sans_3({
    weight: ["400", "600", "700"],
    subsets: ["latin"],
    variable: "--font-source-sans-pro",
  });
  
export const plantinMTPro = localFont({
    src: [
      {
        path: "./PlantinMTPro-Regular.woff2",
        weight: "400",
        style: "normal",
      },
      {
        path: "./PlantinMTPro-Bold.woff2",
        weight: "700",
        style: "normal",
      },
    ],
    variable: "--font-plantin-mt-pro",
  });
  
  export const font_platinPro = `${plantinMTPro.variable} font-serif`