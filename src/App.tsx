/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  TrendingUp,
  Brain,
  Users,
  LineChart,
  Network,
  Wand2,
  Zap,
  RefreshCw,
  Eye,
  ShieldCheck,
  Scale,
  CircleDollarSign,
  PiggyBank,
  Quote,
  CloudCog,
  BrainCircuit,
  CheckCircle2,
  Timer,
  Layers,
  Bot,
  Database,
  Shield,
  Gift
} from 'lucide-react';

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#faf8ff]/70 dark:bg-[#131b2e]/70 backdrop-blur-xl shadow-[0_24px_48px_-12px_rgba(19,27,46,0.08)]">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 py-4">
        <div className="text-2xl font-extrabold text-[#090054] dark:text-[#ffffff] tracking-tighter">
          The E-commerce Loyalty Loop
        </div>
        <div className="hidden md:flex items-center space-x-8 font-headline font-semibold tracking-tight">
          <a className="text-[#131b2e]/60 hover:text-[#090054] transition-all duration-300" href="#">Platform</a>
          <a className="text-[#131b2e]/60 hover:text-[#090054] transition-all duration-300" href="#">Solutions</a>
          <a className="text-[#131b2e]/60 hover:text-[#090054] transition-all duration-300" href="#">Case Studies</a>
          <a className="text-[#131b2e]/60 hover:text-[#090054] transition-all duration-300" href="#">Pricing</a>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-[#131b2e]/60 font-semibold hover:opacity-80 transition-all">Log In</button>
          <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-6 py-2.5 rounded-lg font-semibold shadow-lg hover:opacity-90 transition-all scale-95 active:scale-90">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden px-8 py-20 lg:py-32 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary-container text-tertiary-fixed font-medium text-xs mb-6 uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-tertiary-fixed animate-pulse"></span>
            Next-Gen Retention Agent
          </div>
          <h1 className="text-6xl lg:text-7xl font-extrabold text-primary leading-tight tracking-tighter mb-8">
            Stop Silent Churn <br />
            <span className="text-secondary">Before It Happens.</span>
          </h1>
          <p className="text-xl text-on-surface-variant leading-relaxed mb-10 max-w-xl">
            The Only Loyalty Agent That Rewards Feelings, Not Just Receipts. Most loyalty apps wait for a purchase to give a point. We use <span className="text-primary font-bold">Autonomous AI Agents</span> to monitor your customer sentiment in real-time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 py-4 rounded-lg text-lg font-bold shadow-2xl hover:opacity-95 transition-all flex items-center justify-center gap-3">
              Deploy My Loyalty Agent
              <TrendingUp className="w-6 h-6" />
            </button>
            <button className="bg-surface-container-high text-on-secondary-container px-8 py-4 rounded-lg text-lg font-semibold hover:bg-surface-variant transition-all">
              Watch Demo
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-primary/5 rounded-[3rem] rotate-3 -z-10"></div>
          <div className="bg-surface-container-lowest p-4 rounded-[2.5rem] shadow-2xl overflow-hidden border border-outline-variant/15">
            <img 
              alt="AI data visualization" 
              className="rounded-[2rem] w-full h-[500px] object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOR8RTi9Wqa-F9M9xdZovXxBwVL2G1WPT1ksFYf_rLVitvb1swyhS72leenBZphwUHh5fx-fA2xySw2HP9VYDjryB2kFmHaMITNKVjNG9twhzugK8vW0fDcTfdT4oTuDaJuYIZosnacu4LoA4wbGtNnJi7cdWpeJ__rOuUA0CCdDg8iV7sOFRwEGte7HrUkBEHZMWBMGlnH8xiRSsZbVwo0TZk5unTTFKRhsfaxuiEimfMjGY1kalpMxNXrTMjr3wllEcgnxnhbPQ"
              referrerPolicy="no-referrer"
            />
            {/* Floating Intelligence Pulse UI */}
            <div className="absolute bottom-12 -left-8 bg-surface-container-lowest p-6 rounded-2xl shadow-xl border-l-4 border-tertiary-fixed max-w-xs animate-[bounce_3s_infinite]">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-tertiary-container rounded-lg">
                  <Brain className="w-6 h-6 text-tertiary-fixed" />
                </div>
                <div>
                  <p className="text-xs font-bold text-on-surface/50 uppercase">Live Sentiment Agent</p>
                  <p className="text-sm font-bold text-on-surface">Detecting Frustration...</p>
                </div>
              </div>
              <div className="h-2 w-full bg-surface-container-high rounded-full overflow-hidden">
                <div className="h-full bg-tertiary-fixed w-3/4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ValueProposition() {
  return (
    <section className="bg-surface-container-low py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold text-primary mb-4 tracking-tight">The Modern Retention Architecture</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">Engineered for mid-market Shopify brands that demand enterprise-grade intelligence without the bloat.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-surface-container-lowest p-10 rounded-2xl transition-all hover:-translate-y-2 group">
            <div className="w-14 h-14 bg-primary-fixed rounded-xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-on-primary transition-colors">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-primary">Turn Buyers into Advocates</h3>
            <p className="text-on-surface-variant leading-relaxed">Go beyond transactional emails. Build a community of superfans who drive organic growth through sentiment-led rewards.</p>
          </div>
          <div className="bg-surface-container-lowest p-10 rounded-2xl transition-all hover:-translate-y-2 group">
            <div className="w-14 h-14 bg-tertiary-fixed rounded-xl flex items-center justify-center mb-8 group-hover:bg-tertiary group-hover:text-tertiary-fixed transition-colors">
              <LineChart className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-primary">Slash CAC by 40%</h3>
            <p className="text-on-surface-variant leading-relaxed">It's 7x cheaper to keep a customer than acquire a new one. Our agents predict churn and intervene before the customer even knows they're unhappy.</p>
          </div>
          <div className="bg-surface-container-lowest p-10 rounded-2xl transition-all hover:-translate-y-2 group">
            <div className="w-14 h-14 bg-secondary-container rounded-xl flex items-center justify-center mb-8 group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
              <Network className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-primary">Salesforce Native</h3>
            <p className="text-on-surface-variant leading-relaxed">Total customer context. Sync your Agentforce data seamlessly to create a unified profile across sales, support, and marketing.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <h2 className="text-4xl font-extrabold text-primary mb-16 text-center tracking-tight">Technical Prowess Meets Business Value</h2>
      <div className="grid lg:grid-cols-2 gap-px bg-outline-variant/10 rounded-3xl overflow-hidden">
        {/* Row 1 */}
        <div className="bg-surface p-12 border-b lg:border-r border-outline-variant/15">
          <div className="flex items-start gap-6">
            <div className="p-4 bg-tertiary-container rounded-2xl">
              <Wand2 className="w-10 h-10 text-tertiary-fixed" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-tertiary-fixed-variant uppercase tracking-widest mb-2">Feature</h4>
              <h3 className="text-2xl font-bold text-primary mb-4">Sentiment-Triggered Remediation</h3>
              <div className="flex items-center gap-2 text-on-surface-variant bg-surface-container-low px-4 py-2 rounded-lg inline-flex">
                <Zap className="w-4 h-4" />
                <span className="text-sm font-bold">Benefit: Save 10+ hours a week</span>
              </div>
            </div>
          </div>
        </div>
        {/* Row 2 */}
        <div className="bg-surface p-12 border-b border-outline-variant/15">
          <div className="flex items-start gap-6">
            <div className="p-4 bg-primary-fixed rounded-2xl">
              <RefreshCw className="w-10 h-10 text-primary" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-on-primary-fixed-variant uppercase tracking-widest mb-2">Feature</h4>
              <h3 className="text-2xl font-bold text-primary mb-4">Salesforce Agentforce Sync</h3>
              <div className="flex items-center gap-2 text-on-surface-variant bg-surface-container-low px-4 py-2 rounded-lg inline-flex">
                <Eye className="w-4 h-4" />
                <span className="text-sm font-bold">Benefit: Total Customer Context</span>
              </div>
            </div>
          </div>
        </div>
        {/* Row 3 */}
        <div className="bg-surface p-12 lg:border-r border-outline-variant/15">
          <div className="flex items-start gap-6">
            <div className="p-4 bg-secondary-fixed rounded-2xl">
              <ShieldCheck className="w-10 h-10 text-on-secondary-container" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-on-secondary-fixed-variant uppercase tracking-widest mb-2">Feature</h4>
              <h3 className="text-2xl font-bold text-primary mb-4">PII-Redacted AI Analysis</h3>
              <div className="flex items-center gap-2 text-on-surface-variant bg-surface-container-low px-4 py-2 rounded-lg inline-flex">
                <Scale className="w-4 h-4" />
                <span className="text-sm font-bold">Benefit: Worry-Free Compliance</span>
              </div>
            </div>
          </div>
        </div>
        {/* Row 4 */}
        <div className="bg-surface p-12">
          <div className="flex items-start gap-6">
            <div className="p-4 bg-surface-container-high rounded-2xl">
              <CircleDollarSign className="w-10 h-10 text-primary" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-outline uppercase tracking-widest mb-2">Feature</h4>
              <h3 className="text-2xl font-bold text-primary mb-4">Dynamic Reward Engine</h3>
              <div className="flex items-center gap-2 text-on-surface-variant bg-surface-container-low px-4 py-2 rounded-lg inline-flex">
                <PiggyBank className="w-4 h-4" />
                <span className="text-sm font-bold">Benefit: Maximize Every Cent</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  return (
    <section className="py-24 px-8 bg-primary overflow-hidden relative">
      <div className="absolute inset-0 opacity-10">
        <img 
          alt="Background texture" 
          className="w-full h-full object-cover" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0Iz8CqxZa93htd2aWtD2TrgaTYYeGcFJ_8IWTjgPpOM4OQCMsxtqrk9TOCn17TQq_V3v949TKFBDeBwwwdg_3es4_Bfh62qp9dcYaq_Kj9wdwhCKwvKlVkefzG87PVZnr0bUX0zbshDb3DGLxzmLZn1NPp-5PrQ-rhCWn2LCcK1QdZsdJeGulfv-mGpo2M8oa4FBI7AqcloYhLcWCQZEuGTE1ldTH995aaSUfahfMOTEc5p4tfELQvGxj_K9UX8QhHcdJg8AMgGI"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="max-w-4xl mx-auto relative z-10 text-center flex flex-col items-center">
        <Quote className="w-16 h-16 text-tertiary-fixed mb-8" />
        <p className="text-3xl md:text-4xl font-headline font-bold text-on-primary leading-tight mb-12 italic">
          "Finally, a loyalty tool that isn't just a widget. It's like having a 24/7 retention specialist who never sleeps."
        </p>
        <div className="flex items-center justify-center gap-4 mb-16">
          <img 
            alt="Beta Partner" 
            className="w-16 h-16 rounded-full border-2 border-tertiary-fixed" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtQyvgzSnBq3GpdYdhm6WGKeXt5Yojdz6qzgKip5N44pseWIhb3Z4PTflTxHbjRa0LfEsCWtWnERF2VxQ7fx849Zmf9VhCJ1UdTIROCeU3Iq1kUj1j5upa5gaJY0DIE9rO6Fo5WqhjuSfnscQBnb3VY1hojEWq3-s7ZJx9iEZnTr2hUWSVKK1TjLMJsuRqgcRmT6Hisk7JA5zJT6uWXHHHzmlE81vid7vgiH3O_RrShe5ylZM7PaYYhELBbJQuclTmE-nshd9wxpE"
            referrerPolicy="no-referrer"
          />
          <div className="text-left">
            <p className="text-on-primary font-bold">Simulated Beta Partner</p>
            <p className="text-primary-fixed/60">Shopify Plus Merchant</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center border-t border-on-primary/10 pt-16 w-full">
          <div className="flex flex-col items-center gap-3">
            <ShieldCheck className="w-10 h-10 text-tertiary-fixed" />
            <p className="text-primary-fixed font-semibold text-sm">Google Cloud Security Certified</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <CloudCog className="w-10 h-10 text-tertiary-fixed" />
            <p className="text-primary-fixed font-semibold text-sm">Salesforce Sales Operations Expert</p>
          </div>
          <div className="flex flex-col items-center gap-3 col-span-2 md:col-span-1">
            <BrainCircuit className="w-10 h-10 text-tertiary-fixed" />
            <p className="text-primary-fixed font-semibold text-sm">AI for Good Frameworks</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function OfferSection() {
  return (
    <section className="py-32 px-8 bg-surface relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-error-container text-on-error-container font-bold text-sm mb-6 uppercase tracking-widest animate-pulse">
            <Timer className="w-4 h-4" />
            Only 10 Beta Spots Available
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-primary mb-6 tracking-tight">
            The "Founding Founder" Retention Bundle
          </h2>
          <p className="text-xl text-on-surface-variant max-w-2xl mx-auto">
            Exclusive to the first 10 Shopify Plus Merchants. Maximize your retention with our indisputable value stack.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Left Column: Value Stack & Bonuses */}
          <div className="lg:col-span-3 space-y-8">
            <div className="bg-surface-container-low p-8 lg:p-10 rounded-[2.5rem]">
              <h3 className="text-2xl font-bold text-primary mb-8 flex items-center gap-3">
                <Layers className="w-7 h-7 text-tertiary-fixed-variant" />
                The Indisputable Bundle
              </h3>
              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="mt-1 bg-tertiary-container p-3 rounded-xl h-fit">
                    <Bot className="w-6 h-6 text-tertiary-fixed" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-xl mb-1">The Agent</h4>
                    <p className="text-on-surface-variant leading-relaxed">24/7 Autonomous Sentiment Monitoring & Auto-Remediation <span className="text-tertiary-fixed-variant font-semibold">(Value: $1,500/mo)</span></p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="mt-1 bg-primary-fixed p-3 rounded-xl h-fit">
                    <Database className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-xl mb-1">The Infrastructure</h4>
                    <p className="text-on-surface-variant leading-relaxed">Professional Salesforce-to-Shopify RevOps Sync—ensuring every AI action is logged in your CRM.</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="mt-1 bg-secondary-fixed p-3 rounded-xl h-fit">
                    <Shield className="w-6 h-6 text-on-secondary-container" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-xl mb-1">The Security Shield</h4>
                    <p className="text-on-surface-variant leading-relaxed">A GCP-backed Security Perimeter audit ensuring all AI interactions are PII-redacted and compliant.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-low p-8 lg:p-10 rounded-[2.5rem]">
              <h3 className="text-2xl font-bold text-primary mb-8 flex items-center gap-3">
                <Gift className="w-7 h-7 text-tertiary-fixed-variant" />
                Irresistible Bonuses
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-tertiary-fixed-variant shrink-0 mt-0.5" />
                  <span className="text-on-surface-variant leading-relaxed"><strong className="text-primary">Bonus #1: The "Churn Risk" Template Library.</strong> Pre-built sentiment triggers for the top 25 e-commerce friction points.</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-tertiary-fixed-variant shrink-0 mt-0.5" />
                  <span className="text-on-surface-variant leading-relaxed"><strong className="text-primary">Bonus #2: White-Glove "Agentforce" Setup.</strong> We personally configure your Salesforce actions to ensure the loop is seamless.</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-tertiary-fixed-variant shrink-0 mt-0.5" />
                  <span className="text-on-surface-variant leading-relaxed"><strong className="text-primary">Bonus #3: Monthly Retention ROI Report.</strong> A technical deep-dive on how much "silent churn" was prevented each month.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Pricing Card */}
          <div className="lg:col-span-2 bg-surface-container-lowest p-8 lg:p-10 rounded-[2.5rem] shadow-[0_24px_48px_-12px_rgba(19,27,46,0.08)] border border-outline-variant/15 relative overflow-hidden sticky top-32">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-tertiary-fixed"></div>
            <h3 className="text-sm font-bold text-outline uppercase tracking-widest mb-2">The "Autonomous Specialist" Tier</h3>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-6xl font-extrabold text-primary">$300</span>
              <span className="text-xl text-on-surface-variant font-medium">/mo</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-tertiary-container/20 text-tertiary-fixed-variant px-4 py-2 rounded-lg font-bold mb-8 border border-tertiary-fixed/30">
              <TrendingUp className="w-5 h-5" />
              + 2% of Recovered Revenue
            </div>
            
            <button className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary py-5 rounded-xl text-lg font-bold shadow-xl hover:scale-[1.02] transition-all mb-6">
              Claim 1 of 10 Beta Spots
            </button>
            
            <div className="bg-surface-container-high p-5 rounded-2xl text-sm text-on-surface-variant text-center">
              <span className="font-bold text-primary block mb-2 text-base">🔥 The Q2 Retention Lock-In</span>
              Deploy by Friday to get a free <strong className="text-primary">Historical Churn Audit</strong> (a $1,000 value).
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#f2f3ff] dark:bg-[#131b2e] w-full py-12 border-t border-[#c5c6d2]/15">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="text-xl font-bold text-[#090054] dark:text-[#ffffff] mb-4">The Intelligence Layer</div>
          <p className="font-body text-sm text-[#131b2e]/70 dark:text-[#f2f3ff]/70">© 2024 The Intelligence Layer. All rights reserved.</p>
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-4 justify-start md:justify-end">
          <a className="text-[#131b2e]/50 dark:text-[#f2f3ff]/50 hover:text-[#090054] transition-colors underline-offset-4 hover:underline text-sm" href="#">Privacy Policy</a>
          <a className="text-[#131b2e]/50 dark:text-[#f2f3ff]/50 hover:text-[#090054] transition-colors underline-offset-4 hover:underline text-sm" href="#">Terms of Service</a>
          <a className="text-[#131b2e]/50 dark:text-[#f2f3ff]/50 hover:text-[#090054] transition-colors underline-offset-4 hover:underline text-sm" href="#">Cookie Settings</a>
          <a className="text-[#131b2e]/50 dark:text-[#f2f3ff]/50 hover:text-[#090054] transition-colors underline-offset-4 hover:underline text-sm" href="#">Contact Support</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="bg-surface text-on-surface antialiased min-h-screen">
      <Navbar />
      <main className="pt-24">
        <Hero />
        <ValueProposition />
        <Features />
        <SocialProof />
        <OfferSection />
      </main>
      <Footer />
    </div>
  );
}
