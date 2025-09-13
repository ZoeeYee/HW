import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center py-8 shadow-lg">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            改善偽裝影像視覺品質的研究與實作
          </h1>
          <p className="text-xl md:text-2xl mb-2">國立虎尾科技大學資訊工程系</p>
          <p className="text-lg md:text-xl">專題成員：黃柔語</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto py-8 px-4">
        {/* 摘要 Section */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-blue-600 border-b-2 border-blue-600 pb-4 mb-6">
            摘要
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              隨著數位時代的來臨，信息安全變得越來越重要。資料藏匿技術，能在不引起注意的情況下將機密訊息嵌入到圖像中，這項技術在數位取證、版權保護和隱私保護等領域有著廣泛的應用。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              本專題主要研究如何改善偽裝影像的視覺品質，透過先進的演算法和技術，在保持隱藏訊息完整性的同時，提升載體圖像的視覺效果，使其更接近原始圖像的品質。
            </p>
            <p className="text-gray-700 leading-relaxed">
              我們採用LSB（Least Significant Bit）技術作為基礎，並結合多種優化策略，包括自適應嵌入、視覺品質評估和錯誤修正機制，以達到更好的隱藏效果和視覺品質。
            </p>
          </div>
        </section>

        {/* 功能 Section */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-blue-600 border-b-2 border-blue-600 pb-4 mb-6">
            主要功能
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">基本功能</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                  <span className="text-gray-700">選擇圖片並檢查是否成功上傳</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                  <span className="text-gray-700">輸入要加密的文字訊息</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                  <span className="text-gray-700">將文字轉換為二進制並嵌入圖像</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</span>
                  <span className="text-gray-700">顯示並保存加密後的圖片</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">技術特色</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">✓</span>
                  <span className="text-gray-700">LSB隱寫技術實現</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">✓</span>
                  <span className="text-gray-700">視覺品質優化演算法</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">✓</span>
                  <span className="text-gray-700">自適應嵌入策略</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">✓</span>
                  <span className="text-gray-700">多種圖片格式支援</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 技術架構 Section */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-blue-600 border-b-2 border-blue-600 pb-4 mb-6">
            技術架構
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">前端介面</h3>
              <p className="text-gray-600 text-sm">React + Tailwind CSS</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">隱寫演算法</h3>
              <p className="text-gray-600 text-sm">LSB + 優化策略</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">部署平台</h3>
              <p className="text-gray-600 text-sm">Vercel + GitHub</p>
            </div>
          </div>
        </section>

        {/* 成果展示 Section */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-blue-600 border-b-2 border-blue-600 pb-4 mb-6">
            預期成果
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">技術指標</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 隱藏容量：每像素可嵌入1-3位元</li>
                <li>• 視覺品質：PSNR > 40dB</li>
                <li>• 提取準確率：> 99.9%</li>
                <li>• 支援格式：PNG, BMP, TIFF</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">應用場景</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 數位版權保護</li>
                <li>• 機密文件傳輸</li>
                <li>• 數位浮水印</li>
                <li>• 隱私通訊</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6 mt-12">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-lg mb-2">國立虎尾科技大學資訊工程系</p>
          <p className="text-gray-300">專題：改善偽裝影像視覺品質的研究與實作</p>
          <p className="text-gray-400 text-sm mt-2">© 2024 111434024黃柔語</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
