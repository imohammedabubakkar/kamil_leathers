import { FormEvent, useMemo, useState } from "react";

const images = {
  hero: "https://images.unsplash.com/photo-1496180317060-d2026272f138?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=88&w=2000",
  story: "https://images.unsplash.com/photo-1787005241178-c9006ea9610b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1200",
  craft: "https://images.unsplash.com/photo-1647502191516-68a4f8c74ed4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1200",
  leather: "https://images.unsplash.com/photo-1571829604981-ea159f94e5ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1200",
  colors: "https://images.unsplash.com/photo-1573227896778-8f378c4029d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1200",
  stitched: "https://images.unsplash.com/photo-1741086154510-522e68f76933?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1200",
  quilted: "https://images.unsplash.com/photo-1564842505181-8862a3b9b173?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1200",
};

type IconName =
  | "arrow"
  | "bag"
  | "check"
  | "chevron"
  | "close"
  | "eye"
  | "factory"
  | "layers"
  | "mail"
  | "menu"
  | "phone"
  | "search"
  | "shield"
  | "spark"
  | "upload";

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: <><path d="M5 12h14M14 7l5 5-5 5" /></>,
    bag: <><path d="M6 8h12l1 12H5L6 8Z" /><path d="M9 9V6a3 3 0 0 1 6 0v3" /></>,
    check: <><path d="m5 12 4 4L19 6" /></>,
    chevron: <><path d="m8 10 4 4 4-4" /></>,
    close: <><path d="m6 6 12 12M18 6 6 18" /></>,
    eye: <><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" /><circle cx="12" cy="12" r="2.5" /></>,
    factory: <><path d="M3 21V10l6-3v4l6-4v4l6-3v13Z" /><path d="M7 21v-4h3v4M15 15h2M15 18h2" /></>,
    layers: <><path d="m12 3-9 5 9 5 9-5-9-5Z" /><path d="m3 12 9 5 9-5M3 16l9 5 9-5" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="1" /><path d="m3 7 9 6 9-6" /></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    phone: <><path d="M8 3H5a2 2 0 0 0-2 2c0 8.8 7.2 16 16 16a2 2 0 0 0 2-2v-3l-4-1-2 2c-3.6-1.5-6.5-4.4-8-8l2-2-1-4Z" /></>,
    search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
    shield: <><path d="M12 3 4 6v5c0 5 3.4 8.5 8 10 4.6-1.5 8-5 8-10V6l-8-3Z" /><path d="m8.5 12 2.2 2.2 4.8-5" /></>,
    spark: <><path d="m12 3 1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3Z" /><path d="m19 17 .7 2.3L22 20l-2.3.7L19 23l-.7-2.3L16 20l2.3-.7L19 17Z" /></>,
    upload: <><path d="M12 16V4M7 9l5-5 5 5" /><path d="M5 15v5h14v-5" /></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

const products = [
  { name: "Full-Grain Leather", category: "Natural Textures", image: images.leather, description: "A natural-surface leather presentation with visible character and grain." },
  { name: "Top-Grain Leather", category: "Natural Textures", image: images.stitched, description: "A refined leather option presented for versatile product development." },
  { name: "Finished Leather", category: "Finished Leather", image: images.colors, description: "Finished surfaces in an editable range of tones and treatments." },
  { name: "Nubuck Leather", category: "Specialty Products", image: images.craft, description: "A soft-touch, fine-surface option for selected applications." },
  { name: "Suede Leather", category: "Specialty Products", image: images.quilted, description: "A tactile presentation with a soft, distinctive surface character." },
  { name: "Corrected-Grain Leather", category: "Finished Leather", image: images.hero, description: "A consistent, finished surface for specification-led requirements." },
];

const gallery = [
  { image: images.craft, label: "Workshop tools", category: "Manufacturing" },
  { image: images.colors, label: "Leather colour references", category: "Products" },
  { image: images.story, label: "Material preparation", category: "Manufacturing" },
  { image: images.leather, label: "Surface detail", category: "Products" },
  { image: images.stitched, label: "Stitching detail", category: "Products" },
];

