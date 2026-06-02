import {
  About,
  Advantages,
  Contact,
  Faq,
  Footer,
  Hero,
  Navbar,
  Process,
  Reviews,
  StatsBar,
  WhyGold,
} from '@/src/components/sections';
import './styles.css';

export default function Homepage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <StatsBar />
      <div className="gold-line" />
      <About />
      <WhyGold />
      <Process />
      <Advantages />
      <Reviews />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}
