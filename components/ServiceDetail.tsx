
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICES, PHONE_NUMBER, WHATSAPP_NUMBER, ICONS } from '../constants';
import Header from './Header';
import Footer from './Footer';

interface ServiceDetailProps {
  onOpenBooking: (service: string) => void;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ onOpenBooking }) => {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find(s => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 text-slate-900 p-6">
        <h1 className="text-4xl font-black mb-4">Service Not Found</h1>
        <p className="text-lg text-slate-600 mb-8">We couldn't find the service you're looking for.</p>
        <Link to="/" className="bg-blue-600 text-white px-8 py-3 rounded-full font-black uppercase tracking-widest hover:bg-blue-700 transition-all">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={service.img} 
              alt={service.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-600/20 backdrop-blur-md rounded-full mb-6 border border-blue-400/30">
                <span className="text-blue-400 font-black text-[10px] uppercase tracking-widest">{service.badge}</span>
              </div>
              <h1 className="text-4xl md:text-7xl font-black text-white mb-6 leading-tight">
                {service.title}
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed">
                {service.h3}
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => onOpenBooking(service.title)}
                  className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20"
                >
                  Book Service Now
                </button>
                <a 
                  href={`tel:${PHONE_NUMBER}`}
                  className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white/20 transition-all"
                >
                  Call Specialist
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 lowercase tracking-tighter">
                  Expert <span className="text-blue-600">{service.title}</span> in Delhi NCR
                </h2>
                <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                  <p>{service.desc}</p>
                  <p>
                    At FixandSell, we provide professional and reliable {service.title.toLowerCase()} services across all major areas of Delhi, Noida, Gurgaon, and Faridabad. Our team of certified technicians is equipped with modern tools and genuine spare parts to ensure high-quality repairs.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                    {[
                      "Same Day Service",
                      "Certified Technicians",
                      "Genuine Spare Parts",
                      "90 Days Warranty",
                      "Doorstep Service",
                      "Affordable Rates"
                    ].map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                          <ICONS.Check className="w-4 h-4" />
                        </div>
                        <span className="font-bold text-slate-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[2rem] shadow-2xl border border-slate-100 hidden md:block">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white">
                      <ICONS.Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Available 24/7</p>
                      <p className="text-xl font-black text-slate-900">{PHONE_NUMBER}</p>
                    </div>
                  </div>
                  <a 
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    className="flex items-center justify-center gap-2 w-full bg-green-500 text-white py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-green-600 transition-all"
                  >
                    <ICONS.WhatsApp className="w-4 h-4" />
                    WhatsApp Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="0.5" />
                  <circle cx="50" cy="50" r="30" fill="none" stroke="white" strokeWidth="0.5" />
                  <circle cx="50" cy="50" r="20" fill="none" stroke="white" strokeWidth="0.5" />
                </svg>
              </div>
              <div className="relative z-10 text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Ready to fix your appliance?</h2>
                <p className="text-slate-400 text-lg md:text-xl mb-10">
                  Join 10,000+ happy customers in Delhi NCR. Book your technician today and get a ₹200 discount on your first service.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button 
                    onClick={() => onOpenBooking(service.title)}
                    className="w-full sm:w-auto bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-700 transition-all"
                  >
                    Book Appointment
                  </button>
                  <Link 
                    to="/"
                    className="w-full sm:w-auto bg-white/5 border border-white/10 text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white/10 transition-all"
                  >
                    Other Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetail;
