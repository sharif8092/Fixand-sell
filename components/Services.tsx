
import React from 'react';
import { Link } from 'react-router-dom';
import { WHATSAPP_NUMBER, PHONE_NUMBER, SERVICES } from '../constants';

interface ServicesProps {
  onOpenBooking: (service: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onOpenBooking }) => {
  return (
    <section id="services" className="relative py-16 md:py-32 overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop" 
          alt="Technical Background" 
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/95 via-blue-900/90 to-slate-900/95"></div>
      </div>

      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
          <div className="inline-flex items-center gap-3 px-6 py-2 bg-blue-500/20 backdrop-blur-md rounded-full mb-6 border border-blue-400/30">
            <span className="text-blue-100 font-black text-[10px] uppercase tracking-[0.3em]">Authorized Center</span>
          </div>
          
          <h2 className="text-4xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
            Professional <br />
            <span className="text-blue-400">Services</span>
          </h2>
          
          <p className="text-lg md:text-2xl text-blue-100/70 leading-relaxed max-w-2xl mx-auto">
            Authorized repair and rental solutions designed for Delhi. Factory-grade expertise with local speed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {SERVICES.map((service, idx) => (
            <div 
              key={idx} 
              className="group relative bg-white/10 backdrop-blur-xl rounded-[2.5rem] border border-white/10 p-4 transition-all duration-500 hover:bg-white/15 hover:border-blue-400/40 hover:-translate-y-3 flex flex-col"
            >
              <Link to={`/services/${service.slug}`} className="block relative h-60 rounded-[2rem] overflow-hidden mb-6 shadow-2xl">
                <img 
                  src={service.img} 
                  alt={service.h3} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-[8px] font-black uppercase tracking-widest rounded-lg border border-white/20 shadow-xl">
                    {service.badge}
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h4 className="text-white font-black text-xl tracking-tighter drop-shadow-lg">{service.title}</h4>
                  <div className="bg-blue-600 text-white p-2.5 rounded-2xl shadow-xl group-hover:scale-110 group-hover:bg-blue-500 transition-all duration-300 ring-4 ring-blue-600/20">
                    <service.icon className="w-8 h-8" />
                  </div>
                </div>
              </Link>

              <div className="px-3 pb-4 flex-1 flex flex-col">
                <Link to={`/services/${service.slug}`} className="block">
                  <h3 className="text-lg font-black text-white mb-3 leading-tight group-hover:text-blue-400 transition-colors uppercase tracking-tighter">{service.h3}</h3>
                </Link>
                <p className="text-blue-100/60 mb-6 leading-relaxed text-xs group-hover:text-blue-100/80 transition-colors line-clamp-3 flex-1">{service.desc}</p>

                <div className="grid grid-cols-2 gap-3 mt-auto">
                  <Link 
                    to={`/services/${service.slug}`}
                    className="flex-1 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-black py-4 rounded-2xl text-[10px] uppercase tracking-widest transition-all text-center"
                  >
                    Details
                  </Link>
                  <button 
                    onClick={() => onOpenBooking(service.title)}
                    className="flex-1 bg-blue-600 border border-blue-500 hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-600/20 text-white font-black py-4 rounded-2xl text-[10px] uppercase tracking-widest transition-all active:scale-95"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 group/banner hover:border-blue-400/30 transition-all duration-500">
             <div className="text-center lg:text-left">
               <h4 className="text-2xl md:text-4xl font-black text-white mb-2 group-hover/banner:translate-x-1 transition-transform tracking-tighter lowercase">Need a Rental <span className="text-blue-400">AC?</span></h4>
               <p className="text-blue-100/70 text-base md:text-lg">Special prices for <span className="text-white font-bold underline decoration-blue-500 decoration-2 underline-offset-4">Delhi NCR </span>. Units starting at ₹12000/session</p>
             </div>
             <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                <a href={`tel:${PHONE_NUMBER}`} className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-black text-center flex items-center justify-center gap-3 transition-all shadow-xl hover:shadow-blue-600/30 hover:-translate-y-1 active:scale-95 uppercase text-xs tracking-widest">
                  Check Availability
                </a>
                <button 
                  onClick={() => onOpenBooking('AC Rental Query')}
                  className="w-full sm:w-auto bg-white/10 text-white border border-white/10 px-8 py-4 rounded-2xl font-black transition-all hover:bg-white/20 hover:border-white/30 hover:-translate-y-1 active:scale-95 uppercase text-xs tracking-widest"
                >
                  Get A Quote
                </button>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
