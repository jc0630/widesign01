import { useState, useEffect } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';

export default function Layout() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change and handle scroll restore
  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: '首頁', path: '/' },
    { name: '公司簡介', path: '/about' },
    { name: '服務流程', path: '/service' },
    { name: '作品案例', path: '/works' },
    { name: '最新消息', path: '/news' },
    { name: '聯絡我們', path: '/contact' },
  ];

  return (
    <>
      <div className={`page-curtain ${isTransitioning ? '' : 'hidden'}`} id="pageCurtain"></div>

      <header id="siteHeader" className={scrolled ? 'scrolled' : ''}>
        <Link to="/" className="logo">維雍室內裝修設計<span>WI DESIGN</span></Link>
        <nav className={`mainnav ${menuOpen ? 'open' : ''}`} id="mainNav">
          {navLinks.map(link => (
            <Link 
              key={link.path} 
              to={link.path}
              className={location.pathname === link.path ? 'current' : ''}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </header>

      <button 
        className="menu-toggle" 
        id="menuToggle" 
        aria-label="開啟選單"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{ display: 'none' }} // Hidden on desktop, shown on mobile via CSS
      >
        <span></span><span></span><span></span>
      </button>

      <main>
        <Outlet />
      </main>

      <section className="cta" id="contact">
        <div className="eyebrow" style={{ justifyContent: 'center', color: 'rgba(242,242,239,.7)' }}>GET IN TOUCH</div>
        <h2>準備好，開始一場<br/>關於空間的對話了嗎？</h2>
        <p>歡迎與我們預約諮詢，讓專業團隊為您的生活提出最合適的設計提案。</p>
        <Link to="/contact" className="cta-btn">聯絡我們 →</Link>
      </section>

      <footer>
        <div className="footer-top">
          <div className="footer-logo">維雍室內裝修設計有限公司</div>
          <div className="footer-nav">
            {navLinks.map(link => (
              <Link 
                key={link.path} 
                to={link.path}
                className={location.pathname === link.path ? 'current' : ''}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <div>臺北市松山區民生東路三段119號2樓 ／ (02)2716-4270</div>
          <div>© 2026 WI.Design. All Rights Reserved.</div>
        </div>
      </footer>
    </>
  );
}
