import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const Developers: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const CodeBlock: React.FC<{ title: string; code: string; language?: string; id: string }> = ({ title, code, language = 'json', id }) => (
    <div className="rounded-xl overflow-hidden bg-[#0d1117] border border-gray-800 mb-8 font-mono text-sm">
      <div className="flex items-center justify-between px-4 py-2 bg-[#161b22] border-b border-gray-800">
        <span className="text-gray-400 text-xs">{title}</span>
        <button 
          onClick={() => copyToClipboard(code, id)}
          className="text-gray-500 hover:text-white transition-colors"
        >
          {copied === id ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
        </button>
      </div>
      <div className="p-4 overflow-x-auto text-gray-300">
        <pre>
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );

  return (
    <div className="pt-24 pb-20 px-4 min-h-screen">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Sidebar Nav */}
        <aside className="w-full md:w-64 flex-shrink-0 hidden md:block">
          <div className="sticky top-24">
            <h3 className="font-bold text-white mb-4">Documentation</h3>
            <ul className="space-y-3 text-sm text-nexora-muted border-l border-white/10">
              <li className="pl-4 border-l border-nexora-secondary text-nexora-secondary">入门 (Getting Started)</li>
              <li className="pl-4 hover:text-white cursor-pointer hover:border-white/20">认证 (Authentication)</li>
              <li className="pl-4 hover:text-white cursor-pointer hover:border-white/20">Chat Completions</li>
              <li className="pl-4 hover:text-white cursor-pointer hover:border-white/20">Vision Analysis</li>
              <li className="pl-4 hover:text-white cursor-pointer hover:border-white/20">Labeling Tasks</li>
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-grow">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">API 文档</h1>
            <p className="text-nexora-muted text-lg">
              欢迎使用 Nexora Cloud APIs。通过几个简单请求，即可调用我们自研的 AI 模型。
            </p>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="w-8 h-8 rounded bg-white/10 flex items-center justify-center text-sm mr-3">1</span>
              入门
            </h2>
            <p className="text-gray-400 mb-4">
              Base URL: <code className="bg-white/10 px-2 py-1 rounded text-nexora-secondary">https://api.nexora.ai/v1</code>
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="w-8 h-8 rounded bg-white/10 flex items-center justify-center text-sm mr-3">2</span>
              认证方式
            </h2>
            <p className="text-gray-400 mb-4">使用 API Key 在 HTTP Header 中进行认证。</p>
            <CodeBlock 
              id="auth"
              title="Authorization Header"
              code="Authorization: Bearer <API_KEY>"
              language="bash"
            />
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">文本生成 (Text Generation)</h2>
            <p className="text-gray-400 mb-4">
              Endpoint: <code className="text-nexora-secondary">POST /v1/chat/completions</code>
            </p>
            
            <CodeBlock 
              id="req-chat"
              title="Request Example"
              code={`{
  "model": "nexora-base",
  "messages": [
    {"role": "user", "content": "帮我总结这段文字"}
  ]
}`}
            />
            
            <CodeBlock 
              id="res-chat"
              title="Response Example"
              code={`{
  "id": "chatcmpl-123",
  "choices": [
    {
      "message": {
        "role": "assistant", 
        "content": "这是内容总结..."
      }
    }
  ]
}`}
            />
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">图像识别 (Vision)</h2>
            <p className="text-gray-400 mb-4">
              Endpoint: <code className="text-nexora-secondary">POST /v1/vision/analyze</code>
            </p>
            <CodeBlock 
              id="req-vision"
              title="Request Example"
              code={`{
  "image_url": "https://example.com/image.png",
  "features": ["ocr", "description"]
}`}
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Developers;