import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Box, Layers, Users, Zap, Terminal, Database } from 'lucide-react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48 px-4">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-nexora-primary/30 bg-nexora-primary/10 text-nexora-secondary text-xs font-semibold mb-8 uppercase tracking-wider"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-nexora-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-nexora-secondary"></span>
            </span>
            <span>Nexora Base v2.0 is now live</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8"
          >
            让 AI 模型，<br />
            <span className="gradient-text">自主进化。</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-nexora-muted max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            自研高性能 AI 基础模型，为企业和开发者提供可落地、可扩展、可持续学习的智能解决方案。
            通过 Nexora 标注平台，用户可参与数据训练，共建更强大的 AI 未来。
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Link 
              to="/developers" 
              className="px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-nexora-primary to-nexora-secondary rounded-full shadow-[0_0_30px_rgba(112,0,255,0.4)] hover:shadow-[0_0_50px_rgba(112,0,255,0.6)] hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              立即试用 API
            </Link>
            <Link 
              to="/datahub" 
              className="px-8 py-4 text-lg font-bold text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 transition-all duration-300 w-full sm:w-auto flex items-center justify-center space-x-2"
            >
              <span>登录数据标注平台</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-[#05051a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: Layers, 
                title: '自研大模型', 
                desc: '构建行业领先的多模态基础模型，性能稳定、成本可控、可在私有化环境部署。' 
              },
              { 
                icon: Box, 
                title: '面向场景的 AI', 
                desc: '覆盖 Web3、金融、内容生成、客服自动化、知识库搜索、图像处理等领域。' 
              },
              { 
                icon: Users, 
                title: '用户参与训练', 
                desc: '开放标注任务，用户在贡献数据的同时可获得奖励，推动模型持续进化。' 
              },
              { 
                icon: Zap, 
                title: '一站式 API', 
                desc: '统一接口、快速调用、按需计费，开发者零门槛接入。' 
              },
            ].map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="glass-card p-8 rounded-2xl relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-nexora-primary/10 rounded-full blur-[40px] -mr-16 -mt-16 transition-all group-hover:bg-nexora-secondary/20" />
                <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 border border-white/10 group-hover:border-nexora-secondary/50 transition-colors">
                  <item.icon className="w-6 h-6 text-nexora-secondary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-nexora-muted text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Highlight */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#05051a] to-[#030014]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">产品矩阵</h2>
            <p className="text-nexora-muted">构建未来的智能基础设施</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link to="/products" className="group col-span-1 md:col-span-2 relative h-80 rounded-3xl overflow-hidden border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-blue-900/80 group-hover:scale-105 transition-transform duration-700" />
              <img src="https://picsum.photos/1200/600?random=1" alt="Nexora Base" className="absolute inset-0 w-full h-full object-cover -z-10 mix-blend-overlay opacity-50" />
              <div className="absolute bottom-0 left-0 p-8">
                <div className="flex items-center space-x-3 mb-2">
                  <Terminal className="text-nexora-secondary w-6 h-6" />
                  <h3 className="text-3xl font-bold text-white">Nexora Base</h3>
                </div>
                <p className="text-gray-200 max-w-xl">通用语言大模型，拥有理解、生成、推理能力，支持 200k Token 长上下文。</p>
              </div>
              <ArrowRight className="absolute top-8 right-8 text-white w-8 h-8 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
            </Link>

            <Link to="/products" className="group relative h-80 rounded-3xl overflow-hidden border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 to-gray-800 group-hover:bg-gray-800 transition-colors" />
               <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:16px_16px]"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <div className="flex items-center space-x-3 mb-2">
                  <Database className="text-cyan-400 w-6 h-6" />
                  <h3 className="text-2xl font-bold text-white">Nexora DataHub</h3>
                </div>
                <p className="text-gray-400">数据管理 + 在线标注平台。</p>
              </div>
            </Link>

            <Link to="/products" className="group relative h-80 rounded-3xl overflow-hidden border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-bl from-indigo-900 to-black group-hover:bg-indigo-950 transition-colors" />
               <img src="https://picsum.photos/600/600?random=2" alt="AgentOS" className="absolute inset-0 w-full h-full object-cover -z-10 mix-blend-soft-light opacity-60" />
              <div className="absolute bottom-0 left-0 p-8">
                <div className="flex items-center space-x-3 mb-2">
                  <Box className="text-purple-400 w-6 h-6" />
                  <h3 className="text-2xl font-bold text-white">Nexora AgentOS</h3>
                </div>
                <p className="text-gray-400">面向企业的多智能体协作系统。</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Nexora */}
      <section className="py-24 border-t border-white/5 bg-[#020010]">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">为什么选择 Nexora</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
              {[
                "端到端自研",
                "可私有化部署",
                "高度可扩展、可微调",
                "数据安全与合规认证",
                "海量真实训练数据",
                "强大的用户标注生态"
              ].map((text, i) => (
                <div key={i} className="p-6 border border-white/5 rounded-xl hover:bg-white/5 transition-colors">
                  <div className="w-2 h-2 bg-nexora-secondary rounded-full mx-auto mb-4 box-shadow-[0_0_10px_#00d4ff]"></div>
                  <h4 className="text-lg font-medium text-white">{text}</h4>
                </div>
              ))}
            </div>
         </div>
      </section>
    </div>
  );
};

export default Home;