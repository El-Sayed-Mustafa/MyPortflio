import { Github, Linkedin, Facebook, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div id="home" className="relative min-h-screen bg-[#0a1120] text-white font-sans selection:bg-blue-500/30 overflow-hidden">
      
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/20 rounded-full blur-[120px]"></div>
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a1120]/80 backdrop-blur-md border-b border-slate-800/50">
        <div className="flex justify-between items-center px-8 py-5 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent"
          >
            Elsayed Mustafa
          </motion.div>
          
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
            {['home', 'experience', 'projects', 'skills', 'education'].map((item) => (
              <a key={item} href={`#${item}`} className="capitalize hover:text-blue-400 transition-colors">{item}</a>
            ))}
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#footer" 
              className="ml-2 hover:text-white bg-blue-600 px-5 py-2 rounded-lg transition-all shadow-lg shadow-blue-900/20"
            >
              Hire Me
            </motion.a>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <section className="relative z-10 max-w-7xl mx-auto px-8 pt-32 pb-12 md:pt-48 md:pb-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Animated Text */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1 space-y-6"
        >
          <div className="space-y-2">
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-6xl md:text-8xl font-bold tracking-tighter leading-none"
            >
              Elsayed <br />
              <span className="text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">Mustafa</span>
            </motion.h1>
            <motion.h2 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-3xl md:text-4xl text-slate-400 font-light tracking-wide"
            >
              Data Analyst
            </motion.h2>
          </div>

          <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
            Transforming complex data into actionable insights. Specialized in data visualization, 
            business intelligence, and advanced analytics to drive strategic decision-making.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <motion.a 
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(37,99,235,0.4)" }}
              whileTap={{ scale: 0.95 }}
              href="#footer" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all shadow-xl shadow-blue-900/40"
            >
              Get In Touch
            </motion.a>
            <motion.a 
              whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
              href="#projects" 
              className="border border-slate-700 text-white px-8 py-3 rounded-lg font-semibold transition-all"
            >
              View Projects
            </motion.a>
          </div>

          {/* Social Icons with Stagger Animation */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-6 pt-8 text-slate-500"
          >
            {[
              { Icon: Github, href: "https://github.com/El-Sayed-Mustafa" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/eng-elsayed-mustafa/" },
              { Icon: Facebook, href: "https://www.facebook.com/alsayed.mostafa.507/" },
              { Icon: Mail, href: "mailto:elsayed.mustafa.ibrahim@gmail.com" },
              { Icon: Phone, href: "tel:01559850933" }
            ].map((social, i) => (
              <motion.a 
                key={i}
                whileHover={{ y: -5, color: "#3b82f6" }}
                href={social.href}
                target="_blank"
                className="transition-colors"
              >
                <social.Icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side: Animated Professional Image */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="order-1 md:order-2 flex justify-center items-center relative"
        >
          {/* Rotating Gradient Ring */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute w-72 h-72 md:w-[420px] md:h-[420px] rounded-full border-2 border-dashed border-blue-500/30"
          ></motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="relative w-64 h-64 md:w-[400px] md:h-[400px] rounded-full p-1 bg-gradient-to-b from-blue-500 via-blue-400/20 to-transparent shadow-2xl shadow-blue-500/20"
          >
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#0a1120] bg-slate-900">
              <img
                src="src/components/images/gemini_generated_image_515zos515zos515z.png"
                alt="Elsayed Mustafa"
                className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>
        </motion.div>

      </section>
    </div>
  );
}