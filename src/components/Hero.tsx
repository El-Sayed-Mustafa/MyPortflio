import { MapPin, Mail, Phone, Github, ExternalLink } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-4">
            Elsayed Mustafa
          </h1>
          <p className="text-2xl md:text-3xl text-blue-600 font-semibold mb-6">
            Data Analyst
          </p>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Turning raw data into clear business decisions. Strong in SQL, Python, and Power BI,
            with hands-on experience building dashboards, analyzing trends, and delivering insights
            that actually matter—not vanity metrics.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-slate-700 mb-8">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-blue-600" />
            <span>Cairo, Egypt</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-blue-600" />
            <a href="mailto:elsayed.mustafa.ibrahim@gmail.com" className="hover:text-blue-600 transition-colors">
              elsayed.mustafa.ibrahim@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-blue-600" />
            <span>01559850933</span>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <a
            href="https://github.com/Elsayed-Mustafa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-all hover:scale-105"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>
          <a
            href="https://github.com/El-Sayed-Mustafa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all hover:scale-105"
          >
            <ExternalLink className="w-5 h-5" />
            Portfolio
          </a>
        </div>

        <div className="mt-12">
          <a
            href="#projects"
            className="inline-block text-slate-600 hover:text-blue-600 transition-colors animate-bounce"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
