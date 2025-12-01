import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Cpu, Github, Twitter, Linkedin, ChevronRight } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: '产品', path: '/products' },
    { name: '解决方案', path: '/solutions' },
    { name: 'API 文档', path: '/developers' },
    { name: '白皮书', path: '/whitepaper' },
    { name: '关于我们', path: '/about' },
    { name: '招聘', path: '/careers' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col font-sans text-nexora-text">
      <ParticleBackground />
      
      {/* Background Gradients */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-nexora-primary/20 rounded-full blur-[120px] -z-20 animate-blob mix-blend-screen" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-nexora-secondary/20 rounded-full blur-[120px] -z-20 animate-blob animation-delay-2000 mix-blend-screen" />

      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 glass-nav transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-nexora-secondary to-nexora-primary flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(0,212,255,0.5)] transition-all">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">Nexora<span className="text-nexora-secondary">AI</span></span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-nexora-secondary ${
                    isActive(link.path) ? 'text-nexora-secondary' : 'text-slate-300'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/datahub"
                className="px-4 py-2 text-sm font-medium text-white bg-white/10 hover:bg-white/20 border border-white/10 rounded-full transition-all"
              >
                标注平台
              </Link>
              <button className="px-5 py-2 text-sm font-bold text-white bg-gradient-to-r from-nexora-primary to-nexora-secondary rounded-full hover:shadow-[0_0_20px_rgba(112,0,255,0.5)] transition-all transform hover:-translate-y-0.5">
                试用 API
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-300 hover:text-white"
              >
                {isMobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass-nav border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/datahub"
                className="block px-3 py-2 text-base font-medium text-nexora-secondary hover:bg-white/5 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                DataHub 标注平台
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-[#020010] pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2 lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Cpu className="w-6 h-6 text-nexora-secondary" />
                <span className="text-xl font-bold text-white">Nexora AI</span>
              </div>
              <p className="text-nexora-muted text-sm max-w-xs mb-6">
                构建全球领先的自研 AI 基础设施，通过开放、协作式训练体系推动智能系统的持续进化。
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter size={20} /></a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors"><Github size={20} /></a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">产品</h3>
              <ul className="space-y-2 text-sm text-nexora-muted">
                <li><Link to="/products" className="hover:text-nexora-secondary transition-colors">Nexora Base</Link></li>
                <li><Link to="/products" className="hover:text-nexora-secondary transition-colors">Nexora Vision</Link></li>
                <li><Link to="/products" className="hover:text-nexora-secondary transition-colors">AgentOS</Link></li>
                <li><Link to="/datahub" className="hover:text-nexora-secondary transition-colors">DataHub</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">开发者</h3>
              <ul className="space-y-2 text-sm text-nexora-muted">
                <li><Link to="/developers" className="hover:text-nexora-secondary transition-colors">API 文档</Link></li>
                <li><Link to="/whitepaper" className="hover:text-nexora-secondary transition-colors">技术白皮书</Link></li>
                <li><a href="#" className="hover:text-nexora-secondary transition-colors">Status</a></li>
                <li><a href="#" className="hover:text-nexora-secondary transition-colors">GitHub</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">公司</h3>
              <ul className="space-y-2 text-sm text-nexora-muted">
                <li><Link to="/about" className="hover:text-nexora-secondary transition-colors">关于我们</Link></li>
                <li><Link to="/careers" className="hover:text-nexora-secondary transition-colors">招聘</Link></li>
                <li><a href="#" className="hover:text-nexora-secondary transition-colors">隐私政策</a></li>
                <li><a href="#" className="hover:text-nexora-secondary transition-colors">服务条款</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
            <p>&copy; 2024 Nexora AI Inc. All rights reserved.</p>
            <div className="flex items-center space-x-2 mt-4 md:mt-0">
               <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
               <span>All Systems Operational</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;