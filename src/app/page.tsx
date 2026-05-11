import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import Services from '@/components/Services';
import HowItWorks from '@/components/HowItWorks';
import AdditionalServices from '@/components/AdditionalServices';
import WhyUs from '@/components/WhyUs';
import ServiceAreas from '@/components/ServiceAreas';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <HowItWorks />
        <AdditionalServices />
        <WhyUs />
        <ServiceAreas />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
