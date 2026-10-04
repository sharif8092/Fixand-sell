
import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_NAME, PHONE_NUMBER, ALTERNATE_PHONE_NUMBER, EMAIL, ADDRESS, AREAS, ICONS, GST_NUMBER, UDYAM_NUMBER, SERVICES } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-gray-400 pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img src="/logo.png" alt={COMPANY_NAME} className="w-12 h-12 object-contain bg-white rounded p-1" />
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tighter leading-none mb-1">
                  <span className="text-white">Fixand</span><span className="text-yellow-500">Sell</span>
                </span>
                <span className="text-[7px] font-bold text-slate-400 tracking-[0.2em] uppercase leading-none">
                  • REPAIR • RENT • SELL
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Legally registered enterprise providing premium appliance maintenance. MSME Verified service across Delhi NCR.
            </p>
            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-600 space-y-1">
               <p>GST: {GST_NUMBER}</p>
               <p>Udyam: {UDYAM_NUMBER}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-widest text-blue-500">Services</h4>
            <ul className="space-y-3 text-sm">
              {SERVICES.slice(0, 5).map(service => (
                <li key={service.slug}>
                  <Link to={`/services/${service.slug}`} className="hover:text-blue-400 transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
              <li><Link to="/#services" className="hover:text-blue-400 transition-colors font-bold text-blue-500">View All Services</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-widest text-blue-500">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <ICONS.Phone className="w-4 h-4 text-blue-500" />
                <span className="text-white font-bold">{PHONE_NUMBER}</span>
              </li>
              <li className="flex items-center gap-3">
                <ICONS.Phone className="w-4 h-4 text-blue-500" />
                <span className="text-white font-bold">{ALTERNATE_PHONE_NUMBER}</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-4 h-4 mt-1">
                   <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                </div>
                <p className="text-xs">{ADDRESS}</p>
              </li>
            </ul>
          </div>

          {/* Coverage */}
          <div>
            <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-widest text-blue-500">Coverage Area</h4>
            <div className="flex flex-wrap gap-2">
              {AREAS.slice(0, 12).map(area => (
                <span key={area} className="text-[9px] border border-white/10 px-2 py-1 rounded-md uppercase hover:bg-white/5 transition-colors">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase font-bold tracking-widest">
          <p>© {new Date().getFullYear()} {COMPANY_NAME}. Licensed Hub.</p>
          <div className="flex gap-6">
            <Link to="/#about" className="hover:text-white">Privacy</Link>
            <Link to="/#about" className="hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
