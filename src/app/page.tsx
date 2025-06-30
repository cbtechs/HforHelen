import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import QuickLinks from '@/components/sections/QuickLinks';
import FeaturedServices from '@/components/sections/FeaturedServices';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <QuickLinks />
        <FeaturedServices />
      </main>
      <Footer />
    </div>
  );
}
