import AboutSectionOne from "@/components/About/AboutSectionOne";
// import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Solution from "@/components/Solution";
import Hero from "@/components/Hero";
// import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Giải pháp AI",
  description: "Cung cấp giải pháp tự động hóa AI cho doanh nghiệp và cá nhân.",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Solution />
      <Video />
      <Brands />
      <AboutSectionOne />
      <Testimonials />
      <Blog />
      <Contact />
    </>
  );
}
