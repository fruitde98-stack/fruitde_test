import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { LayoutDashboard, Package, Settings, LogOut, Home } from 'lucide-react';
import { useStore } from '../context/StoreContext';

const AdminLayout: React.FC = () => {
  const location = useLocation();
  const { themeSettings } = useStore();

  const navItems = [
    { path: '/admin', icon: LayoutDashboard, label: '대시보드' },
    { path: '/admin/products', icon: Package, label: '상품 관리' },
  ];

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md flex flex-col">
        <div className="p-6 border-b">
          <h1 className="text-2xl font-serif font-bold text-gray-800">Admin</h1>
          <p className="text-xs text-gray-500 mt-1">FRUITDE Management</p>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                  isActive 
                    ? 'bg-brand-teal text-white' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
                style={isActive ? { backgroundColor: themeSettings.primaryColor } : {}}
              >
                <Icon className="w-5 h-5 mr-3" />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t">
          <Link 
            to="/" 
            className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <Home className="w-5 h-5 mr-3" />
            <span className="font-medium">스토어로 돌아가기</span>
          </Link>
          <button className="w-full flex items-center px-4 py-3 text-red-500 hover:bg-red-50 rounded-lg transition-colors mt-2">
            <LogOut className="w-5 h-5 mr-3" />
            <span className="font-medium">로그아웃</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;