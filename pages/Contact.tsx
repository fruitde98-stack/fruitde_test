import React, { useState } from 'react';
import { Mail, Phone, MapPin, Loader2, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://formspree.io/f/mjknzqaq", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSuccess(true);
        // Optional: Reset form if you want to allow resubmission without refresh
        // (e.target as HTMLFormElement).reset(); 
      } else {
        const data = await response.json();
        if (Object.prototype.hasOwnProperty.call(data, 'errors')) {
          setErrorMessage("입력하신 내용을 다시 확인해주세요.");
        } else {
          setErrorMessage("전송 중 문제가 발생했습니다. 잠시 후 다시 시도해주세요.");
        }
      }
    } catch (error) {
      setErrorMessage("네트워크 연결을 확인해주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-gray-500">궁금하신 점이 있으신가요? 언제든 문의해주세요.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-8 text-brand-teal">고객 센터</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-brand-gold mt-1 mr-4" />
                <div>
                  <h3 className="font-bold text-gray-900">전화번호</h3>
                  <p className="text-gray-600">02-1234-5678</p>
                  <p className="text-sm text-gray-400 mt-1">평일 09:00 - 18:00 (주말/공휴일 휴무)</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-brand-gold mt-1 mr-4" />
                <div>
                  <h3 className="font-bold text-gray-900">이메일</h3>
                  <p className="text-gray-600">hello@fruitde.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-brand-gold mt-1 mr-4" />
                <div>
                  <h3 className="font-bold text-gray-900">오시는 길</h3>
                  <p className="text-gray-600">서울특별시 강남구 테헤란로 123, 프룻디 빌딩 1층</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
             {isSuccess ? (
               <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10 p-8 text-center animate-fade-in-up">
                 <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                   <CheckCircle className="w-8 h-8 text-brand-green" />
                 </div>
                 <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">문의가 접수되었습니다</h3>
                 <p className="text-gray-500 mb-6">
                   보내주신 소중한 의견을 확인 후,<br/>
                   빠른 시일 내에 답변 드리겠습니다.
                 </p>
                 <button 
                   onClick={() => setIsSuccess(false)}
                   className="text-brand-teal font-bold hover:underline"
                 >
                   추가 문의하기
                 </button>
               </div>
             ) : (
               <form onSubmit={handleSubmit} className="space-y-6">
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">이름</label>
                   <input 
                    name="name"
                    required
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none transition-shadow" 
                    placeholder="홍길동" 
                   />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">이메일</label>
                   <input 
                    name="email"
                    required
                    type="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none transition-shadow" 
                    placeholder="example@email.com" 
                   />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">문의 내용</label>
                   <textarea 
                    name="message"
                    required
                    rows={4} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none transition-shadow resize-none" 
                    placeholder="문의하실 내용을 입력해주세요."
                   ></textarea>
                 </div>
                 
                 {errorMessage && (
                   <div className="text-red-500 text-sm font-medium">
                     {errorMessage}
                   </div>
                 )}

                 <button 
                   type="submit" 
                   disabled={isSubmitting}
                   className="w-full bg-brand-teal text-white font-bold py-3 rounded-lg hover:bg-brand-green transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                 >
                   {isSubmitting ? (
                     <>
                       <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                       전송 중...
                     </>
                   ) : (
                     '보내기'
                   )}
                 </button>
               </form>
             )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;