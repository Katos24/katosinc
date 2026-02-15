import Link from 'next/link';
import { ArrowRight, Code, Zap, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Software that makes<br />your business <span className="text-blue-400">work.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Not grow. Just work.
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Built for small business owners tired of spreadsheets, missed follow-ups, 
            and staying late to send quotes.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <Link 
            href="#projects"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition shadow-lg hover:shadow-xl"
          >
            View My Work
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link 
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-xl text-lg transition border-2 border-white/20"
          >
            Get in Touch
          </Link>
        </div>

        {/* Value Props */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Built Fast</h3>
            <p className="text-gray-400">
              Ship in weeks, not months. No bloat, just what you need to run your business.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
              <Code className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Custom Solutions</h3>
            <p className="text-gray-400">
              Your business is unique. Your software should be too. Built specifically for how you work.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Made for Real People</h3>
            <p className="text-gray-400">
              No technical degree required. Software that your team will actually use.
            </p>
          </div>
        </div>

        {/* Projects Section */}
        <div id="projects" className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Featured Work</h2>
          
          <div className="space-y-8">
            {/* Savvy Home Upgrade */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">🏗️ Savvy Home Upgrade</h3>
                  <p className="text-blue-400 font-semibold">Contractor CRM & Workflow Tool</p>
                </div>
                <Link 
                  href="https://savvyhomeupgrade.com"
                  target="_blank"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-sm transition"
                >
                  View Demo
                </Link>
              </div>
              <p className="text-gray-300 mb-4">
                Built for electricians and contractors to manage leads, scheduling, quotes, 
                and customer communication—all in one place.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                <div className="bg-white/5 rounded-lg p-3">
                  <p className="text-xs text-gray-400">Feature</p>
                  <p className="text-sm font-semibold text-white">Lead Management</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <p className="text-xs text-gray-400">Feature</p>
                  <p className="text-sm font-semibold text-white">Quote Generation</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <p className="text-xs text-gray-400">Feature</p>
                  <p className="text-sm font-semibold text-white">Scheduling</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <p className="text-xs text-gray-400">Feature</p>
                  <p className="text-sm font-semibold text-white">Payment Tracking</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-semibold">Next.js</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-semibold">TypeScript</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs font-semibold">Supabase</span>
                <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-xs font-semibold">Stripe</span>
              </div>
            </div>

            {/* Simply Dipped */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">🍫 Simply Dipped</h3>
                  <p className="text-purple-400 font-semibold">E-commerce Platform</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Online ordering system for gourmet brownie bite business. Custom product 
                builder, checkout flow, and order management.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-semibold">Next.js</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-semibold">React</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs font-semibold">Tailwind</span>
              </div>
            </div>

            {/* Throwback AI */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-green-500/50 transition">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">📸 Throwback AI</h3>
                  <p className="text-green-400 font-semibold">AI Photo Generator</p>
                </div>
                <Link 
                  href="https://throwbackai.app"
                  target="_blank"
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold text-sm transition"
                >
                  Try it Out
                </Link>
              </div>
              <p className="text-gray-300 mb-4">
                AI-powered nostalgic photo transformation app. Upload a photo, get a vintage 
                yearbook-style portrait in seconds.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-semibold">Next.js</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-semibold">OpenAI</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs font-semibold">Stripe</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 bg-white/5 text-gray-300 rounded-lg text-sm font-semibold border border-white/10">Next.js</span>
            <span className="px-4 py-2 bg-white/5 text-gray-300 rounded-lg text-sm font-semibold border border-white/10">React</span>
            <span className="px-4 py-2 bg-white/5 text-gray-300 rounded-lg text-sm font-semibold border border-white/10">TypeScript</span>
            <span className="px-4 py-2 bg-white/5 text-gray-300 rounded-lg text-sm font-semibold border border-white/10">Supabase</span>
            <span className="px-4 py-2 bg-white/5 text-gray-300 rounded-lg text-sm font-semibold border border-white/10">Tailwind CSS</span>
            <span className="px-4 py-2 bg-white/5 text-gray-300 rounded-lg text-sm font-semibold border border-white/10">Stripe</span>
            <span className="px-4 py-2 bg-white/5 text-gray-300 rounded-lg text-sm font-semibold border border-white/10">Vercel</span>
            <span className="px-4 py-2 bg-white/5 text-gray-300 rounded-lg text-sm font-semibold border border-white/10">OpenAI</span>
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Need custom software for your business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's talk about how I can help your business work better.
          </p>
          <Link 
            href="mailto:alexkatos24@gmail.com"
            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-blue-600 font-bold py-4 px-8 rounded-xl text-lg transition shadow-lg hover:shadow-xl"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Footer */}
        <div className="mt-20 text-center text-gray-500 text-sm">
          <p>© 2026 KatosInc. Built by Alex Katos.</p>
        </div>
      </div>
    </div>
  );
}