import React from 'react';
import { useStore } from '../context/StoreContext';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Users, DollarSign, ShoppingBag } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const { themeSettings, updateTheme } = useStore();

  const data = [
    { name: '월', sales: 4000 },
    { name: '화', sales: 3000 },
    { name: '수', sales: 2000 },
    { name: '목', sales: 2780 },
    { name: '금', sales: 1890 },
    { name: '토', sales: 2390 },
    { name: '일', sales: 3490 },
  ];

  const visitorData = [
    { name: '월', visitors: 240 },
    { name: '화', visitors: 139 },
    { name: '수', visitors: 980 },
    { name: '목', visitors: 390 },
    { name: '금', visitors: 480 },
    { name: '토', visitors: 380 },
    { name: '일', visitors: 430 },
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-800">대시보드</h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center">
          <div className="p-4 bg-blue-50 rounded-full text-blue-600 mr-4">
            <DollarSign className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-gray-500">총 매출 (이번 달)</p>
            <p className="text-2xl font-bold text-gray-900">₩12,450,000</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center">
          <div className="p-4 bg-green-50 rounded-full text-green-600 mr-4">
            <ShoppingBag className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-gray-500">신규 주문</p>
            <p className="text-2xl font-bold text-gray-900">145건</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center">
          <div className="p-4 bg-purple-50 rounded-full text-purple-600 mr-4">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-gray-500">신규 회원</p>
            <p className="text-2xl font-bold text-gray-900">32명</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Sales Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold mb-4 text-gray-800">주간 매출 현황</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip />
                <Bar dataKey="sales" fill={themeSettings.primaryColor} radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Theme Settings Simulation */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold mb-4 text-gray-800">테마 시뮬레이션</h3>
          <p className="text-sm text-gray-500 mb-6">
            웹사이트의 메인 컬러와 폰트 크기를 실시간으로 조정하여 미리볼 수 있습니다. 
            변경사항은 즉시 반영됩니다.
          </p>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">메인 브랜드 컬러</label>
              <div className="flex space-x-3">
                {['#004D40', '#1B5E20', '#1e3a8a', '#be123c'].map(color => (
                  <button
                    key={color}
                    onClick={() => updateTheme({ primaryColor: color })}
                    className={`w-10 h-10 rounded-full border-2 transition-transform hover:scale-110 ${themeSettings.primaryColor === color ? 'border-gray-900 scale-110 ring-2 ring-offset-2 ring-gray-300' : 'border-transparent'}`}
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">폰트 크기 비율 ({themeSettings.fontScale}x)</label>
              <input 
                type="range" 
                min="0.8" 
                max="1.2" 
                step="0.1"
                value={themeSettings.fontScale}
                onChange={(e) => updateTheme({ fontScale: parseFloat(e.target.value) })}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-teal"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>작게</span>
                <span>보통</span>
                <span>크게</span>
              </div>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-xs text-gray-400 mb-2">미리보기</p>
              <button 
                className="px-4 py-2 rounded-md text-white font-medium text-sm shadow-sm"
                style={{ backgroundColor: themeSettings.primaryColor }}
              >
                버튼 스타일 확인
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;