import { Github, Linkedin, Facebook, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div id="home" className="relative min-h-screen bg-[#0a1120] text-white font-sans overflow-hidden">
      
      {/* 1. التدرج اللوني الأساسي (الهالة اللي في الخلفية) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* هالة زرقاء كبيرة في جهة اليمين خلف الصورة */}
        <div className="absolute top-1/2 right-[-10%] -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/20 rounded-full blur-[120px]"></div>
        {/* هالة أصغر عند الكلام لزيادة التباين */}
        <div className="absolute top-[20%] left-[-5%] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]"></div>
      </div>

      {/* Navbar - شفافة مع Blur خفيف */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a1120]/40 backdrop-blur-md">
        <div className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
          <div className="text-xl font-bold tracking-tight">Elsayed Mustafa</div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#education" className="hover:text-white transition-colors">Education</a>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all shadow-lg shadow-blue-900/40">
              Hire Me
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <section className="relative z-10 max-w-7xl mx-auto px-8 min-h-screen flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
          
          {/* Left Side: Text */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
                Elsayed <span className="text-blue-500">Mustafa</span>
              </h1>
              <h2 className="text-3xl md:text-4xl text-slate-300 font-light italic">
                Data Analyst
              </h2>
            </div>

            <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
              Transforming complex data into actionable insights. Specialized in data visualization, 
              business intelligence, and advanced analytics to drive strategic decision-making.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold shadow-xl shadow-blue-600/20 transition-all active:scale-95">
                Get In Touch
              </button>
              <button className="border border-slate-700 hover:bg-slate-800 text-white px-8 py-3 rounded-xl font-semibold transition-all">
                View Projects
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6 pt-4 text-slate-500">
              <Github className="hover:text-blue-500 cursor-pointer transition-colors" size={22} />
              <Linkedin className="hover:text-blue-500 cursor-pointer transition-colors" size={22} />
              <Facebook className="hover:text-blue-500 cursor-pointer transition-colors" size={22} />
              <Mail className="hover:text-blue-500 cursor-pointer transition-colors" size={22} />
              <Phone className="hover:text-blue-500 cursor-pointer transition-colors" size={22} />
            </div>
          </motion.div>

          {/* Right Side: الصورة مع الهالة الزرقاء المحيطة */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center relative"
          >
            {/* الدائرة المضيئة المباشرة ورا الصورة (glow) */}
            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-[80px] scale-75 animate-pulse"></div>
            
            <div className="relative w-72 h-72 md:w-[450px] md:h-[450px] rounded-full p-2 bg-gradient-to-b from-blue-500/50 to-transparent">
              <div className="w-full h-full rounded-full overflow-hidden border-[6px] border-[#0a1120] bg-slate-900 shadow-2xl">
                <img
                  src="src/components/images/gemini_generated_image_515zos515zos515z.png"
                  alt="Elsayed Mustafa"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}