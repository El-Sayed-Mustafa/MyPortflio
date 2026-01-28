import { Github, Linkedin, Facebook, Mail, Phone, ExternalLink } from 'lucide-react';

export default function Hero() {
  return (
    <div id="home" className="min-h-screen bg-[#0a1120] text-white font-sans selection:bg-blue-500/30">
      
      {/* Navbar - Fixed at the top */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a1120]/80 backdrop-blur-md border-b border-slate-800/50">
        <div className="flex justify-between items-center px-8 py-5 max-w-7xl mx-auto">
          <div className="text-xl font-bold tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Elsayed Mustafa
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
            <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
            <a href="#footer" className="hover:text-white bg-blue-600 px-5 py-2 rounded-lg transition-all shadow-lg shadow-blue-900/20">
              Hire Me
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <section className="max-w-7xl mx-auto px-8 pt-32 pb-12 md:pt-48 md:pb-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Text and Actions */}
        <div className="order-2 md:order-1 space-y-6">
          <div className="space-y-2">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none">
              Elsayed <br />
              <span className="text-blue-500">Mustafa</span>
            </h1>
            <h2 className="text-3xl md:text-4xl text-slate-400 font-light tracking-wide">
              Data Analyst
            </h2>
          </div>

          <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
            Transforming complex data into actionable insights. Specialized in data visualization, 
            business intelligence, and advanced analytics to drive strategic decision-making.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="#footer" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 hover:scale-105 active:scale-95 shadow-xl shadow-blue-900/40"
            >
              Get In Touch
            </a>
            <a 
              href="#projects" 
              className="border border-slate-700 hover:bg-slate-800 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:border-slate-500"
            >
              View Projects
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 pt-8 text-slate-500">
            <a href="https://github.com/Elsayed-Mustafa" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="hover:text-blue-500 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="hover:text-blue-500 transition-colors">
              <Facebook size={24} />
            </a>
            <a href="mailto:elsayed.mustafa.ibrahim@gmail.com" className="hover:text-blue-500 transition-colors">
              <Mail size={24} />
            </a>
            <a href="tel:01559850933" className="hover:text-blue-500 transition-colors">
              <Phone size={24} />
            </a>
          </div>
        </div>

        {/* Right Side: Professional Image with Glow */}
        <div className="order-1 md:order-2 flex justify-center items-center relative">
          {/* Background Glow Effect */}
          <div className="absolute w-72 h-72 md:w-[500px] md:h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
          
          <div className="relative w-64 h-64 md:w-[400px] md:h-[400px] rounded-full p-1 bg-gradient-to-b from-blue-500 to-transparent shadow-2xl shadow-blue-500/20">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#0a1120] bg-slate-900">
              <img
                src="src/components/images/gemini_generated_image_515zos515zos515z.png"
                alt="Elsayed Mustafa"
                className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700 hover:scale-110"
              />
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}