import { BackgroundBeams } from "@/components/home/Background";
import Features from "@/components/home/Features";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import Server from "@/components/home/Server";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";


export default function Home() {
  return (
    <div className="flex flex-col w-full h-auto gap-8">
      <BackgroundBeams></BackgroundBeams>
      <Hero></Hero>
      <Stats></Stats>
      <Server></Server>
      <Features></Features>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </div>
  );
}
