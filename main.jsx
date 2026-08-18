import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { ArrowRight, ChevronDown, Clock3, ExternalLink, MapPin, Menu, MessageCircle, Phone, ShieldCheck, Settings, Wrench, X, Cog, SearchCheck, RefreshCw, CircleGauge } from "lucide-react";
import { motion } from "framer-motion";
import "./styles.css";

const PHONE = "919822702663";
const DISPLAY_PHONE = "098227 02663";
const ADDRESS = "Plot No. 6, Kamptee Rd, Saw Mill Area, Ansar Nagar, Bezonbagh, Nagpur, Maharashtra 440014";
const WHATSAPP = `https://wa.me/${PHONE}?text=${encodeURIComponent("Hello Hemkunt Engineering Works, I would like to enquire about gearbox repair and servicing.")}`;
const MAPS = "https://www.google.com/maps/search/?api=1&query=Hemkunt+Engineering+Works+Nagpur";

const services = [
  { icon: Wrench, title: "Gearbox Repair", text: "Professional repair work for industrial and commercial gearboxes with a focus on dependable performance." },
  { icon: Settings, title: "Gearbox Overhauling", text: "Complete gearbox inspection, dismantling, cleaning, repair and reassembly." },
  { icon: RefreshCw, title: "Gearbox Servicing", text: "Maintenance and servicing to help gearboxes operate smoothly and reliably." },
  { icon: Cog, title: "Gear & Component Repair", text: "Repair and replacement support for worn gears, shafts and other gearbox components." },
  { icon: ShieldCheck, title: "Bearing & Seal Work", text: "Inspection and replacement of bearings, seals and related internal components." },
  { icon: SearchCheck, title: "Inspection & Troubleshooting", text: "Identify abnormal noise, vibration, leakage and performance issues before major failure." }
];

const faqs = [
  ["What type of work does Hemkunt Engineering Works do?", "Hemkunt Engineering Works specializes in gearbox repairing, overhauling, servicing, inspection and related mechanical gearbox work."],
  ["Do you repair industrial gearboxes?", "Yes. You can contact us with your gearbox type, application and issue so we can discuss the repair requirement."],
  ["What gearbox problems can you inspect?", "Common issues include unusual noise, vibration, oil leakage, worn gears, bearing problems and reduced performance."],
  ["Where are you located?", ADDRESS + "."],
  ["How can I contact you?", "Call 098227 02663 or use the WhatsApp button to send your gearbox repair requirement."]
];

