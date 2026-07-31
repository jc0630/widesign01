import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';

export default function WorkDetail() {
  useReveal();
  const { id } = useParams();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  // Example data based on Jing Shui Yuan (靜水苑)
  const images = [
    'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1800&q=80',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=80',
    'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=80',
    'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1800&q=80',
    'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1800&q=80',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80',
    'https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&w=1800&q=80',
  ];

  useEffect(() => {
    setIsZoomed(false);
  }, [lightboxIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') setLightboxIndex((lightboxIndex + 1) % images.length);
      if (e.key === 'ArrowLeft') setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, images.length]);

  return (
    <>
      <section className="project-head" style={{ paddingTop: '170px', paddingBottom: '50px' }}>
        <div className="wrap">
          <Link to="/works" className="back-link inline-flex items-center gap-2 font-inter text-[.78rem] tracking-[.05em] text-[var(--ink-soft)] relative pb-[3px] group">
            ← 返回作品案例
            <div className="absolute left-0 bottom-0 w-0 h-[1px] bg-[var(--ink-soft)] transition-all duration-300 group-hover:w-full"></div>
          </Link>
          <div className="reveal">
            <div className="eyebrow" style={{ marginTop: '24px' }}>得獎設計</div>
            <h1 style={{ fontSize: 'clamp(2rem,4.4vw,3.2rem)', marginTop: '18px' }}>靜水苑</h1>
            <div className="project-meta" style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px 28px', fontSize: '.9rem', color: 'var(--ink-soft)' }}>
              <div><span style={{ color: 'var(--ink-faint)', marginRight: '6px', fontFamily: 'Inter, sans-serif', fontSize: '.68rem', letterSpacing: '.08em', textTransform: 'uppercase' }}>LOCATION</span>台北・大直</div>
              <div><span style={{ color: 'var(--ink-faint)', marginRight: '6px', fontFamily: 'Inter, sans-serif', fontSize: '.68rem', letterSpacing: '.08em', textTransform: 'uppercase' }}>SIZE</span>340坪</div>
              <div><span style={{ color: 'var(--ink-faint)', marginRight: '6px', fontFamily: 'Inter, sans-serif', fontSize: '.68rem', letterSpacing: '.08em', textTransform: 'uppercase' }}>YEAR</span>2024</div>
            </div>
          </div>
        </div>
      </section>

      <section className="wrap">
        <div className="project-hero lightbox-trigger reveal group cursor-zoom-in" onClick={() => setLightboxIndex(0)} style={{ aspectRatio: '16/9', overflow: 'hidden', position: 'relative' }}>
          <img src={images[0]} alt="靜水苑 主視覺" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          <div className="absolute inset-0 bg-transparent transition-colors duration-300 group-hover:bg-[#0a0a092e]"></div>
          <div className="zoom-icon absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[56px] h-[56px] rounded-full border border-white flex items-center justify-center scale-75 opacity-0 transition-all duration-350 pointer-events-none group-hover:opacity-100 group-hover:scale-100">
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]"><path d="M9 3H3v6"/><path d="M15 3h6v6"/><path d="M3 15v6h6"/><path d="M21 15v6h-6"/></svg>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <div className="project-desc reveal" style={{ maxWidth: '760px', padding: '64px 0' }}>
            <p style={{ color: 'var(--ink-soft)' }}>靜水苑座落於台北大直，基地面對開闊的水岸景觀。設計從基地紋理與光線行為出發，以大面開窗引入自然採光，讓室內外的界線在不同時間中隨光影變化而流動。</p>
            <p style={{ color: 'var(--ink-soft)', marginTop: '20px' }}>室內以簡潔的量體與材質對話，透過留白與比例的拿捏，呈現一種安靜而富有層次的居住體驗。此案於 2024 年獲得國際室內設計大獎肯定。</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="gallery-head reveal" style={{ marginBottom: '36px' }}>
            <div className="eyebrow">GALLERY</div>
          </div>
          <div className="gallery-grid reveal reveal-delay-1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            {images.slice(1).map((src, index) => (
              <div key={index} className="lightbox-trigger group cursor-zoom-in" onClick={() => setLightboxIndex(index + 1)} style={{ position: 'relative', overflow: 'hidden', aspectRatio: '4/3', background: '#111' }}>
                <img src={src} alt={`空間細節 ${index + 1}`} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-transparent transition-colors duration-300 group-hover:bg-[#0a0a092e]"></div>
                <div className="zoom-icon absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[44px] h-[44px] rounded-full border border-white flex items-center justify-center scale-75 opacity-0 transition-all duration-350 pointer-events-none group-hover:opacity-100 group-hover:scale-100">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]"><path d="M9 3H3v6"/><path d="M15 3h6v6"/><path d="M3 15v6h6"/><path d="M21 15v6h-6"/></svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="wrap">
        <div className="end-nav" style={{ padding: '60px 0 100px', borderTop: '1px solid var(--line)', textAlign: 'center' }}>
          <Link to="/works" className="back-link inline-flex items-center gap-2 font-inter text-[.78rem] tracking-[.05em] text-[var(--ink-soft)] relative pb-[3px] group">
            ← 返回作品案例
            <div className="absolute left-0 bottom-0 w-0 h-[1px] bg-[var(--ink-soft)] transition-all duration-300 group-hover:w-full"></div>
          </Link>
        </div>
      </div>

      {lightboxIndex !== null && (
        <div 
          className="lightbox active" 
          onClick={(e) => { if (e.target === e.currentTarget) setLightboxIndex(null) }}
          style={{ overflow: isZoomed ? 'auto' : 'hidden' }}
        >
          <button className="lightbox-close" onClick={() => setLightboxIndex(null)} aria-label="關閉">
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
          {!isZoomed && (
            <button className="lightbox-nav lightbox-prev" onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex - 1 + images.length) % images.length); }} aria-label="上一張">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="15,4 7,12 15,20"/></svg>
            </button>
          )}
          <img 
            src={images[lightboxIndex]} 
            alt="放大預覽" 
            onClick={(e) => { e.stopPropagation(); setIsZoomed(!isZoomed); }}
            style={{
              maxWidth: isZoomed ? '250vw' : '88vw',
              maxHeight: isZoomed ? '250vh' : '82vh',
              cursor: isZoomed ? 'zoom-out' : 'zoom-in',
              transition: 'all 0.3s ease',
              objectFit: 'contain'
            }}
          />
          {!isZoomed && (
            <button className="lightbox-nav lightbox-next" onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex + 1) % images.length); }} aria-label="下一張">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="9,4 17,12 9,20"/></svg>
            </button>
          )}
          <div className="lightbox-counter">{lightboxIndex + 1} / {images.length}</div>
        </div>
      )}
    </>
  );
}
