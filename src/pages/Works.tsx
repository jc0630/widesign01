import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';

export default function Works() {
  useReveal();
  const [filter, setFilter] = useState('all');

  const works = [
    { id: 'jing-shui', title: '靜水苑', meta: '台北・大直｜340坪', cat: 'award', tag: '得獎設計', img: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=900&q=80' },
    { id: 'light', title: '光合寓所', meta: '台北・信義｜65坪', cat: 'interior', tag: '室內設計', img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80' },
    { id: 'architecture', title: '清水地景宅', meta: '桃園・龍潭｜210坪', cat: 'architecture', tag: '建築設計', img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80' },
    { id: 'weave-light', title: '織光公寓', meta: '新北・淡水｜45坪', cat: 'interior', tag: '室內設計', img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80' },
    { id: 'gray-box', title: '灰盒美術館', meta: '新竹・東區｜280坪', cat: 'award', tag: '得獎設計', img: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=900&q=80' },
    { id: 'three-books', title: '三疊書屋', meta: '苗栗・頭份｜180坪', cat: 'architecture', tag: '建築設計', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80' },
    { id: 'sunlight-home', title: '沐光之家', meta: '台北・大安｜58坪', cat: 'interior', tag: '室內設計', img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80' },
    { id: 'breeze-court', title: '清風院', meta: '台中・北屯｜150坪', cat: 'award', tag: '得獎設計', img: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&w=900&q=80' },
    { id: 'wind-valley', title: '風之谷會館', meta: '南投・埔里｜260坪', cat: 'architecture', tag: '建築設計', img: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80' },
  ];

  const filteredWorks = filter === 'all' ? works : works.filter(w => w.cat === filter);

  return (
    <>
      <section className="intro" style={{ paddingTop: '220px', paddingBottom: '60px' }}>
        <div className="wrap">
          <div className="reveal">
            <div className="eyebrow">SELECTED WORKS</div>
            <h1 style={{ fontSize: 'clamp(2rem,4.4vw,3.4rem)', maxWidth: '14em', marginTop: '22px' }}>作品案例</h1>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="filters reveal" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '56px' }}>
            <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} style={{ fontFamily: 'Inter, sans-serif', fontSize: '.74rem', letterSpacing: '.08em', padding: '9px 20px', border: '1px solid', borderColor: filter === 'all' ? 'var(--ink)' : 'var(--line-strong)', borderRadius: '100px', background: filter === 'all' ? 'var(--ink)' : 'transparent', color: filter === 'all' ? '#fff' : 'var(--ink-soft)', cursor: 'pointer', transition: '.3s' }} onClick={() => setFilter('all')}>全部</button>
            <button className={`filter-btn ${filter === 'award' ? 'active' : ''}`} style={{ fontFamily: 'Inter, sans-serif', fontSize: '.74rem', letterSpacing: '.08em', padding: '9px 20px', border: '1px solid', borderColor: filter === 'award' ? 'var(--ink)' : 'var(--line-strong)', borderRadius: '100px', background: filter === 'award' ? 'var(--ink)' : 'transparent', color: filter === 'award' ? '#fff' : 'var(--ink-soft)', cursor: 'pointer', transition: '.3s' }} onClick={() => setFilter('award')}>得獎設計</button>
            <button className={`filter-btn ${filter === 'interior' ? 'active' : ''}`} style={{ fontFamily: 'Inter, sans-serif', fontSize: '.74rem', letterSpacing: '.08em', padding: '9px 20px', border: '1px solid', borderColor: filter === 'interior' ? 'var(--ink)' : 'var(--line-strong)', borderRadius: '100px', background: filter === 'interior' ? 'var(--ink)' : 'transparent', color: filter === 'interior' ? '#fff' : 'var(--ink-soft)', cursor: 'pointer', transition: '.3s' }} onClick={() => setFilter('interior')}>室內設計</button>
            <button className={`filter-btn ${filter === 'architecture' ? 'active' : ''}`} style={{ fontFamily: 'Inter, sans-serif', fontSize: '.74rem', letterSpacing: '.08em', padding: '9px 20px', border: '1px solid', borderColor: filter === 'architecture' ? 'var(--ink)' : 'var(--line-strong)', borderRadius: '100px', background: filter === 'architecture' ? 'var(--ink)' : 'transparent', color: filter === 'architecture' ? '#fff' : 'var(--ink-soft)', cursor: 'pointer', transition: '.3s' }} onClick={() => setFilter('architecture')}>建築設計</button>
          </div>

          <div className="work-grid reveal reveal-delay-1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(28px,4vw,56px) clamp(28px,3vw,40px)' }}>
            {filteredWorks.map((work) => (
              <Link to={`/works/${work.id}`} key={work.id} className="work-item group" style={{ display: 'block', cursor: 'pointer' }}>
                <div className="work-thumb" style={{ position: 'relative', overflow: 'hidden', aspectRatio: '4/3', background: 'var(--bg-soft)' }}>
                  <img src={work.img} alt={work.title} className="w-full h-full object-cover transition-all duration-[1400ms] group-hover:scale-105" />
                </div>
                <div className="work-info" style={{ marginTop: '20px', paddingBottom: '20px', borderBottom: '1px solid var(--line)' }}>
                  <div className="work-top" style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '12px' }}>
                    <div className="work-tag" style={{ fontFamily: 'Inter, sans-serif', fontSize: '.64rem', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--ink-faint)' }}>{work.tag}</div>
                    <div className="work-arrow font-inter text-[0.8rem] text-[var(--ink-soft)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">→</div>
                  </div>
                  <div className="work-title" style={{ fontFamily: 'Noto Serif TC, serif', fontSize: '1.05rem', marginTop: '8px', color: 'var(--ink)' }}>{work.title}</div>
                  <div className="work-meta" style={{ fontSize: '.82rem', color: 'var(--ink-soft)', marginTop: '6px' }}>{work.meta}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
