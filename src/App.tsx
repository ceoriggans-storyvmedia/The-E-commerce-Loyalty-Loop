/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';
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
  Gift,
  User,
  BarChart,
  Lock,
  Edit,
  Trash2,
  ChevronRight,
  Mail,
  MapPin,
  Send,
  MousePointerClick,
  Gavel,
  Activity,
  Info,
  ExternalLink,
  Flag,
  Globe,
  Share2,
  ArrowRight,
  Cloud,
  ShoppingBag,
  Building2,
  ChevronLeft
} from 'lucide-react';

function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#faf8ff]/70 dark:bg-[#131b2e]/70 backdrop-blur-xl shadow-[0_24px_48px_-12px_rgba(19,27,46,0.08)]">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 py-4">
        <Link to="/" onClick={() => window.scrollTo(0, 0)} className="text-2xl font-extrabold text-[#090054] dark:text-[#ffffff] tracking-tighter">
          The E-commerce Loyalty Loop
        </Link>
        <div className="hidden md:flex items-center space-x-8 font-headline font-semibold tracking-tight">
          <Link to="/platform" onClick={() => window.scrollTo(0, 0)} className={`transition-all duration-300 ${pathname === '/platform' ? 'text-[#090054] dark:text-[#ffffff] border-b-2 border-[#090054] dark:border-[#ffffff] pb-1' : 'text-[#131b2e]/60 hover:text-[#090054]'}`}>Platform</Link>
          <Link to="/solutions" onClick={() => window.scrollTo(0, 0)} className={`transition-all duration-300 ${pathname === '/solutions' ? 'text-[#090054] dark:text-[#ffffff] border-b-2 border-[#090054] dark:border-[#ffffff] pb-1' : 'text-[#131b2e]/60 hover:text-[#090054]'}`}>Solutions</Link>
          <Link to="/case-studies" onClick={() => window.scrollTo(0, 0)} className={`transition-all duration-300 ${pathname === '/case-studies' ? 'text-[#090054] dark:text-[#ffffff] border-b-2 border-[#090054] dark:border-[#ffffff] pb-1' : 'text-[#131b2e]/60 hover:text-[#090054]'}`}>Case Studies</Link>
          <Link to="/pricing" onClick={() => window.scrollTo(0, 0)} className={`transition-all duration-300 ${pathname === '/pricing' ? 'text-[#090054] dark:text-[#ffffff] border-b-2 border-[#090054] dark:border-[#ffffff] pb-1' : 'text-[#131b2e]/60 hover:text-[#090054]'}`}>Pricing</Link>
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
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    try {
      await addDoc(collection(db, 'newsletter_subscribers'), {
        email,
        subscribedAt: serverTimestamp()
      });
      setStatus('success');
      setEmail('');
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      setStatus('error');
    }
  };

  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-12 py-16 max-w-7xl mx-auto">
        <div className="space-y-6">
          <span className="text-lg font-bold text-primary">The Loyalty Loop</span>
          <p className="text-on-surface-variant text-sm leading-relaxed max-w-xs">Building the architectural layer for the next generation of human-centric AI systems.</p>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="text-primary font-bold text-sm uppercase tracking-widest mb-2">Platform</h5>
          <a className="text-on-surface-variant text-sm hover:text-primary transition-colors" href="#">Core Engine</a>
          <a className="text-on-surface-variant text-sm hover:text-primary transition-colors" href="#">Integrations</a>
          <a className="text-on-surface-variant text-sm hover:text-primary transition-colors" href="#">Intelligence Hub</a>
          <a className="text-on-surface-variant text-sm hover:text-primary transition-colors" href="#">API Reference</a>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="text-primary font-bold text-sm uppercase tracking-widest mb-2">Legal & Trust</h5>
          <Link onClick={() => window.scrollTo(0, 0)} className="text-on-surface-variant text-sm hover:text-primary transition-colors" to="/privacy">Privacy Policy</Link>
          <Link onClick={() => window.scrollTo(0, 0)} className="text-on-surface-variant text-sm hover:text-primary transition-colors" to="/terms">Terms of Service</Link>
          <a className="text-on-surface-variant text-sm hover:text-primary transition-colors" href="#">Security</a>
          <Link onClick={() => window.scrollTo(0, 0)} className="text-on-surface-variant text-sm hover:text-primary transition-colors" to="/cookies">Cookie Settings</Link>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="text-primary font-bold text-sm uppercase tracking-widest mb-2">Stay Connected</h5>
          <Link onClick={() => window.scrollTo(0, 0)} className="text-on-surface-variant text-sm hover:text-primary transition-colors" to="/contact">Contact Support</Link>
          <p className="text-on-surface-variant text-xs mb-2">Join our monthly intelligence dispatch.</p>
          <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
            <div className="flex gap-2">
              <input 
                className="bg-surface-container-low border-0 text-sm px-4 py-2 rounded-lg focus:ring-2 focus:ring-primary w-full outline-none disabled:opacity-50" 
                placeholder="Email" 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === 'loading' || status === 'success'}
                required
              />
              <button 
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="bg-primary text-on-primary px-4 py-2 rounded-lg flex items-center justify-center hover:bg-primary/90 transition-colors disabled:opacity-50"
              >
                {status === 'loading' ? (
                  <div className="w-4 h-4 border-2 border-on-primary border-t-transparent rounded-full animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </button>
            </div>
            {status === 'success' && (
              <p className="text-xs text-tertiary-fixed-dim font-medium">Successfully subscribed!</p>
            )}
            {status === 'error' && (
              <p className="text-xs text-error font-medium">Failed to subscribe. Please try again.</p>
            )}
          </form>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-12 py-8 border-t border-outline-variant/10">
        <p className="text-outline text-sm">© 2024 The Loyalty Loop. All rights reserved.</p>
      </div>
    </footer>
  );
}

