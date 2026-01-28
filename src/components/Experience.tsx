import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Programming Instructor & Content Developer',
    company: 'CodeX Hub',
    location: 'Hybrid',
    period: '07/2024 – 03/2025',
    responsibilities: [
      'Taught C++, OOP, algorithms, and databases',
      'Strengthened students\' analytical thinking and problem-solving skills',
    ],
  },
  {
    title: 'Freelance Trainer – Math & Coding',
    company: 'Outlier',
    location: 'Remote',
    period: '06/2024 – 04/2026',
    responsibilities: [
      'Reviewed and evaluated math and coding tasks for correctness and clarity',
      'Handled large task volumes with high accuracy and attention to detail',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#0a1120] text-white border-t border-slate-800/50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
          Professional Experience
        </h2>
        
        {/* تم تحسين الخط الزمني ليكون أكثر تناسقاً مع الـ Dark Mode */}
        <div className="space-y-10 relative before:absolute before:inset-0 before:ml-5 md:before:mx-auto before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-600 before:via-slate-800 before:to-transparent">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative bg-[#1e293b] rounded-2xl p-8 shadow-2xl border border-slate-800 hover:border-blue-500/50 transition-all duration-300 group hover:-translate-y-1"
            >
              {/* Timeline dot مع توهج أزرق موحد */}
              <div className="absolute top-8 -left-3 md:-left-4 w-6 h-6 bg-blue-600 rounded-full border-4 border-[#0a1120] shadow-[0_0_15px_rgba(37,99,235,0.4)]"></div>

              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {exp.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 mt-2">
                    <div className="flex items-center gap-1.5 text-blue-400 font-medium">
                      <Briefcase className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-400 text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                {/* توحيد لون الـ Tag الخاص بالتاريخ */}
                <div className="flex items-center gap-2 px-4 py-1.5 bg-[#0a1120] rounded-full text-blue-300 text-sm font-medium border border-blue-500/20 w-fit shrink-0">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="text-slate-400 flex items-start gap-3 leading-relaxed">
                    {/* استبدال النقطة بشكل ▹ الموحد أو نقطة زرقاء واضحة */}
                    <span className="text-blue-500 font-bold mt-0.5">▹</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}