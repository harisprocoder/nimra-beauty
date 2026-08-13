import { motion } from "framer-motion";
import Navbar from "@/components/salon/Navbar";
import Hero from "@/components/salon/Hero";
import About from "@/components/salon/About";
import Services from "@/components/salon/Services";
import Booking from "@/components/salon/Booking";
import Footer from "@/components/salon/Footer";
import FloatingActions from "@/components/salon/FloatingActions";

export default function Landing() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-ivory font-sans text-foreground antialiased"
    >
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Booking />
      </main>
      <Footer />
      <FloatingActions />
    </motion.div>
  );
}
