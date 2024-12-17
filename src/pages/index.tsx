// import Image from "next/image";
// import { Geist, Geist_Mono } from "next/font/google";

import Header from "@/components/header";
import Hero from "@/components/hero";
import Method from "@/components/method";
import Stats from "@/components/stats";
import TreatMent from "@/components/treatMent";

// // const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export default function Home() {
  return (
  <>
  <Header/>
  <Hero/>
  <Stats/>
  <TreatMent/>
  <Method/>
  </>
  );
}
