import { useReveal } from '../hooks/useReveal';
import { FileText, PenTool, CheckSquare, Layout, Layers, Calculator, HardHat, Palette, Sofa, Home } from 'lucide-react';

export default function Service() {
  useReveal();

  const processFlow = [
    { num: 1, zh: '業主提供設計相關資料', en: "Client's Spatial Demand", icon: FileText },
    { num: 2, zh: '平面設計圖（草案）', en: 'Interior Graphic Plan (Draft)', contract: '設計合約', icon: PenTool },
    { num: 3, zh: '平面設計圖定案', en: 'Final Draft of Plan', icon: CheckSquare },
    { num: 4, zh: '系統圖與立面圖設計', en: 'System Plan & Elevations', icon: Layout },
    { num: 5, zh: '立面裝訂成冊及提供建材板', en: 'Material Proposal', contract: '工程合約', icon: Layers },
    { num: 6, zh: '工程報價單', en: 'Quotation of Price', icon: Calculator },
    { num: 7, zh: '施工進場', en: 'Construction', icon: HardHat },
    { num: 8, zh: '確認建材與油漆色系', en: 'Material & Painting Colors', icon: Palette },
    { num: 9, zh: '傢俱、窗簾與軟裝布置', en: 'Furniture, Curtains & Ornaments', icon: Sofa },
    { num: 10, zh: '完工驗收', en: 'Construction Finishing', icon: Home },
  ];

  return (
    <>
      <section className="intro" style={{ paddingTop: '220px', paddingBottom: '80px' }}>
        <div className="wrap">
          <div className="reveal">
            <div className="eyebrow">OUR PROCESS</div>
            <h1 style={{ fontSize: 'clamp(2rem,4.4vw,3.4rem)', maxWidth: '14em', marginTop: '22px' }}>服務流程</h1>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head reveal">
            <div className="eyebrow">HOW IT WORKS</div>
            <h2>流程總覽</h2>
          </div>
          
          <div className="flow-scroll reveal reveal-delay-1" style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', marginTop: '8px' }}>
            <div className="flow-row" style={{ display: 'flex', alignItems: 'flex-start', width: 'max-content', padding: '20px var(--gutter) 10px' }}>
              
              {processFlow.map((step, idx) => {
                const IconComponent = step.icon;
                return (
                  <div key={idx} style={{ display: 'flex' }}>
                    <div className={`flow-node ${step.num === 1 ? 'active' : ''}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '150px', flexShrink: 0 }}>
                      <div className="flow-icon" style={{ position: 'relative', width: '88px', height: '88px', border: '1px solid var(--ink)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, background: step.num === 1 ? 'var(--dark)' : 'transparent', borderColor: step.num === 1 ? 'var(--dark)' : 'var(--ink)', color: step.num === 1 ? '#f2f2ef' : 'var(--ink)' }}>
                        <IconComponent className="w-8 h-8" strokeWidth={1.5} />
                        <div className="flow-badge" style={{ position: 'absolute', top: '-13px', right: '-13px', width: '30px', height: '30px', borderRadius: '50%', background: 'var(--dark)', color: '#f2f2ef', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Inter, sans-serif', fontSize: '.74rem', fontWeight: 500 }}>{step.num}</div>
                      </div>
                      <div className="flow-zh" style={{ marginTop: '20px', fontFamily: 'Noto Serif TC, serif', fontSize: '.98rem', color: 'var(--ink)', lineHeight: 1.5 }}>{step.zh}</div>
                      <div className="flow-en" style={{ marginTop: '6px', fontFamily: 'Inter, sans-serif', fontSize: '.62rem', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--ink-faint)' }}>{step.en}</div>
                    </div>
                    
                    {idx < processFlow.length - 1 && (
                      <div className="flow-connector" style={{ width: '64px', height: '1px', background: 'var(--line-strong)', flexShrink: 0, marginTop: '43px', position: 'relative' }}>
                        {step.contract && (
                          <span className="contract-tag" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', display: 'inline-block', fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '.6rem', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--ink-soft)', background: 'var(--bg)', border: '1px solid var(--line-strong)', borderRadius: '100px', padding: '4px 12px', whiteSpace: 'nowrap' }}>{step.contract}</span>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
              
            </div>
          </div>

          <div className="wrap">
            <div className="flow-hint" style={{ marginTop: '18px', textAlign: 'center', fontFamily: 'Inter, sans-serif', fontSize: '.68rem', letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--ink-faint)' }}>← 左右滑動查看完整流程 →</div>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="wrap">
          <div className="section-head reveal">
            <div className="eyebrow">SERVICE COMMITMENT</div>
            <h2>服務承諾</h2>
          </div>
          <div className="reveal reveal-delay-1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(24px,4vw,48px)', borderTop: '1px solid var(--line)', paddingTop: '40px' }}>
            <div>
              <h3 style={{ fontFamily: 'Noto Serif TC, serif', fontSize: '1.1rem', fontWeight: 500 }}>工程品質協調</h3>
              <p style={{ color: 'var(--ink-soft)', fontSize: '.9rem', marginTop: '12px', lineHeight: 1.8 }}>前期之受委託階段，協調相關工程品質。</p>
            </div>
            <div>
              <h3 style={{ fontFamily: 'Noto Serif TC, serif', fontSize: '1.1rem', fontWeight: 500 }}>裝修保固服務</h3>
              <p style={{ color: 'var(--ink-soft)', fontSize: '.9rem', marginTop: '12px', lineHeight: 1.8 }}>後期提供裝修工程保固服務，安心無後顧之憂。</p>
            </div>
            <div>
              <h3 style={{ fontFamily: 'Noto Serif TC, serif', fontSize: '1.1rem', fontWeight: 500 }}>隱私保密原則</h3>
              <p style={{ color: 'var(--ink-soft)', fontSize: '.9rem', marginTop: '12px', lineHeight: 1.8 }}>謹守業主私人空間之保密原則。</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
