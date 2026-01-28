import { Github, Linkedin, Facebook, Mail, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <div className="min-h-screen bg-[#0a1120] text-white font-sans selection:bg-blue-500/30 scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a1120]/80 backdrop-blur-md border-b border-slate-800">
        <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
          <div className="text-xl font-bold tracking-tight">Elsayed Mustafa</div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all shadow-lg shadow-blue-900/20">
              Hire Me
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Content - أضفنا id="home" هنا */}
      <section id="home" className="max-w-7xl mx-auto px-8 pt-32 pb-12 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-screen">
        
        {/* Left Side: Text */}
        <div className="order-2 md:order-1">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tight text-white">
            Elsayed <span className="text-blue-500">Mustafa</span>
          </h1>
          <h2 className="text-3xl md:text-4xl text-slate-400 font-light mb-8">
            Data Analyst
          </h2>
          {/* بقية الكود الخاص بك... */}
          <div className="flex flex-wrap gap-4 mb-12">
            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all flex items-center gap-2">
              Get In Touch
            </a>
            <a href="#projects" className="border border-slate-700 hover:bg-slate-800 text-white px-8 py-3 rounded-lg font-semibold transition-all">
              View Projects
            </a>
          </div>
          
          {/* Social Icons */}
          <div className="flex gap-6 text-slate-500">
            <a href="https://github.com/Elsayed-Mustafa" target="_blank" className="hover:text-blue-500 transition-colors">
              <Github size={24} />
            </a>
            {/* باقي الأيقونات */}
          </div>
        </div>

        {/* Right Side Image */}
        <div className="order-1 md:order-2 flex justify-center items-center relative">
            {/* ... الكود الخاص بالصورة كما هو ... */}
        </div>
      </section>
    </div>
  );
}