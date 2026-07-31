import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';
import { useState, useEffect } from 'react';

const bannerImages = [
  'https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=1800&q=80',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=80'
];

export default function Home() {
  useReveal();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => setCurrentImageIndex((prev) => (prev + 1) % bannerImages.length);
  const prevSlide = () => setCurrentImageIndex((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);

  return (
    <>
      {/* ============ Hero ============ */}
      <section className="hero" id="home" style={{ height: '80vh', minHeight: '600px', display: 'flex', alignItems: 'flex-end', position: 'relative', overflow: 'hidden' }}>
        <div className="hero-media" style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          {bannerImages.map((src, index) => (
            <img 
              key={index}
              src={src} 
              alt={`室內設計作品意象 ${index + 1}`} 
              style={{ 
                position: 'absolute', 
                inset: 0, 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover', 
                transform: currentImageIndex === index ? 'scale(1.05)' : 'scale(1.15)',
                opacity: currentImageIndex === index ? 1 : 0,
                transition: 'opacity 1.2s ease-in-out, transform 8s ease-out' 
              }} 
            />
          ))}
        </div>
        <div className="absolute inset-0 z-1" style={{ background: 'linear-gradient(180deg, rgba(28,28,26,.05) 0%, rgba(28,28,26,.45) 100%)' }}></div>
        <div className="hero-content" style={{ position: 'relative', zIndex: 2, width: '100%', padding: '0 clamp(24px, 6vw, 110px) 80px', color: '#fff' }}>
          <div className="eyebrow" style={{ color: 'rgba(255,255,255,.85)' }}>WI DESIGN — INTERIOR DESIGN STUDIO</div>
          <h1 className="opacity-0 animate-[heroText_1.1s_0.3s_cubic-bezier(0.16,0.8,0.3,1)_forwards]" style={{ fontSize: 'clamp(2.2rem, 5.4vw, 4.6rem)', color: '#fff', marginTop: '22px', maxWidth: '16em' }}>
            空間，是生活哲學<br/>的具體實踐。
          </h1>
          <div className="flex gap-4 mt-8 lg:mt-12 opacity-0 animate-[heroText_1.1s_0.6s_cubic-bezier(0.16,0.8,0.3,1)_forwards] relative z-10 pointer-events-auto">
            <button onClick={prevSlide} className="w-12 h-12 flex items-center justify-center border border-white/40 rounded-full hover:bg-white hover:text-black transition-colors backdrop-blur-sm" aria-label="上一張">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
            </button>
            <button onClick={nextSlide} className="w-12 h-12 flex items-center justify-center border border-white/40 rounded-full hover:bg-white hover:text-black transition-colors backdrop-blur-sm" aria-label="下一張">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
            </button>
          </div>
        </div>
        <div className="scroll-cue"><span>SCROLL</span><span className="line"></span></div>
      </section>

      {/* ============ About (merged with brand film) ============ */}
      <section className="section" id="about">
        <div className="wrap about-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(32px,6vw,100px)', alignItems: 'center' }}>
          <div className="reveal" id="aboutMedia">
            <div className="video-frame" style={{ position: 'relative', aspectRatio: '16/9', border: '1px solid var(--line-strong)', padding: '12px' }}>
              <div className="video-inner group cursor-pointer" id="videoInner" style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', background: '#111' }}>
                <img src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1400&q=80" alt="品牌影片預覽畫面" className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105" />
                <div className="play-btn absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[78px] h-[78px] rounded-full border border-white/80 flex items-center justify-center bg-white/10 backdrop-blur-[4px] transition-all duration-300 hover:bg-white group-hover:bg-white text-white group-hover:text-[#1c1c1a]">
                  <svg width="18" height="18" viewBox="0 0 20 20" className="fill-current"><path d="M5 3l12 7-12 7V3z"/></svg>
                </div>
              </div>
            </div>
            <div className="video-caption" style={{ marginTop: '18px', color: 'var(--ink-soft)', fontSize: '.88rem' }}>維雍室內裝修設計 品牌介紹影片</div>
          </div>
          <div className="about-text reveal reveal-delay-1">
            <div className="eyebrow">ABOUT US</div>
            <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.3rem)' }}>維雍設計團隊以人文與藝術的結合創造屬於個人的無價空間。</h2>
            <p style={{ color: 'var(--ink-soft)', marginTop: '22px' }}>專業於建築設計及室內空間，利用有效圖面表現方式及施工經驗，讓空間原型能在行為的移動中，經由不同立面,隨時間而變化的光影，賦予人不同的感知經驗與富含美感的生活空間 。</p>
            <p style={{ color: 'var(--ink-soft)', marginTop: '22px' }}>維雍設計就是一個永遠主動學習，主動思考，主動創造下一個擁有豐富景深的空間。</p>
            <Link to="/about" className="more-link">更多關於我們 →</Link>
          </div>
        </div>
      </section>

      {/* ============ Works / Portfolio ============ */}
      <section className="section soft" id="works">
        <div className="wrap">
          <div className="section-head reveal">
            <div className="eyebrow">SELECTED WORKS</div>
            <h2>作品案例</h2>
            <p>每一件作品，都是基地、光線與生活方式交會後的獨特解答。</p>
          </div>

          <div className="mosaic reveal reveal-delay-1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(28px,4vw,56px)' }}>
            <Link to="/works/jing-shui" className="m-item group">
              <div className="thumb relative overflow-hidden aspect-[4/3] bg-[var(--bg-soft)]">
                <img src="https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=900&q=80" alt="靜水苑" className="w-full h-full object-cover transition-all duration-[1400ms] group-hover:scale-105" />
              </div>
              <div className="info mt-5 pb-5 border-b border-[var(--line)] flex items-baseline justify-between gap-3">
                <div>
                  <div className="cap-tag font-inter text-[0.66rem] tracking-[0.14em] uppercase text-[var(--ink-faint)]">得獎設計 · 2024</div>
                  <div className="cap-title font-serif text-[1.05rem] mt-2 text-[var(--ink)]">靜水苑</div>
                </div>
                <div className="cap-arrow font-inter text-[0.8rem] text-[var(--ink-soft)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">→</div>
              </div>
            </Link>
            <Link to="/works/light" className="m-item group">
              <div className="thumb relative overflow-hidden aspect-[4/3] bg-[var(--bg-soft)]">
                <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80" alt="光合寓所" className="w-full h-full object-cover transition-all duration-[1400ms] group-hover:scale-105" />
              </div>
              <div className="info mt-5 pb-5 border-b border-[var(--line)] flex items-baseline justify-between gap-3">
                <div>
                  <div className="cap-tag font-inter text-[0.66rem] tracking-[0.14em] uppercase text-[var(--ink-faint)]">室內設計 · 2023</div>
                  <div className="cap-title font-serif text-[1.05rem] mt-2 text-[var(--ink)]">光合寓所</div>
                </div>
                <div className="cap-arrow font-inter text-[0.8rem] text-[var(--ink-soft)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">→</div>
              </div>
            </Link>
            <Link to="/works/architecture" className="m-item group">
              <div className="thumb relative overflow-hidden aspect-[4/3] bg-[var(--bg-soft)]">
                <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80" alt="清水地景宅" className="w-full h-full object-cover transition-all duration-[1400ms] group-hover:scale-105" />
              </div>
              <div className="info mt-5 pb-5 border-b border-[var(--line)] flex items-baseline justify-between gap-3">
                <div>
                  <div className="cap-tag font-inter text-[0.66rem] tracking-[0.14em] uppercase text-[var(--ink-faint)]">建築設計 · 2023</div>
                  <div className="cap-title font-serif text-[1.05rem] mt-2 text-[var(--ink)]">清水地景宅</div>
                </div>
                <div className="cap-arrow font-inter text-[0.8rem] text-[var(--ink-soft)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">→</div>
              </div>
            </Link>
          </div>
          <Link to="/works" className="more-link center reveal reveal-delay-2">查看全部作品 →</Link>
        </div>
      </section>

      {/* ============ News ============ */}
      <section className="section" id="news">
        <div className="wrap">
          <div className="section-head reveal">
            <div className="eyebrow">NEWS</div>
            <h2>最新消息</h2>
            <p>媒體報導與獲獎新聞，持續紀錄我們對設計的堅持。</p>
          </div>
          <div className="news-list reveal reveal-delay-1 border-t border-[var(--line)]">
            <Link className="news-item group block sm:grid sm:grid-cols-[110px_1fr_auto] items-center gap-[30px] py-[30px] border-b border-[var(--line)] transition-all duration-300 hover:pl-4" to="/news/1">
              <div className="news-date font-inter text-[var(--ink-faint)] text-[0.82rem] mb-2 sm:mb-0">2024.11</div>
              <div>
                <div className="news-tag inline-block font-inter text-[0.64rem] tracking-[0.12em] text-[var(--ink-soft)] border border-[var(--line-strong)] rounded-full px-3 py-1 mb-2">獲獎新聞</div>
                <div className="news-title font-serif text-[1.15rem]">《靜水苑》榮獲 2024 國際室內設計大獎</div>
              </div>
              <div className="news-arrow font-inter text-[0.8rem] text-[var(--ink-soft)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 mt-3 sm:mt-0">閱讀更多 →</div>
            </Link>
            <Link className="news-item group block sm:grid sm:grid-cols-[110px_1fr_auto] items-center gap-[30px] py-[30px] border-b border-[var(--line)] transition-all duration-300 hover:pl-4" to="/news/2">
              <div className="news-date font-inter text-[var(--ink-faint)] text-[0.82rem] mb-2 sm:mb-0">2024.06</div>
              <div>
                <div className="news-tag inline-block font-inter text-[0.64rem] tracking-[0.12em] text-[var(--ink-soft)] border border-[var(--line-strong)] rounded-full px-3 py-1 mb-2">媒體報導</div>
                <div className="news-title font-serif text-[1.15rem]">專訪維雍室內裝修設計：從基地紋理出發的設計哲學</div>
              </div>
              <div className="news-arrow font-inter text-[0.8rem] text-[var(--ink-soft)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 mt-3 sm:mt-0">閱讀更多 →</div>
            </Link>
            <Link className="news-item group block sm:grid sm:grid-cols-[110px_1fr_auto] items-center gap-[30px] py-[30px] border-b border-[var(--line)] transition-all duration-300 hover:pl-4" to="/news/3">
              <div className="news-date font-inter text-[var(--ink-faint)] text-[0.82rem] mb-2 sm:mb-0">2023.09</div>
              <div>
                <div className="news-tag inline-block font-inter text-[0.64rem] tracking-[0.12em] text-[var(--ink-soft)] border border-[var(--line-strong)] rounded-full px-3 py-1 mb-2">獲獎新聞</div>
                <div className="news-title font-serif text-[1.15rem]">《清水地景宅》入選年度建築設計獎</div>
              </div>
              <div className="news-arrow font-inter text-[0.8rem] text-[var(--ink-soft)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 mt-3 sm:mt-0">閱讀更多 →</div>
            </Link>
          </div>
          <Link to="/news" className="more-link center reveal reveal-delay-2">查看全部消息 →</Link>
        </div>
      </section>
      
      {/* Required style overrides for React */}
      <style>{`
        @keyframes heroZoom{ to{ transform:scale(1); } }
        @keyframes heroText{ from{opacity:0; transform:translateY(24px);} to{opacity:1; transform:translateY(0);} }
        @keyframes scrollLine{ 0%{top:-100%;} 60%{top:100%;} 100%{top:100%;} }
        .scroll-cue { position:absolute; bottom:28px; left:50%; transform:translateX(-50%); z-index:2; color:#fff; display:flex; flex-direction:column; align-items:center; gap:10px; font-family:'Inter',sans-serif; font-size:.68rem; letter-spacing:.2em; }
        .scroll-cue .line { width:1px; height:34px; background:rgba(255,255,255,.6); overflow:hidden; position:relative; }
        .scroll-cue .line::after { content:''; position:absolute; top:-100%; left:0; width:100%; height:100%; background:#fff; animation:scrollLine 2s ease-in-out infinite; }
      `}</style>
    </>
  );
}
