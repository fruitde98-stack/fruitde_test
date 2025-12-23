import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Truck, Heart, Clock, Palette } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import ProductCard from '../components/ProductCard';
import { BEANIT_LOGO_URL } from '../constants';

const Home: React.FC = () => {
  const { products, themeSettings } = useStore();
  const featuredProducts = products.filter(p => p.isFeatured);
  const scrollingProducts = [...featuredProducts, ...featuredProducts];

  return (
    <div className="bg-white overflow-x-hidden">
      {/* Top Banner Message */}
      <div className="bg-brand-darkTeal py-3 overflow-hidden border-b border-white/10 relative z-20">
         <div className="whitespace-nowrap animate-marquee flex items-center">
           <span className="mx-8 text-xs md:text-sm text-brand-gold tracking-[0.3em] font-serif uppercase opacity-90">
             "맛으로 전하는 가치, 마음으로 전하는 나눔" * FRUITDE * BEANIT *
           </span>
           <span className="mx-8 text-xs md:text-sm text-brand-gold tracking-[0.3em] font-serif uppercase opacity-90">
             "맛으로 전하는 가치, 마음으로 전하는 나눔" * FRUITDE * BEANIT *
           </span>
         </div>
      </div>

      {/* Hero Section */}
      <section 
        className="relative h-[85vh] flex items-center justify-center text-center px-4 overflow-hidden"
        style={{ backgroundColor: themeSettings.primaryColor }}
      >
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="absolute inset-0 z-0 scale-105 animate-pulse duration-10000">
            <img 
                src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
                alt="Fruit Banner" 
                className="w-full h-full object-cover"
            />
        </div>

        <div className="relative z-20 max-w-5xl mx-auto space-y-6 animate-fade-in-up">
          <h2 className="text-brand-lightGold font-serif italic text-xl md:text-3xl tracking-widest mb-4">
            Fruit + Delight
          </h2>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-white leading-tight drop-shadow-2xl">
            FRUITDE
          </h1>

          <div className="w-24 h-[2px] bg-brand-gold mx-auto my-8"></div>

          <p className="text-2xl md:text-4xl text-white font-serif font-medium leading-relaxed tracking-wide drop-shadow-lg">
            "맛으로 전하는 가치,<br className="md:hidden"/> 마음으로 전하는 나눔"
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-10">
             <Link to="/shop" className="group relative inline-flex items-center justify-center px-12 py-4 bg-white text-brand-teal font-bold text-sm tracking-widest uppercase overflow-hidden transition-all hover:bg-brand-gold hover:text-white rounded-sm shadow-xl">
               <span className="relative z-10 flex items-center">Shop Now <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
             </Link>
          </div>
        </div>
      </section>

      {/* Brand Definition - FRUITDE Meaning */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-5xl mx-auto px-4">
          <span className="text-brand-gold text-sm font-bold tracking-widest uppercase mb-4 block">Our Brand Name</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-16">The Essence of FRUITDE</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-12 bg-gray-50 border border-gray-100 rounded-3xl group hover:bg-brand-teal transition-all duration-500">
              <h3 className="text-3xl font-serif font-bold text-brand-teal group-hover:text-brand-lightGold mb-6">FRUIT + DE</h3>
              <p className="text-gray-600 group-hover:text-white/80 leading-relaxed text-lg">
                '과일에서(~DE) 온 가치'<br/>
                자연이 주는 본연의 맛과 영양을<br/>
                진실되게 담아내는 이름입니다.
              </p>
            </div>
            <div className="p-12 bg-brand-teal/5 border border-brand-teal/10 rounded-3xl group hover:bg-brand-teal transition-all duration-500">
              <h3 className="text-3xl font-serif font-bold text-brand-teal group-hover:text-brand-lightGold mb-6">FRUIT + DELIGHT</h3>
              <p className="text-gray-600 group-hover:text-white/80 leading-relaxed text-lg">
                '과일이 주는 기쁨'<br/>
                건강한 달콤함으로 당신의 일상에<br/>
                행복한 순간을 선물합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5D Philosophy Section */}
      <section className="py-24 bg-brand-darkTeal text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <span className="text-brand-gold font-bold tracking-widest text-xs uppercase block mb-3">Our Core Philosophy</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white">The '5D' Philosophy</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-10">
            {[
              { icon: Award, title: "Deluxe", desc: "엄선된 최상급 프리미엄 과일" },
              { icon: Truck, title: "Delivery", desc: "신선함을 집 앞까지 빠르게" },
              { icon: Heart, title: "Dessert", desc: "죄책감 없는 건강한 디저트" },
              { icon: Clock, title: "Dewday", desc: "매일 건강하게 프룻디와 함께" },
              { icon: Palette, title: "Design", desc: "감성을 담은 굿즈와 캐릭터" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 bg-white/5 rounded-2xl hover:bg-white/10 transition-all border border-white/10">
                <item.icon className="w-10 h-10 text-brand-gold mb-6" />
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEANIT (비닛) Section */}
      <section className="py-28 bg-[#Fdfbf7] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1 space-y-8 text-center lg:text-left">
               <div className="inline-block px-5 py-2 bg-brand-teal text-white rounded-full text-xs font-bold uppercase tracking-widest">Sub-Brand Discovery</div>
               <h2 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 leading-tight">
                 Beanit<span className="text-brand-gold">.</span>
               </h2>
               <div className="space-y-4">
                 <h3 className="text-2xl font-bold text-brand-teal">BEAN + IT: 콩으로 만든 건강한 혁신</h3>
                 <p className="text-gray-600 leading-relaxed text-lg">
                   타피오카 펄의 쫄깃함은 그대로, 영양은 더 풍부하게.<br/>
                   국내산 대두를 활용한 고단백 저탄수화물 <strong>'콩펄'</strong> 브랜드 비닛입니다.<br/>
                   "콩으로 만든 것, 콩으로 대체하다"라는 가치를 담아<br/>
                   당신의 음료 경험을 더욱 건강하게 바꿉니다.
                 </p>
               </div>
               <div className="flex justify-center lg:justify-start gap-4">
                  <Link to="/shop" className="px-10 py-4 bg-gray-900 text-white font-bold rounded-full hover:bg-brand-gold transition-colors shadow-lg">
                    비닛(Beanit) 상품 보기
                  </Link>
               </div>
            </div>
            <div className="flex-1 relative group">
               <div className="absolute inset-0 bg-brand-gold/10 rounded-full blur-3xl transform group-hover:scale-110 transition-transform duration-700"></div>
               <div className="relative z-10 p-12 bg-white rounded-[40px] shadow-2xl border border-white/50 overflow-hidden">
                 <img 
                   src={BEANIT_LOGO_URL} 
                   alt="Beanit Characters" 
                   className="w-full transform group-hover:scale-105 transition-transform duration-700"
                 />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Carousel */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">Premium Selections</h2>
            <div className="w-20 h-1 bg-brand-teal mx-auto mt-6"></div>
        </div>
        
        <div className="relative w-full">
            <div className="flex animate-scroll w-[200%] hover:[animation-play-state:paused]">
                {scrollingProducts.map((product, index) => (
                    <div key={`${product.id}-${index}`} className="w-[300px] md:w-[400px] flex-shrink-0 px-4">
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </div>
      </section>
      
      {/* Target Section (Visual Break) */}
      <section className="relative py-32 bg-gray-900 text-white overflow-hidden">
         <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
              alt="Background" 
              className="w-full h-full object-cover opacity-20" 
            />
         </div>
         <div className="relative z-10 max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
               <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">Everyday Health for<br/>Every Generation</h2>
               <p className="text-gray-400 text-lg leading-relaxed">
                 2040 MZ세대의 가치 소비와 바쁜 아침을 위한 간편함,<br/>
                 5060 중장년층의 혈당 관리와 가족을 위한 건강한 선택.<br/>
                 프룻디는 모든 세대를 아우르는 건강한 식문화를 제안합니다.
               </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
                  <div className="text-brand-gold text-4xl font-serif mb-2">2040</div>
                  <div className="text-sm font-bold tracking-widest uppercase opacity-60">MZ Generation</div>
               </div>
               <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
                  <div className="text-brand-gold text-4xl font-serif mb-2">5060</div>
                  <div className="text-sm font-bold tracking-widest uppercase opacity-60">Active Seniors</div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Home;