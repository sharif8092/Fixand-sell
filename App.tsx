
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Services from './components/Services.tsx';
import WhyChooseUs from './components/WhyChooseUs.tsx';
import About from './components/About.tsx';
import Reviews from './components/Reviews.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import FloatingActions from './components/FloatingActions.tsx';
import QuickBookingModal from './components/QuickBookingModal.tsx';
import ServiceDetail from './components/ServiceDetail.tsx';

// Simple context-like state management for the modal
export const useBookingModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [service, setService] = useState('AC Repair');

  const openModal = (s?: string) => {
    if (s) setService(s);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  return { isOpen, service, openModal, closeModal };
};

const Home: React.FC<{ openModal: (s?: string) => void }> = ({ openModal }) => (
  <>
    <Hero onOpenBooking={() => openModal()} />
    <Services onOpenBooking={(s) => openModal(s)} />
    <WhyChooseUs />
    <About />
    <Reviews />
    <Contact />
  </>
);

const App: React.FC = () => {
  const { isOpen, service, openModal, closeModal } = useBookingModal();

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <main className="pb-24 md:pb-0">
          <Routes>
            <Route path="/" element={
              <>
                <Header />
                <Home openModal={openModal} />
                <Footer />
              </>
            } />
            <Route path="/services/:slug" element={
              <ServiceDetail onOpenBooking={(s) => openModal(s)} />
            } />
          </Routes>
        </main>
        <FloatingActions onOpenBooking={() => openModal()} />
        <QuickBookingModal 
          isOpen={isOpen} 
          onClose={closeModal} 
          initialService={service} 
        />
      </div>
    </Router>
  );
};

export default App;
