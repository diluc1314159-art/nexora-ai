import React from 'react';

const Whitepaper: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto bg-[#0a0a1f] border border-white/5 p-8 md:p-16 rounded-xl shadow-2xl">
        <div className="text-center mb-16 border-b border-white/5 pb-8">
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">Nexora AI 技术白皮书</h1>
          <p className="text-nexora-secondary uppercase tracking-widest text-sm">Technical Whitepaper · Abstract v1.0</p>
        </div>

        <div className="space-y-12 text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. 引言</h2>
            <p>
              Nexora AI 致力于构建全球领先的自研 AI 基础设施，通过开放、协作式训练体系推动智能系统的持续进化。
              本文档概述了 Nexora 的核心架构设计、数据处理流程以及安全合规体系。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. 模型架构</h2>
            <div className="pl-4 border-l-2 border-nexora-primary/50 space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">2.1 Nexora Base 架构</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>基于 Transformer 改进结构，优化注意力机制。</li>
                  <li>支持 <strong>200k Token</strong> 长上下文窗口。</li>
                  <li>跨语言训练：深度优化英文、中文、日文等多语言语料。</li>
                  <li>多模态扩展接口：支持通过 Adapter 模块快速接入视觉、听觉模态。</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">2.2 Nexora Vision 架构</h3>
                <p>采用 CNN + Vision Transformer 混合结构，兼顾局部特征提取与全局语义理解，配合自研高效推理引擎，实现毫秒级响应。</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. 数据与标注体系</h2>
            <p className="mb-4">数据是 AI 的燃料。Nexora 建立了独有的 DataHub 生态。</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 p-4 rounded-lg">
                <h4 className="font-bold text-white mb-2">3.1 数据来源</h4>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Nexora DataHub 用户标注</li>
                  <li>业务合作方授权数据</li>
                  <li>多领域真实业务场景合成数据 (Synthetic Data)</li>
                </ul>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <h4 className="font-bold text-white mb-2">3.2 审核机制</h4>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>分层式任务难度分发</li>
                  <li>智能预审 + 专家人工复检 (Human-in-the-loop)</li>
                  <li>基于贡献度的通证化奖励体系</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. 安全与合规</h2>
            <p>
              我们严格遵守 GDPR 与 CCPA 数据隐私法规。所有用户数据采用 AES-256 加密存储，模型训练过程保留完整的审计日志 (Audit Log)。
              支持私有化部署方案，确保企业数据不出域。
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center">
           <button className="px-8 py-3 bg-white text-black font-bold rounded hover:bg-gray-200 transition-colors">
             下载完整 PDF (4.5MB)
           </button>
        </div>
      </div>
    </div>
  );
};

export default Whitepaper;