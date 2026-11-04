import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Features from "@/components/Features";
import Portfolio from "@/components/Portfolio";
import WorkVideos from "@/components/WorkVideos";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Features />
      <Portfolio />
      <WorkVideos />
    </>
  );
}