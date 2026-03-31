'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    propertyAddress: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you. We will contact you within 24 hours for a confidential discussion.')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center gap-3">
              <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
                <rect width="40" height="40" rx="8" fill="#1e3a8a"/>
                <path d="M12 28V16L20 12L28 16V28" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 28V20H24V28" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div>
                <div className="font-bold text-gray-900 tracking-tight">Street Smart Investments</div>
                <div className="text-xs text-gray-500">Alberta Multi-Family Acquisitions</div>
              </div>
            </Link>
            <div className="hidden lg:flex items-center gap-10">
              <a href="#how-it-works" className="text-sm text-gray-600 hover:text-gray-900 transition font-medium">How It Works</a>
              <a href="#properties" className="text-sm text-gray-600 hover:text-gray-900 transition font-medium">What We Buy</a>
              <a href="#services" className="text-sm text-gray-600 hover:text-gray-900 transition font-medium">Services</a>
              <a href="#about" className="text-sm text-gray-600 hover:text-gray-900 transition font-medium">About</a>
              <a href="#contact" className="text-sm bg-[#1e3a8a] text-white px-6 py-2.5 rounded-md hover:bg-[#1e40af] transition font-medium">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1e3a8a]/20 bg-[#1e3a8a]/5 mb-8">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#10b981]"></span>
                </div>
                <span className="text-sm font-medium text-gray-700">Actively acquiring in Southern Alberta</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-[1.05]">
                We buy<br/>
                <span className="text-[#1e3a8a]">multi-family</span><br/>
                properties
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
                Direct acquisitions across Alberta. Flexible terms including traditional financing, VTB arrangements, and equity partnerships.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <a href="#contact" className="group inline-flex items-center gap-2 bg-[#1e3a8a] text-white px-8 py-4 rounded-lg hover:bg-[#1e40af] transition-all shadow-lg shadow-[#1e3a8a]/20 font-semibold">
                  Discuss Your Property
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a href="#how-it-works" className="inline-flex items-center gap-2 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-[#1e3a8a] hover:text-[#1e3a8a] transition-all font-semibold">
                  Our Process
                </a>
              </div>

              <div className="flex items-center gap-8 pt-8 border-t border-gray-200">
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-gray-900">60</span>
                    <span className="text-2xl font-bold text-[#f59e0b]">+</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">Units managed</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-gray-900">24</span>
                    <span className="text-2xl font-bold text-[#f59e0b]">hr</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">Response time</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">Alberta</div>
                  <div className="text-sm text-gray-600 mt-1">Province-wide</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="relative">
                <div className="bg-gradient-to-br from-[#1e3a8a] via-[#2563eb] to-[#3b82f6] rounded-2xl p-8 shadow-2xl">
                  <div className="text-white space-y-6">
                    <div className="pb-6 border-b border-white/20">
                      <div className="text-sm font-medium text-white/80 mb-2">We acquire</div>
                      <div className="text-4xl font-bold">5-100+ units</div>
                    </div>
                    
                    <div className="space-y-4">
                      {[
                        { city: 'Lethbridge', status: 'Primary market' },
                        { city: 'Calgary', status: 'Active' },
                        { city: 'Edmonton', status: 'Active' },
                        { city: 'Southern AB', status: 'Expanding' }
                      ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/10">
                          <span className="font-medium">{item.city}</span>
                          <span className="text-xs px-3 py-1 bg-[#f59e0b] rounded-full font-semibold">{item.status}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute -z-10 -right-8 -bottom-8 w-32 h-32 bg-[#f59e0b] rounded-full opacity-20 blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Widget */}
      <section className="py-12 px-6 lg:px-8 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-[#f59e0b]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-lg font-semibold text-gray-900">5.0 Rating</span>
          </div>
          <p className="text-gray-600">Based on verified Google reviews from property sellers</p>
          <p className="mt-2 text-sm text-gray-400">(Google Reviews widget will connect to localcash4homebuyers.com)</p>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-16 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: '🏢', label: 'Direct Buyer', desc: 'No brokers involved' },
              { icon: '🤝', label: 'Confidential', desc: 'Private process' },
              { icon: '⚡', label: 'Fast Response', desc: 'Within 24 hours' },
              { icon: '💼', label: 'Flexible Terms', desc: 'Creative structures' }
            ].map((item, i) => (
              <div key={i} className="text-center p-6 bg-white rounded-xl hover:shadow-md transition">
                <div className="text-4xl mb-3">{item.icon}</div>
                <div className="font-bold text-gray-900 mb-1">{item.label}</div>
                <div className="text-sm text-gray-600">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">How it works</h2>
            <p className="text-xl text-gray-600">Simple, transparent process from inquiry to closing</p>
          </div>

          <div className="space-y-8">
            {[
              { 
                num: '01', 
                title: 'Initial Discussion', 
                desc: 'Contact us with basic property details. We respond within 24 hours to schedule a confidential conversation.',
                time: 'Day 1'
              },
              { 
                num: '02', 
                title: 'Property Evaluation', 
                desc: 'We review financials, conduct site visit if needed, and analyze the opportunity based on our investment criteria.',
                time: 'Days 2-5'
              },
              { 
                num: '03', 
                title: 'Written Offer', 
                desc: 'Receive a formal written offer with clear terms, pricing structure, and proposed timeline. No obligation to accept.',
                time: 'Days 5-7'
              },
              { 
                num: '04', 
                title: 'Due Diligence & Closing', 
                desc: 'Once accepted, we complete due diligence and close on a timeline that works for you — typically 30-90 days.',
                time: 'Days 30-90'
              }
            ].map((step, i) => (
              <div key={i} className="flex gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center text-xl font-bold">
                    {step.num}
                  </div>
                </div>
                <div className="flex-1 bg-gray-50 p-8 rounded-xl border border-gray-200">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                    <span className="text-sm font-semibold text-[#f59e0b] bg-[#f59e0b]/10 px-3 py-1 rounded-full">{step.time}</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Properties We Buy */}
      <section id="properties" className="py-24 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">What we acquire</h2>
            <p className="text-xl text-gray-600">Multi-family and commercial properties across Alberta</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: 'Multi-Family Residential',
                desc: 'Our primary focus',
                items: ['5+ unit apartment buildings', 'Duplexes & triplexes', 'Small residential complexes', 'Portfolio acquisitions']
              },
              {
                title: 'Commercial & Mixed-Use',
                desc: 'Select opportunities',
                items: ['Mixed-use properties', 'Retail with residential', 'Office buildings', 'Income-producing assets']
              }
            ].map((section, i) => (
              <div key={i} className="bg-white border-2 border-gray-200 rounded-2xl p-10 hover:border-[#1e3a8a] hover:shadow-xl transition-all">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{section.title}</h3>
                <p className="text-sm text-[#f59e0b] font-semibold mb-6">{section.desc}</p>
                <ul className="space-y-3">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-[#10b981] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-[#1e3a8a] to-[#2563eb] rounded-2xl p-10 text-white">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">Flexible transaction structures</h3>
                <p className="text-white/90 leading-relaxed">
                  Every property and seller situation is unique. We structure deals to fit your specific needs and timeline.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {['Traditional Financing', 'Vendor Take-Back', 'Equity Partnership', 'Joint Venture', 'All Cash Offers', 'Hybrid Structures'].map((item, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center text-sm font-semibold">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Beyond acquisitions</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div className="bg-white rounded-2xl p-10 border-l-4 border-[#1e3a8a] shadow-lg">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-[#1e3a8a]/10 rounded-xl mb-4">
                  <svg className="w-7 h-7 text-[#1e3a8a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-3">Asset Management</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Professional property management for our portfolio and select client properties. Currently managing 60+ units with institutional-grade systems.
                </p>
              </div>
              <ul className="space-y-3">
                {['Tenant screening & placement', 'Maintenance coordination', 'Financial reporting', 'Lease administration'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <div className="w-5 h-5 rounded-full bg-[#10b981] flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-10 border-l-4 border-[#f59e0b] shadow-lg">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-[#f59e0b]/10 rounded-xl mb-4">
                  <svg className="w-7 h-7 text-[#f59e0b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-3">Investor Partnerships</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Co-investment opportunities for accredited investors. We source, execute, and manage multi-family acquisitions across Alberta.
                </p>
              </div>
              <ul className="space-y-3">
                {['Deal sourcing & underwriting', 'Acquisition execution', 'Operational management', 'Portfolio advisory'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <div className="w-5 h-5 rounded-full bg-[#10b981] flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">About Street Smart Investments</h2>
          <div className="w-20 h-1 bg-[#f59e0b] mx-auto mb-10"></div>
          <div className="text-lg text-gray-600 leading-relaxed space-y-6 text-left">
            <p>
              Street Smart Investments Ltd. is an Alberta-based real estate investment firm specializing in multi-family and commercial property acquisitions across the province.
            </p>
            <p>
              We operate a portfolio of income-producing assets and provide acquisition advisory services to institutional investors. Our approach combines disciplined underwriting with creative deal structuring, enabling transactions through traditional financing, vendor take-back arrangements, equity partnerships, and hybrid models.
            </p>
            <p>
              With active operations in Lethbridge, Calgary, Edmonton, and secondary Alberta markets, we focus exclusively on multi-family and commercial income-producing real estate. Our team manages 60+ residential units with systems built for operational efficiency and scale.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form - FULL VERSION */}
      <section id="contact" className="py-24 px-6 lg:px-8 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Let's discuss your property</h2>
              <p className="text-xl text-gray-300 mb-8">
                Confidential conversation. No obligation. Professional evaluation within 24 hours.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#1e3a8a] flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-lg mb-1">Fast Response</div>
                    <div className="text-gray-400">Initial reply within 24 hours, always</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#1e3a8a] flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-lg mb-1">Complete Confidentiality</div>
                    <div className="text-gray-400">Your information stays private</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#1e3a8a] flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-lg mb-1">No Obligation</div>
                    <div className="text-gray-400">Just exploring? Perfectly fine</div>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-10 shadow-2xl">
              <div className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent transition"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone *</label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent transition"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent transition"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Property Type *</label>
                  <select
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent transition"
                    value={formData.propertyType}
                    onChange={(e) => setFormData({...formData, propertyType: e.target.value})}
                  >
                    <option value="">Select type</option>
                    <option value="5+ Unit Building">5+ Unit Building</option>
                    <option value="2-4 Unit Multi-Family">2-4 Unit Multi-Family</option>
                    <option value="Apartment Complex">Apartment Complex</option>
                    <option value="Mixed-Use">Mixed-Use</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Portfolio">Portfolio (Multiple Properties)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Property Location</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent transition"
                    placeholder="City or address"
                    value={formData.propertyAddress}
                    onChange={(e) => setFormData({...formData, propertyAddress: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Tell us about your property</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent transition resize-none"
                    placeholder="Number of units, occupancy rate, timeline, asking price..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1e3a8a] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#1e40af] transition-all shadow-lg hover:shadow-xl text-lg"
                >
                  Submit Inquiry
                </button>
                
                <p className="text-xs text-gray-500 text-center">
                  We respond within 24 hours. Your information is kept strictly confidential.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 lg:px-8 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center gap-3 mb-6">
                <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
                  <rect width="40" height="40" rx="8" fill="#1e3a8a"/>
                  <path d="M12 28V16L20 12L28 16V28" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 28V20H24V28" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div>
                  <div className="font-bold text-gray-900 text-lg">Street Smart Investments</div>
                  <div className="text-sm text-gray-600">Alberta Multi-Family Acquisitions</div>
                </div>
              </Link>
              <p className="text-gray-600 leading-relaxed max-w-md">
                Specialized real estate investment firm focused on acquiring and operating income-producing properties across Alberta.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#how-it-works" className="hover:text-[#1e3a8a]">How It Works</a></li>
                <li><a href="#properties" className="hover:text-[#1e3a8a]">Properties We Buy</a></li>
                <li><a href="#services" className="hover:text-[#1e3a8a]">Services</a></li>
                <li><a href="#about" className="hover:text-[#1e3a8a]">About Us</a></li>
                <li><a href="#contact" className="hover:text-[#1e3a8a]">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p>contact@stsmart.ca</p>
                <p>Alberta, Canada</p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-center text-sm text-gray-500">
              © 2025 Street Smart Investments Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}