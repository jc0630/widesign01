import React, { useState } from 'react';
import { useReveal } from '../hooks/useReveal';

export default function Contact() {
  useReveal();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="intro" style={{ paddingTop: '220px', paddingBottom: '70px' }}>
        <div className="wrap">
          <div className="reveal">
            <div className="eyebrow">CONTACT</div>
            <h1 style={{ fontSize: 'clamp(2rem,4.4vw,3.4rem)', marginTop: '22px' }}>聯絡我們</h1>
            <p style={{ color: 'var(--ink-soft)', marginTop: '22px', maxWidth: '34em' }}>歡迎與我們預約諮詢，讓專業團隊為您的生活提出最合適的設計提案。</p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'clamp(40px,6vw,80px)', alignItems: 'start' }}>

            <div className="reveal">
              {!submitted ? (
                <form id="contactForm" onSubmit={handleSubmit}>
                  <div className="field" style={{ marginBottom: '30px' }}>
                    <label htmlFor="name" style={{ display: 'block', fontFamily: 'Noto Sans TC, sans-serif', fontSize: '.9rem', fontWeight: 400, color: 'var(--ink-soft)', marginBottom: '10px', letterSpacing: '.02em' }}>姓名: <span className="req" style={{ color: 'var(--ink-faint)', marginLeft: '2px' }}>*</span></label>
                    <input type="text" id="name" name="name" required style={{ width: '100%', border: 'none', borderBottom: '1px solid var(--line-strong)', background: 'transparent', padding: '10px 2px', fontFamily: 'Noto Sans TC, sans-serif', fontSize: '1rem', fontWeight: 300, color: 'var(--ink)', transition: 'border-color .3s ease', outline: 'none' }} className="focus:border-[var(--ink)]" />
                  </div>
                  <div className="field" style={{ marginBottom: '30px' }}>
                    <label htmlFor="phone" style={{ display: 'block', fontFamily: 'Noto Sans TC, sans-serif', fontSize: '.9rem', fontWeight: 400, color: 'var(--ink-soft)', marginBottom: '10px', letterSpacing: '.02em' }}>聯絡電話: <span className="req" style={{ color: 'var(--ink-faint)', marginLeft: '2px' }}>*</span></label>
                    <input type="tel" id="phone" name="phone" required style={{ width: '100%', border: 'none', borderBottom: '1px solid var(--line-strong)', background: 'transparent', padding: '10px 2px', fontFamily: 'Noto Sans TC, sans-serif', fontSize: '1rem', fontWeight: 300, color: 'var(--ink)', transition: 'border-color .3s ease', outline: 'none' }} className="focus:border-[var(--ink)]" />
                  </div>
                  <div className="field" style={{ marginBottom: '30px' }}>
                    <label htmlFor="email" style={{ display: 'block', fontFamily: 'Noto Sans TC, sans-serif', fontSize: '.9rem', fontWeight: 400, color: 'var(--ink-soft)', marginBottom: '10px', letterSpacing: '.02em' }}>E-mail: <span className="req" style={{ color: 'var(--ink-faint)', marginLeft: '2px' }}>*</span></label>
                    <input type="email" id="email" name="email" required style={{ width: '100%', border: 'none', borderBottom: '1px solid var(--line-strong)', background: 'transparent', padding: '10px 2px', fontFamily: 'Noto Sans TC, sans-serif', fontSize: '1rem', fontWeight: 300, color: 'var(--ink)', transition: 'border-color .3s ease', outline: 'none' }} className="focus:border-[var(--ink)]" />
                  </div>
                  <div className="field" style={{ marginBottom: '30px' }}>
                    <label htmlFor="message" style={{ display: 'block', fontFamily: 'Noto Sans TC, sans-serif', fontSize: '.9rem', fontWeight: 400, color: 'var(--ink-soft)', marginBottom: '10px', letterSpacing: '.02em' }}>聯繫事項 <span className="req" style={{ color: 'var(--ink-faint)', marginLeft: '2px' }}>*</span></label>
                    <textarea id="message" name="message" rows={5} required placeholder="請簡述您的空間需求或想諮詢的內容" style={{ width: '100%', border: 'none', borderBottom: '1px solid var(--line-strong)', background: 'transparent', padding: '10px 2px', fontFamily: 'Noto Sans TC, sans-serif', fontSize: '.98rem', fontWeight: 300, color: 'var(--ink)', transition: 'border-color .3s ease', outline: 'none', resize: 'vertical', minHeight: '110px', lineHeight: 1.8 }} className="focus:border-[var(--ink)] placeholder:text-[var(--ink-faint)] placeholder:font-light"></textarea>
                  </div>

                  <div className="recaptcha-row" style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '6px 0 34px' }}>
                    <input type="checkbox" id="recaptcha" required style={{ width: '17px', height: '17px', accentColor: 'var(--ink)', cursor: 'pointer' }} />
                    <span style={{ fontSize: '.88rem', color: 'var(--ink-soft)' }}>我不是機器人</span>
                  </div>

                  <button type="submit" className="submit-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '14px', marginTop: '10px', padding: '16px 40px', background: 'var(--ink)', color: '#fff', border: 'none', borderRadius: '100px', fontFamily: 'Inter, sans-serif', fontSize: '.85rem', letterSpacing: '.08em', cursor: 'pointer', transition: '.3s' }}>確認送出</button>
                </form>
              ) : (
                <div className="form-success" style={{ padding: '40px 0' }}>
                  <div className="eyebrow">THANK YOU</div>
                  <h3 style={{ fontSize: '1.5rem', marginTop: '16px' }}>感謝您的訊息</h3>
                  <p style={{ color: 'var(--ink-soft)', marginTop: '16px' }}>我們已收到您的聯繫需求，將由專人盡快與您聯繫。</p>
                </div>
              )}
            </div>

            <div className="reveal reveal-delay-1">
              <div className="contact-info" style={{ marginBottom: '36px' }}>
                <div className="info-row" style={{ marginBottom: '20px' }}>
                  <span className="info-key" style={{ display: 'block', fontFamily: 'Inter, sans-serif', fontSize: '.66rem', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--ink-faint)', marginBottom: '6px' }}>ADDRESS</span>
                  <span className="info-val" style={{ fontSize: '.98rem', color: 'var(--ink)' }}>臺北市松山區民生東路三段119號2樓</span>
                </div>
                <div className="info-row" style={{ marginBottom: '20px' }}>
                  <span className="info-key" style={{ display: 'block', fontFamily: 'Inter, sans-serif', fontSize: '.66rem', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--ink-faint)', marginBottom: '6px' }}>PHONE</span>
                  <span className="info-val" style={{ fontSize: '.98rem', color: 'var(--ink)' }}>(02)2716-4270</span>
                </div>
                <div className="info-row">
                  <span className="info-key" style={{ display: 'block', fontFamily: 'Inter, sans-serif', fontSize: '.66rem', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--ink-faint)', marginBottom: '6px' }}>HOURS</span>
                  <span className="info-val" style={{ fontSize: '.98rem', color: 'var(--ink)' }}>週一至週五 09:00–18:00</span>
                </div>
              </div>
              <div className="map-frame group" style={{ position: 'relative', overflow: 'hidden', background: 'var(--bg-soft)', aspectRatio: '4/3', border: '1px solid var(--line-strong)' }}>
                <iframe
                  src="https://www.google.com/maps?q=%E8%87%BA%E5%8C%97%E5%B8%82%E6%9D%BE%E5%B1%B1%E5%8D%80%E6%B0%91%E7%94%9F%E6%9D%B1%E8%B7%AF%E4%B8%89%E6%AE%B5119%E8%99%9F2%E6%A8%93&output=embed"
                  loading="lazy"
                  allowFullScreen
                  title="維雍室內裝修設計 地圖位置"
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
                  className="transition-all duration-1000"
                >
                </iframe>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Required style overrides */}
      <style>{`
        .submit-btn:hover { background: var(--dark) !important; }
      `}</style>
    </>
  );
}
