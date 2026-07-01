import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import TechStack from '../components/TechStack';
import Process from '../components/Process';
import Portfolio from '../components/Portfolio';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-cyber-black selection:bg-cyber-white selection:text-cyber-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <TechStack />
        <Process />
        <Portfolio />
        <Pricing />
        <Testimonials />
        <Blog />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
