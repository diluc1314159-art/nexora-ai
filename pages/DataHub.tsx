import React from 'react';
import { CheckCircle, Clock, DollarSign, Image as ImageIcon, FileText, Mic } from 'lucide-react';

const DataHub: React.FC = () => {
  return (
    <div className="pt-24 pb-20 px-4 min-h-screen bg-[#020010]">
      <div className="max-w-7xl mx-auto">
        
        {/* Dashboard Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/10 pb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Nexora DataHub</h1>
            <p className="text-nexora-muted">任务大厅 / Task Lobby</p>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <div className="text-right">
              <p className="text-xs text-slate-400">本周收益</p>
              <p className="text-xl font-bold text-green-400 font-mono">2,450 pts</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-slate-400">准确率</p>
              <p className="text-xl font-bold text-nexora-secondary font-mono">98.5%</p>
            </div>
          </div>
        </div>

        {/* Task Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#0f1225] border border-white/10 p-6 rounded-xl relative overflow-hidden group hover:border-nexora-primary/50 transition-colors cursor-pointer">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20">
              <FileText size={80} />
            </div>
            <h3 className="text-xl font-bold mb-2">文本理解 (RLHF)</h3>
            <p className="text-sm text-slate-400 mb-4">对模型生成的文本进行排序和优化。</p>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-xs bg-blue-900/30 text-blue-300 px-2 py-1 rounded">高优先级</span>
              <span className="font-mono text-green-400">50 pts/题</span>
            </div>
          </div>

          <div className="bg-[#0f1225] border border-white/10 p-6 rounded-xl relative overflow-hidden group hover:border-purple-500/50 transition-colors cursor-pointer">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20">
              <ImageIcon size={80} />
            </div>
            <h3 className="text-xl font-bold mb-2">图像描述 (Caption)</h3>
            <p className="text-sm text-slate-400 mb-4">为复杂的场景图片撰写详细的英文描述。</p>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-xs bg-purple-900/30 text-purple-300 px-2 py-1 rounded">Vision 模型</span>
              <span className="font-mono text-green-400">80 pts/题</span>
            </div>
          </div>

          <div className="bg-[#0f1225] border border-white/10 p-6 rounded-xl relative overflow-hidden group hover:border-orange-500/50 transition-colors cursor-pointer">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20">
              <Mic size={80} />
            </div>
            <h3 className="text-xl font-bold mb-2">语音转录校验</h3>
            <p className="text-sm text-slate-400 mb-4">校对自动生成的语音转文字内容。</p>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-xs bg-orange-900/30 text-orange-300 px-2 py-1 rounded">Audio 2.0</span>
              <span className="font-mono text-green-400">30 pts/题</span>
            </div>
          </div>
        </div>

        {/* Gamification Section */}
        <div className="bg-gradient-to-r from-[#1a1c35] to-[#0f1225] rounded-2xl p-8 border border-white/5 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">我的贡献等级</h2>
            <p className="text-slate-400">当前等级: <span className="text-white font-bold">Lvl 3 - 资深标注员</span></p>
            <div className="w-full md:w-96 h-2 bg-gray-700 rounded-full mt-4 overflow-hidden">
               <div className="h-full bg-gradient-to-r from-nexora-secondary to-nexora-primary w-[75%]"></div>
            </div>
            <p className="text-xs text-slate-500 mt-2">距离 Lvl 4 还需 1,200 pts</p>
          </div>

          <div className="grid grid-cols-3 gap-8 text-center">
             <div>
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-2 text-yellow-500">
                  <DollarSign />
                </div>
                <div className="text-xs text-slate-400">可兑换奖励</div>
             </div>
             <div>
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-2 text-blue-500">
                  <CheckCircle />
                </div>
                <div className="text-xs text-slate-400">合格率 >95%</div>
             </div>
             <div>
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-2 text-pink-500">
                  <Clock />
                </div>
                <div className="text-xs text-slate-400">连续签到 7天</div>
             </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
             <button className="px-8 py-3 bg-nexora-primary hover:bg-purple-700 text-white font-bold rounded-full transition-colors">
               开始今日任务
             </button>
        </div>

      </div>
    </div>
  );
};

export default DataHub;