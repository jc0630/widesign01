import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';

export default function News() {
  useReveal();
  const [filter, setFilter] = useState('all');

  const newsItems = [
    { id: 1, title: '《靜水苑》榮獲 2024 國際室內設計大獎', date: '2024.11', cat: 'award', tag: '獲獎新聞', img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80' },
    { id: 2, title: '專訪維雍室內裝修設計：從基地紋理出發的設計哲學', date: '2024.06', cat: 'media', tag: '媒體報導', img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80' },
    { id: 3, title: '《清水地景宅》入選年度建築設計獎', date: '2023.09', cat: 'award', tag: '獲獎新聞', img: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=900&q=80' },
    { id: 4, title: '專業媒體報導：住宅設計如何回應台灣氣候', date: '2023.03', cat: 'media', tag: '媒體報導', img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80' },
    { id: 5, title: '《灰盒美術館》獲選年度公共空間設計獎', date: '2022.12', cat: 'award', tag: '獲獎新聞', img: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=900&q=80' },
    { id: 6, title: '設計專訪：材質與光線的對話', date: '2022.05', cat: 'media', tag: '媒體報導', img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80' },
  ];

  const filteredNews = filter === 'all' ? newsItems : newsItems.filter(n => n.cat === filter);

  return (
    <>
      <section className="intro" style={{ paddingTop: '220px', paddingBottom: '60px' }}>
        <div className="wrap">
          <div className="reveal">
            <div className="eyebrow">NEWS</div>
            <h1 style={{ fontSize: 'clamp(2rem,4.4vw,3.4rem)', maxWidth: '14em', marginTop: '22px' }}>最新消息</h1>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="filters reveal" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '56px' }}>
            <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} style={{ fontFamily: 'Inter, sans-serif', fontSize: '.74rem', letterSpacing: '.08em', padding: '9px 20px', border: '1px solid', borderColor: filter === 'all' ? 'var(--ink)' : 'var(--line-strong)', borderRadius: '100px', background: filter === 'all' ? 'var(--ink)' : 'transparent', color: filter === 'all' ? '#fff' : 'var(--ink-soft)', cursor: 'pointer', transition: '.3s' }} onClick={() => setFilter('all')}>全部</button>
            <button className={`filter-btn ${filter === 'media' ? 'active' : ''}`} style={{ fontFamily: 'Inter, sans-serif', fontSize: '.74rem', letterSpacing: '.08em', padding: '9px 20px', border: '1px solid', borderColor: filter === 'media' ? 'var(--ink)' : 'var(--line-strong)', borderRadius: '100px', background: filter === 'media' ? 'var(--ink)' : 'transparent', color: filter === 'media' ? '#fff' : 'var(--ink-soft)', cursor: 'pointer', transition: '.3s' }} onClick={() => setFilter('media')}>媒體報導</button>
            <button className={`filter-btn ${filter === 'award' ? 'active' : ''}`} style={{ fontFamily: 'Inter, sans-serif', fontSize: '.74rem', letterSpacing: '.08em', padding: '9px 20px', border: '1px solid', borderColor: filter === 'award' ? 'var(--ink)' : 'var(--line-strong)', borderRadius: '100px', background: filter === 'award' ? 'var(--ink)' : 'transparent', color: filter === 'award' ? '#fff' : 'var(--ink-soft)', cursor: 'pointer', transition: '.3s' }} onClick={() => setFilter('award')}>獲獎新聞</button>
          </div>

          <div className="news-grid reveal reveal-delay-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {filteredNews.map(news => (
              <Link to={`/news/${news.id}`} key={news.id} className="news-card group flex flex-col cursor-pointer">
                <div className="news-thumb relative overflow-hidden aspect-[4/3] bg-[var(--bg-soft)]">
                  <img src={news.img} alt={news.title} className="w-full h-full object-cover transition-all duration-[1400ms] group-hover:scale-105" />
                </div>
                <div className="news-card-info mt-5 pb-5 border-b border-[var(--line)]">
                  <div className="news-card-top flex items-baseline justify-between gap-3">
                    <div className="news-tag inline-block font-inter text-[0.64rem] tracking-[0.12em] text-[var(--ink-soft)] border border-[var(--line-strong)] rounded-full px-3 py-1">{news.tag}</div>
                    <div className="news-card-date font-inter text-[0.72rem] text-[var(--ink-faint)]">{news.date}</div>
                  </div>
                  <div className="news-card-title font-serif text-[1rem] mt-4 text-[var(--ink)] leading-[1.55]">{news.title}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
