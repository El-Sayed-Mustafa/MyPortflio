import { Briefcase, Calendar } from 'lucide-react';

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
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-600"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-blue-600 font-semibold mb-2">
                    <Briefcase className="w-4 h-4" />
                    <span>{exp.company}</span>
                    <span className="text-slate-400">•</span>
                    <span className="text-slate-600">{exp.location}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-slate-600 text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                </div>
              </div>
              <ul className="space-y-2">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="text-slate-600 flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
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
