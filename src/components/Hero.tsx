import { MapPin, Mail, Phone, Github, ExternalLink, Linkedin, Facebook, MessageSquare } from 'lucide-react';

export default function Hero() {
  return (
    <div className="min-h-screen bg-[#0a1120] text-white font-sans selection:bg-blue-500/30">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <div className="text-xl font-bold tracking-tight">Elsayed Mustafa</div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#أ" className="hover:text-white transition-colors">Home</a>
          <a href="#" className="hover:text-white transition-colors">About</a>
          <a href="#" className="hover:text-white transition-colors">Projects</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all shadow-lg shadow-blue-900/20">
            Hire Me
          </button> 
        </div>
      </nav>

      {/* Hero Content */}
      <section className="max-w-7xl mx-auto px-8 py-12 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Text */}
        <div className="order-2 md:order-1">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tight">
            Elsayed <span className="text-blue-500">Mustafa</span>
          </h1>
          <h2 className="text-3xl md:text-4xl text-slate-400 font-light mb-8">
            Data Analyst
          </h2>
          <p className="text-lg text-slate-400 max-w-lg leading-relaxed mb-10">
            Transforming complex data into actionable insights. Specialized in data visualization, 
            business intelligence, and advanced analytics to drive strategic decision-making.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all flex items-center gap-2">
              Get In Touch
            </button>
            <button className="border border-slate-700 hover:bg-slate-800 text-white px-8 py-3 rounded-lg font-semibold transition-all">
              View Projects
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 text-slate-500">
            <a href="https://github.com/Elsayed-Mustafa" className="hover:text-blue-500 transition-colors">
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

        {/* Right Side: Image with Glow Effect */}
        <div className="order-1 md:order-2 flex justify-center items-center relative">
          {/* Background Glow */}
          <div className="absolute w-72 h-72 md:w-[450px] md:h-[450px] bg-blue-600/10 rounded-full blur-[100px]"></div>
          
          <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full p-1 bg-gradient-to-b from-blue-500 to-transparent shadow-2xl shadow-blue-500/20">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#0a1120] bg-slate-900">
              <img
                src="src/components/images/gemini_generated_image_515zos515zos515z.png"
                alt="Elsayed Mustafa"
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}