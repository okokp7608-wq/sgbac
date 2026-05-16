import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Sparkles, 
  Cpu, 
  Layers, 
  Menu, 
  X, 
  Github, 
  Twitter, 
  Linkedin,
  ChevronRight,
  Monitor,
  Code2,
  Zap,
  Globe,
  MapPin,
  Clock,
  Shield,
  Plane,
  Coffee,
  CheckCircle2,
  Phone,
  ExternalLink,
  Smartphone,
  Navigation
} from 'lucide-react';

// --- Translations ---
const translations = {
  ko: {
    nav: {
      about: 'SGBAC 소개',
      facilities: '시설 안내',
      guide: '이용 안내',
      location: '오시는 길',
      reservation: '예약하기'
    },
    hero: {
      subtitle: 'Seoul Gimpo Business Aviation Center',
      title: 'The Fastest Way to Seoul,\nKorea’s Business Capital',
      desc: '도시의 중심에서 하늘의 길목까지, 성공적인 비즈니스를 위한 가장 완벽한 게이트웨이',
      cta1: '서비스 둘러보기',
      cta2: '시설 투어',
      scroll: '여정을 시작하려면 스크롤하세요'
    },
    section1: {
      tag: '01. ARRIVE',
      title: '도심에서 활주로까지,\n가장 빠른 연결',
      desc: '"시간의 가치를 아는 당신을 위해"\n서울 도심에서 출발해 SGBAC 전용 게이트에 도착하는 모습. 막힘없는 진입로와 전용 주차 서비스가 제공됩니다. 여의도 15분, 강남 30분 내외의 탁월한 접근성을 경험하십시오.',
      feat1: '전용 고속 진입로 확보',
      feat2: '24시간 보안 전용 주차 구역',
      feat3: 'VIP 리무진 의전 서비스 연계',
      more: '자세히 보기'
    },
    section2: {
      tag: '02. RELAX',
      title: '공항 그 이상의 안락함',
      desc: '품격 있는 기다림, 프라이빗 라운지에서의 완벽한 휴식과 몰입의 공간을 제안합니다. 일반 여객 터미널의 소음에서 벗어나, 독립된 VIP 라운지에서 프리미엄 케이터링과 비즈니스 지원 서비스를 누리십시오.',
      card1: { title: 'Absolute Privacy', desc: '완벽한 보안이 보장되는 독립된 미팅룸 제공' },
      card2: { title: 'Premium Catering', desc: '최고급 셰프가 제안하는 다이닝 및 티 서비스' },
      card3: { title: 'Business Support', desc: '컨시어지 서비스 및 초고속 비즈니스 인프라' }
    },
    section3: {
      tag: '03. EXPRESS',
      title: '5-Minute Clearance',
      desc: '지체 없는 비즈니스의 시작을 위해 SGBAC는 전용 CIQ(세관·출입국·검역) 시설을 통해 대기 시간 없이 5분 이내의 신속하고 편리한 출입국 수속을 보장합니다.',
      feat1: '복잡한 절차를 최소화한 1:1 의전 수속 시스템 지원',
      feat2: '예약 시스템 기반의 즉시 수속 서비스 제공',
      feat3: '수속 후 즉시 항공기 또는 대기 차량으로 연결'
    },
    section4: {
      tag: '04. BOARDING',
      title: '항공기 문 앞까지 이어지는 세심함',
      desc: '마지막 여정까지 완벽하게. 라운지에서 항공기 계단 앞까지 전용 리무진으로 프라이빗하게 이동하는 최고의 의전을 경험하십시오. 항공기와 리무진이 함께 있는 고급스러운 연출로 SGBAC만의 차별화된 가치를 증명합니다.',
      quote: '"당신의 여정은 게이트에서 끝나지 않고, 날개 위로 매끄럽게 이어집니다."',
      cta: '운항 일정 예약'
    },
    bento: {
      title: '비교할 수 없는 프리미엄 서비스',
      subtitle: 'SGBAC만의 3대 특장점 핵심 포인트',
      card1: { title: 'Speed', desc: '전용 CIQ시설, 공항내 주차, 관제 통제를 통해 신속하게 이동하여 신속한 출입국 절차를 경험' },
      card2: { title: 'Privacy', desc: '외부와는 철저히 격리된 독립된 공간에서 VIP 이용자의 완전한 편안함과 사적인 업무 보안을 보장' },
      card3: { title: 'Accessibility', desc: '서울 중심(여의도/강남/마곡)에서 20분 내 진입 가능한 압도적 도심 접근성 획득' }
    },
    footer: {
      desc: 'Seoul Gimpo Business Aviation Center는 대한민국 비즈니스 항공의 허브로서 최상의 안전과 차별화된 서비스를 제공합니다.',
      contact: '연락처'
    },
    facilities: {
      title: '주요 시설',
      desc: '비즈니스 항공을 위한 최첨단 인프라와 프리미엄 서비스를 제공합니다. SGBAC의 격납고와 전문화된 시설은 고객님의 소중한 기체를 위한 최적의 환경과 여정을 보장합니다.',
      hangar: {
        title: '격납고',
        area: '총 면적',
        models: '수용 기종',
        feat1: '전용 공간 : 비즈니스 제트기 전용으로 설계된 10,260m² 규모의 프리미엄 격납고',
        feat2: '탁월한 규모 : G650 10대 또는 Global 7500 8대를 동시에 수용 가능',
        feat3: '맞춤형 옵션 : 운영 요구 사항에 맞춰 일일, 월간 또는 연간 플랜 중에서 선택 가능하세요.',
        cta: '시설 예약 문의'
      },
      parking: {
        title: '주기장',
        feat1: '전용 주기장 : 비즈니스 제트기 전용 주기장 7개를 보유하여 안정적인 주기 공간을 제공합니다.',
        feat2: '공항 연계 : 김포국제공항과 연계된 풍부한 인프라로 긴급한 일정에도 유연한 대응이 가능합니다.',
        feat3: '정시 운항 보장 : 김포 국제공항은 혼잡도가 낮고 여유 슬롯이 많아 운영 시간 내내 정시 운항을 보장합니다.'
      },
      convenience: {
        title: '편의 시설',
        feat1: '전용 CIQ 서비스 : 세관(Customs), 출입국심사(Immigration), 검역(Quarantine)을 전용 시설을 통해 혼잡과 대기시간 없이 신속하게 진행합니다.',
        feat2: '프리미엄 VIP 라운지 : 비즈니스 항공 여객을 위한 전용 라운지 및 독립된 VIP룸을 제공하여 완벽한 프라이버시를 보장합니다.',
        feat3: '신속한 수속 : 도착부터 출발까지 편안하고 신속하게 이루어지는 Non-stop 수속 시스템을 경험해 보세요.'
      },
      crew: {
        title: '승무원 라운지',
        desc: '비즈니스항공센터에서는 장시간 비행에 지친 파일럿 및 승무원의 완벽한 리프레시를 위해 고급스러운 무드의 휴게 공간과 다양한 프리미엄 다과 서비스를 선사합니다.',
        feat1: '프라이빗한 휴식을 위한 개별 라운지',
        feat2: '최고급 안마의자 및 수면 전용 공간',
        feat3: '전용 바(Bar) 및 프리미엄 식음료 서비스',
        feat4: '고속 인터넷이 완비된 비즈니스 존'
      }
    },
    guide: {
      title: '비즈니스 항공 이용의 정점',
      desc: 'SGBAC은 고객님의 소중한 시간을 최우선으로 생각합니다. 전용 CIQ와 발렛 서비스로 완성되는 신속하고 품격 있는 여정을 안내합니다.',
      process: {
        title: '이용 절차',
        step1: { title: '사전 이용 신청 및 예약', desc: '운항 24시간 전까지 예약 시스템을 통해 정보 접수' },
        step2: { title: '센터 도착 및 체크인', desc: '전용 주차장 도착 후 전문 의전팀의 VIP 라운지 안내' },
        step3: { title: '신속한 CIQ 통과', desc: '대기 시간 없는 전용 보안 검색 및 입국 심사' },
        step4: { title: '항공기 탑승 및 출발', desc: '프라이빗 램프 차량을 통해 계류장 항공기까지 이동' }
      }
    }
  },
  en: {
    nav: {
      about: 'About SGBAC',
      facilities: 'Facilities',
      guide: 'Usage Guide',
      location: 'Location',
      reservation: 'Reservation'
    },
    hero: {
      subtitle: 'Seoul Gimpo Business Aviation Center',
      title: 'The Fastest Way to Seoul,\nKorea’s Business Capital',
      desc: 'Perfect gateway for successful business, from the heart of the city to the gateway of the sky.',
      cta1: 'EXPLORE SERVICES',
      cta2: 'FACILITY TOUR',
      scroll: 'Scroll to begin journey'
    },
    section1: {
      tag: '01. ARRIVE',
      title: 'From City to Runway,\nThe Fastest Connection',
      desc: '"For those who know the value of time"\nArrival at SGBAC dedicated gate from central Seoul. Unhindered access roads and dedicated parking services provided. Experience outstanding accessibility—Yeouido within 15 mins, Gangnam within 30 mins.',
      feat1: 'Dedicated high-speed access road',
      feat2: '24/7 secured dedicated parking area',
      feat3: 'VIP limousine ceremonial service connection',
      more: 'LEARN MORE'
    },
    section2: {
      tag: '02. RELAX',
      title: 'Comfort Beyond the Airport',
      desc: 'Dignified waiting, offering space for perfect rest and immersion in private lounges. Escape the noise of general passenger terminals and enjoy premium catering and business support services in an independent VIP lounge.',
      card1: { title: 'Absolute Privacy', desc: 'Independent meeting rooms ensuring perfect security' },
      card2: { title: 'Premium Catering', desc: 'Dining and tea service proposed by top chefs' },
      card3: { title: 'Business Support', desc: 'Concierge service and high-speed business infrastructure' }
    },
    section3: {
      tag: '03. EXPRESS',
      title: '5-Minute Clearance',
      desc: 'To start business without delay, SGBAC ensures rapid and convenient immigration procedures within 5 minutes without waiting through dedicated CIQ (Customs, Immigration, Quarantine) facilities.',
      feat1: '1:1 ceremonial processing minimizing complex procedures',
      feat2: 'Immediate processing service based on reservation system',
      feat3: 'Direct connection to aircraft or waiting vehicle after processing'
    },
    section4: {
      tag: '04. BOARDING',
      title: 'Meticulous Care to the Aircraft Door',
      desc: 'Perfect to the final journey. Experience the best protocol by moving privately from the lounge to the aircraft stairs in a dedicated limousine. Prove the differentiated value of SGBAC with luxurious staging where aircraft and limousine coexist.',
      quote: '"Your journey doesn\'t end at the gate; it flows seamlessly onto your wings."',
      cta: 'SCHEDULE A FLIGHT'
    },
    bento: {
      title: 'Incomparable Premium Service',
      subtitle: 'SGBAC\'s 3 core strengths',
      card1: { title: 'Speed', desc: 'Experience rapid entry/exit procedures through dedicated CIQ, in-airport parking, and control coordination' },
      card2: { title: 'Privacy', desc: 'Ensure complete comfort and private business security for VIP users in independent spaces thoroughly isolated from the outside' },
      card3: { title: 'Accessibility', desc: 'Achieve overwhelming urban accessibility reachable within 20 minutes from central Seoul (Yeouido/Gangnam/Magok)' }
    },
    footer: {
      desc: 'Seoul Gimpo Business Aviation Center provides the best safety and differentiated services as the hub of business aviation in Korea.',
      contact: 'Contact'
    },
    facilities: {
      title: 'Key Facilities',
      desc: 'We provide state-of-the-art infrastructure and premium services for business aviation. SGBAC\'s hangars and specialized facilities ensure the optimal environment and journey for your valuable aircraft.',
      hangar: {
        title: 'Hangar',
        area: 'Total Area',
        models: 'Capacity',
        feat1: 'Dedicated Space: 10,260m² premium hangar designed exclusively for business jets',
        feat2: 'Outstanding Scale: Can accommodate 10 G650s or 8 Global 7500s simultaneously',
        feat3: 'Customized Options: Choose from daily, monthly, or annual plans according to operational requirements.',
        cta: 'Facility Reservation Inquiry'
      },
      parking: {
        title: 'Parking Stand',
        feat1: 'Dedicated Parking: 7 dedicated parking stands for business jets providing stable parking space.',
        feat2: 'Airport Connection: Flexible response to urgent schedules through rich infrastructure linked with Gimpo Int\'l Airport.',
        feat3: 'On-time Operations: Gimpo Airport guarantees on-time operations throughout operating hours due to low congestion and many spare slots.'
      },
      convenience: {
        title: 'Convenience Facilities',
        feat1: 'Dedicated CIQ Service: Rapidly proceed through Customs, Immigration, and Quarantine via dedicated facilities without congestion or waiting.',
        feat2: 'Premium VIP Lounge: Ensure perfect privacy by providing dedicated lounges and independent VIP rooms for business aviation passengers.',
        feat3: 'Rapid Processing: Experience a non-stop processing system that makes arrival to departure comfortable and fast.'
      },
      crew: {
        title: 'Crew Lounge',
        desc: 'SGBAC presents a luxurious mood resting space and various premium snack services for the perfect refreshment of pilots and crew tired from long flights.',
        feat1: 'Individual lounges for private relaxation',
        feat2: 'Top-class massage chairs and sleep-only space',
        feat3: 'Dedicated bar and premium F&B service',
        feat4: 'Business zone equipped with high-speed internet'
      }
    },
    guide: {
      title: 'Peak of Business Aviation',
      desc: 'SGBAC prioritizes your valuable time. We guide you through a rapid and dignified journey completed with dedicated CIQ and valet services.',
      process: {
        title: 'Process',
        step1: { title: 'Prior Application & Reservation', desc: 'Submit info through reservation system up to 24h before flight' },
        step2: { title: 'Arrival & Check-in', desc: 'VIP lounge guidance by professional protocol team after arrival at dedicated parking' },
        step3: { title: 'Rapid CIQ Passing', desc: 'Dedicated security search and immigration without waiting time' },
        step4: { title: 'Boarding & Departure', desc: 'Transfer to ramp-side aircraft via private ramp vehicle' }
      }
    }
  }
};

