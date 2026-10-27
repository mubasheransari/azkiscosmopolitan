import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
import Link from "next/link";
import { categories } from "@/lib/data";

export const metadata = { title: "Products" };

export default function Products() {
  return (
    <>
      <PageHero kicker="Our products" title="Everything you can imagine in the defence sector" lead="Our product catalogue, organized by category. Can't find an item? We import and indent on request." image="/images/products.jpg" />
      <section className="section">
        <div className="wrap cat-layout">
          <nav className="cat-index" aria-label="Categories">
            {categories.map((c) => <a key={c.id} href={`#${c.id}`}>{c.title}</a>)}
          </nav>
          <div>
            {categories.map((c) => (
              <article key={c.id} id={c.id} className="cat">
                <div className="cat-head">
                  <span className="ico"><Icon name={c.icon} /></span>
                  <div><h2>{c.title}</h2><p>{c.blurb}</p></div>
                </div>
                <ul className="spec">
                  {c.items.map((i) => <li key={i.name}><b>{i.name}</b><span>{i.desc}</span></li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="cta">
        <div className="wrap">
          <h2>Need a quotation or technical details?</h2>
          <Link className="btn gold-btn" href="/contact">Send an enquiry</Link>
        </div>
      </section>
    </>
  );
}
