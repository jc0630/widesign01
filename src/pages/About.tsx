import { useReveal } from '../hooks/useReveal';

export default function About() {
  useReveal();

  return (
    <>
      <section className="intro" style={{ paddingTop: '220px', paddingBottom: '100px' }}>
        <div className="wrap">
          <div className="reveal">
            <div className="eyebrow">ABOUT US</div>
            <h1 style={{ fontSize: 'clamp(2rem,4.4vw,3.4rem)', maxWidth: '14em', marginTop: '22px' }}>
              維雍設計團隊以人文與藝術的結合創造屬於個人的無價空間。
            </h1>
          </div>
          <div className="reveal reveal-delay-1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(32px,6vw,100px)', marginTop: '48px', paddingTop: '40px', borderTop: '1px solid var(--line)' }}>
            <p style={{ color: 'var(--ink-soft)' }}>專業於建築設計及室內空間，利用有效圖面表現方式及施工經驗，讓空間原型能在行為的移動中，經由不同立面,隨時間而變化的光影，賦予人不同的感知經驗與富含美感的生活空間 。</p>
            <p style={{ color: 'var(--ink-soft)' }}>維雍設計就是一個永遠主動學習，主動思考，主動創造下一個擁有豐富景深的空間。</p>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="wrap">
          <div className="section-head reveal">
            <div className="eyebrow">OUR VALUES</div>
            <h2>核心價值</h2>
          </div>
          <div className="reveal reveal-delay-1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 'clamp(24px,3vw,36px)' }}>
            <div style={{ paddingTop: '32px', borderTop: '1px solid var(--line-strong)' }}>
              <div className="eyebrow" style={{ fontSize: '.66rem' }}>WI DESIGN</div>
              <h3 style={{ fontSize: '1.25rem', marginTop: '20px', fontWeight: 500 }}>維雍設計</h3>
              <p style={{ color: 'var(--ink-soft)', fontSize: '.92rem', marginTop: '14px', lineHeight: 1.85 }}>專業於建築、室內空間、以及景觀設計，利用有效之圖面表現方式及豐富之施工經驗，提供高水準的服務品質。</p>
            </div>
            <div style={{ paddingTop: '32px', borderTop: '1px solid var(--line-strong)' }}>
              <div className="eyebrow" style={{ fontSize: '.66rem' }}>SPATIAL REQUIREMENT</div>
              <h3 style={{ fontSize: '1.25rem', marginTop: '20px', fontWeight: 500 }}>空間需求</h3>
              <p style={{ color: 'var(--ink-soft)', fontSize: '.92rem', marginTop: '14px', lineHeight: 1.85 }}>在尺度上追求其實用性與創造空間之活潑性。</p>
            </div>
            <div style={{ paddingTop: '32px', borderTop: '1px solid var(--line-strong)' }}>
              <div className="eyebrow" style={{ fontSize: '.66rem' }}>SPATIAL AESTHETICS</div>
              <h3 style={{ fontSize: '1.25rem', marginTop: '20px', fontWeight: 500 }}>立面美學</h3>
              <p style={{ color: 'var(--ink-soft)', fontSize: '.92rem', marginTop: '14px', lineHeight: 1.85 }}>按業主之品味特質及預算分配達成協調之空間美感。</p>
            </div>
            <div style={{ paddingTop: '32px', borderTop: '1px solid var(--line-strong)' }}>
              <div className="eyebrow" style={{ fontSize: '.66rem' }}>PROFESSIONAL SERVICE</div>
              <h3 style={{ fontSize: '1.25rem', marginTop: '20px', fontWeight: 500 }}>專業服務</h3>
              <p style={{ color: 'var(--ink-soft)', fontSize: '.92rem', marginTop: '14px', lineHeight: 1.85 }}>前期之受委託協調相關工程品質；後期之裝修工程保固服務；謹守業主私人空間保密原則。</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
