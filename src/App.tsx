import { useState } from 'react'

const WHATSAPP_NUMBER = '971525635982'

function App() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', interest: '', budget: '', message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you! We will contact you shortly.')
  }

  return (
    <div style={{ fontFamily: 'Georgia, serif', background: '#f7f8fc', color: '#1c2230', margin: 0 }}>

      {/* Header */}
      <header style={{ background: '#fff', borderBottom: '1px solid #e8edf5', position: 'sticky', top: 0, zIndex: 999 }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '16px 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: 24, fontWeight: 800, color: '#0d6efd' }}>UAE Property Finder</div>
          <nav style={{ display: 'flex', gap: 24 }}>
            {['#benefits', '#locations', '#types', '#faq'].map((href, i) => (
              <a key={i} href={href} style={{ color: '#1c2230', fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>
                {['Why UAE', 'Top Areas', 'Property Types', 'FAQ'][i]}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, rgba(12,24,48,0.92), rgba(13,110,253,0.88)), url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80) center/cover',
        color: '#fff', padding: '90px 5%'
      }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 40, alignItems: 'center' }}>
          <div>
            <h1 style={{ fontSize: 52, lineHeight: 1.1, marginBottom: 20, fontWeight: 800 }}>Buy Property in the UAE With Confidence</h1>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.92)', marginBottom: 24 }}>
              Explore premium apartments, villas, townhouses, and investment opportunities across the UAE.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px 24px', marginBottom: 28, fontSize: 15 }}>
              {['Exclusive listings', 'Expert local guidance', 'Investor-friendly opportunities', 'Flexible payment plans'].map(p => (
                <span key={p}>✔ {p}</span>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 14 }}>
              <a href="#lead-form" style={{ background: '#0d6efd', color: '#fff', padding: '14px 28px', borderRadius: 10, fontWeight: 700, textDecoration: 'none' }}>Get Property Options</a>
              <a href="#locations" style={{ background: 'transparent', color: '#fff', border: '2px solid #fff', padding: '14px 28px', borderRadius: 10, fontWeight: 700, textDecoration: 'none' }}>View Top Areas</a>
            </div>
          </div>

          {/* Lead Form */}
          <div id="lead-form" style={{ background: '#fff', color: '#1c2230', padding: 30, borderRadius: 18, boxShadow: '0 20px 45px rgba(0,0,0,0.18)' }}>
            <h3 style={{ fontSize: 26, marginBottom: 10, color: '#0d6efd' }}>Request Property Details</h3>
            <p style={{ color: '#606a7d', marginBottom: 20, fontSize: 15 }}>Fill out the form and get matched with properties based on your budget.</p>
            <form onSubmit={handleSubmit} autoComplete='off'>
              {[
                { name: 'name', placeholder: 'Full Name', type: 'text' },
                { name: 'email', placeholder: 'Email Address', type: 'email' },
                { name: 'phone', placeholder: 'Phone / WhatsApp Number', type: 'tel' },
              ].map(f => (
                <input key={f.name} type={f.type} name={f.name} placeholder={f.placeholder} required
                  onChange={handleChange}
                  style={{ width: '100%', padding: 14, border: '1px solid #d9e2f0', borderRadius: 10, fontSize: 15, marginBottom: 15, boxSizing: 'border-box' }} />
              ))}
              <select name="interest" required onChange={handleChange}
                style={{ width: '100%', padding: 14, border: '1px solid #d9e2f0', borderRadius: 10, fontSize: 15, marginBottom: 15 }}>
                <option value="">I am interested in</option>
                {['Buying a home', 'Investment property', 'Off-plan property', 'Ready property'].map(o => <option key={o}>{o}</option>)}
              </select>
              <select name="budget" required onChange={handleChange}
                style={{ width: '100%', padding: 14, border: '1px solid #d9e2f0', borderRadius: 10, fontSize: 15, marginBottom: 15 }}>
                <option value="">Select budget</option>
                {['Under AED 500,000', 'AED 500,000 - AED 1,000,000', 'AED 1,000,000 - AED 3,000,000', 'AED 3,000,000+'].map(o => <option key={o}>{o}</option>)}
              </select>
              <textarea name="message" placeholder="Tell us what kind of property you are looking for"
                onChange={handleChange}
                style={{ width: '100%', padding: 14, border: '1px solid #d9e2f0', borderRadius: 10, fontSize: 15, marginBottom: 15, minHeight: 90, resize: 'vertical', boxSizing: 'border-box' }} />
              <button type="submit"
                style={{ width: '100%', background: '#0d6efd', color: '#fff', padding: 15, borderRadius: 10, fontSize: 16, fontWeight: 800, border: 'none', cursor: 'pointer' }}>
                Get My Property Options
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" style={{ padding: '75px 5%' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 45 }}>
            <h2 style={{ fontSize: 40, marginBottom: 12 }}>Why Buy Property in the UAE?</h2>
            <p style={{ color: '#667085', fontSize: 17, maxWidth: 760, margin: '0 auto' }}>The UAE offers a strong real estate market, world-class infrastructure, and diverse opportunities.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
            {[
              { title: 'Strong Investment Potential', desc: 'Access high-demand locations, growing communities, and properties suitable for capital appreciation and rental returns.' },
              { title: 'Luxury Lifestyle', desc: 'From waterfront apartments to gated villas, the UAE offers modern living, safety, and exceptional amenities.' },
              { title: 'Wide Property Selection', desc: 'Choose from ready units, off-plan projects, branded residences, family homes, and investor-focused opportunities.' },
            ].map(c => (
              <div key={c.title} style={{ background: '#fff', padding: 28, borderRadius: 16, border: '1px solid #edf2f7', boxShadow: '0 8px 22px rgba(17,24,39,0.05)' }}>
                <h3 style={{ fontSize: 22, marginBottom: 12 }}>{c.title}</h3>
                <p style={{ color: '#667085', fontSize: 15 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section id="locations" style={{ padding: '75px 5%', background: '#eef4ff' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 45 }}>
            <h2 style={{ fontSize: 40, marginBottom: 12 }}>Popular Areas in the UAE</h2>
            <p style={{ color: '#667085', fontSize: 17, maxWidth: 760, margin: '0 auto' }}>Explore some of the most sought-after locations for living and investing.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}>
            {[
              { name: 'Dubai', desc: 'Luxury apartments, waterfront living, branded residences, and strong investor demand.', img: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=900&q=80' },
              { name: 'Abu Dhabi', desc: 'Premium family communities, modern urban living, and long-term stability.', img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80' },
              { name: 'Sharjah', desc: 'Affordable housing, family-friendly areas, and easy access to major business hubs.', img: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80' },
              { name: 'Ras Al Khaimah', desc: 'Resort-style communities, coastal living, and emerging investment opportunities.', img: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80' },
            ].map(l => (
              <div key={l.name} style={{ background: '#fff', borderRadius: 16, overflow: 'hidden', boxShadow: '0 8px 22px rgba(17,24,39,0.05)', border: '1px solid #edf2f7' }}>
                <img src={l.img} alt={l.name} style={{ width: '100%', height: 210, objectFit: 'cover', display: 'block' }} />
                <div style={{ padding: 18 }}>
                  <h4 style={{ fontSize: 22, marginBottom: 8 }}>{l.name}</h4>
                  <p style={{ color: '#667085', fontSize: 14 }}>{l.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section id="types" style={{ padding: '75px 5%' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 45 }}>
            <h2 style={{ fontSize: 40, marginBottom: 12 }}>Property Types We Can Help You Find</h2>
            <p style={{ color: '#667085', fontSize: 17, maxWidth: 760, margin: '0 auto' }}>Whether you want a family home or investment unit, we match you with the right options.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
            {[
              { title: 'Apartments', desc: 'Modern studios, 1-bedroom, 2-bedroom, and luxury penthouses in prime communities.', items: ['City living', 'High rental appeal', 'Premium amenities'] },
              { title: 'Villas & Townhouses', desc: 'Spacious homes for families looking for privacy, comfort, and community living.', items: ['Gated communities', 'Private gardens', 'Family-friendly neighborhoods'] },
              { title: 'Investment Properties', desc: 'Opportunities designed for buyers seeking income-producing or growth-focused real estate.', items: ['Off-plan projects', 'Ready-to-rent units', 'Flexible payment plans'] },
            ].map(p => (
              <div key={p.title} style={{ background: '#fff', padding: 28, borderRadius: 16, border: '1px solid #edf2f7', boxShadow: '0 8px 22px rgba(17,24,39,0.05)' }}>
                <h3 style={{ fontSize: 24, marginBottom: 10 }}>{p.title}</h3>
                <p style={{ color: '#667085', fontSize: 15 }}>{p.desc}</p>
                <ul style={{ listStyle: 'none', marginTop: 16, padding: 0 }}>
                  {p.items.map(item => (
                    <li key={item} style={{ padding: '8px 0', color: '#4b5563', borderBottom: '1px solid #f1f5f9', fontSize: 15 }}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ padding: '75px 5%', background: '#f8fbff' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 45 }}>
            <h2 style={{ fontSize: 40, marginBottom: 12 }}>How It Works</h2>
            <p style={{ color: '#667085', fontSize: 17 }}>Our process is simple, fast, and focused on helping serious buyers find the right property.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}>
            {[
              { n: 1, title: 'Submit Inquiry', desc: 'Tell us your budget, preferred area, and property type.' },
              { n: 2, title: 'Receive Options', desc: 'We shortlist suitable properties based on your exact needs.' },
              { n: 3, title: 'Schedule Viewing', desc: 'Visit the properties or receive full details remotely.' },
              { n: 4, title: 'Move Forward', desc: 'Get support through negotiation, reservation, and purchase steps.' },
            ].map(s => (
              <div key={s.n} style={{ background: '#fff', padding: '28px 20px', textAlign: 'center', borderRadius: 16, border: '1px solid #edf2f7', boxShadow: '0 8px 22px rgba(17,24,39,0.05)' }}>
                <div style={{ width: 52, height: 52, margin: '0 auto 16px', borderRadius: '50%', background: '#0d6efd', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 800 }}>{s.n}</div>
                <h4 style={{ fontSize: 20, marginBottom: 10 }}>{s.title}</h4>
                <p style={{ color: '#667085', fontSize: 15 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: '75px 5%' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 45 }}>
            <h2 style={{ fontSize: 40, marginBottom: 12 }}>What Buyers Say</h2>
            <p style={{ color: '#667085', fontSize: 17 }}>Clients trust us to simplify the buying process and help them make informed decisions.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
            {[
              { quote: 'The team helped me compare multiple communities and I found the perfect apartment for investment.', name: 'Ahmed, Dubai' },
              { quote: 'Very smooth process. I received quality options quickly and got guidance at every step.', name: 'Sarah, Abu Dhabi' },
              { quote: 'I was buying from overseas and they made the entire search and selection process very easy.', name: 'Daniel, International Buyer' },
            ].map(t => (
              <div key={t.name} style={{ background: '#fff', padding: 28, borderRadius: 16, border: '1px solid #edf2f7', boxShadow: '0 8px 22px rgba(17,24,39,0.05)' }}>
                <p style={{ color: '#4b5563', marginBottom: 16, fontSize: 15 }}>"{t.quote}"</p>
                <strong style={{ fontSize: 15, color: '#111827' }}>— {t.name}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '75px 5%' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #101828, #1d2939)', color: '#fff', padding: '60px 30px', borderRadius: 24, textAlign: 'center' }}>
            <h2 style={{ fontSize: 40, marginBottom: 14 }}>Ready to Find Your UAE Property?</h2>
            <p style={{ maxWidth: 760, margin: '0 auto 24px', color: 'rgba(255,255,255,0.88)', fontSize: 17 }}>Get handpicked options that match your budget, location, and goals.</p>
            <a href="#lead-form" style={{ background: '#0d6efd', color: '#fff', padding: '14px 28px', borderRadius: 10, fontWeight: 700, textDecoration: 'none', fontSize: 16 }}>Request Property Details</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ padding: '75px 5%', background: '#eef4ff' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 45 }}>
            <h2 style={{ fontSize: 40, marginBottom: 12 }}>Frequently Asked Questions</h2>
          </div>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            {[
              { q: 'Can international buyers purchase property in the UAE?', a: 'Yes, many areas in the UAE offer opportunities for international buyers, depending on the location and project.' },
              { q: 'Do you offer both ready and off-plan properties?', a: 'Yes, we can help you explore both ready-to-move-in properties and off-plan opportunities with flexible payment options.' },
              { q: 'Can I buy for investment purposes?', a: 'Yes, many buyers choose UAE properties for rental income, resale potential, or long-term asset growth.' },
              { q: 'How do I get started?', a: 'Simply fill out the inquiry form and we will contact you with suitable options based on your requirements.' },
            ].map(f => (
              <div key={f.q} style={{ background: '#fff', padding: 22, borderRadius: 14, marginBottom: 16, border: '1px solid #edf2f7', boxShadow: '0 8px 22px rgba(17,24,39,0.04)' }}>
                <h4 style={{ fontSize: 20, marginBottom: 10 }}>{f.q}</h4>
                <p style={{ color: '#667085', fontSize: 15 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#0f172a', color: 'rgba(255,255,255,0.82)', textAlign: 'center', padding: '28px 0', fontSize: 14 }}>
        © 2026 UAE Property Finder. All rights reserved.
      </footer>

      {/* WhatsApp Float */}
      <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20I%20am%20interested%20in%20buying%20property%20in%20the%20UAE`}
        target="_blank"
        style={{ position: 'fixed', right: 22, bottom: 22, background: '#25D366', color: '#fff', padding: '16px 22px', borderRadius: 50, fontWeight: 700, boxShadow: '0 8px 20px rgba(0,0,0,0.25)', zIndex: 1000, textDecoration: 'none', fontSize: 15 }}>
        💬 Chat on WhatsApp
      </a>
    </div>
  )
}

export default App