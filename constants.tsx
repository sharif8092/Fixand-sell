
import React from 'react';

export const COMPANY_NAME = "FixandSell";
export const BRAND_NAME = "FixandSell Delhi";
export const PHONE_NUMBER = "+918809164703";
export const WHATSAPP_NUMBER = "+918809164703";
export const EMAIL = "help@fixandsell.in";
export const GST_NUMBER = "07CTCPA1067J1ZY";
export const UDYAM_NUMBER = "UDYAM-DL-09-0043493";
export const ADDRESS = "G/F, H.No. 4, Hari Nagar Part-2, Near Pratham Garden, Badarpur, New Delhi-110044";

export const AREAS = ["Noida", "Ghaziabad", "Gurgaon", "Faridabad", "Greater Noida", "New Delhi",
  "Badarpur", "South East Delhi", "Rohini", "Dwarka", "Janakpuri", "Laxmi Nagar", "Karol Bagh",
  "Pitampura", "Saket", "Vasant Kunj", "Punjabi Bagh", "Shahdara", "Preet Vihar", "Mayur Vihar", "Nehru Place",
  "Connaught Place", "Rajouri Garden", "Paschim Vihar", "Tilak Nagar", "Kalkaji", "Ashok Vihar", "Moti Nagar",
  "Vikaspuri", "R.K. Puram", "Sanjay Gandhi Transport Nagar", "Lodhi Colony", "Jangpura", "Nizamuddin",
  "Chandni Chowk", "Karol Bagh", "Sadar Bazaar", "Daryaganj", "Paharganj", "Shivaji Place", "Shalimar Bagh",
  "Model Town", "Azadpur", "Adarsh Nagar", "Bawana", "Mangol Puri", "Rohini", "Pitampura", "Dwarka", "Janakpuri", "Laxmi Nagar", "Karol Bagh",
  "Saket", "Vasant Kunj", "Punjabi Bagh", "Shahdara", "Preet Vihar", "Mayur Vihar", "Nehru Place",
  "Connaught Place", "Rajouri Garden", "Paschim Vihar", "Tilak Nagar", "Kalkaji", "Ashok Vihar", "Moti Nagar",
  "Vikaspuri", "R.K. Puram", "Sanjay Gandhi Transport Nagar", "Lodhi Colony", "Jangpura", "Nizamuddin",
  "Chandni Chowk", "Karol Bagh", "Sadar Bazaar", "Daryaganj", "Paharganj", "Shivaji Place", "Shalimar Bagh",
  "Model Town", "Azadpur", "Adarsh Nagar", "Bawana", "Mangol Puri", "Rohini", "Pitampura", "Dwarka", "Janakpuri", "Laxmi Nagar", "Karol Bagh",
  "Saket", "Vasant Kunj", "Punjabi Bagh", "Shahdara", "Preet Vihar", "Mayur Vihar", "Nehru Place",
  "Connaught Place", "Rajouri Garden", "Paschim Vihar", "Tilak Nagar", "Kalkaji", "Ashok Vihar", "Moti Nagar",
  "Vikaspuri", "R.K. Puram", "Sanjay Gandhi Transport Nagar", "Lodhi Colony", "Jangpura", "Nizamuddin",
  "Chandni Chowk", "Karol Bagh", "Sadar Bazaar", "Daryaganj", "Paharganj", "Shivaji Place", "Shalimar Bagh",
  "Model Town", "Azadpur", "Adarsh Nagar", "Bawana", "Mangol Puri"
];

export const ICONS = {
  Phone: (props: any) => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  ),
  WhatsApp: (props: any) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  ),
  Check: (props: any) => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  ),
  Menu: (props: any) => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
  ),
  X: (props: any) => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  ),
  AC: (props: any) => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8v4l3 3" />
      <circle cx="12" cy="12" r="3" strokeWidth={1.5} />
    </svg>
  ),
  Washer: (props: any) => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <rect x="5" y="3" width="14" height="18" rx="2" strokeWidth={1.5} />
      <circle cx="12" cy="13" r="4" strokeWidth={1.5} />
      <path strokeLinecap="round" strokeWidth={1.5} d="M8 6h1m3 0h4" />
    </svg>
  ),
  Fridge: (props: any) => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 2h10a2 2 0 012 2v16a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 10h14M9 5v2m0 8v3" />
    </svg>
  ),
  Installation: (props: any) => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  ),
  AMC: (props: any) => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  Rental: (props: any) => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  Sell: (props: any) => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
    </svg>
  ),
  Gas: (props: any) => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 10-7.038 0l-2.387.477a2 2 0 00-1.022.547l-1.397 1.397a2 2 0 00-.57 1.414V20a2 2 0 002 2h12a2 2 0 002-2v-1.186a2 2 0 00-.57-1.414l-1.397-1.397z" />
    </svg>
  ),
  Maintenance: (props: any) => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  Camera: (props: any) => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7a2 2 0 012-2h3.5l1.5-2h4l1.5 2H19a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
      <circle cx="12" cy="13" r="4" strokeWidth={1.5} />
    </svg>
  )
};