function PrivacyPolicy() {
  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Hero Section / Title */}
      <header className="mb-16 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-high rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim"></span>
              <span className="text-xs font-bold text-on-surface uppercase tracking-widest">Legal Framework</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-primary mb-6">Privacy Policy</h1>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              At <span className="font-bold text-primary">The Loyalty Loop</span>, we believe intelligence is only as strong as the trust it is built upon. This policy outlines our architectural approach to data sovereignty and protection.
            </p>
          </div>
          <div className="bg-surface-container-low p-6 rounded-xl border-l-2 border-tertiary-fixed">
            <p className="text-xs font-semibold text-outline uppercase tracking-widest mb-1">Last Updated</p>
            <p className="text-lg font-bold text-primary">November 14, 2024</p>
          </div>
        </div>
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Sidebar: Table of Contents */}
        <aside className="lg:col-span-3">
          <div className="sticky top-32 space-y-4">
            <h4 className="text-xs font-bold text-outline uppercase tracking-widest mb-6">Navigation</h4>
            <nav className="flex flex-col gap-1">
              <a className="px-4 py-3 rounded-lg bg-surface-container-low text-primary font-bold border-l-2 border-primary transition-all" href="#intro">Introduction</a>
              <a className="px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-all font-medium" href="#collect">Information We Collect</a>
              <a className="px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-all font-medium" href="#use">How We Use Your Data</a>
              <a className="px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-all font-medium" href="#security">Data Security</a>
              <a className="px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-all font-medium" href="#rights">Your Rights</a>
              <a className="px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-all font-medium" href="#contact">Contact Us</a>
            </nav>
            <div className="mt-12 p-6 bg-primary-container rounded-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
              <h5 className="text-white font-bold mb-2 relative z-10">Need Clarification?</h5>
              <p className="text-on-primary-container text-sm mb-4 relative z-10 leading-relaxed">Our legal team is available to explain our data handling protocols in detail.</p>
              <button className="w-full py-2 bg-tertiary-fixed text-primary font-bold rounded-lg relative z-10 hover:brightness-110 transition-all">Support Center</button>
            </div>
          </div>
        </aside>
        {/* Main Content: Legal Text */}
        <article className="lg:col-span-9 space-y-16">
          {/* Introduction */}
          <section className="scroll-mt-32" id="intro">
            <h2 className="text-3xl font-bold text-primary mb-8 tracking-tight">Introduction</h2>
            <div className="space-y-6 text-on-surface-variant leading-loose text-lg">
              <p>Welcome to The Loyalty Loop. This Privacy Policy explains how Aura Intelligence ("we," "us," or "our") collects, uses, and shares information when you interact with our platform, services, and AI-driven intelligence layer.</p>
              <p>By using our Services, you consent to the data practices described in this policy. We treat data not as a static resource, but as a living landscape that requires constant curation and ethical oversight. Our commitment is to transparency, providing you with a clear view of how your digital footprint fuels the architectural intelligence of our platform.</p>
            </div>
          </section>
          {/* Information We Collect */}
          <section className="scroll-mt-32" id="collect">
            <h2 className="text-3xl font-bold text-primary mb-8 tracking-tight">Information We Collect</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-8 bg-surface-container-lowest rounded-2xl shadow-2xl shadow-primary/5 border border-outline-variant/10">
                <div className="w-12 h-12 bg-secondary-container/20 rounded-xl flex items-center justify-center mb-6">
                  <User className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Personal Identifiers</h3>
                <p className="text-on-surface-variant leading-relaxed">Name, email address, billing information, and professional credentials required to establish and maintain your account architecture.</p>
              </div>
              <div className="p-8 bg-surface-container-lowest rounded-2xl shadow-2xl shadow-primary/5 border border-outline-variant/10">
                <div className="w-12 h-12 bg-tertiary-fixed/20 rounded-xl flex items-center justify-center mb-6">
                  <BarChart className="w-6 h-6 text-on-tertiary-container" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Operational Metadata</h3>
                <p className="text-on-surface-variant leading-relaxed">IP addresses, browser types, interaction logs, and device fingerprints used to optimize the Aura Intelligence engine performance.</p>
              </div>
            </div>
          </section>
          {/* How We Use Your Data */}
          <section className="scroll-mt-32" id="use">
            <h2 className="text-3xl font-bold text-primary mb-8 tracking-tight">How We Use Your Data</h2>
            <div className="bg-surface-container-low rounded-3xl p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8">
                <Network className="w-16 h-16 text-primary/5" />
              </div>
              <div className="relative z-10 space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">01</div>
                  <div>
                    <h4 className="text-lg font-bold text-primary mb-2">Service Provisioning</h4>
                    <p className="text-on-surface-variant">To operate, maintain, and provide the core features of the Loyalty Loop platform, ensuring seamless integration between your business goals and our AI agents.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">02</div>
                  <div>
                    <h4 className="text-lg font-bold text-primary mb-2">Intelligence Refinement</h4>
                    <p className="text-on-surface-variant">Utilizing anonymized interaction patterns to train and improve our machine learning models, creating a more sophisticated architectural intelligence for all users.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">03</div>
                  <div>
                    <h4 className="text-lg font-bold text-primary mb-2">Security Auditing</h4>
                    <p className="text-on-surface-variant">Monitoring for fraudulent activity and ensuring the structural integrity of our data environment against emerging cyber threats.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Data Security */}
          <section className="scroll-mt-32" id="security">
            <h2 className="text-3xl font-bold text-primary mb-8 tracking-tight">Data Security</h2>
            <div className="bg-primary text-white p-12 rounded-[2rem] relative group">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-6">The Fortified Shell</h3>
                  <p className="text-blue-200 leading-relaxed mb-8">
                    We employ industry-standard cryptographic protocols (AES-256) and secure socket layers (TLS) to ensure that your intelligence remains your property. Our architecture is designed with the "No-Line" rule in mind—seamless transitions between encrypted states.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                      <ShieldCheck className="w-4 h-4 text-tertiary-fixed" />
                      <span className="text-xs font-bold uppercase tracking-widest">SOC2 Compliant</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                      <Lock className="w-4 h-4 text-tertiary-fixed" />
                      <span className="text-xs font-bold uppercase tracking-widest">End-to-End Encryption</span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-primary-container to-secondary rounded-full blur-3xl opacity-30 absolute inset-0"></div>
                  <div className="relative p-8 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl">
                    <div className="space-y-4">
                      <div className="h-2 w-3/4 bg-white/20 rounded-full"></div>
                      <div className="h-2 w-1/2 bg-white/10 rounded-full"></div>
                      <div className="flex justify-between items-center pt-4">
                        <div className="h-8 w-8 rounded-full bg-tertiary-fixed"></div>
                        <div className="text-right">
                          <p className="text-[10px] uppercase font-bold text-blue-300">System Status</p>
                          <p className="text-sm font-bold">100% Operational</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Your Rights */}
          <section className="scroll-mt-32" id="rights">
            <h2 className="text-3xl font-bold text-primary mb-8 tracking-tight">Your Rights</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-6 bg-surface-container-low rounded-xl hover:bg-surface-container transition-colors">
                <div className="flex gap-4 items-center">
                  <Eye className="w-6 h-6 text-primary" />
                  <span className="font-bold text-primary">The Right to Access</span>
                </div>
                <ChevronRight className="w-6 h-6 text-outline" />
              </div>
              <div className="flex items-center justify-between p-6 bg-surface-container-low rounded-xl hover:bg-surface-container transition-colors">
                <div className="flex gap-4 items-center">
                  <Edit className="w-6 h-6 text-primary" />
                  <span className="font-bold text-primary">The Right to Rectification</span>
                </div>
                <ChevronRight className="w-6 h-6 text-outline" />
              </div>
              <div className="flex items-center justify-between p-6 bg-surface-container-low rounded-xl hover:bg-surface-container transition-colors">
                <div className="flex gap-4 items-center">
                  <Trash2 className="w-6 h-6 text-primary" />
                  <span className="font-bold text-primary">The Right to Erasure</span>
                </div>
                <ChevronRight className="w-6 h-6 text-outline" />
              </div>
            </div>
          </section>
          {/* Contact Us */}
          <section className="scroll-mt-32 pt-12 border-t border-outline-variant/10" id="contact">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold text-primary mb-4 tracking-tight">Contact Legal Support</h2>
                <p className="text-on-surface-variant leading-relaxed mb-6">
                  If you have questions about this policy or our privacy practices, please contact our Data Protection Officer (DPO).
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-primary font-bold">
                    <Mail className="w-6 h-6" />
                    <span>privacy@auraintelligence.io</span>
                  </div>
                  <div className="flex items-center gap-4 text-primary font-bold">
                    <MapPin className="w-6 h-6" />
                    <span>One Intelligence Plaza, Suite 400, San Francisco, CA</span>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 h-64 bg-surface-container-highest rounded-3xl relative overflow-hidden grayscale contrast-125 opacity-80">
                <img className="w-full h-full object-cover" alt="architectural low angle shot of a modern glass skyscraper reflecting a clear blue sky in san francisco" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7tAwQ4EKcRTOGdhhBRXf3wzPqZtpHgefWDoHc3ZlNLhc2rv_4xfS0m8ZUvWTWwAM0VfMnochUMaUsVbHmYRX_FSdCx-xuZnoS6PFjlV7EaxQOl3Enh4iXW6eRqyxtwUcCSZ4ACe_O0tLO_TP6fcwEgktApziQe4XocUCv3laaxaQABVKDZLh9vWaxC8AzE65R5dVSXibaSJAsY1-GpfOWKM1hzGxEs-nJKOFYw9oPCrTGsldrt39e-bZoKYzodntXAybEC3A0yMU" referrerPolicy="no-referrer" />
              </div>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}