function App() {
  const [menu, setMenu] = useState(false);
  const [faq, setFaq] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", gearbox: "Industrial Gearbox", message: "" });
  const update = (key, value) => setForm(f => ({ ...f, [key]: value }));

  async function submit(e) {
    e.preventDefault();
    const message = `Hello Hemkunt Engineering Works, my name is ${form.name}. I need help with ${form.gearbox}. ${form.message} My phone number is ${form.phone}.`;
    window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`, "_blank");
    setSubmitted(true);
    setForm({ name: "", phone: "", gearbox: "Industrial Gearbox", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  }

  return <div className="site">
    <header className="nav">
      <a className="brand" href="#home"><span className="brand-mark"><Cog size={22}/></span><span><strong>Hemkunt Engineering Works</strong><small>GEARBOX REPAIR • NAGPUR</small></span></a>
      <button className="menu-btn" onClick={() => setMenu(!menu)} aria-label="Toggle menu">{menu ? <X/> : <Menu/>}</button>
      <nav className={menu ? "nav-links open" : "nav-links"}>
        {["About","Services","Process","Location","Contact"].map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenu(false)}>{item}</a>)}
        <a className="nav-cta" href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle size={17}/> Get a Quote</a>
      </nav>
    </header>

    <main>
      <section className="hero" id="home">
        <video className="hero-video" autoPlay muted loop playsInline preload="auto"><source src="/gear-background.mp4" type="video/mp4"/></video>
        <div className="hero-video-overlay"></div>
        <div className="hero-grid">
          <motion.div className="hero-copy" initial={{opacity:0,y:28}} animate={{opacity:1,y:0}} transition={{duration:.75}}>
            <div className="eyebrow"><span></span> GEARBOX REPAIR &amp; SERVICING • NAGPUR</div>
            <h1>Keep your<br/><em>gearbox moving.</em></h1>
            <p className="hero-text">Specialized gearbox repair, overhauling, servicing and troubleshooting for industrial and commercial applications.</p>
            <div className="hero-actions"><a className="primary-btn" href="#contact">Request Repair <ArrowRight size={18}/></a><a className="secondary-btn" href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle size={18}/> WhatsApp Us</a></div>
            <div className="trust-row"><div><b>01</b><span>GEARBOX FOCUS</span></div><div><b>24/7</b><span>REPAIR MINDSET</span></div><div><b>✓</b><span>RELIABLE SERVICE</span></div></div>
          </motion.div>
          <motion.div className="hero-visual-placeholder" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.8,delay:.12}}></motion.div>
        </div><div className="scroll-cue">SCROLL TO EXPLORE <span>↓</span></div>
      </section>

      <section className="about section" id="about"><div className="section-label">ABOUT HEMKUNT</div><div className="two-col"><div><h2>Specialists in <span>gearbox repair.</span></h2></div><div><p className="lead">Hemkunt Engineering Works is focused on gearbox repairing and related mechanical service work in Nagpur.</p><p>From inspection and fault finding to overhauling and component replacement, the goal is simple: get your gearbox back to dependable operation.</p><div className="mini-points"><span><CheckIcon/> Repair-focused service</span><span><CheckIcon/> Practical troubleshooting</span><span><CheckIcon/> Careful inspection</span></div></div></div></section>

      <section className="services section" id="services"><div className="section-head"><div><div className="section-label">OUR SERVICES</div><h2>Gearbox work from <span>inspection to repair.</span></h2></div><p>Services are centered around gearbox maintenance, repair, overhauling and troubleshooting.</p></div><div className="service-grid">{services.map((s,i)=>{const Icon=s.icon;return <motion.article className="service-card" key={s.title} whileHover={{y:-8}} transition={{duration:.2}}><div className="service-number">0{i+1}</div><div className="service-icon"><Icon size={27}/></div><h3>{s.title}</h3><p>{s.text}</p><a href="#contact">Enquire <ArrowRight size={15}/></a></motion.article>})}</div></section>

      <section className="experience section" id="process"><div className="experience-panel"><div className="experience-copy"><div className="section-label">OUR APPROACH</div><h2>Diagnose the issue.<br/><span>Repair with purpose.</span></h2><p>A gearbox problem can start with noise, vibration, leakage or loss of performance. Our repair-focused process begins with understanding the problem before repair work is carried out.</p><div className="experience-points"><div><SearchCheck/><span><b>Inspect &amp; diagnose</b><small>Understand the gearbox condition and identify the likely fault.</small></span></div><div><Wrench/><span><b>Repair &amp; overhaul</b><small>Dismantle, repair or replace required components and reassemble.</small></span></div><div><CircleGauge/><span><b>Check performance</b><small>Review the repaired gearbox for reliable operation.</small></span></div></div><a className="primary-btn" href="#contact">Discuss Your Gearbox <ArrowRight size={18}/></a></div><div className="abstract-office"><div className="office-grid"></div><div className="office-building gearbox-illustration"><div className="building-top"></div><div className="building-body"><span></span><span></span><span></span><span></span><span></span><span></span></div></div><div className="office-orb"></div></div></div></section>

      <section className="location section" id="location"><div className="section-head"><div><div className="section-label">FIND US</div><h2>Gearbox service in <span>Nagpur.</span></h2></div><p>Visit Hemkunt Engineering Works at Plot No. 6, Kamptee Road, Saw Mill Area, Bezonbagh, Nagpur.</p></div><div className="location-grid"><div className="map-card"><div className="map-pattern"></div><div className="map-pin"><MapPin size={28}/></div><div className="map-label">HEMKUNT ENGINEERING WORKS</div><div className="map-road road-one"></div><div className="map-road road-two"></div><div className="map-road road-three"></div></div><div className="location-info"><div className="address-box"><MapPin/><div><small>OUR ADDRESS</small><p>{ADDRESS}</p></div></div><div className="address-box"><Phone/><div><small>CALL US</small><p>{DISPLAY_PHONE}</p></div></div><div className="location-actions"><a className="primary-btn" href={MAPS} target="_blank" rel="noreferrer">Get Directions <ExternalLink size={17}/></a><a className="secondary-btn dark" href={`tel:${PHONE}`}><Phone size={17}/> Call Now</a></div></div></div></section>

      <section className="cta section"><div className="cta-inner"><div><div className="section-label">GEARBOX PROBLEM?</div><h2>Let's discuss the repair<br/><span>your gearbox needs.</span></h2></div><a className="primary-btn light" href="#contact">Send Requirement <ArrowRight size={18}/></a></div></section>

      <section className="contact section" id="contact"><div className="contact-wrap"><div className="contact-copy"><div className="section-label">GET IN TOUCH</div><h2>Tell us about<br/><span>your gearbox.</span></h2><p>Send the gearbox type, symptoms and your contact details. We'll use the enquiry to understand what repair or servicing support you need.</p><div className="contact-info"><a href={`tel:${PHONE}`}><Phone/><span><small>CALL US</small>{DISPLAY_PHONE}</span></a><a href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle/><span><small>WHATSAPP</small>Send a repair enquiry</span></a><div><MapPin/><span><small>VISIT US</small>Bezonbagh, Nagpur</span></div></div></div><form className="enquiry-form" onSubmit={submit}><h3>Gearbox Enquiry</h3><p>Tell us about the repair requirement.</p><label>Your Name<input required value={form.name} onChange={e=>update("name",e.target.value)} placeholder="Enter your name"/></label><label>Phone Number<input required value={form.phone} onChange={e=>update("phone",e.target.value)} type="tel" placeholder="Enter your phone number"/></label><label>Gearbox Type<select value={form.gearbox} onChange={e=>update("gearbox",e.target.value)}><option>Industrial Gearbox</option><option>Helical Gearbox</option><option>Worm Gearbox</option><option>Planetary Gearbox</option><option>Other / Not Sure</option></select></label><label>Problem / Requirement<textarea value={form.message} onChange={e=>update("message",e.target.value)} placeholder="Describe the gearbox problem..."/></label><button className="primary-btn" type="submit">{submitted?"WhatsApp Opened ✓":"Send Repair Enquiry"} <ArrowRight size={18}/></button><a className="whatsapp-full" href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle size={18}/> Prefer WhatsApp? Chat Now</a>{submitted&&<div className="success-message">Your WhatsApp enquiry has been prepared.</div>}</form></div></section>

      <section className="faq section"><div className="section-label">FAQ</div><h2>Questions? <span>We've got answers.</span></h2><div className="faq-list">{faqs.map(([q,a],i)=><div className={`faq-item ${faq===i?"active":""}`} key={q}><button onClick={()=>setFaq(faq===i?-1:i)}><span>{q}</span><ChevronDown/></button>{faq===i&&<motion.p initial={{opacity:0}} animate={{opacity:1}}>{a}</motion.p>}</div>)}</div></section>
    </main>

    <footer className="footer"><div className="footer-main"><div className="brand footer-brand"><span className="brand-mark"><Cog size={21}/></span><span><strong>Hemkunt Engineering Works</strong><small>GEARBOX REPAIR • NAGPUR</small></span></div><p>Gearbox repair, overhauling, servicing and troubleshooting.</p><div className="footer-links"><a href="#services">Services</a><a href="#location">Location</a><a href="#contact">Contact</a><a href={WHATSAPP} target="_blank" rel="noreferrer">WhatsApp</a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Hemkunt Engineering Works.</span><span>Nagpur, Maharashtra</span></div></footer>
    <a className="floating-wa" href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle size={25}/></a>
  </div>;
}

function CheckIcon(){ return <ShieldCheck size={17}/> }
createRoot(document.getElementById("root")).render(<App/>);
