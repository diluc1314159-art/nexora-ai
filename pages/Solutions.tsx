import React from 'react';
import { MessageSquare, PenTool, BarChart3, ShoppingBag, Link as LinkIcon } from 'lucide-react';

const Solutions: React.FC = () => {
  const solutions = [
    {
      title: "企业智能客服",
      icon: MessageSquare,
      desc: "自动回复、意图识别、知识库检索、情绪判断。降低人工成本，提升响应速度。",
      tags: ["NLP", "Intent Recognition", "Sentiment Analysis"]
    },
    {
      title: "内容行业 (Media)",
      icon: PenTool,
      desc: "文章生成、视频脚本写作、图片生成。为创作者提供无限灵感。",
      tags: ["Generative AI", "Copywriting", "Image Gen"]
    },
    {
      title: "金融行业 (Finance)",
      icon: BarChart3,
      desc: "智能报告生成、风险分析助手、自动化数据处理。精准洞察市场。",
      tags: ["Data Analysis", "Risk Mgmt", "Reporting"]
    },
    {
      title: "电商行业 (E-commerce)",
      icon: ShoppingBag,
      desc: "商品标题、详情页自动写作；评论分析与推荐系统。提升转化率。",
      tags: ["Recommendation", "SEO", "Review Analysis"]
    },
    {
      title: "Web3 区块链",
      icon: LinkIcon,
      desc: "链上数据解析、合约审计辅助、交易数据分析。连接 AI 与 Crypto。",
      tags: ["Smart Contracts", "On-chain Data", "Audit"]
    }
  ];

  return (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">行业解决方案</h1>
          <p className="text-nexora-muted">深度赋能各行各业，释放 AI 潜能</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((sol, index) => (
            <div key={index} className="glass-card p-8 rounded-2xl hover:bg-white/10 transition-all group">
              <div className="w-14 h-14 bg-gradient-to-br from-nexora-primary/20 to-nexora-secondary/20 rounded-xl flex items-center justify-center mb-6 text-nexora-secondary group-hover:scale-110 transition-transform">
                <sol.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{sol.title}</h3>
              <p className="text-nexora-muted mb-6 h-20">{sol.desc}</p>
              <div className="flex flex-wrap gap-2">
                {sol.tags.map(tag => (
                  <span key={tag} className="text-xs px-2 py-1 rounded bg-white/5 border border-white/5 text-slate-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;