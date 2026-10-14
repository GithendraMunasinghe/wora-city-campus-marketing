import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ArrowRight, ChevronDown, Globe2, Menu, X } from 'lucide-react';
import logo from '../images/logo.webp';

export function Header({lang,setLang,t}) {
  const [open,setOpen] = useState(false);
  const location = useLocation();
  useEffect(()=>setOpen(false),[location.pathname,lang]);
  const links = [{to:`/${lang}`,label:t.navHome},{to:`/${lang}/degrees`,label:t.navDegrees}];
  return <header className="site-header"><div className="header-inner wrap">
    <Link to={`/${lang}`} className="brand" aria-label="Wora City Campus home"><img className="brand-logo" src={logo} alt=""/></Link>
    <nav className={`desktop-nav ${open?'nav-open':''}`} aria-label="Main navigation">{links.map(l=><NavLink key={l.to} end={l.to===`/${lang}`} to={l.to} className={({isActive})=>isActive?'nav-link active':'nav-link'}>{l.label}</NavLink>)}</nav>
    <div className="header-actions"><label className="language-select"><Globe2 size={16}/><select value={lang} onChange={e=>setLang(e.target.value)} aria-label="Select language"><option value="en">English</option><option value="si">සිංහල</option><option value="ta">தமிழ்</option></select><ChevronDown size={14}/></label><button className="mobile-menu" onClick={()=>setOpen(!open)} aria-label="Toggle menu">{open?<X/>:<Menu/>}</button></div>
  </div>{open&&<div className="mobile-nav">{links.map(l=><NavLink key={l.to} end={l.to===`/${lang}`} to={l.to} className="mobile-nav-link">{l.label}<ArrowRight size={17}/></NavLink>)}</div>}</header>
}

export function Footer({lang,t}) { return <footer className="site-footer"><div className="wrap footer-main"><div className="footer-brand"><Link to={`/${lang}`} className="brand brand-light" aria-label="Wora City Campus home"><img className="brand-logo" src={logo} alt=""/></Link><p>{t.footerText}</p></div><div className="footer-links"><Link to={`/${lang}/degrees`}>{t.navDegrees}</Link><span>{t.location}</span></div><div className="footer-note"><span className="orange-dot"/> {t.established}</div></div><div className="wrap footer-bottom"><span>© {new Date().getFullYear()} Wora City Campus</span><span>Designed for your next step.</span></div></footer> }

export function SectionHeading({eyebrow,title,text,light=false}) { return <div className={`section-heading ${light?'light':''}`}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text&&<p>{text}</p>}</div> }

export function CTA({title,text}) { return <section className="cta-section"><div className="cta-orb orb-one"/><div className="cta-orb orb-two"/><div className="wrap cta-inner"><div><span className="eyebrow eyebrow-light">WORA CITY CAMPUS · KALUTARA</span><h2>{title}</h2><p>{text}</p></div></div></section> }