// --- Shared Components ---

const Navbar = ({ activePage, setActivePage, lang, setLang }: { activePage: string, setActivePage: (p: string) => void, lang: 'ko' | 'en', setLang: (l: 'ko' | 'en') => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang].nav;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'home', label: t.about },
    { id: 'facilities', label: t.facilities },
    { id: 'guide', label: t.guide },
    { id: 'location', label: t.location },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-4 border-b border-sgbac-navy/5 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="max-w-[1280px] mx-auto px-margin-desktop flex justify-between items-center font-headline">
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActivePage('home')}>
            <span className={`text-2xl font-extrabold tracking-tighter ${isScrolled ? 'text-sgbac-navy' : 'text-white'}`}>SGBAC</span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {menuItems.map((item) => (
              <button 
                key={item.id} 
                onClick={() => setActivePage(item.id)}
                className={`text-[12px] font-medium tracking-widest uppercase transition-all relative font-mono ${activePage === item.id ? (isScrolled ? 'text-sgbac-navy' : 'text-white') : (isScrolled ? 'text-sgbac-slate hover:text-sgbac-navy' : 'text-white/60 hover:text-white')}`}
              >
                {item.label}
                {activePage === item.id && (
                  <motion.div layoutId="nav-underline" className={`absolute -bottom-1 left-0 right-0 h-0.5 ${isScrolled ? 'bg-sgbac-navy' : 'bg-white'}`} />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => setLang(lang === 'ko' ? 'en' : 'ko')}
            className={`material-symbols-outlined p-2 rounded-full transition-all duration-300 scale-95 active:opacity-80 flex items-center justify-center ${isScrolled ? 'text-sgbac-navy hover:bg-sgbac-surface-container-low' : 'text-white hover:bg-white/10'}`}
          >
            <span className="text-[18px] mr-1 uppercase font-bold font-mono">{lang === 'ko' ? 'EN' : 'KO'}</span>
            language
          </button>
          <button 
            onClick={() => setActivePage('reservation')}
            className={`hidden sm:flex items-center gap-2 px-8 py-3 text-[10px] font-bold uppercase tracking-widest rounded transition-all ${isScrolled ? 'bg-sgbac-navy text-white hover:bg-sgbac-slate' : 'bg-white text-sgbac-navy hover:bg-white/90'} ${activePage === 'reservation' ? 'ring-2 ring-sgbac-gold' : ''}`}>
            {t.reservation}
          </button>
          <button className={`md:hidden ${isScrolled ? 'text-sgbac-navy' : 'text-white'}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-sgbac-navy/10 overflow-hidden shadow-xl"
          >
            <div className="p-8 flex flex-col gap-6">
              {menuItems.map((item) => (
                <button 
                  key={item.id} 
                  className={`text-sm font-bold tracking-widest text-left py-2 uppercase ${activePage === item.id ? 'text-sgbac-navy' : 'text-sgbac-slate'}`}
                  onClick={() => {
                    setActivePage(item.id);
                    setMobileMenuOpen(false);
                  }}
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => {
                  setActivePage('reservation');
                  setMobileMenuOpen(false);
                }}
                className="w-full py-4 bg-sgbac-navy text-white text-[10px] font-bold uppercase tracking-widest rounded"
              >
                {t.reservation}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = ({ setActivePage, lang }: { setActivePage: (p: string) => void, lang: 'ko' | 'en' }) => {
  const t = translations[lang];
  return (
  <footer className="bg-sgbac-navy text-white py-24 px-margin-desktop">
    <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
      <div className="max-w-md">
        <h2 className="text-[32px] md:text-[40px] font-bold mb-6 font-headline tracking-tighter">SGBAC</h2>
        <p className="text-white/70 leading-relaxed mb-8 text-sm font-sans">
          {t.footer.desc}
        </p>
        <div className="flex gap-4">
          <a className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/10 transition-all" href="#">
            <span className="material-symbols-outlined text-sm">public</span>
          </a>
          <a className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/10 transition-all" href="#">
            <span className="material-symbols-outlined text-sm">share</span>
          </a>
          <a className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/10 transition-all" href="#">
            <span className="material-symbols-outlined text-sm">mail</span>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
        <div>
          <h4 className="font-mono text-[12px] uppercase tracking-widest text-sgbac-gold mb-6">Menu</h4>
          <nav className="flex flex-col gap-4">
            <button onClick={() => setActivePage('home')} className="text-white/70 hover:text-white text-sm transition-all text-left">{translations[lang].nav.about}</button>
            <button onClick={() => setActivePage('facilities')} className="text-white/70 hover:text-white text-sm transition-all text-left">{translations[lang].nav.facilities}</button>
            <button onClick={() => setActivePage('guide')} className="text-white/70 hover:text-white text-sm transition-all text-left">{translations[lang].nav.guide}</button>
            <button onClick={() => setActivePage('location')} className="text-white/70 hover:text-white text-sm transition-all text-left">{translations[lang].nav.location}</button>
          </nav>
        </div>
        <div>
          <h4 className="font-mono text-[12px] uppercase tracking-widest text-sgbac-gold mb-6">Support</h4>
          <nav className="flex flex-col gap-4">
            <button onClick={() => setActivePage('privacy')} className="text-white/70 hover:text-white text-sm transition-all text-left">Privacy Policy</button>
            <button onClick={() => setActivePage('reservation')} className="text-white/70 hover:text-white text-sm transition-all text-left">Terms of Service</button>
            <button className="text-white/70 hover:text-white text-sm transition-all text-left">Contact Us</button>
          </nav>
        </div>
        <div className="col-span-2 sm:col-span-1">
          <h4 className="font-mono text-[12px] uppercase tracking-widest text-sgbac-gold mb-6">Contact</h4>
          <div className="space-y-2">
            <p className="text-white/70 text-sm">T. +82-2-2660-2114</p>
            <p className="text-white/70 text-sm">E. info@sgbac.com</p>
          </div>
        </div>
      </div>
    </div>
    
    <div className="max-w-[1280px] mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-white/40 uppercase tracking-[0.2em]">
      <p>© 2024 SGBAC Seoul Gimpo Business Aviation Center. All Rights Reserved.</p>
      <div className="flex gap-8 mt-4 md:mt-0">
        <button onClick={() => setActivePage('privacy')} className="hover:text-white transition-colors">Privacy Policy</button>
        <button className="hover:text-white transition-colors">Legal Disclaimer</button>
      </div>
    </div>
  </footer>
);
};

// --- Page Components ---

interface HomePageProps {
  setActivePage: (p: string) => void;
}

const HomePage: React.FC<HomePageProps & { lang: 'ko' | 'en' }> = ({ setActivePage, lang }) => {
  const t = translations[lang];
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-sgbac-primary text-white" id="hero">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover opacity-60" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9qw7lASkhahtlS64x9_f-50nJl_7l2E8npsywpIISZRYDhD5JUU-O0e7iMsFyCB6j5v9N8sp2dzxn1Vwvh7kbsAgf9wjneNZXkm8b1xKVxNTIQfvIiTjCaUXrIcpqCzBXiVErOQcVwcYk4jnLQpMcpIh_tOJBHFIOU65bSJQMbO9iBeXrhzjsFMyXH2KzKfbt-0iQbYLtSk1tj6K2W6sSvGD0AChOlVCsyWZFP9VL8IRKxQGoMvwjAxC3ZlXCvZ_nmU33WBIp2A"
            alt="Elite Aviation Hero"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-sgbac-primary/40 via-transparent to-sgbac-primary/80"></div>
        </div>
        <div className="relative z-10 text-center px-margin-mobile">
          <span className="font-mono text-[12px] text-sgbac-tertiary-fixed tracking-[0.3em] mb-6 block uppercase">{t.hero.subtitle}</span>
          <h1 className="text-[48px] md:text-[64px] font-bold mb-8 max-w-4xl mx-auto leading-tight font-headline tracking-tighter whitespace-pre-line">{t.hero.title}</h1>
          <p className="text-[18px] text-sgbac-surface-variant/80 max-w-2xl mx-auto mb-12 font-sans">{t.hero.desc}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => setActivePage('facilities')} className="bg-white text-sgbac-primary font-mono text-[12px] px-10 py-4 rounded-lg hover:bg-sgbac-surface-container-low transition-all duration-300 scale-95 active:opacity-80 font-bold tracking-widest">{t.hero.cta1}</button>
            <button onClick={() => setActivePage('reservation')} className="border border-white/30 text-white font-mono text-[12px] px-10 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 scale-95 active:opacity-80 font-bold tracking-widest">{t.hero.cta2}</button>
          </div>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="font-mono text-[10px] tracking-widest uppercase">{t.hero.scroll}</span>
          <div className="w-px h-12 bg-white/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-bounce-slow"></div>
          </div>
        </div>
      </section>

      {/* Section 1: Arrive */}
      <section className="relative min-h-[80vh] grid grid-cols-1 md:grid-cols-2 items-center bg-white" id="arrive">
        <div className="order-2 md:order-1 px-margin-desktop py-24">
          <div className="max-w-xl">
            <span className="font-mono text-[12px] text-sgbac-outline mb-4 block uppercase tracking-widest">{t.section1.tag}</span>
            <h2 className="text-[32px] md:text-[40px] font-bold text-sgbac-primary mb-6 font-headline tracking-tight whitespace-pre-line">{t.section1.title}</h2>
            <p className="text-[18px] text-sgbac-slate mb-8 leading-relaxed whitespace-pre-line">
              {t.section1.desc}
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3 text-sgbac-slate"><span className="material-symbols-outlined text-[20px] text-sgbac-tertiary-fixed-dim">location_on</span> {t.section1.feat1}</li>
              <li className="flex items-center gap-3 text-sgbac-slate"><span className="material-symbols-outlined text-[20px] text-sgbac-tertiary-fixed-dim">local_parking</span> {t.section1.feat2}</li>
              <li className="flex items-center gap-3 text-sgbac-slate"><span className="material-symbols-outlined text-[20px] text-sgbac-tertiary-fixed-dim">directions_car</span> {t.section1.feat3}</li>
            </ul>
            <button onClick={() => setActivePage('location')} className="inline-flex items-center gap-2 text-sgbac-primary font-bold border-b border-sgbac-primary pb-1 hover:gap-4 transition-all text-xs tracking-widest uppercase">{t.section1.more}</button>
          </div>
        </div>
        <div className="order-1 md:order-2 h-full min-h-[400px] relative overflow-hidden">
          <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbGkrj5NTgcRS7KQmJUdAlHYTFa9PTYU03I3lgzm4kLs1vayyU6elNBtzfB917qoDOW8q_vs47xqawDf6LayhnR-oCsGmbwFZ_qgLsX8gsM2O37MzZsGTE7e1Bc1rTGyYXIXob0q2D8_6Bx6MdNlO74jYO1p3YZOvoWBZlfwnvev15K-H2Tl4zKHsY1N-Gbk5kxJvaH0H_KFCS5UxdGi18rDjJYc6srV5ZEjZneVNUR8vgXXiAtdfCbEt2RzRXpbHpOMgD8Kwx0w" alt="VIP Arrival" referrerPolicy="no-referrer" />
        </div>
      </section>

      {/* Section 2: Relax */}
      <section className="relative min-h-[90vh] bg-sgbac-primary text-white overflow-hidden flex flex-col justify-center py-24" id="relax">
        <div className="absolute inset-0 opacity-40">
          <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaBFZmyivCtk63hX6NbRUoys0ZChjiyJAHprsc2Lavdi2sMsTAvHq-2GqW_di0UINks7opYm7kep5u0CzhpX9ALo9qs8PlRD7HNf7C-1QPx2lU-rZo5kbVnL4-LZCV55tnGZCH9WUEJB1ZII8mD6mzgWbnphirKocTajczqNJtU5gDVyAQ96KnKeAOKSt0Un4SvbfOxlPvAvP6Wyfqbhs0_CIzrcG60p_Snp9FfVgSlpwzsSK-FezwmJs7zZ_G8TKakVh3N5sSUw" alt="Lounge Interior" referrerPolicy="no-referrer" />
        </div>
        <div className="relative z-10 flex flex-col items-center text-center px-margin-mobile">
          <div className="max-w-3xl">
            <span className="font-mono text-[12px] text-sgbac-primary-fixed-dim mb-4 block uppercase tracking-widest">{t.section2.tag}</span>
            <h2 className="text-[32px] md:text-[40px] font-bold mb-8 font-headline tracking-tight">{t.section2.title}</h2>
            <p className="text-[18px] text-sgbac-surface-variant/90 mb-12 leading-relaxed">
              {t.section2.desc}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: 'verified_user', title: t.section2.card1.title, desc: t.section2.card1.desc },
                { icon: 'restaurant', title: t.section2.card2.title, desc: t.section2.card2.desc },
                { icon: 'business_center', title: t.section2.card3.title, desc: t.section2.card3.desc }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-white/5 backdrop-blur-md rounded-lg border border-white/10 hover:bg-white/10 transition-all cursor-default group">
                  <span className="material-symbols-outlined text-4xl mb-4 text-sgbac-tertiary-fixed group-hover:scale-110 transition-transform">{item.icon}</span>
                  <h4 className="font-bold mb-2 uppercase tracking-widest text-xs">{item.title}</h4>
                  <p className="text-[13px] opacity-70 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Express */}
      <section className="py-24 px-margin-desktop bg-sgbac-surface-container-lowest" id="express">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="font-mono text-[12px] text-sgbac-outline mb-4 block uppercase tracking-widest">{t.section3.tag}</span>
              <h2 className="text-[32px] md:text-[40px] font-bold text-sgbac-primary font-headline tracking-tighter">{t.section3.title}</h2>
              <p className="text-[18px] text-sgbac-slate mt-6 leading-relaxed">
                {t.section3.desc}
              </p>
            </div>
            <div className="text-right hidden sm:block">
              <span className="text-[120px] font-extrabold leading-none text-sgbac-primary/5 select-none font-headline">05' MIN</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            <div className="relative h-[400px] rounded-lg overflow-hidden group aviation-card">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoUngTOK4JZfH15Sn6TC5FGTNBM9dQxhJgEi32psTHpcNGPoKe4DGxuzhAHClA94NrjRTPNiveGH4rOyCRxymyGIjzAk2B13mYxWXJZDTmjqoWlI5n_nL2EWW8v0a6ReMVRVOyk9fhQ3ljdPE0f3umxOn0oS6uUGX6Pq8216IAKacLTWw_1qgnNNi3YkxYM-DejjDG4ytLnSJQoQbsgtFwres4xFBFu2rPN7kaRutZ2Bn7sFpGhXWQ0fqBOuO_kQByXG6lq3I4Uw" alt="CIQ Facility" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-sgbac-primary/80 to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-white font-bold text-xl mb-2">Dedicated CIQ</h3>
                  <p className="text-white/70 text-sm">{lang === 'ko' ? 'SGBAC 이용객만을 위한 전용 세관, 출입국, 검역 통합 시설' : 'Dedicated customs, immigration, and quarantine integration facility only for SGBAC users'}</p>
                </div>
              </div>
            </div>
            <div className="bg-sgbac-primary p-12 flex flex-col justify-center rounded-lg shadow-xl">
              <div className="space-y-8">
                {[
                  { step: '01', title: 'Prioritized Processing', desc: t.section3.feat1 },
                  { step: '02', title: 'Zero Waiting Time', desc: t.section3.feat2 },
                  { step: '03', title: 'Seamless Transfer', desc: t.section3.feat3 }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-full border border-sgbac-tertiary-fixed flex items-center justify-center flex-shrink-0">
                      <span className="font-mono text-sgbac-tertiary-fixed text-xs">{item.step}</span>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
                      <p className="text-white/60 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Boarding */}
      <section className="relative min-h-[80vh] grid grid-cols-1 md:grid-cols-2 items-center bg-white" id="boarding">
        <div className="h-full min-h-[400px] relative">
          <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGLvk2Ktn3px9gsBjpXtHtBjOs-aNf6HguUUHqnwsClIrOnnFcZCEJhDcZD4vbu7shAo9o0l7srql4XsiKj20HAqAXoXtk-tVnoF523qgeem6QsXsVPFsbTPgAcet2MazPqfFZaHJAUdsGN7i9_a0DiU27VPNCCqHFZHINH5oz7iP5kd-QeXZMfOapCFGaUv7btQgMJKmfBgsRGmqTo_4M4R286zRhesI0nvcelOMFVfdwYiPeUqVCRmZe2jg1kpVqiB0BgTJq5w" alt="Private Boarding" referrerPolicy="no-referrer" />
        </div>
        <div className="px-margin-desktop py-24 bg-sgbac-surface">
          <div className="max-w-xl">
            <span className="font-mono text-[12px] text-sgbac-outline mb-4 block uppercase tracking-widest">{t.section4.tag}</span>
            <h2 className="text-[32px] md:text-[40px] font-bold text-sgbac-primary mb-6 font-headline tracking-tighter">{t.section4.title}</h2>
            <p className="text-[18px] text-sgbac-slate mb-12 leading-relaxed">
              {t.section4.desc}
            </p>
            <div className="border-l-4 border-sgbac-primary pl-8 py-2 mb-12">
              <p className="italic text-sgbac-slate text-[18px]">{t.section4.quote}</p>
            </div>
            <button onClick={() => setActivePage('reservation')} className="bg-sgbac-primary text-white font-mono text-[12px] px-8 py-4 rounded-lg flex items-center gap-2 hover:bg-sgbac-on-primary-container transition-all active:scale-95 font-bold tracking-widest">
              {t.section4.cta} <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Bento Grid: Premium Services Highlight */}
      <section className="py-24 px-margin-desktop bg-sgbac-surface-container">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[40px] font-bold text-sgbac-primary mb-4 font-headline tracking-tight">{t.bento.title}</h2>
            <p className="text-sgbac-slate">{t.bento.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {[
              { icon: 'bolt', title: t.bento.card1.title, desc: t.bento.card1.desc, id: '01' },
              { icon: 'lock', title: t.bento.card2.title, desc: t.bento.card2.desc, id: '02' },
              { icon: 'map', title: t.bento.card3.title, desc: t.bento.card3.desc, id: '03' }
            ].map((card, i) => (
              <div key={i} className="bg-white p-10 rounded-xl shadow-sm border border-sgbac-outline-variant/30 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-500">
                <div>
                  <div className="w-14 h-14 bg-sgbac-primary rounded-lg flex items-center justify-center mb-8 text-white">
                    <span className="material-symbols-outlined text-3xl">{card.icon}</span>
                  </div>
                  <h3 className="text-[32px] md:text-[40px] font-bold mb-4 font-headline tracking-tighter">{card.title}</h3>
                  <p className="text-sgbac-slate leading-relaxed font-sans">{card.desc}</p>
                </div>
                <div className="mt-8 border-t border-sgbac-outline-variant/30 pt-6 flex justify-between items-center">
                  <span className="font-mono text-[10px] text-sgbac-outline tracking-widest">{lang === 'ko' ? '핵심 가치' : 'CORE VALUE'} {card.id}</span>
                  <ArrowRight className="text-sgbac-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 bg-white" id="location">
        <div className="max-w-[1280px] mx-auto px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            <div className="lg:col-span-4">
              <span className="font-mono text-[12px] text-sgbac-outline mb-4 block uppercase tracking-widest">LOCATION</span>
              <h2 className="text-[32px] md:text-[40px] font-bold text-sgbac-primary mb-8 font-headline tracking-tighter">{lang === 'ko' ? '도심과 하늘의\n가장 가까운 접점' : 'Closest point between\ncity and sky'}</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-sgbac-tertiary-fixed-dim">near_me</span>
                  <div>
                    <h4 className="font-bold text-sgbac-primary">{lang === 'ko' ? '서울 도심 20분 내 진입' : 'Arrival in central Seoul within 20 mins'}</h4>
                    <p className="text-sm text-sgbac-slate">{lang === 'ko' ? '여의도, 마곡, 강남 등 주요 비즈니스 거점과 인접' : 'Adjacent to major business hubs such as Yeouido, Magok, and Gangnam'}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-sgbac-tertiary-fixed-dim">location_city</span>
                  <div>
                    <h4 className="font-bold text-sgbac-primary">{lang === 'ko' ? '김포국제공항 내 독립 부지' : 'Independent site within Gimpo Int\'l Airport'}</h4>
                    <p className="text-sm text-sgbac-slate">{lang === 'ko' ? '서울특별시 강서구 하늘길 38 (김포공항 내)' : '38 Haneul-gil, Gangseo-gu, Seoul (within Gimpo Airport)'}</p>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => window.open('https://map.naver.com', '_blank')}
                className="mt-12 w-full py-4 border border-sgbac-outline-variant text-sgbac-primary font-mono text-[12px] rounded-lg hover:bg-sgbac-surface-container-low transition-all font-bold tracking-widest"
              >
                {lang === 'ko' ? '길찾기' : 'GET DIRECTIONS'}
              </button>
            </div>

            <div className="lg:col-span-8 rounded-xl overflow-hidden h-[500px] border border-sgbac-outline-variant/30 shadow-lg relative bg-sgbac-surface">
              <img 
                className="w-full h-full object-cover opacity-80" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCERPberbQJEytxug_i8LIbxbkMZm6WER8Z4KY94RQkEUW81qygbRMNiZMzcBr72B9TnTq0lQATsPmT-GayDek4xvDijVryrws1uo_tlLZiX2WY6qtTxz7GIxNmmvhMselicd4siBD5J25di-kofW71YYR8a0OYX035iOk2pk1DdHmb2T2UYCB1mqQa83URyMFZioANsV34G4Ta23PkSeyrLfVFRgIC6W3hO2_mmNrGh30EZ69HepaLE_p1BCmNFlCdquGndkhY_g" 
                alt="Seoul Map" 
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

interface FacilitiesPageProps {
  setActivePage: (p: string) => void;
  lang: 'ko' | 'en';
}

const FacilitiesPage: React.FC<FacilitiesPageProps> = ({ setActivePage, lang }) => {
  const t = translations[lang].facilities;
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="bg-sgbac-surface"
    >
      <main className="pt-32 pb-24">
        {/* Hero Section / Title */}
        <header className="max-w-[1280px] mx-auto px-margin-desktop mb-16">
          <h1 className="text-[48px] md:text-[64px] font-bold text-sgbac-primary mb-4 font-headline tracking-tighter">{t.title}</h1>
          <p className="text-[18px] text-sgbac-slate max-w-2xl leading-relaxed">
            {t.desc}
          </p>
        </header>

        {/* Facilities Section */}
        <section className="max-w-[1280px] mx-auto px-margin-desktop space-y-24">
          {/* Hangar Block */}
          <div className="group">
            <div className="relative overflow-hidden aspect-[21/9] mb-12 rounded-lg bg-sgbac-surface-container shadow-sm border border-sgbac-outline-variant/30">
              <img 
                alt="SGBAC Premium Hangar" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7PqdIy488Blnxz68y92q6S0-8HzEhkgEzR5IBEk3ojIL81mRYfQ4gLA3huNp_3o8hMDHggAbhjYFcvY6xooHYQzwAVnqt98UGV3XlEmY5aPiAf4h-EOGvW-0TgdwAtrXwzyM_8K5IA1JwDshuY7PX6s-o80vJam1jrwP1cKNeGhbkzg5zxcGdlEZg0bKH_unBH1-yqQs-CvkBg1l9ratEVxDIQjQw5E2RPWQi9ejHL7kCclqHCQk7Tm9l5kg8DoHoVNmCzPFsoQ"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sgbac-primary/60 to-transparent flex flex-col justify-end p-12">
                <h2 className="text-[32px] md:text-[40px] font-bold text-white mb-2 font-headline tracking-tight">{t.hangar.title} <span className="font-normal opacity-80">{lang === 'ko' ? '격납고' : ''}</span></h2>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
              <div className="lg:col-span-4">
                <div className="bg-white p-8 border border-sgbac-outline-variant/20 rounded-lg h-full shadow-sm">
                  <span className="font-mono text-[10px] text-sgbac-tertiary-fixed-dim bg-sgbac-primary px-3 py-1 rounded-full mb-6 inline-block font-bold tracking-widest uppercase">Specification</span>
                  <div className="space-y-4">
                    <div className="flex justify-between items-end border-b border-sgbac-outline-variant/20 pb-2">
                      <span className="text-sgbac-slate text-sm">{t.hangar.area}</span>
                      <span className="text-sgbac-primary font-bold text-2xl font-headline tracking-tighter">10,260m²</span>
                    </div>
                    <div className="flex justify-between items-end border-b border-sgbac-outline-variant/20 pb-2">
                      <span className="text-sgbac-slate text-sm">{t.hangar.models}</span>
                      <span className="text-sgbac-primary font-bold text-2xl font-headline tracking-tighter">Ultra Large</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-8 flex flex-col justify-center">
                <ul className="space-y-6">
                  <li className="aviation-gold-bullet text-[18px] text-sgbac-slate leading-relaxed whitespace-pre-line">
                    {t.hangar.feat1}
                  </li>
                  <li className="aviation-gold-bullet text-[18px] text-sgbac-slate leading-relaxed whitespace-pre-line">
                    {t.hangar.feat2}
                  </li>
                  <li className="aviation-gold-bullet text-[18px] text-sgbac-slate leading-relaxed whitespace-pre-line">
                    {t.hangar.feat3}
                  </li>
                </ul>
                <div className="mt-10">
                  <button 
                    onClick={() => setActivePage('reservation')}
                    className="bg-sgbac-primary text-white px-8 py-4 rounded-lg font-mono text-[12px] font-bold hover:bg-sgbac-on-primary-fixed-variant transition-all flex items-center gap-2 group tracking-widest uppercase"
                  >
                    {t.hangar.cta}
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Parking Stands Block */}
          <div className="group">
            <div className="relative overflow-hidden aspect-[21/9] mb-12 rounded-lg bg-sgbac-surface-container shadow-sm border border-sgbac-outline-variant/30">
              <img 
                alt="SGBAC Parking Stands" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAz-mTMrqfxVxWN-ue9-Zge7RrMJ3Ca744WyRPDwG6JZ6n_x2ljprJYpFBVZHpG0EDms1BuRI5z6x3Is4zDuujd5jN-V9EsTEKJVFpAWq208fc5W_ITAduH3Vx2WMPI33-zfgnZ_7Ifb90saYSbmAZpNCycaUT_4_TGeEnCrQ9jXwXSHfBCYMWz_chiLHlk4GvoilLui6yrxkru0UTZiI7adEDO8t3fv2ZRVHJN5ZBKEuO6NmxJaOgE4MfB-sr1tJkGKXt2MfUQxw"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sgbac-primary/60 to-transparent flex flex-col justify-end p-12">
                <h2 className="text-[32px] md:text-[40px] font-bold text-white mb-2 font-headline tracking-tight">{t.parking.title} <span className="font-normal opacity-80">{lang === 'ko' ? 'Spacious Parking Stands' : ''}</span></h2>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
              <div className="lg:col-span-8 flex flex-col justify-center order-2 lg:order-1">
                <ul className="space-y-6">
                  <li className="aviation-gold-bullet text-[18px] text-sgbac-slate leading-relaxed whitespace-pre-line">
                    {t.parking.feat1}
                  </li>
                  <li className="aviation-gold-bullet text-[18px] text-sgbac-slate leading-relaxed whitespace-pre-line">
                    {t.parking.feat2}
                  </li>
                  <li className="aviation-gold-bullet text-[18px] text-sgbac-slate leading-relaxed whitespace-pre-line">
                    {t.parking.feat3}
                  </li>
                </ul>
              </div>
              <div className="lg:col-span-4 order-1 lg:order-2">
                <div className="bg-white p-8 border border-sgbac-outline-variant/20 rounded-lg h-full shadow-sm">
                  <span className="font-mono text-[10px] text-sgbac-tertiary-fixed-dim bg-sgbac-primary px-3 py-1 rounded-full mb-6 inline-block font-bold tracking-widest uppercase">Performance</span>
                  <div className="space-y-4">
                    <div className="flex justify-between items-end border-b border-sgbac-outline-variant/20 pb-2">
                      <span className="text-sgbac-slate text-sm">{lang === 'ko' ? '슬롯 활용률 (2026년 평균)' : 'Slot Utilization (2026 avg)'}</span>
                      <span className="text-sgbac-primary font-bold text-2xl font-headline tracking-tighter">58.9%</span>
                    </div>
                    <div className="flex justify-between items-end border-b border-sgbac-outline-variant/20 pb-2">
                      <span className="text-sgbac-slate text-sm">{lang === 'ko' ? '전용 주기장 수' : 'Number of Stands'}</span>
                      <span className="text-sgbac-primary font-bold text-2xl font-headline tracking-tighter">7</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Convenience Facilities Block */}
          <div className="group">
            <div className="relative overflow-hidden aspect-[21/9] mb-12 rounded-lg bg-sgbac-surface-container shadow-sm border border-sgbac-outline-variant/30">
              <img 
                alt="SGBAC Convenience Facilities" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzeHiJPOJCdhcsFy3ZhfRFt0QWSpyKnHZmNHQcC_5CAbFNRlrETiqpuObHsL4lA9NbpTnme3ronYPFs7UCZ_rjsP-e1Swy6SthwzF8qN51OSme6fFfGf5x307MLdCVTEVWt-KP_gNCCyPeX2zBXLeeWg4_DQEAhh-qB-qGplyoDGOtxNPkoNbudjH1RkH_fiAmQ4EDWLj1TNWlsljbLq7lESF0asGt48mAE-VcoH71Il3cFPQVREFeEe3CIgBbTZOsv2PZZrAvJQ"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sgbac-primary/60 to-transparent flex flex-col justify-end p-12">
                <h2 className="text-[32px] md:text-[40px] font-bold text-white mb-2 font-headline tracking-tight">{t.convenience.title} <span className="font-normal opacity-80">{lang === 'ko' ? 'Convenience Facilities' : ''}</span></h2>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
              <div className="lg:col-span-4">
                <div className="bg-white p-8 border border-sgbac-outline-variant/20 rounded-lg h-full shadow-sm">
                  <span className="font-mono text-[10px] text-sgbac-tertiary-fixed-dim bg-sgbac-primary px-3 py-1 rounded-full mb-6 inline-block font-bold tracking-widest uppercase">Service Highlights</span>
                  <div className="space-y-4">
                    <div className="flex justify-between items-end border-b border-sgbac-outline-variant/20 pb-2">
                      <span className="text-sgbac-slate text-sm">{lang === 'ko' ? '수속 절차' : 'Procedures'}</span>
                      <span className="text-sgbac-primary font-bold text-2xl font-headline tracking-tighter">Non-Stop</span>
                    </div>
                    <div className="flex justify-between items-end border-b border-sgbac-outline-variant/20 pb-2">
                      <span className="text-sgbac-slate text-sm">{lang === 'ko' ? '라운지 등급' : 'Lounge Tier'}</span>
                      <span className="text-sgbac-primary font-bold text-2xl font-headline tracking-tighter">Premium VIP</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-8 flex flex-col justify-center">
                <ul className="space-y-6">
                  <li className="aviation-gold-bullet text-[18px] text-sgbac-slate leading-relaxed whitespace-pre-line">
                    {t.convenience.feat1}
                  </li>
                  <li className="aviation-gold-bullet text-[18px] text-sgbac-slate leading-relaxed whitespace-pre-line">
                    {t.convenience.feat2}
                  </li>
                  <li className="aviation-gold-bullet text-[18px] text-sgbac-slate leading-relaxed whitespace-pre-line">
                    {t.convenience.feat3}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Crew Lounge Block */}
          <div>
            <div className="mb-12 border-b border-sgbac-outline-variant pb-8">
              <h2 className="text-[32px] md:text-[40px] font-bold text-sgbac-primary mb-2 font-headline tracking-tight">{t.crew.title} <span className="text-sgbac-slate font-normal opacity-80">{lang === 'ko' ? 'Crew Lounge' : ''}</span></h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
              <div className="lg:col-span-8 flex flex-col justify-center order-2 lg:order-1">
                <p className="text-[18px] text-sgbac-slate mb-6 leading-relaxed whitespace-pre-line">{t.crew.desc}</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <li className="aviation-gold-bullet text-[16px] text-sgbac-slate">{t.crew.feat1}</li>
                  <li className="aviation-gold-bullet text-[16px] text-sgbac-slate">{t.crew.feat2}</li>
                  <li className="aviation-gold-bullet text-[16px] text-sgbac-slate">{t.crew.feat3}</li>
                  <li className="aviation-gold-bullet text-[16px] text-sgbac-slate">{t.crew.feat4}</li>
                </ul>
              </div>
              <div className="lg:col-span-4 order-1 lg:order-2">
                <div className="bg-white p-8 border border-sgbac-outline-variant/20 rounded-lg h-full flex flex-col justify-center items-center text-center shadow-sm">
                  <span className="material-symbols-outlined text-sgbac-primary text-5xl mb-4">coffee</span>
                  <h4 className="text-sgbac-primary font-bold uppercase tracking-widest text-xs">Crew Wellness</h4>
                  <p className="text-sgbac-slate text-sm mt-2">{lang === 'ko' ? '운항 승무원을 위한 세심한 배려' : 'Meticulous care for flight crew'}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive Business Support */}
        <section className="max-w-[1280px] mx-auto px-margin-desktop mt-24">
          <h2 className="text-[32px] md:text-[40px] font-bold text-sgbac-primary mb-10 text-center font-headline tracking-tighter">{lang === 'ko' ? '종합 비즈니스 지원' : 'Comprehensive Business Support'}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="md:col-span-2 bg-sgbac-surface-container-low rounded-lg p-10 flex flex-col justify-between border border-sgbac-outline-variant/10 aviation-card">
              <div>
                <span className="material-symbols-outlined text-sgbac-tertiary-fixed-dim text-4xl mb-4">business_center</span>
                <h3 className="text-[32px] font-bold text-sgbac-primary mb-4 font-headline tracking-tight">{lang === 'ko' ? '비즈니스 미팅룸' : 'Business Meeting Rooms'}</h3>
                <p className="text-[16px] text-sgbac-slate leading-relaxed">{lang === 'ko' ? '보안이 강화된 조용한 환경에서 중요한 비즈니스 미팅과 컨퍼런스를 진행할 수 있습니다.' : 'Conduct important business meetings and conferences in a quiet environment with enhanced security.'}</p>
              </div>
              <button onClick={() => setActivePage('reservation')} className="mt-8 font-mono text-[12px] text-sgbac-primary flex items-center gap-2 hover:underline uppercase tracking-widest font-bold">
                {lang === 'ko' ? '문의하기' : 'INQUIRE'} <span className="material-symbols-outlined text-sm">open_in_new</span>
              </button>
            </div>
            <div className="bg-sgbac-primary text-white rounded-lg p-10 flex flex-col justify-between shadow-xl">
              <div>
                <span className="material-symbols-outlined text-white text-4xl mb-4">build</span>
                <h3 className="text-[32px] font-bold mb-4 font-headline tracking-tight">{lang === 'ko' ? '지상 조업 지원' : 'Ground Support'}</h3>
                <p className="text-[16px] opacity-80 leading-relaxed font-sans">{lang === 'ko' ? '유지보수 및 지상 조업 서비스와의 유기적인 연결로 기체의 최상 컨디션을 유지합니다.' : 'Maintain the best condition of the aircraft through organic connection with maintenance and ground support services.'}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
};


const GuidePage = ({ lang }: { lang: 'ko' | 'en' }) => {
  const t = translations[lang].guide;
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-32 pb-32 px-6 max-w-7xl mx-auto">
      <header className="mb-20 max-w-3xl">
        <span className="text-sgbac-gold text-xs font-bold tracking-[0.3em] uppercase mb-6 block">Usage Protocol</span>
        <h1 className="text-5xl font-extrabold mb-8 font-headline leading-tight">{t.title}</h1>
        <p className="text-sgbac-slate text-lg leading-relaxed whitespace-pre-line">
          {t.desc}
        </p>
      </header>

      {/* Values */}
      <div className="grid md:grid-cols-3 gap-8 mb-32">
        {[
          { icon: Clock, title: "Speed", desc: lang === 'ko' ? "출입국 전용 카운터 운영으로 단 10분 내외의 신속한 프로세스 보장" : "Ensure rapid process within 10 minutes through immigration-only counter" },
          { icon: Shield, title: "Privacy", desc: lang === 'ko' ? "철저한 보안 통제와 독립된 라운지 동선을 통해 완벽한 프라이버시 보호" : "Perfect privacy protection through strict security control and independent lounge paths" },
          { icon: Globe, title: "Accessibility", desc: lang === 'ko' ? "서울 도심에서 17km, 주요 비즈니스 거점과 연결되는 최적의 입지" : "Optimal location 17km from central Seoul, connecting to major business hubs" }
        ].map((item, i) => (
          <div key={i} className="p-10 border border-sgbac-navy/10 rounded-2xl bg-white hover:border-sgbac-gold transition-colors group">
            <item.icon className="w-10 h-10 text-sgbac-navy mb-8 group-hover:text-sgbac-gold transition-colors" />
            <h3 className="text-xl font-bold mb-4 font-headline uppercase tracking-widest">{item.title}</h3>
            <p className="text-sgbac-slate text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Process */}
      <div className="grid lg:grid-cols-2 gap-20 items-center bg-sgbac-navy p-12 md:p-24 rounded-[2rem] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sgbac-gold/10 rounded-full blur-[100px]" />
        <div>
          <h2 className="text-3xl font-headline font-bold mb-12 text-sgbac-gold uppercase tracking-widest">{t.process.title}</h2>
          <div className="space-y-12">
            {[
              { step: "01", title: t.process.step1.title, desc: t.process.step1.desc },
              { step: "02", title: t.process.step2.title, desc: t.process.step2.desc },
              { step: "03", title: t.process.step3.title, desc: t.process.step3.desc },
              { step: "04", title: t.process.step4.title, desc: t.process.step4.desc }
            ].map((item, i) => (
              <div key={i} className="flex gap-8 group">
                <span className="text-white/20 font-headline text-4xl group-hover:text-sgbac-gold transition-colors">{item.step}</span>
                <div>
                  <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-white/50 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden lg:block relative aspect-square">
          <div className="absolute inset-0 bg-sgbac-gold/5 rounded-full animate-pulse" />
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute inset-20 border-2 border-white/5 border-dashed rounded-full" 
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Plane className="w-20 h-20 text-sgbac-gold" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const LocationPage = ({ lang }: { lang: 'ko' | 'en' }) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-32 pb-32 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <header className="mb-12">
            <h1 className="text-5xl font-extrabold mb-8 font-headline tracking-tighter">{lang === 'ko' ? '오시는 길' : 'Our Location'}</h1>
            <div className="bg-sgbac-navy p-1 px-8 rounded-lg mb-8 inline-block">
              <p className="text-white font-mono text-xs uppercase tracking-widest">Global Gateway In Seoul</p>
            </div>
            <p className="text-sgbac-slate text-lg leading-relaxed mb-12">
              {lang === 'ko' 
                ? <>서울특별시 강서구 하늘길 38 (김포공항 내) <br /> 성공적인 비즈니스를 위한 가장 빠른 경로를 확인하십시오.</>
                : <>38 Haneul-gil, Gangseo-gu, Seoul (within Gimpo Airport) <br /> Check the fastest route for your successful business.</>}
            </p>
          </header>

          <div className="space-y-10">
            {[
              { 
                type: lang === 'ko' ? "송정역 방면" : "From Songjeong", 
                detail: lang === 'ko' ? "개화사거리에서 유턴 후, 김포공항방면으로 우회전하여 SGBAC 진입" : "Make a U-turn at Gaehwa Intersection, turn right toward Gimpo Airport to enter SGBAC" 
              },
              { 
                type: lang === 'ko' ? "일산 방면" : "From Ilsan", 
                detail: lang === 'ko' ? "국제선청사 진입 직점 우회전하여 전용 게이트로 진입" : "Turn right just before the International terminal and enter through the dedicated gate" 
              },
              { 
                type: lang === 'ko' ? "김포공항 방면" : "From Gimpo", 
                detail: lang === 'ko' ? "남부순환도로 지하차도 탈출 즉시 좌회전하여 SGBAC 진입" : "Turn left immediately after exiting the Nambusunhwan-ro underpass to enter SGBAC" 
              }
            ].map((route, i) => (
              <div key={i} className="flex gap-8 group">
                <div className="w-24 shrink-0 text-xs font-bold uppercase tracking-widest text-sgbac-gold pt-1">{route.type}</div>
                <p className="text-sgbac-navy text-sm font-medium leading-relaxed group-hover:text-sgbac-slate transition-colors">{route.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-sgbac-navy/10 flex flex-wrap gap-4">
            <Phone className="text-sgbac-gold w-6 h-6" />
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-sgbac-slate mb-1">Inquiry Desk</div>
              <div className="text-2xl font-bold text-sgbac-navy">02-2660-2547~8</div>
            </div>
          </div>
        </div>

        <div className="relative aspect-[4/5] lg:aspect-auto lg:h-[700px] rounded-3xl overflow-hidden aviation-card">
          <img 
            src="https://images.unsplash.com/photo-1569336415962-a4bd9f69c07b?auto=format&fit=crop&q=80&w=2000" 
            alt="SGBAC Location Map Illustration"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-sgbac-navy/10 backdrop-blur-[2px] flex items-center justify-center">
             <div className="bg-white/90 p-8 rounded-2xl shadow-2xl text-center max-w-sm mx-6">
                <MapPin className="w-12 h-12 text-sgbac-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold text-sgbac-navy mb-2 font-headline uppercase tracking-tight">SGBAC Seoul</h3>
                <p className="text-sgbac-slate text-sm mb-6">서울특별시 강서구 하늘길 38<br/>(김포공항 내)</p>
                <a 
                  href="https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EA%B0%95%EC%84%9C%EA%B5%AC%20%ED%95%98%EB%8A%98%EA%B8%B8%2038" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-sgbac-navy text-white text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-sgbac-gold transition-all"
                >
                  {lang === 'ko' ? '네이버 지도에서 보기' : 'View on Naver Map'} <ExternalLink className="w-3 h-3" />
                </a>
             </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const PrivacyPolicyPage = ({ lang }: { lang: 'ko' | 'en' }) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-32 pb-32 px-6 max-w-4xl mx-auto">
      <header className="mb-16">
        <h1 className="text-4xl font-bold font-headline mb-4 uppercase tracking-tighter">
          {lang === 'ko' ? '개인정보처리방침' : 'Privacy Policy'}
        </h1>
        <p className="text-sgbac-slate">{lang === 'ko' ? '시행일: 2024년 5월 15일' : 'Effective Date: May 15, 2024'}</p>
      </header>
      
      <div className="prose prose-slate max-w-none space-y-12 text-sgbac-navy">
        <section>
          <h2 className="text-xl font-bold mb-4 flex items-center gap-3">
            <span className="w-8 h-8 bg-sgbac-gold/10 text-sgbac-gold rounded-full flex items-center justify-center text-xs">01</span>
            {lang === 'ko' ? '일반 규정' : 'General Provisions'}
          </h2>
          <p className="text-sgbac-slate leading-relaxed">
            {lang === 'ko' 
              ? 'SGBAC (Seoul Gimpo Business Aviation Center)는 한국공항공사(KAC)의 정책에 따라 운영되며, 귀하의 개인정보를 소중히 여기고 "개인정보 보호법"을 준수합니다. 본 개인정보 처리방침은 귀하의 개인정보가 어떻게 사용되고 이를 보호하기 위해 어떠한 조치가 취해지고 있는지 알려드립니다.'
              : 'SGBAC (Seoul Gimpo Business Aviation Center), operated in accordance with the policies of Korea Airports Corporation (KAC), values your personal information and complies with the "Personal Information Protection Act." This Privacy Policy informs you how your personal information is used and what measures are taken to protect it.'}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4 flex items-center gap-3">
            <span className="w-8 h-8 bg-sgbac-gold/10 text-sgbac-gold rounded-full flex items-center justify-center text-xs">02</span>
            {lang === 'ko' ? '개인정보 처리 목적' : 'Purpose of Processing Personal Information'}
          </h2>
          <p className="text-sgbac-slate leading-relaxed mb-4">
            {lang === 'ko' ? 'SGBAC은 다음의 목적을 위해 개인정보를 처리합니다.' : 'SGBAC processes personal information for the following purposes:'}
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sgbac-slate">
            <li>{lang === 'ko' ? '서비스 예약 및 관리: 터미널 이용, 격납고 및 주기장 예약 처리' : 'Service Reservation & Management: Processing terminal use, hangar, and parking reservations.'}</li>
            <li>{lang === 'ko' ? '본인 확인: CIQ (세관, 출입국, 검역) 지원을 위한 이용자 확인' : 'Identity Verification: Verification of users for CIQ (Customs, Immigration, and Quarantine) support.'}</li>
            <li>{lang === 'ko' ? '운영 안전: 비즈니스 항공 센터 내 보안 및 안전 유지' : 'Operational Safety: Maintaining security and safety within the business aviation center.'}</li>
            <li>{lang === 'ko' ? '고객 지원: 문의, 불만 처리 및 필요한 서비스 업데이트 제공' : 'Customer Support: Handling inquiries, complaints, and providing necessary service updates.'}</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4 flex items-center gap-3">
            <span className="w-8 h-8 bg-sgbac-gold/10 text-sgbac-gold rounded-full flex items-center justify-center text-xs">03</span>
            {lang === 'ko' ? '처리할 개인정보 항목' : 'Personal Information Items to be Processed'}
          </h2>
          <p className="text-sgbac-slate leading-relaxed mb-4">
            {lang === 'ko' ? '서비스 제공을 위해 다음 항목이 수집됩니다.' : 'The following items are collected for service provision:'}
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sgbac-slate">
            <li>{lang === 'ko' ? '필수: 이름, 회사명, 전화번호, 이메일 주소, 항공기 등록 번호' : 'Essential: Name, Company, Phone Number, Email Address, Aircraft Registration Number.'}</li>
            <li>{lang === 'ko' ? '선택: 여권 정보 (CIQ 지원용), 승객 명단, 특별 요청 사항' : 'Optional: Passport information (for CIQ support), Passenger lists, Special requests.'}</li>
            <li>{lang === 'ko' ? '자동: IP 주소, 쿠키, 방문 기록' : 'Automated: IP address, cookies, visit records.'}</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4 flex items-center gap-3">
            <span className="w-8 h-8 bg-sgbac-gold/10 text-sgbac-gold rounded-full flex items-center justify-center text-xs">04</span>
            {lang === 'ko' ? '처리 및 보유 기간' : 'Processing and Retention Period'}
          </h2>
          <p className="text-sgbac-slate leading-relaxed">
            {lang === 'ko' 
              ? '개인정보는 수집 시 동의한 기간 내 또는 관련 법령에 따라 처리 및 보유됩니다. 원칙적으로 개인정보 수집 및 이용 목적이 달성된 후에는 지체 없이 해당 정보를 파기합니다. 단, 계약 또는 청약철회 등에 관한 기록은 전자상거래 등에서의 소비자보호에 관한 법률에 따라 5년간 보관됩니다.'
              : 'Personal information is processed and retained within the period agreed upon at the time of collection or as required by relevant laws. In principle, personal information is destroyed without delay once the purpose of collection and use is achieved. However, records related to contracts or withdrawal of subscriptions are retained for 5 years as per the Act on Consumers\' Protection in Electronic Commerce.'}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4 flex items-center gap-3">
            <span className="w-8 h-8 bg-sgbac-gold/10 text-sgbac-gold rounded-full flex items-center justify-center text-xs">05</span>
            {lang === 'ko' ? '정보 주체의 권리' : 'Rights of Data Subjects'}
          </h2>
          <p className="text-sgbac-slate leading-relaxed">
            {lang === 'ko' 
              ? '사용자는 언제든지 자신의 개인정보에 대한 열람, 정정, 삭제 또는 처리 정지를 요청할 권리가 있습니다. SGBAC은 관련 법령에 따라 그러한 요청이 신속하게 처리되도록 보장합니다.'
              : 'Users have the right to request access to, correction, deletion, or suspension of processing of their personal information at any time. SGBAC ensures that such requests are handled promptly in accordance with the law.'}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4 flex items-center gap-3">
            <span className="w-8 h-8 bg-sgbac-gold/10 text-sgbac-gold rounded-full flex items-center justify-center text-xs">06</span>
            {lang === 'ko' ? '안전성 확보 조치' : 'Measures to Ensure Safety'}
          </h2>
          <p className="text-sgbac-slate leading-relaxed">
            {lang === 'ko' 
              ? 'SGBAC은 개인정보의 분실, 도난, 유출, 변조를 방지하기 위해 민감한 데이터의 암호화 및 처리 시스템에 대한 접근 제한을 포함한 기술적, 관리적, 물리적 조치를 취하고 있습니다.'
              : 'SGBAC takes technical, administrative, and physical measures to prevent the loss, theft, leakage, or alteration of personal information, including encryption of sensitive data and restricted access to processing systems.'}
          </p>
        </section>

        <div className="pt-12 border-t border-sgbac-navy/10">
          <p className="text-sgbac-slate text-sm italic">
            {lang === 'ko' 
              ? '참고: 본 방침은 한국공항공사 개인정보 처리방침 약관을 바탕으로 수립되었습니다. 보다 자세한 정보는 한국공항공사 공식 홈페이지를 방문해 주세요.'
              : 'Note: This policy is established based on the Korea Airports Corporation Privacy Policy terms. For more detailed information, please visit the official KAC website.'}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const ReservationPage = ({ lang }: { lang: 'ko' | 'en' }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="pt-40 pb-40 px-6 max-w-lg mx-auto text-center"
      >
        <div className="w-20 h-20 bg-sgbac-gold/10 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle2 className="text-sgbac-gold w-10 h-10" />
        </div>
        <h1 className="text-3xl font-bold font-headline mb-4 uppercase tracking-tighter">
          {lang === 'ko' ? '예약 접수 완료' : 'Reservation Received'}
        </h1>
        <p className="text-sgbac-slate mb-12">
          {lang === 'ko' 
            ? <>감사합니다. 예약 신청이 정상적으로 접수되었습니다. <br /> 24시간 내에 담당자가 연락을 드려 안내를 도와드리겠습니다. </>
            : <>Thank you. Your reservation request has been successfully received. <br /> A representative will contact you within 24 hours to assist you. </>}
        </p>
        <button 
          onClick={() => window.location.reload()}
          className="px-10 py-4 bg-sgbac-navy text-white text-xs font-bold uppercase tracking-widest rounded"
        >
          {lang === 'ko' ? '홈으로 돌아가기' : 'Return Home'}
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-32 pb-32 px-6 max-w-7xl mx-auto">
      <header className="mb-20 text-center">
        <h1 className="text-5xl font-extrabold mb-6 font-headline tracking-tighter uppercase">
          {lang === 'ko' ? '예약 및 문의' : 'Reservation'}
        </h1>
        <p className="text-sgbac-slate text-lg max-w-2xl mx-auto">
          {lang === 'ko' 
            ? <>SGBAC의 프리미엄 서비스를 예약하십시오. <br /> 전문 상담원이 고객님의 일정에 맞춘 최적의 플랜을 제안해 드립니다.</>
            : <>Reserve SGBAC's premium services. <br /> A professional consultant will suggest the best plan tailored to your schedule.</>}
        </p>
      </header>

      <div className="grid lg:grid-cols-12 gap-20">
        <div className="lg:col-span-7 bg-white p-10 md:p-16 rounded-[2rem] aviation-card">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-widest text-sgbac-slate">{lang === 'ko' ? 'Name / 성함' : 'Name / Name'}</label>
                <input required type="text" className="w-full bg-sgbac-surface border-none rounded p-4 text-sm focus:ring-2 focus:ring-sgbac-gold outline-none transition-all" />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-widest text-sgbac-slate">{lang === 'ko' ? 'Company / 회사명' : 'Company / Company'}</label>
                <input required type="text" className="w-full bg-sgbac-surface border-none rounded p-4 text-sm focus:ring-2 focus:ring-sgbac-gold outline-none transition-all" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-widest text-sgbac-slate">{lang === 'ko' ? 'Phone / 연락처' : 'Phone / Contact'}</label>
                <input required type="tel" className="w-full bg-sgbac-surface border-none rounded p-4 text-sm focus:ring-2 focus:ring-sgbac-gold outline-none transition-all" />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-widest text-sgbac-slate">{lang === 'ko' ? 'Email / 이메일' : 'Email / Email'}</label>
                <input required type="email" className="w-full bg-sgbac-surface border-none rounded p-4 text-sm focus:ring-2 focus:ring-sgbac-gold outline-none transition-all" />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-bold uppercase tracking-widest text-sgbac-slate">{lang === 'ko' ? 'Service Interest / 관심 서비스' : 'Service Interest / Interested Service'}</label>
              <select className="w-full bg-sgbac-surface border-none rounded p-4 text-sm focus:ring-2 focus:ring-sgbac-gold outline-none transition-all appearance-none">
                <option>{lang === 'ko' ? '격납고 이용 (Hangar)' : 'Hangar'}</option>
                <option>{lang === 'ko' ? '주기장 이용 (Parking)' : 'Parking'}</option>
                <option>{lang === 'ko' ? 'VIP 라운지 & 의전 (Lounge & Protocol)' : 'VIP Lounge & Protocol'}</option>
                <option>{lang === 'ko' ? '지상 조업 지원 (Ground Support)' : 'Ground Support'}</option>
              </select>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-bold uppercase tracking-widest text-sgbac-slate">{lang === 'ko' ? 'Additional Details / 요청 사항' : 'Additional Details / Special Requests'}</label>
              <textarea rows={5} className="w-full bg-sgbac-surface border-none rounded p-4 text-sm focus:ring-2 focus:ring-sgbac-gold outline-none transition-all resize-none" placeholder={lang === 'ko' ? "항공기 기종, 인원, 예상 일정 등을 입력해 주세요." : "Enter aircraft model, number of people, expected schedule, etc."}></textarea>
            </div>

            <button type="submit" className="w-full py-5 bg-sgbac-navy text-white text-xs font-bold uppercase tracking-[0.3em] rounded hover:bg-sgbac-slate transition-all shadow-lg">
              {lang === 'ko' ? '예약 신청하기' : 'Submit Reservation'}
            </button>
          </form>
        </div>

        <div className="lg:col-span-5">
          <div className="bg-sgbac-navy text-white p-12 rounded-[2rem] h-full flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold font-headline mb-6 text-sgbac-gold">Support Desk</h3>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <Phone className="text-sgbac-gold w-6 h-6 shrink-0" />
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">24/7 Operations</p>
                    <p className="text-xl font-bold">+82-2-2660-2547</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <Globe className="text-sgbac-gold w-6 h-6 shrink-0" />
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Email Inquiry</p>
                    <p className="text-xl font-bold">ops@sgbac.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-white/5">
              <p className="text-white/40 text-sm leading-relaxed">
                {lang === 'ko' 
                  ? '비즈니스 항공 운항 목적의 원활한 프로세스를 위해 최소 24시간 전 예약을 권장드립니다. 정시 운항 및 완벽한 보안을 위해 최선을 다하겠습니다.'
                  : 'For a smooth process for business aviation operations, we recommend booking at least 24 hours in advance. We will do our best for on-time flight and perfect security.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// --- Main App ---

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [lang, setLang] = useState<'ko' | 'en'>('en');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  return (
    <div className="min-h-screen selection:bg-sgbac-gold selection:text-sgbac-navy">
      <Navbar activePage={activePage} setActivePage={setActivePage} lang={lang} setLang={setLang} />

      <main>
        <AnimatePresence mode="wait">
          {activePage === 'home' && <HomePage key="home" setActivePage={setActivePage} lang={lang} />}
          {activePage === 'facilities' && <FacilitiesPage key="facilities" setActivePage={setActivePage} lang={lang} />}
          {activePage === 'guide' && <GuidePage lang={lang} />}
          {activePage === 'location' && <LocationPage lang={lang} />}
          {activePage === 'reservation' && <ReservationPage lang={lang} />}
          {activePage === 'privacy' && <PrivacyPolicyPage lang={lang} />}
        </AnimatePresence>
      </main>

      <Footer setActivePage={setActivePage} lang={lang} />
    </div>
  );
}
