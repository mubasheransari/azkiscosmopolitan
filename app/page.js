import Link from "next/link";
import Icon from "@/components/Icon";
import Photo from "@/components/Photo";
import { company, services, process, why, projects, industries, about, categories } from "@/lib/data";

const strip = ["bolt", "hub", "phone", "video", "lock", "buildings", "cube", "cog"];

export default function Home() {
  const stats = [
    { icon: "clock", n: company.established, l: "Established" },
    { icon: "shield", n: "4+", l: "Decades of Experience" },
    { icon: "users", n: company.staff, l: "Dedicated Personnel" },
    { icon: "pin", n: company.offices.length, l: "Major Cities" },
  ];
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-img" />
        <div className="wrap hero-in">
          <div className="hero-copy">
            <p className="kicker">Integrated Infrastructure &amp; Turnkey Solutions</p>
            <h1>From Concept to Commissioning.</h1>
            <h2 className="sub">One Partner. Complete Solution.</h2>
            <p className="desc">We provide end-to-end infrastructure, engineering and technology solutions — from material procurement to installation, testing, commissioning and final handover.</p>
            <Link className="btn gold-btn" href="/services">Explore Our Services <Icon name="arrow" size={15} sw={2} /></Link>
          </div>
          <aside className="hero-side" aria-hidden="true">
            <span>Engineering</span><span>Integration</span><span>Construction</span><span>Technology</span>
            <i />
          </aside>
        </div>
      </section>

      {/* SERVICE ICON STRIP */}
      <section className="strip">
        <div className="wrap strip-in">
          {services.map((s, i) => (
            <Link key={s.id} href={`/services#${s.id}`}>
              <Icon name={strip[i]} size={26} sw={1.5} />
              <span>{s.short}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ONE-WINDOW APPROACH */}
      <section className="section">
        <div className="wrap approach">
          <Photo src="/images/approach.jpg" icon="hub"><b>Integrated<br />Solutions.<br />Real Results.</b></Photo>
          <div>
            <span className="eyebrow">Our Approach</span>
            <h2>One-Window Project Solution</h2>
            <p>We manage the entire lifecycle — from planning and design to material procurement, installation, testing, commissioning and final handover. You get a single, accountable partner for all your infrastructure and technology needs.</p>
            <div className="flow">
              {process.map((p, i) => (
                <div key={p.title} style={{ display: "contents" }}>
                  <div className="flow-step"><span className="flow-ico"><Icon name={p.icon} size={22} sw={1.5} /></span>{p.title}</div>
                  {i < process.length - 1 && <span className="flow-arrow"><Icon name="arrow" size={14} sw={1.4} /></span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section" style={{ paddingTop: "1rem", background: "#fff" }}>
        <div className="wrap">
          <div className="sec-title"><span className="eyebrow caps">Our Services</span><h2>Comprehensive Services for Modern Infrastructure</h2></div>
          <div className="svc-grid">
            {services.map((s) => (
              <Link key={s.id} href={`/services#${s.id}`} className="svc">
                <Photo src={s.img} icon={s.icon} />
                <div className="svc-body">
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <span className="more">Learn More <Icon name="arrow" size={12} sw={2} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="why">
        <div className="wrap">
          <span className="eyebrow">WHY AZKIS COSMOPOLITAN</span>
          <h2>More Than a Service Provider — Your Long-Term Project Partner</h2>
          <div className="why-grid">
            {why.map((w) => (
              <div className="why-item" key={w.title}>
                <Icon name={w.icon} size={30} sw={1.4} />
                <div><b>{w.title}</b><span>{w.text}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section" style={{ paddingBottom: "1.6rem" }}>
        <div className="wrap">
          <div className="proj-head">
            <div>
              <span className="eyebrow caps">Featured Projects</span>
              <h2>Our Work Speaks for Itself</h2>
              <p>Commercial buildings, branches, corporate offices and turnkey projects across Pakistan.</p>
            </div>
            <Link href="/contact" className="btn outline sm">View All Projects <Icon name="arrow" size={12} sw={2} /></Link>
          </div>
          <div className="proj-grid">
            {projects.map((p) => (
              <div className="proj" key={p.title}>
                <Photo src={p.img} icon="buildings" />
                <b>{p.title}</b><small>{p.tags}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="ind">
        <div className="wrap">
          <span className="eyebrow caps">Industries We Serve</span>
          <h2>Trusted by Leading Businesses</h2>
          <div className="ind-row">
            {industries.map((i) => (
              <div key={i.title}><Icon name={i.icon} size={24} sw={1.4} />{i.title}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT + STATS */}
      <section className="section">
        <div className="wrap abt">
          <Photo src="/images/about-card.jpg" icon="buildings"><b>Building<br />Infrastructure<br />For a Sustainable<br />Tomorrow</b></Photo>
          <div>
            <h3>About AZKIS Cosmopolitan</h3>
            <p>{about.intro}</p>
            <Link href="/about" className="btn gold-btn sm">Learn More <Icon name="arrow" size={12} sw={2} /></Link>
          </div>
          <div className="stats">
            {stats.map((s) => (
              <div className="stat" key={s.l}><Icon name={s.icon} size={26} sw={1.4} /><div><b>{s.n}</b><span>{s.l}</span></div></div>
            ))}
          </div>
        </div>
      </section>

      {/* MD MESSAGE + CATALOGUE */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap duo2">
          <div>
            <h3>Message from the Managing Director</h3>
            <div className="testi">
              <Icon name="quote" size={30} sw={1.6} />
              <div>
                <p>{about.md.text.split(". ").slice(0, 2).join(". ")}.</p>
                <small>— Managing Director, {company.name}</small>
              </div>
            </div>
          </div>
          <div>
            <h3>From Our Catalogue</h3>
            <div className="news">
              {categories.slice(0, 2).map((c) => (
                <Link key={c.id} href={`/products#${c.id}`}>
                  <Photo icon={c.icon} />
                  <div><b>{c.title}</b><small>{c.blurb}</small><em>View products →</em></div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