function Logo() {
  return (
    <a className="logo" href="#home" aria-label="Kamil Leathers home">
      <span className="logo-mark"><span>K</span></span>
      <span><strong>KAMIL</strong><small>LEATHERS</small></span>
    </a>
  );
}

function SectionTitle({ eyebrow, title, text, light = false }: { eyebrow: string; title: string; text?: string; light?: boolean }) {
  return (
    <div className={`section-title ${light ? "light" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [category, setCategory] = useState("All Products");
  const [query, setQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<(typeof products)[0] | null>(null);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [attempted, setAttempted] = useState(false);

  const filtered = useMemo(
    () => products.filter((product) => (category === "All Products" || product.category === category) && product.name.toLowerCase().includes(query.toLowerCase())),
    [category, query],
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAttempted(true);
    const form = event.currentTarget;
    if (form.checkValidity()) {
      setSubmitted(true);
      form.reset();
    }
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="header">
        <div className="header-inner">
          <Logo />
          <nav id="primary-navigation" className={menuOpen ? "nav open" : "nav"} aria-label="Primary navigation">
            {[
              ["Home", "home"],
              ["About Us", "about"],
              ["Products", "products"],
              ["Manufacturing", "process"],
              ["Gallery", "gallery"],
              ["Contact", "contact"],
            ].map(([label, id]) => <a key={id} href={`#${id}`} onClick={closeMenu}>{label}</a>)}
            <a className="mobile-quote" href="#contact" onClick={closeMenu}>Request a quote</a>
          </nav>
          <div className="header-actions">
            <a className="icon-link" href="#products" aria-label="Search products"><Icon name="search" /></a>
            <a className="button button-dark quote-button" href="#contact">Request a quote <Icon name="arrow" size={17} /></a>
            <button className="menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} aria-controls="primary-navigation">
              <Icon name={menuOpen ? "close" : "menu"} />
            </button>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="hero" style={{ backgroundImage: `url(${images.hero})` }}>
          <div className="hero-overlay" />
          <div className="container hero-content">
            <div className="hero-copy">
              <span className="hero-kicker">Material expertise · Professional service</span>
              <h1>Crafted with Quality.<br /><em>Built on Trust.</em></h1>
              <p>Discover Kamil Leathers, where attention to material quality, craftsmanship and professional service come together.</p>
              <div className="button-row">
                <a className="button button-tan" href="#products">Explore our products <Icon name="arrow" size={17} /></a>
                <a className="button button-ghost" href="#contact">Contact our team</a>
              </div>
            </div>
            <div className="hero-note">
              <span>01</span><p>Purpose-led material selection for considered business requirements.</p>
            </div>
          </div>
          <a className="scroll-cue" href="#about"><span /> Scroll to discover</a>
        </section>

        <section id="about" className="section about">
          <div className="container about-grid">
            <div className="image-composition">
              <img src={images.story} alt="Leather artisan preparing material in a workshop" />
              <div className="image-caption"><b>Detail matters</b><span>From first selection to final finish</span></div>
            </div>
            <div className="about-copy">
              <SectionTitle eyebrow="About Kamil Leathers" title="Material knowledge, shaped by a quality-focused approach." />
              <p className="lead">Welcome to Kamil Leathers. Explore our leather products, business expertise and commitment to quality-focused processes and customer relationships.</p>
              <p>We believe professional partnerships begin with clear information and attentive communication. Company history and operational details shown here remain editable until verified.</p>
              <div className="feature-list">
                {[
                  ["01", "Quality-Focused Approach"],
                  ["02", "Leather Product Expertise"],
                  ["03", "Professional Customer Service"],
                ].map(([n, label]) => <div key={n}><span>{n}</span><strong>{label}</strong><Icon name="check" size={18} /></div>)}
              </div>
              <a className="text-link" href="#history">Discover our story <Icon name="arrow" size={18} /></a>
            </div>
          </div>
        </section>

        <section id="history" className="history">
          <div className="container history-grid">
            <SectionTitle eyebrow="Our journey" title="A story ready to be told with accuracy." text="The milestones below are structured placeholders and should be updated with verified company information." light />
            <div className="timeline">
              {["Company establishment", "Product range development", "Business expansion", "Current operations", "Future vision"].map((item, i) => (
                <div className="timeline-item" key={item}><span>{String(i + 1).padStart(2, "0")}</span><div><small>Year to be confirmed</small><h3>{item}</h3></div></div>
              ))}
            </div>
          </div>
        </section>

        <section id="products" className="section products">
          <div className="container">
            <div className="section-heading-row">
              <SectionTitle eyebrow="Product catalogue" title="Leather, considered in every detail." text="Illustrative categories shown for enquiry and subject to confirmation." />
              <div className="catalogue-note"><Icon name="layers" /><span>Editable product range<br /><b>Specifications on request</b></span></div>
            </div>
            <div className="product-toolbar">
              <div className="filters">
                {["All Products", "Finished Leather", "Natural Textures", "Specialty Products"].map((item) => (
                  <button key={item} onClick={() => setCategory(item)} className={category === item ? "active" : ""}>{item}</button>
                ))}
              </div>
              <label className="search-box"><Icon name="search" size={18} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search products" aria-label="Search products" /></label>
            </div>
            <div className="product-grid">
              {filtered.map((product, i) => (
                <article className="product-card" key={product.name}>
                  <button className="product-image" onClick={() => setSelectedProduct(product)} aria-label={`View ${product.name}`}>
                    <img src={product.image} alt={`${product.name} illustrative leather texture`} />
                    <span><Icon name="eye" /> Quick view</span>
                  </button>
                  <div className="product-body">
                    <span className="product-number">0{i + 1}</span><small>{product.category}</small>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <div><button className="text-link" onClick={() => setSelectedProduct(product)}>View details <Icon name="arrow" size={17} /></button><a href="#contact">Enquire now</a></div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="process">
          <div className="container">
            <SectionTitle eyebrow="Illustrative process" title="From material to finished leather." text="A clear framework for presenting operations once Kamil Leathers confirms its actual manufacturing process." light />
            <div className="process-grid">
              {[
                ["Raw Material Selection", "Materials are considered against the relevant product requirements."],
                ["Preparation & Processing", "Preparation stages support the intended surface and performance."],
                ["Tanning", "Controlled processing builds the foundation of the material."],
                ["Dyeing & Finishing", "Colour and finish are developed for the desired specification."],
                ["Quality Inspection", "Visual and specification checks inform product readiness."],
                ["Packaging & Dispatch", "Products are prepared for protected business delivery."],
              ].map(([title, text], i) => (
                <article key={title}><span>0{i + 1}</span><div className="process-icon"><Icon name={i === 4 ? "shield" : i === 5 ? "bag" : "layers"} /></div><h3>{title}</h3><p>{text}</p></article>
              ))}
            </div>
            <p className="disclaimer">Process shown for design and discussion purposes. Actual operations to be verified.</p>
          </div>
        </section>

        <section className="section quality">
          <div className="container quality-grid">
            <div className="quality-image"><img src={images.colors} alt="Assorted leather colour samples" /><div><Icon name="shield" size={28} /><span>Quality is in<br /><b>every detail.</b></span></div></div>
            <div>
              <SectionTitle eyebrow="Quality assurance" title="A closer look at what matters." text="A quality framework designed around clarity, consistency and product requirements." />
              <div className="quality-list">
                {["Material Inspection", "Surface & Texture Evaluation", "Colour Consistency", "Finish Verification", "Specification Checks", "Final Product Inspection"].map((item, i) => (
                  <div key={item}><span>{String(i + 1).padStart(2, "0")}</span><strong>{item}</strong><Icon name="check" size={17} /></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="applications">
          <div className="container">
            <SectionTitle eyebrow="Industries & applications" title="Materials for considered applications." text="Application areas remain illustrative until the product range is confirmed." />
            <div className="application-grid">
              {[
                ["Footwear", images.stitched],
                ["Bags & Accessories", images.craft],
                ["Furniture & Upholstery", images.quilted],
                ["Specialty Applications", images.leather],
              ].map(([name, image]) => <article key={name} style={{ backgroundImage: `url(${image})` }}><span>Possible application</span><h3>{name}</h3><Icon name="arrow" /></article>)}
            </div>
          </div>
        </section>

        <section id="gallery" className="section gallery-section">
          <div className="container">
            <div className="section-heading-row"><SectionTitle eyebrow="Inside Kamil Leathers" title="A visual story of material and craft." text="Stock imagery is used for presentation only and does not depict Kamil Leathers facilities." /><span className="photo-label">Photography placeholders</span></div>
            <div className="gallery-grid">
              {gallery.map((item, i) => (
                <button key={item.label} className={`gallery-item gallery-${i + 1}`} onClick={() => setLightbox(i)}>
                  <img src={item.image} alt={item.label} /><span><small>{item.category}</small>{item.label}<Icon name="eye" /></span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="section faq">
          <div className="container faq-grid">
            <SectionTitle eyebrow="Frequently asked questions" title="Useful information, before you enquire." text="Company-specific answers can be updated as verified details become available." />
            <div className="accordion">
              {[
                ["What types of leather do you supply?", "The product categories shown are illustrative. Please contact the team to confirm current availability and specifications."],
                ["Can I enquire about bulk orders?", "Yes. Share your estimated quantity, required finish and intended application so the team can review your enquiry."],
                ["Are custom colours or finishes available?", "Custom requirements may be discussed. Availability should be confirmed directly for each product and order."],
                ["How can I request a quotation?", "Complete the enquiry form with your product, quantity and specification details. This prototype does not send data to a live service."],
                ["Where is Kamil Leathers located?", "Verified office and factory addresses will be added once supplied by the company."],
              ].map(([question, answer], i) => (
                <article key={question} className={openFaq === i ? "open" : ""}>
                  <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)}><span>{String(i + 1).padStart(2, "0")}</span>{question}<Icon name="chevron" /></button>
                  <div><p>{answer}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container contact-grid">
            <div className="contact-copy">
              <span className="eyebrow">Business enquiries</span>
              <h2>Let's discuss your<br /><em>leather requirements.</em></h2>
              <p>Share your requirements with us to enquire about products, specifications, pricing or bulk orders.</p>
              <div className="contact-cards">
                <div><Icon name="mail" /><span><small>Business email</small>[Insert company email]</span></div>
                <div><Icon name="phone" /><span><small>Business phone</small>[Insert phone number]</span></div>
                <div><Icon name="factory" /><span><small>Office & factory</small>[Insert verified addresses]</span></div>
              </div>
            </div>
            <div className="form-card">
              {submitted ? (
                <div className="success-state"><span><Icon name="check" size={30} /></span><h3>Your enquiry is ready.</h3><p>This is a prototype confirmation. Connect a form service to deliver enquiries to Kamil Leathers.</p><button className="button button-dark" onClick={() => { setSubmitted(false); setAttempted(false); }}>Send another enquiry</button></div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-heading"><h3>Tell us what you need</h3><span>Fields marked * are required</span></div>
                  <div className="form-grid">
                    <label>Full Name *<input required name="name" placeholder="Your full name" />{attempted && <span>Please enter your name.</span>}</label>
                    <label>Business Email *<input required type="email" name="email" placeholder="name@company.com" />{attempted && <span>Enter a valid business email.</span>}</label>
                    <label>Company Name<input name="company" placeholder="Your company" /></label>
                    <label>Country<input name="country" placeholder="Country" /></label>
                    <label>Enquiry Type *<select required defaultValue=""><option value="" disabled>Select enquiry type</option><option>Product Information</option><option>Request a Quote</option><option>Bulk Order</option><option>Custom Requirements</option><option>Manufacturing Enquiry</option><option>General Enquiry</option></select></label>
                    <label>Product of Interest<select defaultValue=""><option value="">Select a product</option>{products.map((p) => <option key={p.name}>{p.name}</option>)}</select></label>
                    <label className="full">Subject *<input required name="subject" placeholder="How can we help?" /></label>
                    <label className="full">Message *<textarea required name="message" rows={4} placeholder="Tell us about your requirements, specifications and estimated quantity." /></label>
                  </div>
                  <label className="upload"><Icon name="upload" /><span><b>Attach a reference file</b><small>PDF, JPG or PNG · optional</small></span><input type="file" /></label>
                  <label className="consent"><input type="checkbox" required /><span>I agree that my details may be used to respond to this enquiry. *</span></label>
                  <button className="button button-tan submit" type="submit">Send enquiry <Icon name="arrow" size={18} /></button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-grid">
          <div><Logo /><p>Premium leather industry presentation focused on quality, professional service and clear business communication.</p></div>
          <div><h4>Company</h4><a href="#about">About Us</a><a href="#history">Company History</a><a href="#process">Manufacturing</a><a href="#gallery">Gallery</a></div>
          <div><h4>Products</h4><a href="#products">Product Catalogue</a><a href="#products">Product Details</a><a href="#contact">Request a Quote</a><a href="#contact">Contact Us</a></div>
          <div><h4>Business contact</h4><p>[Insert verified address]</p><p>[Insert company email]</p><p>[Insert phone number]</p></div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} Kamil Leathers. All rights reserved.</span><div><a href="#privacy">Privacy Policy</a><a href="#privacy">Terms & Conditions</a></div></div>
      </footer>

      {selectedProduct && (
        <div className="modal-backdrop" role="presentation" onMouseDown={() => setSelectedProduct(null)}>
          <div className="product-modal" role="dialog" aria-modal="true" aria-label={selectedProduct.name} onMouseDown={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProduct(null)} aria-label="Close"><Icon name="close" /></button>
            <div className="modal-image"><img src={selectedProduct.image} alt={selectedProduct.name} /><span>Illustrative product photography</span></div>
            <div className="modal-copy"><span className="eyebrow">{selectedProduct.category}</span><h2>{selectedProduct.name}</h2><p>{selectedProduct.description} Final material data should be added once specifications are confirmed.</p>
              <dl><div><dt>Finish</dt><dd>To be confirmed</dd></div><div><dt>Thickness</dt><dd>Available on request</dd></div><div><dt>Colour range</dt><dd>Subject to availability</dd></div></dl>
              <div className="swatches"><span /><span /><span /><span /></div>
              <a className="button button-dark" href="#contact" onClick={() => setSelectedProduct(null)}>Request a quote <Icon name="arrow" size={18} /></a>
            </div>
          </div>
        </div>
      )}

      {lightbox !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Gallery image">
          <button className="modal-close" onClick={() => setLightbox(null)} aria-label="Close"><Icon name="close" /></button>
          <button className="lightbox-arrow prev" onClick={() => setLightbox((lightbox - 1 + gallery.length) % gallery.length)} aria-label="Previous image">‹</button>
          <figure><img src={gallery[lightbox].image} alt={gallery[lightbox].label} /><figcaption><span>{gallery[lightbox].category}</span>{gallery[lightbox].label} · Stock photography placeholder</figcaption></figure>
          <button className="lightbox-arrow next" onClick={() => setLightbox((lightbox + 1) % gallery.length)} aria-label="Next image">›</button>
        </div>
      )}
    </div>
  );
}

export default App;
