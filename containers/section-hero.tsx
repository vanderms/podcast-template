import Link from "next/link";


export default function SectionHero() {
  return (
    <section className="nv-section-hero" aria-labelledby="nv-section-hero__title">
      <header className="header">
        <h1 id='nv-section-hero__title' className="title">Your daily <strong>Podcast</strong></h1>
        <p className="copy">We cover all kinds of categories and a weekly special guest.</p>
        <a href="/#" className="cta">Subscribe</a>
      </header>

    </section>
    
  )
}