function CookiePolicy() {
  return (
    <main className="pt-32 pb-24 px-6 max-w-5xl mx-auto">
      {/* Hero Section / Context */}
      <section className="mb-20">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim animate-pulse"></span>
                INTELLIGENCE LAYER ACTIVE
              </div>
            </div>
            <h1 className="font-headline text-5xl font-extrabold tracking-tighter text-primary mb-6">
              The Loyalty Loop <br/><span className="text-secondary">Cookie Preferences</span>
            </h1>
            <p className="text-lg text-on-surface-variant leading-relaxed max-w-2xl">
              At Aura Intelligence, we use advanced telemetry and session-based identifiers to power our "Loyalty Loop" ecosystem. These technologies allow us to monitor AI sentiment in real-time and provide predictive analytics that refine your user experience.
            </p>
          </div>
          <div className="w-full md:w-1/3 aspect-square rounded-2xl bg-surface-container-low overflow-hidden relative">
            <img className="w-full h-full object-cover opacity-80 mix-blend-multiply" alt="abstract digital visualization of neural networks and data connections in deep navy and vibrant emerald green tones" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5eiQhF0VkaZrluD1o_ALhAxBERzxjreV1JkN94IPyRlfT9YiIEmveNf407o695K7HtWaixMWjTY-Vr9qTHQkRuKeWEq5ulrWyvRSiudc8ysFDITvTcOr_O8ix8D_R1GSeie2o-tHS9_k4R70DA-_HNNml_8Na1FfZGDOXkqykC1juyPmR6mhX8OL9Yzlu3w5EpxGp5Z_xnKTSPuErfyNyDG_hkbTI6LnO9aJBrEMIvp476IHwxDn9p_RrO8iJtlmD4ql3kzwWWfE" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
          </div>
        </div>
      </section>
      {/* Preference Grid */}
      <section className="space-y-4">
        <div className="bg-surface-container-low rounded-2xl p-8">
          <h2 className="font-headline text-2xl font-bold text-primary mb-8">Consent Management</h2>
          <div className="space-y-6">
            {/* Necessary */}
            <div className="bg-surface-container-lowest p-6 rounded-xl border-l-[6px] border-primary flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                  <h3 className="font-bold text-lg text-primary">Strictly Necessary</h3>
                </div>
                <p className="text-sm text-on-surface-variant">Essential for the core security and identity features of Aura Intelligence. These cannot be disabled as they maintain the integrity of the Intelligence Layer.</p>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[10px] font-bold text-primary tracking-widest mb-2">ALWAYS ACTIVE</span>
                <div className="w-12 h-6 bg-primary rounded-full relative">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
            {/* Analytical */}
            <div className="bg-surface-container-lowest p-6 rounded-xl border-l-[6px] border-tertiary-fixed flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <BarChart className="w-6 h-6 text-on-tertiary-container" />
                  <h3 className="font-bold text-lg text-primary">AI Sentiment & Analytics</h3>
                </div>
                <p className="text-sm text-on-surface-variant">Enables "The Loyalty Loop" to monitor user sentiment and session interaction. This data powers our predictive AI models to better anticipate your workflow needs.</p>
              </div>
              <div className="flex flex-col items-end">
                <button className="relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 focus:outline-none bg-tertiary-fixed-dim">
                  <span className="translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
                </button>
              </div>
            </div>
            {/* Marketing */}
            <div className="bg-surface-container-lowest p-6 rounded-xl border-l-[6px] border-secondary flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <MousePointerClick className="w-6 h-6 text-secondary" />
                  <h3 className="font-bold text-lg text-primary">Personalized Outreach</h3>
                </div>
                <p className="text-sm text-on-surface-variant">Used to tailor communications and platform announcements based on your usage patterns. We never share raw sentiment data with third-party advertisers.</p>
              </div>
              <div className="flex flex-col items-end">
                <button className="relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 focus:outline-none bg-outline-variant">
                  <span className="translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
                </button>
              </div>
            </div>
          </div>
          <div className="mt-12 flex flex-col md:flex-row gap-4 justify-between items-center border-t border-outline-variant/15 pt-8">
            <p className="text-xs text-on-surface-variant max-w-md">Your preferences are saved locally to your profile. Changes to sentiment monitoring may take up to 24 hours to reflect in predictive insights.</p>
            <div className="flex gap-4">
              <button className="text-primary font-bold px-6 py-2 hover:bg-surface-container-high rounded-md transition-all">Reject Optional</button>
              <button className="bg-primary text-on-primary font-bold px-8 py-3 rounded-md shadow-lg shadow-primary/20 hover:scale-[0.98] transition-all">Confirm Selection</button>
            </div>
          </div>
        </div>
      </section>
      {/* Transparency Section */}
      <section className="mt-24 grid md:grid-cols-2 gap-12">
        <div>
          <h4 className="font-headline text-xl font-bold text-primary mb-4">How we use AI Telemetry</h4>
          <p className="text-on-surface-variant leading-relaxed">
            Unlike standard web analytics, Aura's <strong>Loyalty Loop</strong> cookies capture high-density interaction markers. These markers are anonymized and processed through our Intelligence Layer to detect friction points and sentiment shifts during complex data operations.
          </p>
          <div className="mt-6 flex items-center gap-4 p-4 rounded-lg bg-surface-container-high border-l-2 border-primary">
            <Lock className="w-6 h-6 text-primary" />
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">End-to-End Encryption Applied</span>
          </div>
        </div>
        <div className="bg-surface-container-low rounded-2xl p-6">
          <h4 className="font-headline text-sm font-bold text-primary/60 uppercase tracking-widest mb-4">Detailed Cookie Registry</h4>
          <div className="space-y-4">
            <div className="flex justify-between text-sm py-2 border-b border-outline-variant/10">
              <span className="font-mono font-medium">_aura_id</span>
              <span className="text-on-surface-variant">Identity Core</span>
              <span className="text-primary/40">2 Years</span>
            </div>
            <div className="flex justify-between text-sm py-2 border-b border-outline-variant/10">
              <span className="font-mono font-medium">_loop_sentiment</span>
              <span className="text-on-surface-variant">ML Feedback</span>
              <span className="text-primary/40">Session</span>
            </div>
            <div className="flex justify-between text-sm py-2 border-b border-outline-variant/10">
              <span className="font-mono font-medium">_telemetry_v4</span>
              <span className="text-on-surface-variant">Performance</span>
              <span className="text-primary/40">30 Days</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function TermsOfService() {
  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Hero Header */}
      <header className="mb-16 relative">
        <div className="flex flex-col md:flex-row gap-8 items-end justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-tertiary-container text-on-tertiary-container text-xs font-bold rounded-full uppercase tracking-widest">Legal Governance</span>
              <div className="w-8 h-[2px] bg-tertiary-fixed"></div>
            </div>
            <h1 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tighter text-primary mb-6">Terms of Service</h1>
            <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed">
              Welcome to The Loyalty Loop. These terms outline the rules and regulations for the use of Aura Intelligence's platform and proprietary architectural layer.
            </p>
          </div>
          <div className="hidden lg:block w-64 h-64 bg-surface-container-low rounded-full relative overflow-hidden">
            <img className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-40" alt="Abstract architectural structure with clean white lines and soft blue geometric shadows representing legal structure and transparency" src="https://lh3.googleusercontent.com/aida-public/AB6AXuApwf_2N8lyuNogu4_TOOA51y4Pby7Xn2kGk5ppcvo_9Rus9sLgJ6AfqYzDAyfn3uIuN8tpkKjPU4vKc7vlI03HdeTyiRcIFEj930xspvsKVNRRAHdQGs6GZMkb4OPF7lPFf-WG30WuJIyGgZLv7GFtPd0UJlqLyBfeAo4omJBq6DHAQXVVldINQycuMglys40kr6qU2oc8tnRkJiOG0IHiRUNYgJT87kuWfaY_AqGzsBj12tOwelZiO3dVeu5BDuO4DdOjPm3TnbQ" referrerPolicy="no-referrer" />
          </div>
        </div>
        <div className="mt-8 flex gap-4 text-sm font-medium text-on-surface-variant border-t border-outline-variant/15 pt-6">
          <span>Effective Date: June 15, 2024</span>
          <span className="text-outline-variant">•</span>
          <span>Last Updated: January 08, 2025</span>
        </div>
      </header>
      {/* Bento Grid Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Side Navigation Table of Contents */}
        <aside className="lg:col-span-3 space-y-1 sticky top-32 h-fit hidden lg:block">
          <h3 className="text-xs font-bold uppercase tracking-widest text-outline mb-4 px-4">Navigation</h3>
          <a className="block px-4 py-2 text-sm text-primary font-bold border-b-2 border-primary transition-all" href="#definitions">01. Definitions</a>
          <a className="block px-4 py-2 text-sm text-on-surface-variant hover:text-primary hover:bg-surface-container-low rounded-lg transition-all" href="#obligations">02. User Obligations</a>
          <a className="block px-4 py-2 text-sm text-on-surface-variant hover:text-primary hover:bg-surface-container-low rounded-lg transition-all" href="#intelligence">03. Intelligence Property</a>
          <a className="block px-4 py-2 text-sm text-on-surface-variant hover:text-primary hover:bg-surface-container-low rounded-lg transition-all" href="#liability">04. Liability Clauses</a>
          <a className="block px-4 py-2 text-sm text-on-surface-variant hover:text-primary hover:bg-surface-container-low rounded-lg transition-all" href="#termination">05. Termination</a>
          <div className="mt-12 p-6 bg-surface-container-low rounded-xl">
            <ShieldCheck className="w-6 h-6 text-primary mb-2" />
            <p className="text-xs text-on-surface-variant leading-relaxed">By using Aura Intelligence, you agree to these automated compliance standards.</p>
          </div>
        </aside>
        {/* Main Legal Sections */}
        <div className="lg:col-span-9 space-y-12">
          {/* Section 01 */}
          <section className="bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-2xl shadow-primary/5 relative overflow-hidden group" id="definitions">
            <div className="absolute top-0 left-0 w-1 h-full bg-tertiary-fixed group-hover:w-2 transition-all duration-300"></div>
            <div className="flex items-center gap-3 mb-6">
              <span className="font-headline text-3xl font-bold text-primary-container opacity-20">01</span>
              <h2 className="font-headline text-2xl font-bold text-primary">Legal Definitions</h2>
            </div>
            <div className="space-y-6 text-on-surface-variant leading-relaxed">
              <p>In these Terms of Service, unless the context otherwise requires, the following expressions shall have the following meanings:</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-5 bg-surface-container-low rounded-lg border-l-2 border-primary-fixed">
                  <span className="block font-bold text-on-surface mb-1">Aura Intelligence Layer</span>
                  <span className="text-sm">Refers to the proprietary neural architecture and data synthesis engine managed by Aura Intelligence Corp.</span>
                </div>
                <div className="p-5 bg-surface-container-low rounded-lg border-l-2 border-primary-fixed">
                  <span className="block font-bold text-on-surface mb-1">The Loyalty Loop</span>
                  <span className="text-sm">The specialized engagement algorithm and workflow interface provided as part of the Service.</span>
                </div>
                <div className="p-5 bg-surface-container-low rounded-lg border-l-2 border-primary-fixed">
                  <span className="block font-bold text-on-surface mb-1">User Data</span>
                  <span className="text-sm">Any intellectual property, information, or metrics provided by the user to the Intelligence Layer.</span>
                </div>
                <div className="p-5 bg-surface-container-low rounded-lg border-l-2 border-primary-fixed">
                  <span className="block font-bold text-on-surface mb-1">Derived Insights</span>
                  <span className="text-sm">The analytical outputs generated by the platform through the processing of User Data.</span>
                </div>
              </div>
            </div>
          </section>
          {/* Section 02 */}
          <section className="bg-surface-container-low p-8 md:p-12 rounded-xl border border-outline-variant/10" id="obligations">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-headline text-3xl font-bold text-primary-container opacity-20">02</span>
              <h2 className="font-headline text-2xl font-bold text-primary">User Obligations</h2>
            </div>
            <div className="space-y-8">
              <p className="text-on-surface-variant leading-relaxed">To maintain the architectural integrity of the Aura ecosystem, users are bound by the following behavioral and professional standards:</p>
              <div className="space-y-4">
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-surface-container-lowest flex items-center justify-center rounded-full text-primary shadow-sm group-hover:scale-110 transition-transform">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-on-surface mb-1">Credential Integrity</h4>
                    <p className="text-sm text-on-surface-variant">You are solely responsible for maintaining the confidentiality of your login credentials. Any activity conducted through your architecture is deemed your authorized action.</p>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-surface-container-lowest flex items-center justify-center rounded-full text-primary shadow-sm group-hover:scale-110 transition-transform">
                    <Gavel className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-on-surface mb-1">Lawful Application</h4>
                    <p className="text-sm text-on-surface-variant">Usage of The Loyalty Loop must comply with all regional data protection laws (GDPR, CCPA) and ethical AI deployment standards defined by Aura Intelligence.</p>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-surface-container-lowest flex items-center justify-center rounded-full text-primary shadow-sm group-hover:scale-110 transition-transform">
                    <Activity className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-on-surface mb-1">Data Quality</h4>
                    <p className="text-sm text-on-surface-variant">The efficacy of the Intelligence Layer is dependent on the veracity of input. Users warrant that all data uploaded is accurate and legally obtained.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Section 03: Interactive Intelligence Card */}
          <section className="relative group cursor-default" id="intelligence">
            <div className="absolute inset-0 bg-primary rounded-2xl rotate-1 group-hover:rotate-0 transition-transform duration-500 shadow-xl"></div>
            <div className="relative bg-surface-container-lowest p-8 md:p-12 rounded-2xl border border-primary-fixed/30 transform -rotate-1 group-hover:rotate-0 transition-transform duration-500">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-2/3">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="font-headline text-3xl font-bold text-primary-container opacity-20">03</span>
                    <h2 className="font-headline text-2xl font-bold text-primary">Intelligence Property</h2>
                  </div>
                  <p className="text-on-surface-variant leading-relaxed mb-6">
                    The software architecture, neural weights, and visual identity of The Loyalty Loop remain the exclusive property of Aura Intelligence. 
                    <strong className="text-on-surface">You are granted a non-exclusive, non-transferable, limited license</strong> to access these services for internal enterprise operations.
                  </p>
                  <div className="flex items-center gap-3 p-4 bg-tertiary-container/10 rounded-lg border-l-4 border-tertiary-fixed">
                    <Info className="w-6 h-6 text-on-tertiary-container" />
                    <span className="text-xs text-on-tertiary-container font-semibold uppercase tracking-wider">Note: Reverse engineering is strictly prohibited.</span>
                  </div>
                </div>
                <div className="md:w-1/3">
                  <div className="aspect-square rounded-xl bg-surface-container-low flex items-center justify-center p-4">
                    <img className="w-full h-full object-cover rounded-lg shadow-inner grayscale contrast-125 opacity-80" alt="Futuristic silicon chip and light pulse patterns illustrating high-end intellectual property and hardware precision" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOQ35aCD4AP1V1MkfISzZy4znMrpofAsUl88Qiuj_dFpklsnMgHM0eG32DplQy_3ugWgUhwalaFUKF-gliqyqzsQB8fuQ6nSX9QlRglRsjgBZjdk3lSVSkK8nuotSONYhqT9Ekck4zENaC6RPTflQEixXmveisYE-vjk2OxC05zaYa5PjAg6-euA3LiAdJHKM9n1GMV5FtZPPgZuObwjkQVFv0N6fyDpiE6I6F_bJrpdE3FQfmN1_GkjMiwmu-pjonr_fEQOenIS4" referrerPolicy="no-referrer" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Section 04 */}
          <section className="grid md:grid-cols-2 gap-8" id="liability">
            <div className="bg-surface-container-high p-8 rounded-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-headline text-2xl font-bold text-primary opacity-20">04</span>
                  <h2 className="font-headline text-xl font-bold text-primary">Limitation of Liability</h2>
                </div>
                <p className="text-sm text-on-surface-variant leading-loose">
                  Aura Intelligence provides the platform "as is" and "as available." To the maximum extent permitted by law, Aura shall not be liable for any indirect, incidental, or consequential damages arising from algorithmic processing errors or service interruptions.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-error animate-pulse"></span>
                <span className="text-[10px] font-bold text-error uppercase tracking-widest">Crucial Disclaimer</span>
              </div>
            </div>
            <div className="bg-surface p-8 rounded-xl border border-outline-variant/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-headline text-2xl font-bold text-primary opacity-20">05</span>
                  <h2 className="font-headline text-xl font-bold text-primary">Indemnification</h2>
                </div>
                <p className="text-sm text-on-surface-variant leading-loose">
                  User agrees to defend, indemnify, and hold harmless Aura Intelligence against any and all claims, damages, or costs resulting from User’s violation of these Terms or misuse of the platform’s predictive capabilities.
                </p>
              </div>
              <div className="mt-8">
                <button className="text-primary font-bold text-sm flex items-center gap-1 hover:underline">
                  View full legal PDF <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </section>
          {/* Final Notice */}
          <section className="p-12 bg-surface-container-low rounded-xl text-center border-t-2 border-primary-fixed-dim" id="termination">
            <Flag className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="font-headline text-2xl font-bold text-primary mb-4">Agreement Termination</h3>
            <p className="max-w-2xl mx-auto text-on-surface-variant leading-relaxed mb-8">
              Aura Intelligence reserves the right to terminate or suspend access to our service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-primary text-on-primary rounded-md font-bold text-sm shadow-lg hover:shadow-primary/20 transition-all">Accept and Continue</button>
              <button className="px-8 py-3 bg-surface-container-lowest text-on-surface border border-outline-variant rounded-md font-bold text-sm hover:bg-surface-container-low transition-all">Download Copy</button>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

function ContactSupport() {
  return (
    <main className="flex-grow pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
      {/* Hero Section */}
      <section className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-tertiary-container text-on-tertiary-container rounded-full text-xs font-bold mb-6">
            <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim animate-pulse"></span>
            Priority Response Enabled
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-primary mb-6 leading-tight">
            How can we refine your <span className="text-on-primary-container">Loyalty Loop</span>?
          </h1>
          <p className="text-lg text-on-surface-variant max-w-lg mb-8">
            Our technical architects are standing by to ensure your enterprise intelligence layer operates with 99.9% architectural integrity.
          </p>
          <div className="flex flex-wrap gap-4">
            <a className="flex items-center gap-3 px-6 py-4 bg-surface-container-lowest rounded-xl shadow-2xl shadow-primary/5 hover:bg-surface-container transition-colors group" href="mailto:support@auraintelligence.io">
              <Mail className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
              <div>
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Technical Support</p>
                <p className="text-sm font-semibold text-primary">support@auraintelligence.io</p>
              </div>
            </a>
          </div>
        </div>
        <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
          <img className="absolute inset-0 w-full h-full object-cover" alt="Abstract 3D visualization of neural networks and data flows in deep indigo and emerald tones with soft architectural lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxK__IbiJumLDONiMGfuLhIfanu165QqfMUPRegx8Shxl76Onbvv4XZM366pZpVnfFYYioNv5428gjj9yqVMuMVLS-yx9p72UN3MfvJJyzBIdKfuSVhKd3SWLFQiV3hqN80kfjQFCvmttjvhBBbx7VbzEqc7OfCEWj6FhjSuYROI2-uFoKZ6qCcydabMhl7Ey9SG5s0dm2Hw_fi21bKOCkwthIJhI0vguxWjbcuTZqbyp5peKx-NMe37yqbxJk-lObF-POV8_Iqyg" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent"></div>
          <div className="absolute bottom-8 left-8 p-6 bg-surface/70 backdrop-blur-xl rounded-2xl max-w-xs border border-white/10">
            <p className="text-primary font-bold text-lg mb-1">Architecture Status</p>
            <p className="text-on-surface-variant text-sm">All systems operational. Global latency: 14ms</p>
          </div>
        </div>
      </section>
      {/* Bento Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Documentation Links - Bento Item 1 */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="p-8 bg-surface-container-low rounded-3xl h-full flex flex-col">
            <h3 className="text-xl font-bold text-primary mb-6">Resource Library</h3>
            <div className="space-y-4">
              <a className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-xl hover:bg-primary-fixed transition-colors group" href="#">
                <span className="font-medium text-on-surface">API Documentation</span>
                <ChevronRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
              </a>
              <a className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-xl hover:bg-primary-fixed transition-colors group" href="#">
                <span className="font-medium text-on-surface">Security Frameworks</span>
                <ChevronRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
              </a>
              <a className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-xl hover:bg-primary-fixed transition-colors group" href="#">
                <span className="font-medium text-on-surface">Model Training Guides</span>
                <ChevronRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
              </a>
              <a className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-xl hover:bg-primary-fixed transition-colors group" href="#">
                <span className="font-medium text-on-surface">Deployment Specs</span>
                <ChevronRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <div className="mt-auto pt-8">
              <div className="p-4 bg-tertiary-container rounded-2xl flex items-start gap-3">
                <Wand2 className="w-5 h-5 text-tertiary-fixed mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-white mb-1">AI-Assisted Search</p>
                  <p className="text-xs text-on-tertiary-container">Try asking our docs: "How do I integrate Loop webhooks?"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Contact Form - Bento Item 2 */}
        <div className="lg:col-span-8 p-10 bg-surface-container-lowest rounded-3xl shadow-2xl shadow-primary/5 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-tertiary-fixed"></div>
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-primary mb-2">Submit an Inquiry</h2>
            <p className="text-on-surface-variant mb-10">Briefly describe your request and our architects will reach out shortly.</p>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Full Name</label>
                <input className="w-full bg-surface-container-highest border-0 rounded-lg p-4 focus:ring-1 focus:ring-primary focus:bg-white transition-all outline-none" placeholder="Alex Chen" type="text" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Corporate Email</label>
                <input className="w-full bg-surface-container-highest border-0 rounded-lg p-4 focus:ring-1 focus:ring-primary focus:bg-white transition-all outline-none" placeholder="chen@enterprise.ai" type="email" />
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Category</label>
                <select className="w-full bg-surface-container-highest border-0 rounded-lg p-4 focus:ring-1 focus:ring-primary focus:bg-white transition-all outline-none">
                  <option>Technical Integration Support</option>
                  <option>Billing & Subscriptions</option>
                  <option>Security & Compliance</option>
                  <option>Feature Request</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Inquiry Details</label>
                <textarea className="w-full bg-surface-container-highest border-0 rounded-lg p-4 focus:ring-1 focus:ring-primary focus:bg-white transition-all outline-none resize-none" placeholder="Please describe the architectural challenge..." rows={4}></textarea>
              </div>
              <div className="md:col-span-2 flex items-center justify-between pt-4">
                <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                  <CheckCircle2 className="w-4 h-4 text-tertiary-fixed-dim" />
                  GDPR & SOC2 Compliant Submission
                </div>
                <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-10 py-4 rounded-xl font-bold hover:scale-95 transition-transform" type="submit">
                  Dispatch Ticket
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

function Platform() {
  return (
    <main className="pt-20">
      {/* Hero Section: The Autonomous Employee */}
      <section className="relative overflow-hidden bg-surface py-24 px-8 lg:py-32">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-tertiary-container text-on-tertiary-container rounded-full text-xs font-bold mb-6">
              <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim"></span>
              ARCHITECTURE V2.4 IS LIVE
            </div>
            <h1 className="font-headline text-5xl lg:text-7xl font-extrabold text-primary tracking-tighter leading-[1.1] mb-8">
              The Autonomous Employee for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Modern RevOps.</span>
            </h1>
            <p className="text-on-surface-variant text-xl max-w-2xl leading-relaxed mb-10">
              Move beyond automation. Deploy self-governing AI agents that analyze emotional sentiment, bridge loyalty gaps, and manage your entire revenue lifecycle with architectural precision.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-white px-8 py-4 rounded-md font-semibold flex items-center gap-2 active:scale-95 transition-all">
                Explore the Stack
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-surface-container-high text-primary px-8 py-4 rounded-md font-semibold active:scale-95 transition-all">
                Watch the Core Logic
              </button>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="aspect-square rounded-full bg-primary/5 absolute -top-20 -right-20 blur-3xl w-full"></div>
            <div className="relative rounded-2xl overflow-hidden bg-surface-container-lowest shadow-[0_24px_48px_-12px_rgba(19,27,46,0.08)] p-4 border border-outline-variant/15">
              <img alt="AI Core Visualization" className="rounded-xl w-full h-[500px] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpXw35Y0cycASerMCytEp6b-9K-O-JogIp_zHdmj7Ya0R7eR0vuPOEnDhUt7cruGJ_Xsaec32Ay21n_57B_vq-C-KPVD5G6g8hovtOQ9CYrC-2GXHug5NA_HVZ_pgI-2qlwuW73QznJAdYfnYPozDcukvCjPWwVQNpEtItC3Jg3CWFOFu_YRYz7BZohUWX4d8QVrnyTcTdAoAp53DVRo0tdsRUuFm0l_-YWzA2YreUkZDZ9T9dfHLOS-9-IIwqlYj4yssCJ_AUePw" referrerPolicy="no-referrer" />
              <div className="absolute bottom-10 left-10 right-10 bg-white/70 backdrop-blur-xl p-6 rounded-xl border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-primary tracking-widest uppercase">Sentiment Pulse</span>
                  <div className="flex gap-1">
                    <div className="w-1 h-4 bg-tertiary-fixed rounded-full"></div>
                    <div className="w-1 h-6 bg-tertiary-fixed rounded-full"></div>
                    <div className="w-1 h-3 bg-tertiary-fixed rounded-full"></div>
                  </div>
                </div>
                <div className="text-2xl font-bold text-primary mb-1">98.4% Confidence</div>
                <p className="text-sm text-on-surface-variant">Real-time emotional alignment across 1.2M touchpoints.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Three Pillars: Bento Grid */}
      <section className="py-24 px-8 bg-surface-container-low">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-16">
            <h2 className="font-headline text-4xl font-bold text-primary tracking-tight mb-4">Core Intelligence Layer</h2>
            <p className="text-on-surface-variant text-lg max-w-3xl">Our platform operates on three distinct neural layers designed to transform reactive commerce into proactive intelligence.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Autonomous AI Agents */}
            <div className="md:col-span-8 bg-surface-container-lowest p-10 rounded-2xl border-l-[6px] border-tertiary-fixed flex flex-col justify-between shadow-sm">
              <div>
                <div className="bg-surface-container-high w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <Bot className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-headline text-3xl font-bold text-primary mb-4">Autonomous AI Agents</h3>
                <p className="text-on-surface-variant text-lg leading-relaxed max-w-xl">
                  Agents that don't just follow scripts—they achieve objectives. Trained on your unique business logic, these agents manage complex customer negotiations and account health without human intervention.
                </p>
              </div>
              <div className="mt-8 flex gap-4 overflow-x-auto pb-4">
                <span className="bg-surface-container px-4 py-2 rounded-lg text-xs font-semibold text-primary whitespace-nowrap">Dynamic Goal Setting</span>
                <span className="bg-surface-container px-4 py-2 rounded-lg text-xs font-semibold text-primary whitespace-nowrap">Cross-Channel Execution</span>
                <span className="bg-surface-container px-4 py-2 rounded-lg text-xs font-semibold text-primary whitespace-nowrap">Policy Enforcement</span>
              </div>
            </div>

            {/* Emotional Sentiment */}
            <div className="md:col-span-4 bg-primary p-10 rounded-2xl text-white flex flex-col justify-between overflow-hidden relative">
              <div className="relative z-10">
                <h3 className="font-headline text-2xl font-bold mb-4">Sentiment Engine</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Moving beyond 'Positive' or 'Negative'. We detect frustration, urgency, and brand affinity through tonal analysis of voice and text.
                </p>
              </div>
              <div className="mt-8 bg-white/10 p-4 rounded-xl backdrop-blur-md relative z-10">
                <div className="flex justify-between items-center text-xs mb-2">
                  <span>Ambivalence Detection</span>
                  <span className="text-tertiary-fixed">Active</span>
                </div>
                <div className="w-full bg-white/20 h-1 rounded-full">
                  <div className="bg-tertiary-fixed h-full rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
              <Brain className="absolute -bottom-10 -right-10 w-64 h-64 text-white/5" />
            </div>

            {/* Loyalty Bridge */}
            <div className="md:col-span-5 bg-surface-container-high p-10 rounded-2xl flex flex-col justify-between">
              <div>
                <h3 className="font-headline text-2xl font-bold text-primary mb-4">The 'Loyalty Bridge'</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                  Proprietary logic that identifies the exact gap between current satisfaction and long-term retention, then generates a custom offer to bridge it.
                </p>
              </div>
              <img alt="Data Logic Visualization" className="rounded-xl w-full h-40 object-cover grayscale opacity-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEW0qEXsQigIoHriarehF4K1d9EbGiHVQWsbqppFiz_km1LsBuGVeUewtlq6nv6yArStrola6wTphKYyw8bY2MRO0WmEe065fxJMTVUvniqlFcFt-iPCysMx8oKw8ubJ4UPSB4zijbdfg353B5tzQdZzhP_yp1WtgeSpMEu8ViT6sN1om3rkni5ThJ13rG5wi3ReeWYqavzNEcXTAvuFyWN1FamVBPuhh0MVIYiXbOK1WXyh53_p8isV-oqv8iDEZprGq5uUwyHuY" referrerPolicy="no-referrer" />
            </div>

            {/* Tech Stack Integration */}
            <div className="md:col-span-7 bg-surface-container-lowest p-10 rounded-2xl flex flex-col justify-between shadow-sm relative overflow-hidden">
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h3 className="font-headline text-2xl font-bold text-primary mb-4">Architectural Integrity</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
                    Built on the foundations of Salesforce and Google Cloud. We don't replace your stack; we provide the autonomous layer that makes it intelligent.
                  </p>
                </div>
                <div className="flex items-center gap-12 grayscale opacity-60">
                  <div className="flex flex-col items-center gap-2">
                    <Cloud className="w-10 h-10" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Google Cloud</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Database className="w-10 h-10" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Salesforce CRM</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Network className="w-10 h-10" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Vertex AI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Deep Dive */}
      <section className="py-24 px-8 bg-surface">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="font-headline text-4xl font-bold text-primary mb-8">How it works: The Intelligence Cycle</h2>
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-none w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-headline text-xl font-bold text-primary mb-2">Ingestion & Vectorization</h4>
                    <p className="text-on-surface-variant leading-relaxed">We sync with Salesforce Data Cloud in real-time, converting structured and unstructured data into semantic vectors for our AI agents to process.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-none w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-headline text-xl font-bold text-primary mb-2">Sentiment Profiling</h4>
                    <p className="text-on-surface-variant leading-relaxed">Google Cloud's Natural Language API works in tandem with our proprietary Emotional Engine to score every interaction based on churn risk and emotional state.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-none w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-headline text-xl font-bold text-primary mb-2">The Loyalty Bridge Execution</h4>
                    <p className="text-on-surface-variant leading-relaxed">Agents cross-reference customer LTV with sentiment scores to trigger hyper-personalized loyalty offers, automatically closing the gap before the human team is even notified.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-high rounded-3xl p-12 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
              <div className="relative w-full">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-outline-variant/10">
                    <div className="text-tertiary-fixed-variant font-bold text-3xl mb-1">4.2x</div>
                    <div className="text-on-surface-variant text-xs uppercase tracking-widest font-bold">LTV Velocity</div>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-outline-variant/10">
                    <div className="text-primary font-bold text-3xl mb-1">0.12s</div>
                    <div className="text-on-surface-variant text-xs uppercase tracking-widest font-bold">Inference Latency</div>
                  </div>
                  <div className="col-span-2 bg-primary text-white p-8 rounded-2xl">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                        <Zap className="w-6 h-6 text-tertiary-fixed" />
                      </div>
                      <h5 className="font-bold">Automated Resolution</h5>
                    </div>
                    <p className="text-white/70 text-sm">Our agents handle 84% of retention escalations autonomously, freeing your CSMs for high-value strategic growth.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-8">
        <div className="max-w-screen-xl mx-auto bg-gradient-to-br from-primary to-primary-container rounded-[2rem] p-12 lg:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-headline text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">Ready to deploy your first Autonomous Employee?</h2>
            <p className="text-white/80 text-lg mb-10 leading-relaxed">Join the top tier of enterprise RevOps teams leveraging The Loyalty Loop to scale emotional intelligence at machine speed.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-tertiary-fixed text-on-tertiary-fixed px-10 py-4 rounded-md font-bold active:scale-95 transition-all">Request Technical Demo</button>
              <button className="bg-white/10 text-white border border-white/20 backdrop-blur-md px-10 py-4 rounded-md font-bold active:scale-95 transition-all">Read Documentation</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Solutions() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 px-8 max-w-screen-2xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 z-10">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-tertiary-container text-on-tertiary-container rounded-full text-xs font-bold mb-6 tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim"></span>
              Architectural Intelligence
            </span>
            <h1 className="text-6xl md:text-7xl font-headline font-extrabold text-primary leading-[1.1] tracking-tighter mb-8">
              Precision Commerce <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Growth Engines.</span>
            </h1>
            <p className="text-xl text-on-surface-variant max-w-2xl mb-10 leading-relaxed">
              Data is a living landscape. We provide the architectural intelligence required to transform transactional data into enduring customer relationships across every segment of the market.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-on-primary px-8 py-4 rounded-md font-bold shadow-lg shadow-primary/20 transition-all hover:translate-y-[-2px]">
                Explore Enterprise RevOps
              </button>
              <button className="bg-surface-container-low text-primary px-8 py-4 rounded-md font-bold transition-all hover:bg-surface-container-high">
                View Case Studies
              </button>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="aspect-square bg-surface-container rounded-full absolute -top-12 -right-12 w-full h-full -z-10 opacity-50"></div>
            <img alt="AI Visualization" className="rounded-3xl shadow-2xl object-cover aspect-[4/5] transform lg:rotate-3" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9_EmsDJLZ5fjZ3KFMETovD4LE6EDzGdqAK2uz1sL2iVY4_zGTBqdJ9e3IUj6vxSbJXSQZXUR6HOiWlO13m6atHH_WiTxBEP08MCd2z4F40C_1AqG1-SN5zAm_vE6bhK-QYnYmrfjYWjJGzo6LjAdy-2R6XW0gDWKrXXqq79Ybtar3Y99atLumAZYxl2EDrni9_UkXg6FV9AvQzeHO9_O2BhWvENGnvItRx4wbQbh8ZVg3oLciDWpAl3tlCRn9c8bQJJHLwRSsVBM" referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>

      {/* Segmented Solutions: Bento Grid */}
      <section className="py-24 px-8 bg-surface-container-low">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-headline font-bold text-primary mb-4 tracking-tight">Tailored for Every Scale</h2>
            <p className="text-on-surface-variant max-w-xl text-lg">Deploying specific modules designed for the unique operational complexities of your commerce stack.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Shopify Plus Merchants */}
            <div className="md:col-span-1 bg-surface-container-lowest p-10 rounded-3xl flex flex-col justify-between transition-all hover:shadow-xl group">
              <div>
                <div className="w-14 h-14 bg-secondary-container rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <ShoppingBag className="w-6 h-6 text-on-secondary-container" />
                </div>
                <h3 className="text-2xl font-headline font-bold text-primary mb-4">Shopify Plus</h3>
                <p className="text-on-surface-variant mb-6 leading-relaxed">Turn transactional velocity into brand equity with native integrations and high-impact automated flows.</p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3 text-sm font-semibold text-primary">
                    <CheckCircle2 className="w-5 h-5 text-tertiary-fixed-dim" />
                    Custom Pixel Integration
                  </li>
                  <li className="flex items-center gap-3 text-sm font-semibold text-primary">
                    <CheckCircle2 className="w-5 h-5 text-tertiary-fixed-dim" />
                    Automated Rewards Engine
                  </li>
                </ul>
              </div>
              <a className="inline-flex items-center gap-2 font-bold text-primary group-hover:gap-4 transition-all" href="#">
                View Shopify Solutions <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Mid-Market Brands */}
            <div className="md:col-span-1 bg-primary text-on-primary p-10 rounded-3xl flex flex-col justify-between shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <LineChart className="w-32 h-32" />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-primary-container rounded-xl flex items-center justify-center mb-8">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-headline font-bold mb-4">Mid-Market</h3>
                <p className="text-on-primary/70 mb-6 leading-relaxed">Bridge the gap between raw data and actionable intelligence. Scalable infrastructure for brands ready to lead.</p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3 text-sm font-semibold">
                    <CheckCircle2 className="w-5 h-5 text-tertiary-fixed" />
                    Predictive LTV Modeling
                  </li>
                  <li className="flex items-center gap-3 text-sm font-semibold">
                    <CheckCircle2 className="w-5 h-5 text-tertiary-fixed" />
                    Segment Cross-Pollination
                  </li>
                </ul>
              </div>
              <a className="inline-flex items-center gap-2 font-bold text-tertiary-fixed relative z-10" href="#">
                Scale Smarter <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Enterprise RevOps */}
            <div className="md:col-span-1 bg-surface-container-lowest p-10 rounded-3xl flex flex-col justify-between transition-all hover:shadow-xl group">
              <div>
                <div className="w-14 h-14 bg-surface-container-high rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-headline font-bold text-primary mb-4">Enterprise RevOps</h3>
                <p className="text-on-surface-variant mb-6 leading-relaxed">Architectural data governance for global operations. Consolidate fragmented stacks into a unified source of truth.</p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3 text-sm font-semibold text-primary">
                    <CheckCircle2 className="w-5 h-5 text-tertiary-fixed-dim" />
                    API-First Data Pipeline
                  </li>
                  <li className="flex items-center gap-3 text-sm font-semibold text-primary">
                    <CheckCircle2 className="w-5 h-5 text-tertiary-fixed-dim" />
                    Custom Governance Tiers
                  </li>
                </ul>
              </div>
              <a className="inline-flex items-center gap-2 font-bold text-primary group-hover:gap-4 transition-all" href="#">
                Contact Enterprise Team <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Specific Use Cases */}
      <section className="py-24 px-8 max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-headline font-bold text-primary mb-4 tracking-tight">High-Impact Playbooks</h2>
            <p className="text-on-surface-variant text-lg">Proven architectures for the critical moments in your customer lifecycle.</p>
          </div>
          <div className="hidden md:flex gap-4">
            <button className="p-3 rounded-full border border-outline-variant hover:bg-surface-container-low transition-colors">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="p-3 rounded-full border border-outline-variant bg-primary text-white">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Use Case 1 */}
          <div className="group relative overflow-hidden rounded-3xl bg-surface-container-low border-l-[3px] border-tertiary-fixed">
            <div className="p-8">
              <div className="flex items-center gap-2 mb-6">
                <span className="px-3 py-1 bg-surface-container-highest text-primary text-[10px] font-extrabold uppercase tracking-widest rounded-md">Retention AI</span>
                <span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed-dim"></span>
                <span className="text-[10px] font-bold text-on-surface-variant">Live</span>
              </div>
              <h4 className="text-xl font-headline font-bold text-primary mb-4">Reducing Silent Churn</h4>
              <p className="text-sm text-on-surface-variant mb-8 leading-relaxed">
                Deploy behavioral heuristics that identify "at-risk" patterns 30 days before they lapse. Automate re-engagement without sacrificing margin.
              </p>
              <div className="aspect-video rounded-xl overflow-hidden mb-6 relative">
                <img alt="Data Chart" className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVCCe3Ae2IfdwsrCoee1GsgGAWFnXNIHNyxZUvroXaf759gjkPiUsrr5ry6RfWmsZBlNyM4e1tlOB-DFjLxzzQqUnI96VfK8Uk1J5jRrptDiqiNMjFhKbmQYN9uycfMFKeveiaboqK4nLCmdGXIdPf_Y5ecQms59XYm4vwe6f0mIOy23l0S0WgVhhd0hFUtuE1rM10tUZlAMJ-XCY4t2tyWvfW3c6DGttLdwqfrEdTMfOhDyAz39vsRJ_M8C3idmmiVVHxZYT3JaY" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
              </div>
              <button className="w-full py-3 bg-surface-container-lowest text-primary font-bold rounded-lg border border-transparent hover:border-primary/20 transition-all">
                View Playbook
              </button>
            </div>
          </div>

          {/* Use Case 2 */}
          <div className="group relative overflow-hidden rounded-3xl bg-surface-container-low border-l-[3px] border-tertiary-fixed">
            <div className="p-8">
              <div className="flex items-center gap-2 mb-6">
                <span className="px-3 py-1 bg-surface-container-highest text-primary text-[10px] font-extrabold uppercase tracking-widest rounded-md">Ops Automation</span>
                <span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed-dim"></span>
                <span className="text-[10px] font-bold text-on-surface-variant">Live</span>
              </div>
              <h4 className="text-xl font-headline font-bold text-primary mb-4">Automating Support Make-Goods</h4>
              <p className="text-sm text-on-surface-variant mb-8 leading-relaxed">
                Integrate Zendesk or Gorgias with your loyalty engine. Automatically issue personalized apologies and credits based on lifetime value.
              </p>
              <div className="aspect-video rounded-xl overflow-hidden mb-6 relative">
                <img alt="Robotic Arm" className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9fuT8KmNT7VBcgpo_Hq2zS7PIbAnLJMe9bZhqWYzb5WHq_K4MBcdZw3jI3SxvrJDuPOvdoso1_KXi45n-MiQ3IH69ig1NClQcNfN9asaO7JyzhB1D49hcn4jDHrgaqytaUNmUI6mJX4szo5PSOrvZBfJDnAcHhBrq7roRIPywgLd8Xzk-b0EIB0ZByu4ZKtPaP86B43bMilKPpzQ7acNZ7NM1B2kSVyj_UEI4stafspGdfNCaTlf06x9VJzcYJuEP2q_BiGGT-Uk" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
              </div>
              <button className="w-full py-3 bg-surface-container-lowest text-primary font-bold rounded-lg border border-transparent hover:border-primary/20 transition-all">
                View Playbook
              </button>
            </div>
          </div>

          {/* Use Case 3 */}
          <div className="group relative overflow-hidden rounded-3xl bg-surface-container-low border-l-[3px] border-tertiary-fixed">
            <div className="p-8">
              <div className="flex items-center gap-2 mb-6">
                <span className="px-3 py-1 bg-surface-container-highest text-primary text-[10px] font-extrabold uppercase tracking-widest rounded-md">Growth Architecture</span>
                <span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed-dim"></span>
                <span className="text-[10px] font-bold text-on-surface-variant">Live</span>
              </div>
              <h4 className="text-xl font-headline font-bold text-primary mb-4">VIP Retention</h4>
              <p className="text-sm text-on-surface-variant mb-8 leading-relaxed">
                Define and defend your top 1%. Use automated concierge flows and tiered access to create a "locked-in" feeling for high-value shoppers.
              </p>
              <div className="aspect-video rounded-xl overflow-hidden mb-6 relative">
                <img alt="Circuit" className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlvM8ypHwqRqYF1JerpDPxZegMqMJMtScON2NjkqtTBJvlTojien5SbNrauVSMO_bkSMMqo_GkfX0kVCmVXPeFnQEtrkQwn3pBwx7QbSn2Sn2Ry7L1PiO0SFEFBBjLuPCE0tcR2iotTXszb8n485fTru7gMKu_IPLfAH-4PaZSajg-0pHKg0hzQezRoABo9HVWnxf8_YAGAE3s4-sXgeKdQC1Dqrv8x_9kJgQJIZlkKhU0txoDV4WSgK8Aw37kYx7TCT1jeJV7xsA" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
              </div>
              <button className="w-full py-3 bg-surface-container-lowest text-primary font-bold rounded-lg border border-transparent hover:border-primary/20 transition-all">
                View Playbook
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Intelligence Pulse Section */}
      <section className="py-24 px-8 bg-surface">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-tertiary-container rounded-full text-on-tertiary-container font-bold text-sm mb-8 relative">
            <Zap className="w-5 h-5" />
            Active Intelligence Layer
            <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-2 h-2 bg-tertiary-fixed-dim rounded-full shadow-[0_0_0_rgba(78,222,163,0.4)] animate-pulse"></div>
          </div>
          <h2 className="text-5xl font-headline font-extrabold text-primary mb-8 tracking-tighter">Your data is speaking. <br />Are you listening?</h2>
          <p className="text-on-surface-variant text-xl leading-relaxed mb-12">
            Connect your stack in minutes. Our AI agents begin mapping your loyalty landscape instantly, identifying revenue leaks and expansion opportunities within 24 hours.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <span className="text-4xl font-extrabold text-primary mb-2">18%</span>
              <span className="text-xs uppercase tracking-widest font-bold text-on-surface-variant">Avg. Churn Reduction</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-extrabold text-primary mb-2">4.2x</span>
              <span className="text-xs uppercase tracking-widest font-bold text-on-surface-variant">ROI by Year 1</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-extrabold text-primary mb-2">99.9%</span>
              <span className="text-xs uppercase tracking-widest font-bold text-on-surface-variant">Uptime SLA</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-extrabold text-primary mb-2">12m+</span>
              <span className="text-xs uppercase tracking-widest font-bold text-on-surface-variant">Signals Processed</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-8">
        <div className="max-w-screen-2xl mx-auto bg-primary rounded-[3rem] p-12 md:p-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-container to-transparent opacity-50"></div>
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-white mb-6 tracking-tight leading-tight">Ready to close <br />the loop?</h2>
              <p className="text-primary-fixed text-lg mb-10 max-w-md">Schedule a technical audit with our architectural intelligence team today.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-tertiary-fixed text-on-tertiary-fixed px-8 py-4 rounded-md font-extrabold transition-all hover:scale-105">Book a Technical Audit</button>
                <button className="border border-primary-fixed/30 text-white px-8 py-4 rounded-md font-extrabold hover:bg-white/5">Request a Sandbox</button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-tertiary-fixed-dim"></div>
                  <div>
                    <div className="text-white font-bold">RevOps Terminal</div>
                    <div className="text-white/40 text-xs">Awaiting Command...</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-2 w-full bg-white/10 rounded-full"></div>
                  <div className="h-2 w-3/4 bg-white/10 rounded-full"></div>
                  <div className="h-2 w-1/2 bg-white/10 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function CaseStudies() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 px-8 max-w-screen-2xl mx-auto">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-tertiary-container text-on-tertiary-container rounded-full text-xs font-bold mb-6 tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim"></span>
            Proven Impact
          </span>
          <h1 className="text-6xl md:text-7xl font-headline font-extrabold text-primary leading-[1.1] tracking-tighter mb-8">
            Architectural Intelligence <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">in Action.</span>
          </h1>
          <p className="text-xl text-on-surface-variant max-w-2xl mb-10 leading-relaxed">
            Discover how enterprise RevOps teams are leveraging The Loyalty Loop to transform transactional data into enduring customer relationships.
          </p>
        </div>
      </section>

      {/* Grid of Case Studies */}
      <section className="py-24 px-8 bg-surface-container-low">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-surface-container-lowest p-10 rounded-3xl flex flex-col justify-between transition-all hover:shadow-xl group">
            <div>
              <div className="text-4xl font-extrabold text-primary mb-2">32%</div>
              <div className="text-xs uppercase tracking-widest font-bold text-on-surface-variant mb-6">Reduction in Silent Churn</div>
              <h3 className="text-2xl font-headline font-bold text-primary mb-4">Global Fashion Retailer</h3>
              <p className="text-on-surface-variant mb-6 leading-relaxed">Deployed behavioral heuristics to identify at-risk patterns 30 days before lapse, automating re-engagement without sacrificing margin.</p>
            </div>
            <button className="inline-flex items-center gap-2 font-bold text-primary group-hover:gap-4 transition-all mt-8">
              Read Full Study <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-primary text-on-primary p-10 rounded-3xl flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <div className="text-4xl font-extrabold text-white mb-2">4.2x</div>
              <div className="text-xs uppercase tracking-widest font-bold text-tertiary-fixed mb-6">LTV Velocity Increase</div>
              <h3 className="text-2xl font-headline font-bold mb-4">Enterprise SaaS Platform</h3>
              <p className="text-on-primary/70 mb-6 leading-relaxed">Integrated with Zendesk to automatically issue personalized apologies and credits based on lifetime value, turning detractors into promoters.</p>
            </div>
            <button className="inline-flex items-center gap-2 font-bold text-tertiary-fixed relative z-10 mt-8">
              Read Full Study <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-surface-container-lowest p-10 rounded-3xl flex flex-col justify-between transition-all hover:shadow-xl group">
            <div>
              <div className="text-4xl font-extrabold text-primary mb-2">99%</div>
              <div className="text-xs uppercase tracking-widest font-bold text-on-surface-variant mb-6">VIP Retention Rate</div>
              <h3 className="text-2xl font-headline font-bold text-primary mb-4">Luxury Beauty Brand</h3>
              <p className="text-on-surface-variant mb-6 leading-relaxed">Defined and defended their top 1% using automated concierge flows and tiered access to create a locked-in feeling for high-value shoppers.</p>
            </div>
            <button className="inline-flex items-center gap-2 font-bold text-primary group-hover:gap-4 transition-all mt-8">
              Read Full Study <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

