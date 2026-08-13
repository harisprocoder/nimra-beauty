import Navbar from "@/components/salon/Navbar";
import Hero from "@/components/salon/Hero";
import About from "@/components/salon/About";
import Services from "@/components/salon/Services";
import Booking from "@/components/salon/Booking";
import Footer from "@/components/salon/Footer";
import FloatingActions from "@/components/salon/FloatingActions";

export default function Landing() {
  return (
    <div className="page-fade min-h-screen bg-ivory font-sans text-foreground antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Booking />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
