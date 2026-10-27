import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
import Photo from "@/components/Photo";
import Link from "next/link";
import { services } from "@/lib/data";

export const metadata = { title: "Services" };

export default function Services() {
  return (
    <>
      <PageHero kicker="Our services" title="Integrated expertise, end-to-end delivery" lead="One accountable partner for power, data, voice, security, civil works and turnkey projects — from feasibility and design to commissioning and post-completion support." image="/images/services.jpg" />
      <section className="section">
        <div className="wrap svc-page">
          {services.map((s) => (
            <article className="svc" key={s.id} id={s.id}>
              <Photo src={s.img} icon={s.icon} />
              <div className="svc-body">
                <span className="ico" style={{ display: "grid", placeItems: "center", width: 40, height: 40, borderRadius: "50%", background: "var(--gold-l)", color: "var(--gold-d)", marginBottom: ".8rem" }}><Icon name={s.icon} size={20} sw={1.5} /></span>
                <h3>{s.title}</h3><p>{s.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="cta">
        <div className="wrap">
          <h2>Planning a branch, office or site project?</h2>
          <Link className="btn gold-btn" href="/contact">Contact our team</Link>
        </div>
      </section>
    </>
  );
}
