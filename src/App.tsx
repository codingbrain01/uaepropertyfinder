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
    <div className="font-serif bg-gray-50 text-gray-900">

      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-5 py-4 flex justify-between items-center">
          <div className="text-xl md:text-2xl font-extrabold text-blue-600">UAE Property Finder</div>
          <nav className="hidden md:flex gap-6">
            {[['#benefits','Why UAE'],['#locations','Top Areas'],['#types','Property Types'],['#faq','FAQ']].map(([href, label]) => (
              <a key={href} href={href} className="text-gray-800 font-semibold text-sm hover:text-blue-600 transition">{label}</a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section
        className="text-white py-16 md:py-24 px-5"
        style={{ background: "linear-gradient(135deg, rgba(12,24,48,0.92), rgba(13,110,253,0.88)), url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-5">
              Buy Property in the UAE With Confidence
            </h1>
            <p className="text-base md:text-lg text-white/90 mb-6">
              Explore premium apartments, villas, townhouses, and investment opportunities across the UAE.
            </p>
            <div className="flex flex-wrap gap-3 mb-7 text-sm text-white/90">
              {['Exclusive listings','Expert local guidance','Investor-friendly opportunities','Flexible payment plans'].map(p => (
                <span key={p}>✔ {p}</span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="#lead-form" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold transition">Get Property Options</a>
              <a href="#locations" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-xl font-bold transition">View Top Areas</a>
            </div>
          </div>

          {/* Lead Form */}
          <div id="lead-form" className="bg-white text-gray-900 p-6 md:p-8 rounded-2xl shadow-2xl">
            <h3 className="text-2xl font-extrabold text-blue-600 mb-2">Request Property Details</h3>
            <p className="text-gray-500 text-sm mb-5">Fill out the form and get matched with properties based on your budget.</p>
            <form onSubmit={handleSubmit} autoComplete="off" className="space-y-4">
              {[
                { name: 'name', placeholder: 'Full Name', type: 'text' },
                { name: 'email', placeholder: 'Email Address', type: 'email' },
                { name: 'phone', placeholder: 'Phone / WhatsApp Number', type: 'tel' },
              ].map(f => (
                <input key={f.name} type={f.type} name={f.name} placeholder={f.placeholder} required
                  onChange={handleChange} autoComplete="off"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-blue-400 transition" />
              ))}
              <select name="interest" required onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-blue-400 transition bg-white">
                <option value="">I am interested in</option>
                {['Buying a home','Investment property','Off-plan property','Ready property'].map(o => <option key={o}>{o}</option>)}
              </select>
              <select name="budget" required onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-blue-400 transition bg-white">
                <option value="">Select budget</option>
                {['Under AED 500,000','AED 500,000 - AED 1,000,000','AED 1,000,000 - AED 3,000,000','AED 3,000,000+'].map(o => <option key={o}>{o}</option>)}
              </select>
              <textarea name="message" placeholder="Tell us what kind of property you are looking for"
                onChange={handleChange} autoComplete="off"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-blue-400 transition resize-vertical min-h-24" />
              <button type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl text-base font-extrabold transition">
                Get My Property Options
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-16 md:py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Why Buy Property in the UAE?</h2>
            <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">The UAE offers a strong real estate market, world-class infrastructure, and diverse opportunities.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Strong Investment Potential', desc: 'Access high-demand locations, growing communities, and properties suitable for capital appreciation and rental returns.' },
              { title: 'Luxury Lifestyle', desc: 'From waterfront apartments to gated villas, the UAE offers modern living, safety, and exceptional amenities.' },
              { title: 'Wide Property Selection', desc: 'Choose from ready units, off-plan projects, branded residences, family homes, and investor-focused opportunities.' },
            ].map(c => (
              <div key={c.title} className="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold mb-3">{c.title}</h3>
                <p className="text-gray-500 text-sm">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section id="locations" className="py-16 md:py-20 px-5 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Popular Areas in the UAE</h2>
            <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">Explore some of the most sought-after locations for living and investing.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { name: 'Dubai', desc: 'Luxury apartments, waterfront living, branded residences, and strong investor demand.', img: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=900&q=80' },
              { name: 'Abu Dhabi', desc: 'Premium family communities, modern urban living, and long-term stability.', img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80' },
              { name: 'Sharjah', desc: 'Affordable housing, family-friendly areas, and easy access to major business hubs.', img: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80' },
              { name: 'Ras Al Khaimah', desc: 'Resort-style communities, coastal living, and emerging investment opportunities.', img: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80' },
            ].map(l => (
              <div key={l.name} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <img src={l.img} alt={l.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h4 className="text-lg font-bold mb-2">{l.name}</h4>
                  <p className="text-gray-500 text-sm">{l.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section id="types" className="py-16 md:py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Property Types We Can Help You Find</h2>
            <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">Whether you want a family home or investment unit, we match you with the right options.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Apartments', desc: 'Modern studios, 1-bedroom, 2-bedroom, and luxury penthouses in prime communities.', items: ['City living','High rental appeal','Premium amenities'] },
              { title: 'Villas & Townhouses', desc: 'Spacious homes for families looking for privacy, comfort, and community living.', items: ['Gated communities','Private gardens','Family-friendly neighborhoods'] },
              { title: 'Investment Properties', desc: 'Opportunities designed for buyers seeking income-producing or growth-focused real estate.', items: ['Off-plan projects','Ready-to-rent units','Flexible payment plans'] },
            ].map(p => (
              <div key={p.title} className="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{p.desc}</p>
                <ul className="divide-y divide-gray-100">
                  {p.items.map(item => (
                    <li key={item} className="py-2 text-gray-600 text-sm">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-20 px-5 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">How It Works</h2>
            <p className="text-gray-500 text-base md:text-lg">Our process is simple, fast, and focused on helping serious buyers.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { n: 1, title: 'Submit Inquiry', desc: 'Tell us your budget, preferred area, and property type.' },
              { n: 2, title: 'Receive Options', desc: 'We shortlist suitable properties based on your exact needs.' },
              { n: 3, title: 'Schedule Viewing', desc: 'Visit the properties or receive full details remotely.' },
              { n: 4, title: 'Move Forward', desc: 'Get support through negotiation, reservation, and purchase steps.' },
            ].map(s => (
              <div key={s.n} className="bg-white p-7 text-center rounded-2xl border border-gray-100 shadow-sm">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-600 text-white flex items-center justify-center text-lg font-extrabold">{s.n}</div>
                <h4 className="text-lg font-bold mb-2">{s.title}</h4>
                <p className="text-gray-500 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">What Buyers Say</h2>
            <p className="text-gray-500 text-base md:text-lg">Clients trust us to simplify the buying process.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { quote: 'The team helped me compare multiple communities and I found the perfect apartment for investment.', name: 'Ahmed, Dubai' },
              { quote: 'Very smooth process. I received quality options quickly and got guidance at every step.', name: 'Sarah, Abu Dhabi' },
              { quote: 'I was buying from overseas and they made the entire search and selection process very easy.', name: 'Daniel, International Buyer' },
            ].map(t => (
              <div key={t.name} className="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm">
                <p className="text-gray-600 text-sm mb-4">"{t.quote}"</p>
                <strong className="text-sm text-gray-900">— {t.name}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-10 md:p-16 rounded-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Find Your UAE Property?</h2>
            <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mb-8">Get handpicked options that match your budget, location, and goals.</p>
            <a href="#lead-form" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-base transition">Request Property Details</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 md:py-20 px-5 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: 'Can international buyers purchase property in the UAE?', a: 'Yes, many areas in the UAE offer opportunities for international buyers, depending on the location and project.' },
              { q: 'Do you offer both ready and off-plan properties?', a: 'Yes, we can help you explore both ready-to-move-in properties and off-plan opportunities with flexible payment options.' },
              { q: 'Can I buy for investment purposes?', a: 'Yes, many buyers choose UAE properties for rental income, resale potential, or long-term asset growth.' },
              { q: 'How do I get started?', a: 'Simply fill out the inquiry form and we will contact you with suitable options based on your requirements.' },
            ].map(f => (
              <div key={f.q} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h4 className="text-base md:text-lg font-bold mb-2">{f.q}</h4>
                <p className="text-gray-500 text-sm">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white/80 text-center py-6 text-sm">
        © 2026 UAE Property Finder. All rights reserved.
      </footer>

      {/* WhatsApp Float */}
      <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20I%20am%20interested%20in%20buying%20property%20in%20the%20UAE`}
        target="_blank"
        rel="noreferrer"
        className="fixed right-5 bottom-5 bg-green-500 hover:bg-green-600 text-white px-5 py-4 rounded-full font-bold shadow-xl z-50 transition text-sm">
        💬 Chat on WhatsApp
      </a>
    </div>
  )
}

export default App