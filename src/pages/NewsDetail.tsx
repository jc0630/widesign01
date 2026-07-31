import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';

export default function NewsDetail() {
  useReveal();
  const { id } = useParams();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImg, setLightboxImg] = useState('');
  const [isZoomed, setIsZoomed] = useState(false);

  const openLightbox = (src: string) => {
    setLightboxImg(src.replace(/w=\d+/, 'w=1800'));
    setLightboxOpen(true);
    setIsZoomed(false);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && lightboxOpen) closeLightbox();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  return (
    <>
      <section className="article-head" style={{ padding: '170px 0 50px', maxWidth: '820px', margin: '0 auto' }}>
        <div className="wrap">
          <Link to="/news" className="back-link inline-flex items-center gap-2 font-inter text-[.78rem] tracking-[.05em] text-[var(--ink-soft)] relative pb-[3px] group">
            ← 返回最新消息
            <div className="absolute left-0 bottom-0 w-0 h-[1px] bg-[var(--ink-soft)] transition-all duration-300 group-hover:w-full"></div>
          </Link>
          <div className="reveal">
            <div className="eyebrow" style={{ marginTop: '24px' }}>獲獎新聞</div>
            <h1 style={{ fontSize: 'clamp(1.8rem,3.6vw,2.7rem)', marginTop: '18px' }}>《靜水苑》榮獲 2024 國際室內設計大獎</h1>
            <div className="article-meta" style={{ marginTop: '20px', fontSize: '.85rem', color: 'var(--ink-faint)', fontFamily: 'Inter, sans-serif', letterSpacing: '.03em' }}>2024.11.18</div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="prose reveal" style={{ maxWidth: '720px', margin: '0 auto' }}>
            <p style={{ color: 'var(--ink-soft)', fontSize: '1.02rem', marginTop: 0 }}>維雍室內裝修設計的作品《靜水苑》，於 2024 年獲得國際室內設計大獎的肯定，這是團隊第三年入選該獎項，也是首度奪下年度大獎殊榮。</p>
            <p style={{ color: 'var(--ink-soft)', fontSize: '1.02rem', marginTop: '22px' }}>評審團在得獎評語中提到，《靜水苑》以精準的比例掌握與材質選用，展現出居住空間與自然光線之間細膩的對話關係，是一件兼具設計深度與生活實用性的作品。</p>

            <blockquote style={{ fontFamily: 'Noto Serif TC, serif', fontSize: '1.3rem', color: 'var(--ink)', lineHeight: 1.7, borderLeft: '2px solid var(--line-strong)', paddingLeft: '28px', margin: '44px 0' }}>
              「好的設計不是加了什麼，而是精準地留下了什麼。」
            </blockquote>

            <div 
              className="lightbox-trigger group cursor-zoom-in" 
              onClick={() => openLightbox('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80')}
              style={{ margin: '44px 0', aspectRatio: '16/10', overflow: 'hidden', position: 'relative', background: '#111' }}
            >
              <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80" alt="靜水苑 頒獎現場" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-transparent transition-colors duration-300 group-hover:bg-[#0a0a092e]"></div>
              <div className="zoom-icon absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[48px] h-[48px] rounded-full border border-white flex items-center justify-center scale-75 opacity-0 transition-all duration-350 pointer-events-none group-hover:opacity-100 group-hover:scale-100">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]"><path d="M9 3H3v6"/><path d="M15 3h6v6"/><path d="M3 15v6h6"/><path d="M21 15v6h-6"/></svg>
              </div>
            </div>
            <div className="img-caption" style={{ marginTop: '-30px', marginBottom: '44px', fontSize: '.82rem', color: 'var(--ink-faint)', fontFamily: 'Inter, sans-serif' }}>《靜水苑》頒獎現場紀錄</div>

            <p style={{ color: 'var(--ink-soft)', fontSize: '1.02rem', marginTop: '22px' }}>我們相信，每一次的肯定都不是終點，而是持續學習與創造下一個作品的起點。維雍室內裝修設計將持續以人文與藝術的結合，為每一位業主打造獨一無二的空間。</p>
          </div>

          <div className="end-nav" style={{ padding: '60px 0 100px', borderTop: '1px solid var(--line)', textAlign: 'center', marginTop: '60px' }}>
            <Link to="/news" className="back-link inline-flex items-center gap-2 font-inter text-[.78rem] tracking-[.05em] text-[var(--ink-soft)] relative pb-[3px] group">
              ← 返回最新消息
              <div className="absolute left-0 bottom-0 w-0 h-[1px] bg-[var(--ink-soft)] transition-all duration-300 group-hover:w-full"></div>
            </Link>
          </div>
        </div>
      </section>

      {lightboxOpen && (
        <div 
          className="lightbox active" 
          onClick={(e) => { if (e.target === e.currentTarget) closeLightbox() }}
          style={{ overflow: isZoomed ? 'auto' : 'hidden' }}
        >
          <button className="lightbox-close" onClick={closeLightbox} aria-label="關閉">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"><line x1="4" y1="4" x2="20" y2="20"/><line x1="20" y1="4" x2="4" y2="20"/></svg>
          </button>
          <button 
            className="lightbox-zoom" 
            onClick={(e) => { e.stopPropagation(); setIsZoomed(!isZoomed); }} 
            aria-label="放大" 
            style={{ position: 'absolute', top: '28px', right: '80px', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none', color: '#f2f2ef', cursor: 'pointer', zIndex: 10, opacity: 0.7, transition: 'opacity 0.3s' }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}
          >
            {isZoomed ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{width: '24px', height: '24px'}}><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{width: '24px', height: '24px'}}><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
            )}
          </button>
          <img 
            src={lightboxImg} 
            alt="放大圖片" 
            onClick={(e) => { e.stopPropagation(); setIsZoomed(!isZoomed); }}
            style={{
              maxWidth: isZoomed ? '250vw' : '88vw',
              maxHeight: isZoomed ? '250vh' : '82vh',
              cursor: isZoomed ? 'zoom-out' : 'zoom-in',
              transition: 'all 0.3s ease',
              objectFit: 'contain'
            }}
          />
        </div>
      )}
    </>
  );
}
