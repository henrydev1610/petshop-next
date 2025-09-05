import About from "@/components/about/page";
import Footer from "@/components/footoer/page";
import Hero from "@/components/hero/page";
import { Services } from "@/components/services/page";
import { Testmunials } from "@/components/testimunials/page";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Testmunials />
      <Footer />
    </main>
  );
}
