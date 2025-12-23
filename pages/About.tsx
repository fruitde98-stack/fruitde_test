import React from 'react';
import { Target, Users, Heart, Award, Sparkles, Globe } from 'lucide-react';
import { BEANIT_LOGO_URL } from '../constants';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="relative py-40 bg-brand-darkTeal overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1599525492471-a079737119df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
            alt="Fruit Garden" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-6 animate-fade-in-up">The Story of FruitDe</h1>
          <p className="text-xl md:text-2xl text-brand-lightGold font-serif italic max-w-3xl mx-auto">
            "맛으로 전하는 가치, 마음으로 전하는 나눔"
          </p>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="space-y-8">
            <span className="px-4 py-1 border border-brand-teal text-brand-teal rounded-full text-xs font-bold tracking-widest uppercase">Our Mission</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
              지속가능한 먹거리와<br/>사회적 가치를 만듭니다
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              프룻디는 건강 문제로 고민하고 믿을 수 있는 간식을 원하는 모든 고객들에게 
              <strong>국산 콩과 신선한 과일</strong>을 활용한 안심 먹거리를 제공합니다. 
              우리는 단순한 디저트 브랜드를 넘어, 건강한 식생활과 지역 상생을 실천하는 
              글로벌 식품 브랜드로 성장하는 것이 목표입니다.
            </p>
            <div className="flex gap-8 border-t border-gray-100 pt-8">
               <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-brand-teal/10 rounded-full flex items-center justify-center text-brand-teal">
                    <Globe className="w-6 h-6" />
                  </div>
                  <span className="font-bold">Sustainability</span>
               </div>
               <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-brand-gold/10 rounded-full flex items-center justify-center text-brand-gold">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <span className="font-bold">Social Value</span>
               </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="Fresh Fruits" 
              className="rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-10 -right-10 bg-brand-gold p-10 rounded-3xl hidden md:block">
              <Award className="w-12 h-12 text-white" />
            </div>
          </div>
        </div>

        {/* Needs, Benefits, Vision */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="group bg-[#Fdfbf7] p-10 rounded-3xl hover:bg-brand-teal transition-all duration-500">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-brand-gold transition-colors">
              <Heart className="w-8 h-8 text-brand-teal group-hover:text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-white">Needs</h3>
            <p className="text-gray-600 group-hover:text-white/80 leading-relaxed">
              "믿고 먹을 수 있는 건강한 간식은 없을까?" 
              현대인의 건강 고민과 깨끗한 먹거리에 대한 갈증에서 출발했습니다.
            </p>
          </div>
          <div className="group bg-[#Fdfbf7] p-10 rounded-3xl hover:bg-brand-teal transition-all duration-500">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-brand-gold transition-colors">
              <Target className="w-8 h-8 text-brand-teal group-hover:text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-white">Benefits</h3>
            <p className="text-gray-600 group-hover:text-white/80 leading-relaxed">
              국산 콩(비닛)과 신선한 과일을 활용해 안심하고 즐길 수 있는 고단백/저당 디저트 경험을 제공합니다.
            </p>
          </div>
          <div className="group bg-[#Fdfbf7] p-10 rounded-3xl hover:bg-brand-teal transition-all duration-500">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-brand-gold transition-colors">
              <Users className="w-8 h-8 text-brand-teal group-hover:text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-white">Vision</h3>
            <p className="text-gray-600 group-hover:text-white/80 leading-relaxed">
              건강한 식문화를 대표하며, 세대 간 공존과 지역 상생을 실천하는 글로벌 푸드 테크 브랜드로 성장합니다.
            </p>
          </div>
        </div>
      </div>

      {/* Audience Section */}
      <div className="bg-gray-50 py-32">
        <div className="max-w-7xl mx-auto px-4">
           <div className="text-center mb-20">
             <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">Who We Serve</h2>
             <p className="text-gray-500 mt-4 text-lg">프룻디가 제안하는 세대별 맞춤 가치</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             <div className="bg-white p-12 rounded-3xl shadow-xl border border-gray-100 flex flex-col md:flex-row gap-8 items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-brand-teal/20">
                  <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" alt="MZ" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-brand-teal mb-4">2040 MZ세대</h4>
                  <p className="text-gray-600 leading-relaxed">
                    바쁜 아침 간편하지만 건강한 한 끼를 찾는 당신.<br/>
                    지속가능성과 가치 소비를 중요하게 생각하는 세대를 위해 
                    모던하고 감각적인 건강식을 제안합니다.
                  </p>
                </div>
             </div>
             <div className="bg-white p-12 rounded-3xl shadow-xl border border-gray-100 flex flex-col md:flex-row gap-8 items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-brand-gold/20">
                  <img src="https://images.unsplash.com/photo-1544168190-79c17527004f?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" alt="Seniors" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-brand-gold mb-4">5060 시니어 세대</h4>
                  <p className="text-gray-600 leading-relaxed">
                    혈당 관리와 영양 밸런스가 중요한 부모님 세대.<br/>
                    가족을 위해 고른 최고의 원재료, 믿고 선물할 수 있는 
                    정직한 맛을 약속합니다.
                  </p>
                </div>
             </div>
           </div>
        </div>
      </div>

      {/* Innovation Section (Beanit) */}
      <div className="py-32">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <img src={BEANIT_LOGO_URL} alt="Beanit Logo" className="w-64 mx-auto mb-12" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 italic">"The Miracle of Beans"</h2>
            <p className="text-gray-600 text-xl leading-relaxed">
              비닛(Beanit)은 프룻디의 혁신적인 서브 브랜드로,<br/>
              <strong>BEAN + IT (콩으로 만든 것, 콩으로 대체하다)</strong>라는 뜻을 가집니다.<br/>
              탄수화물 함량이 높은 타피오카 펄을 대신하여 국산 대두로 만든 
              단백질 콩펄을 통해 맛과 건강의 완벽한 밸런스를 구현했습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;