function Pricing() {
  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="mb-24 text-center">
        <div className="inline-flex items-center gap-2 bg-tertiary-container text-on-tertiary-container px-4 py-1.5 rounded-full mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary-fixed-dim opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary-fixed"></span>
          </span>
          <span className="text-xs font-bold tracking-wider uppercase font-label">The Intelligence Pulse</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tight text-primary mb-6 leading-tight">
          Architectural Intelligence.<br />Simple, Transparent Pricing.
        </h1>
        <p className="text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          We believe in commerce at the speed of thought. No long-term contracts. No hidden fees. Just autonomous retention that pays for itself.
        </p>
      </section>

      {/* Pricing Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24">
        {/* Core Offer Card */}
        <div className="lg:col-span-7 bg-surface-container-lowest rounded-xl p-8 md:p-12 shadow-[0_24px_48px_-12px_rgba(19,27,46,0.08)] relative overflow-hidden flex flex-col justify-between">
          <div className="relative z-10">
            <div className="flex items-start justify-between mb-8">
              <div>
                <h2 className="text-3xl font-headline font-bold text-primary mb-2">The Launch Phase</h2>
                <p className="text-on-surface-variant font-medium">First 30 days of autonomous retention</p>
              </div>
              <div className="text-right">
                <span className="block text-5xl font-headline font-extrabold text-primary tracking-tighter">$300</span>
                <span className="text-on-surface-variant text-sm font-semibold">Flat Monthly Fee</span>
              </div>
            </div>
            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-headline font-bold text-lg">Instant Integration</h3>
                  <p className="text-on-surface-variant text-sm">Connect your commerce stack and deploy AI agents within 15 minutes.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-headline font-bold text-lg">No long-term contracts</h3>
                  <p className="text-on-surface-variant text-sm">Month-to-month commitment. Cancel anytime without architectural friction.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-low p-6 rounded-lg relative z-10 border-l-4 border-tertiary-fixed">
            <div className="flex items-center gap-3 mb-2">
              <Activity className="w-5 h-5 text-on-tertiary-container" />
              <span className="font-headline font-bold text-on-tertiary-container uppercase tracking-widest text-xs">Intelligence Insight</span>
            </div>
            <p className="text-on-surface text-sm leading-relaxed">
              During the Launch Phase, our AI maps your customer journey, identifying high-risk churn signals before they manifest.
            </p>
          </div>
          {/* Abstract background element */}
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary-container/5 rounded-full blur-3xl"></div>
        </div>

        {/* Performance Card */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <div className="bg-primary text-on-primary rounded-xl p-8 flex-1 flex flex-col justify-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-2xl font-headline font-bold mb-4">Performance-First</h2>
              <div className="mb-6">
                <span className="text-6xl font-headline font-extrabold tracking-tighter text-tertiary-fixed">2%</span>
              </div>
              <p className="text-on-primary/80 mb-6 leading-relaxed font-medium">
                Attribution-only performance fee. We only succeed when our AI successfully retains a customer who was predicted to churn.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-tertiary-fixed" />
                  Transparent attribution modeling
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-tertiary-fixed" />
                  Zero risk on non-attributed sales
                </li>
              </ul>
            </div>
            <div className="absolute top-0 right-0 p-8">
              <Network className="w-32 h-32 text-on-primary/20" />
            </div>
          </div>
          <div className="bg-surface-container-high rounded-xl p-8">
            <h3 className="font-headline font-bold text-primary mb-2">Architectural Promise</h3>
            <p className="text-on-surface-variant text-sm mb-6">Built for scale without the technical debt of legacy retention tools.</p>
            <button className="w-full bg-surface-container-lowest border border-outline-variant/30 text-primary font-headline font-bold py-3 rounded-md hover:bg-surface-container transition-all">
              Schedule an Architecture Review
            </button>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <section className="mt-24">
        <h2 className="text-3xl font-headline font-bold text-primary mb-12 text-center">Compare Scale Levels</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-separate border-spacing-0">
            <thead>
              <tr className="bg-surface-container-low">
                <th className="py-6 px-8 rounded-tl-xl text-primary font-headline font-bold text-lg">Capability</th>
                <th className="py-6 px-8 text-primary font-headline font-bold text-lg">Mid-Market</th>
                <th className="py-6 px-8 rounded-tr-xl text-primary font-headline font-bold text-lg">Enterprise</th>
              </tr>
            </thead>
            <tbody className="bg-surface-container-lowest">
              <tr className="group">
                <td className="py-6 px-8 text-on-surface-variant font-medium border-b border-outline-variant/15">Monthly Subscription</td>
                <td className="py-6 px-8 font-bold text-primary border-b border-outline-variant/15">$300 / mo</td>
                <td className="py-6 px-8 font-bold text-primary border-b border-outline-variant/15">Custom Scale</td>
              </tr>
              <tr className="group">
                <td className="py-6 px-8 text-on-surface-variant font-medium border-b border-outline-variant/15">AI Agent Count</td>
                <td className="py-6 px-8 text-on-surface border-b border-outline-variant/15">Up to 3 Specialized Agents</td>
                <td className="py-6 px-8 text-on-surface border-b border-outline-variant/15">Unlimited Custom Agents</td>
              </tr>
              <tr className="group">
                <td className="py-6 px-8 text-on-surface-variant font-medium border-b border-outline-variant/15">Performance Fee</td>
                <td className="py-6 px-8 text-on-surface border-b border-outline-variant/15">2% Attributed Rev</td>
                <td className="py-6 px-8 text-on-surface border-b border-outline-variant/15">Tiered % / Volume Based</td>
              </tr>
              <tr className="group">
                <td className="py-6 px-8 text-on-surface-variant font-medium border-b border-outline-variant/15">Support Tier</td>
                <td className="py-6 px-8 text-on-surface border-b border-outline-variant/15">Standard Email Support</td>
                <td className="py-6 px-8 text-on-surface border-b border-outline-variant/15">24/7 Dedicated Architect</td>
              </tr>
              <tr className="group">
                <td className="py-6 px-8 text-on-surface-variant font-medium rounded-bl-xl">Integration Depth</td>
                <td className="py-6 px-8 text-on-surface">Native SaaS Connectors</td>
                <td className="py-6 px-8 text-on-surface rounded-br-xl">Custom API / Headless / Legacy</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Final CTA Asymmetric Layout */}
      <section className="mt-32 grid md:grid-cols-2 items-center gap-16">
        <div className="relative rounded-2xl overflow-hidden aspect-video shadow-2xl">
          <img alt="Intelligence Layer Visualization" className="object-cover w-full h-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0TtSFtueBbzgi8zJtR-v0sT9HzerS2RLRSZB1xCyF60jkZb-hQSU0EJIwEbOAnPFClY0M0bqbfTkz5BA14PF1DYTf66gi3lHXPmhwtCqHUTN9bg0XJp9JKYzPCDuBSvGNWp4Lp0bBXbL3Pfv7WrX9l7_D1I2sV5ucB6z2u3ZuXCWWxn_i9gQgB-sBb2xeoT48ZoyWK-hK-FB9yY2UwgVLUQmXZgD_qxpzGlSYUX7Xf6ZY6JDcQevF-Ff6zansYDqHFw9nvO9808I" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/60 to-transparent"></div>
        </div>
        <div>
          <h2 className="text-4xl font-headline font-extrabold text-primary mb-6">Ready to close the loop?</h2>
          <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
            Start your 30-day launch phase today. Deploy our intelligence layer and watch your retention metrics shift in real-time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-primary text-on-primary px-8 py-4 rounded-md font-headline font-bold text-lg hover:shadow-xl active:scale-95 transition-all">
              Start Autonomous Retention
            </button>
            <button className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-md font-headline font-bold text-lg hover:shadow-md active:scale-95 transition-all">
              View Demo
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

function Home() {
  return (
    <main className="pt-24">
      <Hero />
      <ValueProposition />
      <Features />
      <SocialProof />
      <OfferSection />
    </main>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="bg-surface text-on-surface antialiased min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/cookies" element={<CookiePolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/contact" element={<ContactSupport />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
