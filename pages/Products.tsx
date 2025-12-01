import React from 'react';
import { Terminal, Eye, Cpu, Database, Check } from 'lucide-react';

const Products: React.FC = () => {
  const products = [
    {
      id: 'base',
      icon: Terminal,
      name: 'Nexora Base',
      subtitle: '通用语言大模型',
      desc: '一个经过多领域训练的强大基础模型，拥有理解、生成、推理能力。',
      highlights: [
        '多语言处理',
        '大规模上下文能力 (200k+)',
        '低延迟聊天与推理',
        '企业级安全与日志管理'
      ],
      useCases: '客服自动化、文档生成、智能问答、编程助手。',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'vision',
      icon: Eye,
      name: 'Nexora Vision',
      subtitle: '高精度视觉模型',
      desc: '图像识别、OCR、图像生成、目标检测，一个模型全覆盖。',
      highlights: [
        '实时识别与结构化输出',
        '文本提取 OCR',
        '多风格图像生成',
        '视频帧分析（可选）'
      ],
      useCases: '安防监控、医疗影像分析、内容审核。',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'agentos',
      icon: Cpu,
      name: 'Nexora AgentOS',
      subtitle: '智能体协作平台',
      desc: '一套基于多智能体（Multi-agent）的自动化执行系统。',
      highlights: [
        '自动规划任务',
        '工具调用优化',
        '与业务系统联动（CRM、交易系统等）',
        '企业级可控权限体系'
      ],
      useCases: '复杂工作流自动化、自主决策代理。',
      color: 'from-amber-500 to-orange-600'
    },
    {
      id: 'datahub',
      icon: Database,
      name: 'Nexora DataHub',
      subtitle: '数据与标注平台',
      desc: '一个支持用户参与训练的在线平台，连接人类智能与机器智能。',
      highlights: [
        '任务大厅（文本、图像、语音标注）',
        '积分奖励体系',
        '高质量审核机制',
        'API + 批量上传数据管理'
      ],
      useCases: 'RLHF 训练、数据清洗、模型微调数据集构建。',
      color: 'from-emerald-500 to-green-600'
    }
  ];

  return (
    <div className="pt-24 pb-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">全栈 AI 产品矩阵</h1>
          <p className="text-xl text-nexora-muted max-w-2xl mx-auto">
            从基础模型到应用编排，再到数据闭环。Nexora 提供完整的 AI 基础设施。
          </p>
        </div>

        <div className="space-y-32">
          {products.map((product, idx) => (
            <div key={product.id} className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
              
              {/* Visual Side */}
              <div className="w-full md:w-1/2">
                <div className={`relative rounded-3xl overflow-hidden aspect-video border border-white/10 group shadow-2xl shadow-${product.color.split(' ')[0].replace('from-', '')}/20`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <product.icon className={`w-24 h-24 text-white opacity-80`} strokeWidth={1} />
                  </div>
                  
                  {/* Pseudo UI Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-black/40 backdrop-blur-md border-t border-white/10">
                    <div className="flex space-x-2 mb-2">
                       <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                       <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                       <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    </div>
                    <div className="h-2 w-3/4 bg-white/20 rounded mb-2"></div>
                    <div className="h-2 w-1/2 bg-white/20 rounded"></div>
                  </div>
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full md:w-1/2">
                <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-sm font-medium mb-4`}>
                   <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${product.color}`}></span>
                   <span>{product.name}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">{product.subtitle}</h2>
                <p className="text-nexora-muted text-lg mb-8 leading-relaxed">
                  {product.desc}
                </p>

                <div className="bg-white/5 rounded-2xl p-6 border border-white/5 mb-8">
                  <h3 className="font-semibold mb-4 text-white">核心功能亮点</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {product.highlights.map((h, i) => (
                      <li key={i} className="flex items-start text-sm text-slate-300">
                        <Check className="w-4 h-4 text-nexora-secondary mr-2 mt-1 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-sm">
                  <span className="text-nexora-muted">适用场景：</span>
                  <span className="text-slate-200 ml-2">{product.useCases}</span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;