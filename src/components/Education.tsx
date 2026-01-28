import { GraduationCap, Award, Globe, ExternalLink } from 'lucide-react';

const certifications = [
  {
    name: 'Data Analyst in Power BI — DataCamp',
    link: 'https://www.datacamp.com/completed/statement-of-accomplishment/track/6b6773cefd60cf6e4480beaaba4a3750875ebf70'
  },
  {
    name: 'Associate Data Analyst in SQL — DataCamp',
    link: 'https://www.datacamp.com/certificate/DAA0019295316175'
  },
  {
    name: 'Advanced SQL Querying — Maven Analytics',
    link: 'https://certificates.mavenanalytics.io/75ee8eba-7a1f-4666-b90f-df4ff6c9ed42'
  },
  {
    name: 'Data Analysis with Excel Power Tools — DataCamp',
    link: 'https://www.datacamp.com/completed/statement-of-accomplishment/track/c4c003751534242f6ac69aec1a5234c3d7d54f47'
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-[#0a1120] text-white border-t border-slate-800/50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
          Education & Certifications
        </h2>

        {/* University Section */}
        <div className="bg-[#1e293b] rounded-2xl p-8 shadow-2xl mb-10 border border-slate-800 hover:border-blue-500/50 transition-all duration-300 group">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="w-14 h-14 bg-blue-600/10 rounded-xl flex items-center justify-center shrink-0 border border-blue-500/20 group-hover:scale-110 transition-transform">
              <GraduationCap className="w-8 h-8 text-blue-500" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2 text-white">
                B.Sc. in Computer & Information Science
              </h3>
              <p className="text-blue-400 font-semibold mb-1">
                Ain Shams University – Scientific Computing Department
              </p>
              <p className="text-slate-400 mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-slate-600"></span> 2020 – 2024
              </p>

              <div className="bg-[#0a1120]/60 rounded-xl p-6 border border-slate-800">
                <h4 className="font-bold text-blue-100 mb-4 flex items-center gap-2">
                   Graduation Project: Data-Driven English Practice App
                </h4>
                <ul className="space-y-4">
                  {[
                    "Processed datasets to simulate conversations and grammar correction",
                    "Applied data-driven techniques to improve feedback accuracy",
                    "Worked on data preparation, model fine-tuning, and results analysis"
                  ].map((item, i) => (
                    <li key={i} className="text-slate-400 flex items-start gap-3 text-sm leading-relaxed">
                      <span className="text-blue-500 font-bold mt-0.5">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="bg-[#1e293b] rounded-2xl p-8 shadow-2xl mb-10 border border-slate-800">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center border border-blue-500/20">
              <Award className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="text-2xl font-bold">Professional Certifications</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-3 p-4 bg-[#0a1120]/40 rounded-xl border border-slate-800 hover:border-blue-500/50 hover:bg-blue-600/5 transition-all"
              >
                <div className="flex items-center gap-3 text-slate-300 group-hover:text-blue-400">
                  <span className="text-blue-500 font-bold group-hover:scale-110 transition-transform">✓</span>
                  <span className="text-sm font-medium leading-snug">{cert.name}</span>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-blue-400 opacity-0 group-hover:opacity-100 transition-all shrink-0" />
              </a>
            ))}
          </div>
        </div>

        {/* Languages Section */}
        <div className="bg-[#1e293b] rounded-2xl p-8 shadow-2xl border border-slate-800">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center border border-blue-500/20">
              <Globe className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="text-2xl font-bold">Languages</h3>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="p-5 bg-[#0a1120]/40 rounded-xl border border-slate-800 group hover:border-blue-500/30 transition-colors">
              <p className="font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">Arabic</p>
              <p className="text-slate-400 text-sm italic">Native Speaker</p>
            </div>
            <div className="p-5 bg-[#0a1120]/40 rounded-xl border border-slate-800 group hover:border-blue-500/30 transition-colors">
              <p className="font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">English</p>
              <p className="text-slate-400 text-sm italic">Professional Proficiency</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}