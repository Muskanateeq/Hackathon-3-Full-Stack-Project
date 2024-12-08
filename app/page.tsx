import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Featured from "@/components/Featuredproduct"
import Latest from "@/components/Latestproduct"
import Vector from "@/components/Vactor"
import Hero2 from "@/components/Hero2";
import Tranding from "@/components/Trandingproduct"
import Hero4 from "@/components/Hero4"
import Logo from "@/components/Logo"
import Blog from "@/components/Blog"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Featured />
      <Latest/>
      <Vector/>
      <Hero2/>
      <Tranding/>
      <Hero4/>
      <Logo/>
      <Blog/>
      <Footer/>
    </div>
  );
}