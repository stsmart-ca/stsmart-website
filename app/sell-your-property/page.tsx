'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function SellYourProperty() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    units: '',
    timeline: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you! We will call you within 24 hours to discuss your property.')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Minimal header */}
      <header className="py-6 px-6 border-b border-gray-200">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
              <rect width="40" height="40" rx="8" fill="#1e3a8a"/>
              <path d="M12 28V16L20 12L28 16V28" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 28V20H24V28" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div>
              <div className="font-bold text-gray-900">Street Smart Investments</div>
              <div className="text-xs text-gray-500">Alberta Property Buyers</div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-[#f59e0b]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="font-semibold text-gray-900">5.0</span>
          </div>
        </div>
      </header>

      {/* Hero + Form Section */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Copy */}
            <div>
              <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 px-4 py-2 rounded-full mb-6">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-green-700">We are buying now in Alberta</span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Sell Your Multi-Family Property Fast
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Get a no-obligation cash offer on your apartment building, duplex, or multi-family property in as little as 24 hours.
              </p>

              {/* Benefits */}
              <div className="space-y-4 mb-10">
                <div className="flex gap-4 items-start">
                  <div className="text-3xl flex-shrink-0">💰</div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">Fair Cash Offers</div>
                    <div className="text-sm text-gray-600">Competitive pricing based on current market conditions</div>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="text-3xl flex-shrink-0">⚡</div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">Fast Closing</div>
                    <div className="text-sm text-gray-600">Close on your timeline - as quick as 30 days or take 90+</div>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="text-3xl flex-shrink-0">🏢</div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">Any Condition</div>
                    <div className="text-sm text-gray-600">We buy properties as-is, no repairs needed</div>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="text-3xl flex-shrink-0">🤝</div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">No Commissions</div>
                    <div className="text-sm text-gray-600">Save 4-6% by selling directly to us</div>
                  </div>
                </div>
              </div>

              {/* Trust indicators */}
              <div className="border-t border-gray-200 pt-8">
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-[#1e3a8a]">60+</div>
                    <div className="text-xs text-gray-600">Units Owned</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#1e3a8a]">24hr</div>
                    <div className="text-xs text-gray-600">Response</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#1e3a8a]">Local</div>
                    <div className="text-xs text-gray-600">Alberta Based</div>
                  </div>
                </div>
              </div>

              {/* Social proof */}
              <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#f59e0b] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Professional and straightforward</div>
                    <div className="text-sm text-gray-600 italic">They made selling my duplex so easy. No hassle, fair price, quick close.</div>
                    <div className="text-xs text-gray-500 mt-2">- Property owner, Lethbridge</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:sticky lg:top-6">
              <div className="bg-white border-2 border-[#1e3a8a] rounded-2xl p-8 shadow-xl">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Get Your Cash Offer</h2>
                  <p className="text-gray-600">Fill out the form below. We will contact you within 24 hours.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#1e3a8a] transition"
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#1e3a8a] transition"
                      placeholder="(403) 555-1234"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#1e3a8a] transition"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Property Address *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#1e3a8a] transition"
                      placeholder="123 Main St, Lethbridge, AB"
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Number of Units *</label>
                    <select
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#1e3a8a] transition"
                      value={formData.units}
                      onChange={(e) => setFormData({...formData, units: e.target.value})}
                    >
                      <option value="">Select...</option>
                      <option value="2-4">2-4 units</option>
                      <option value="5-10">5-10 units</option>
                      <option value="11-20">11-20 units</option>
                      <option value="21-50">21-50 units</option>
                      <option value="50+">50+ units</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">When do you want to sell? *</label>
                    <select
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#1e3a8a] transition"
                      value={formData.timeline}
                      onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                    >
                      <option value="">Select timeline...</option>
                      <option value="ASAP">As soon as possible</option>
                      <option value="1-3 months">Within 1-3 months</option>
                      <option value="3-6 months">Within 3-6 months</option>
                      <option value="6+ months">6+ months / Just exploring</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#1e3a8a] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#1e40af] transition-all shadow-lg text-lg"
                  >
                    Get My Cash Offer Now →
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    By submitting, you agree to receive communication from us. No spam, just property discussion.
                  </p>
                </form>

                {/* Trust badges */}
                <div className="mt-6 pt-6 border-t border-gray-200 flex items-center justify-center gap-6 text-xs text-gray-600">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span>Secure and confidential</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>No obligation</span>
                  </div>
                </div>
              </div>

              {/* Below form CTA */}
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600 mb-2">Prefer to talk? Call us directly:</p>
                <a href="tel:4035551234" className="text-2xl font-bold text-[#1e3a8a] hover:text-[#1e40af]">(403) 555-1234</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1e3a8a] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">Submit Info</h3>
              <p className="text-gray-600">Fill out the form above with your property details</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1e3a8a] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">Get Offer</h3>
              <p className="text-gray-600">We evaluate and send you a written cash offer within 24-48 hours</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1e3a8a] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">Close Fast</h3>
              <p className="text-gray-600">Choose your closing date - we can close in as little as 30 days</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Common Questions</h2>
          <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-6 hover:border-[#1e3a8a] transition">
              <h3 className="font-bold text-lg text-gray-900 mb-2">What types of properties do you buy?</h3>
              <p className="text-gray-600">We buy multi-family properties including duplexes, triplexes, fourplexes, apartment buildings (5+ units), and mixed-use properties across Alberta.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 hover:border-[#1e3a8a] transition">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Do I have to pay any fees or commissions?</h3>
              <p className="text-gray-600">No. We buy properties directly, so there are no realtor commissions (typically 4-6% of sale price). You keep more of your sale price.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 hover:border-[#1e3a8a] transition">
              <h3 className="font-bold text-lg text-gray-900 mb-2">How fast can you close?</h3>
              <p className="text-gray-600">We can close in as little as 30 days, or we can work with your timeline - even if you need 90+ days. You choose the closing date.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 hover:border-[#1e3a8a] transition">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Do you buy properties that need work?</h3>
              <p className="text-gray-600">Yes. We buy properties in any condition. You do not need to make any repairs or improvements before selling.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 hover:border-[#1e3a8a] transition">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Is there any obligation after I submit the form?</h3>
              <p className="text-gray-600">Absolutely not. Submitting the form simply starts a conversation. You are under no obligation to accept our offer.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-[#1e3a8a] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Your Cash Offer?</h2>
          <p className="text-xl text-gray-200 mb-8">Join the property owners who sold fast and hassle-free</p>
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}) }} className="inline-block bg-[#f59e0b] text-white px-10 py-5 rounded-lg font-bold hover:bg-[#d97706] transition text-lg shadow-xl">
            Get Started Now ↑
          </a>
        </div>
      </section>

      {/* Minimal footer */}
      <footer className="py-8 px-6 bg-gray-900 text-gray-400 text-center text-sm">
        <p>© 2025 Street Smart Investments Ltd. | <Link href="/" className="hover:text-white">Back to Main Site</Link></p>
      </footer>
    </div>
  )
}