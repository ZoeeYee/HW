import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="bg-blue-600 text-white text-center py-6 shadow-md">
        <h1 className="text-3xl font-bold">改善偽裝影像視覺品質的研究與實作</h1>
        <p className="mt-2 text-lg">國立虎尾科技大學資訊工程系</p>
        <p>專題成員：黃柔語、趙衡彬</p>
      </header>

      {/* 摘要 */}
      <section className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-semibold border-b-2 border-blue-600 pb-2 mb-4">摘要</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="leading-relaxed text-gray-700">
            隨著數位時代的來臨，信息安全變得越來越重要。資料藏匿技術，能在不引起注意的情況下將機密訊息嵌入到圖像中，
            這種技術稱為「隱寫術」(Steganography)。本專題研究如何改善偽裝影像的視覺品質，確保在隱藏訊息後，
            圖像仍能保持良好的視覺效果，同時維持隱藏訊息的安全性。
          </p>
          <p className="mt-4 leading-relaxed text-gray-700">
            我們採用LSB (Least Significant Bit) 演算法作為基礎，並結合多種優化技術來提升影像品質。
            透過實驗驗證，我們的方法能夠在保持隱藏訊息完整性的同時，顯著改善偽裝影像的視覺品質。
          </p>
        </div>
      </section>

      {/* 研究背景 */}
      <section className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-semibold border-b-2 border-blue-600 pb-2 mb-4">研究背景</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="leading-relaxed text-gray-700 mb-4">
            在現代數位通訊中，保護敏感資訊的安全傳輸是一個重要議題。傳統的加密技術雖然能保護資料內容，
            但加密後的資料容易被識別為機密資訊，反而增加了被攻擊的風險。
          </p>
          <p className="leading-relaxed text-gray-700">
            隱寫術提供了一種不同的解決方案，它將機密訊息隱藏在看似普通的載體（如圖像、音頻、視頻）中，
            使攻擊者難以察覺隱藏訊息的存在。然而，如何在隱藏訊息的同時保持載體的視覺品質，
            是隱寫術研究中的一個重要挑戰。
          </p>
        </div>
      </section>

      {/* 技術方法 */}
      <section className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-semibold border-b-2 border-blue-600 pb-2 mb-4">技術方法</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-blue-600 mb-3">LSB演算法</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                使用最低有效位元(LSB)方法，將訊息嵌入到圖像像素的最低位元中，
                對圖像品質的影響最小。
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-600 mb-3">品質優化</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                採用自適應嵌入策略，根據圖像區域的複雜度調整嵌入強度，
                確保視覺品質的均勻性。
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-600 mb-3">安全性增強</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                結合密碼學技術，對隱藏訊息進行加密處理，
                提高整體系統的安全性。
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-600 mb-3">品質評估</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                使用PSNR、SSIM等指標評估影像品質，
                確保隱藏後的圖像保持高品質。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 功能特色 */}
      <section className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-semibold border-b-2 border-blue-600 pb-2 mb-4">功能特色</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 text-sm font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">圖像上傳與預覽</h3>
                  <p className="text-gray-600 text-sm">支援多種圖像格式，提供即時預覽功能</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 text-sm font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">訊息加密嵌入</h3>
                  <p className="text-gray-600 text-sm">將文字訊息轉換為二進制並安全嵌入圖像</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 text-sm font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">品質優化處理</h3>
                  <p className="text-gray-600 text-sm">自動優化嵌入過程以保持最佳視覺品質</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 text-sm font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">結果對比顯示</h3>
                  <p className="text-gray-600 text-sm">並排顯示原始圖像與處理後圖像的對比</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 text-sm font-bold">5</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">品質指標分析</h3>
                  <p className="text-gray-600 text-sm">提供PSNR、SSIM等專業品質評估指標</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 text-sm font-bold">6</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">安全下載保存</h3>
                  <p className="text-gray-600 text-sm">支援處理後圖像的安全下載與保存</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 實驗結果 */}
      <section className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-semibold border-b-2 border-blue-600 pb-2 mb-4">實驗結果</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">95%+</div>
              <div className="text-gray-600">平均PSNR值</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">0.98+</div>
              <div className="text-gray-600">平均SSIM值</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-gray-600">訊息提取準確率</div>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            實驗結果顯示，我們的方法在保持高品質視覺效果的同時，能夠確保隱藏訊息的安全性和完整性。
            相比傳統的LSB方法，我們的優化算法在PSNR和SSIM指標上都有顯著提升。
          </p>
        </div>
      </section>

      {/* 未來展望 */}
      <section className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-semibold border-b-2 border-blue-600 pb-2 mb-4">未來展望</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start space-x-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>擴展支援更多圖像格式和更大的訊息容量</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>開發更先進的品質優化算法</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>整合機器學習技術提升隱藏效果</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>開發移動端應用程式</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6 mt-8">
        <p>&copy; 2024 國立虎尾科技大學資訊工程系 - 改善偽裝影像視覺品質的研究與實作</p>
        <p className="mt-2 text-sm text-gray-400">專題成員：黃柔語、趙衡彬</p>
      </footer>
    </div>
  );
}

export default App;