export const SERVICES = [
  {
    num: "01",
    slug: "ac-repair-service",
    title: "AC Repair & Service",
    h3: "Reliable AC Repair in Delhi",
    desc: "Expert diagnosis and fixing of all types of Split and Window ACs. We fix cooling issues, gas leakage, and noise problems.",
    img: "ac3.png",
    icon: (props: any) => <ICONS.AC {...props} />,
    badge: "Popular"
  },
  {
    num: "02",
    slug: "ac-gas-filling",
    title: "AC Gas Filling",
    h3: "Professional AC Gas Filling",
    desc: "Ensuring optimal cooling with precise gas pressure checks and refilling. We use high-quality R32, R410A, and R22 gases.",
    img: "ac4.png",
    icon: (props: any) => <ICONS.Gas {...props} />,
    badge: "Essential"
  },
  {
    num: "03",
    slug: "ac-maintenance",
    title: "AC Maintenance",
    h3: "Express AC Service & Clean",
    desc: "Deep jet cleaning of indoor and outdoor units to improve efficiency and air quality. Regular maintenance to prevent breakdowns.",
    img: "technicians_work.png",
    icon: (props: any) => <ICONS.Maintenance {...props} />,
    badge: "Bestseller"
  },
  {
    num: "04",
    slug: "ac-on-rent",
    title: "AC on Rent",
    h3: "Window & Split AC Renting",
    desc: "Affordable AC rental services for homes and offices in Delhi NCR. Low maintenance cost and quick installation.",
    img: "ac2.png",
    icon: (props: any) => <ICONS.Rental {...props} />,
    badge: "Seasonal Deal"
  },
  {
    num: "05",
    slug: "old-ac-buy-sell",
    title: "Old AC Buy & Sell",
    h3: "Best Price for Used ACs",
    desc: "Looking to sell your old AC? We buy scrap or working ACs at the best market rates in Delhi. Instant cash payout.",
    img: "ac5.png",
    icon: (props: any) => <ICONS.Sell {...props} />,
    badge: "Instant Cash"
  },
  {
    num: "06",
    slug: "washing-machine-repair",
    title: "Washing Machine Repair",
    h3: "Washing Machine Repair in Delhi NCR",
    desc: "Complete repair solutions for Top Load, Front Load, and Semi-Automatic washing machines by experienced technicians.",
    img: "washer.png",
    icon: (props: any) => <ICONS.Washer {...props} />,
    badge: "24/7 Service"
  },
  {
    num: "07",
    slug: "fridge-repair",
    title: "Fridge Repair",
    h3: "Fridge Repair Service Near Me",
    desc: "Double door, single door, and side-by-side refrigerator repair. Expert gas refilling and compressor replacement.",
    img: "fridge.png",
    icon: (props: any) => <ICONS.Fridge {...props} />,
    badge: "Best Value"
  },
  {
    num: "08",
    slug: "ac-installation",
    title: "AC Installation",
    h3: "Professional AC Installation",
    desc: "Secure mounting and gas pressure testing. We provide copper piping and expert bracket fitting services.",
    img: "ac6.png",
    icon: (props: any) => <ICONS.Installation {...props} />,
    badge: "Expert Team"
  },
  {
    num: "09",
    slug: "ac-amc-service",
    title: "AC AMC Service",
    h3: "AC AMC Service in Delhi",
    desc: "Affordable Annual Maintenance Contracts (AMC). Unlimited service visits and preventive maintenance included.",
    img: "amc.png",
    icon: (props: any) => <ICONS.AMC {...props} />,
    badge: "Most Saved"
  },
  {
    num: "10",
    slug: "appliance-rentals",
    title: "Appliance Rentals",
    h3: "Fridge & Washer on Rent",
    desc: "Don't want to buy? Rent high-quality washing machines and fridges at the lowest monthly prices in Rohini & Dwarka.",
    img: "acrental.png",
    icon: (props: any) => <ICONS.Rental {...props} />,
    badge: "Affordable"
  },
  {
    num: "11",
    slug: "camera-repair-and-rent",
    title: "CCTV Camera Repair & Rent",
    h3: "Expert CCTV Repair & Rentals",
    desc: "Complete repair, installation, and servicing for CCTV and surveillance cameras. We also provide security systems on rent.",
    img: "camera.png",
    icon: (props: any) => <ICONS.Camera {...props} />,
    badge: "New"
  }
];

