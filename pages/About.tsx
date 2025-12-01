import React from 'react';
import { Briefcase, Target, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* About Section */}
        <section className="mb-32 text-center">
          <h1 className="text-5xl font-bold mb-8">关于 Nexora</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left max-w-5xl mx-auto">
             <div>
                <h2 className="text-2xl font-bold mb-4 flex items-center text-nexora-secondary">
                  <Target className="mr-2" /> 使命
                </h2>
                <p className="text-lg text-slate-300">让 AI 以开放、可持续的方式不断进化。</p>
             </div>
             <div>
                <h2 className="text-2xl font-bold mb-4 flex items-center text-nexora-primary">
                  <Globe className="mr-2" /> 愿景
                </h2>
                <p className="text-lg text-slate-300">成为全球领先的自研 AI 基础模型提供商。</p>
             </div>
          </div>
          <div className="mt-12 max-w-3xl mx-auto text-nexora-muted">
            <p className="mb-4">
              我们是一群来自人工智能、云计算、产品设计、Web3 和安全工程领域的工程师。
            </p>
            <p>
              我们相信，在未来 AI 不仅是工具，更是生态系统。Nexora 致力于打破数据孤岛，让每一个人都能参与到 AI 进化的进程中，并从中受益。
            </p>
          </div>
        </section>

        {/* Careers Section */}
        <section className="relative rounded-3xl bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-white/5 p-8 md:p-16">
          <div className="text-center mb-12">
            <div className="inline-block p-3 rounded-full bg-white/5 mb-4">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold mb-4">加入我们</h2>
            <p className="text-nexora-muted">一起构建下一代智能未来。远程优先。</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "大模型训练工程师",
              "NLP 研究员",
              "全栈开发工程师",
              "DataOps 工程师",
              "产品经理 (AI)",
              "标注质量管理专员"
            ].map((job, i) => (
              <div key={i} className="flex items-center justify-between p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group cursor-pointer border border-white/5 hover:border-nexora-secondary/30">
                <span className="font-medium text-lg">{job}</span>
                <span className="text-nexora-secondary opacity-0 group-hover:opacity-100 transition-opacity">Apply &rarr;</span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-slate-400">
              我们提供：远程优先工作制 · 股票期权 · 顶级训练硬件资源
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;