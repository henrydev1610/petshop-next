import About from "@/components/about/page";
import Hero from "@/components/hero/page";
import { Services } from "@/components/services/page";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
    </main>
  );
}
