import { Database, Code, Brain, Cog, MessageSquare } from 'lucide-react';

const skillCategories = [
  {
    title: 'Data Analysis',
    icon: Database,
    skills: ['SQL', 'Power BI', 'Advanced Excel'],
  },
  {
    title: 'Programming',
    icon: Code,
    skills: ['Python (Pandas, NumPy)', 'Bash'],
  },
  {
    title: 'Data Science',
    icon: Brain,
    skills: ['Machine Learning', 'NLP', 'Exploratory Data Analysis (EDA)'],
  },
  {
    title: 'Data Engineering',
    icon: Cog,
    skills: ['ETL', 'Data Modeling', 'Data Warehousing'],
  },
  {
    title: 'Soft Skills',
    icon: MessageSquare,
    skills: ['Analytical Thinking', 'Problem Solving', 'Teaching', 'Communication'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Technical Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-slate-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white text-slate-700 text-sm rounded-full border border-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
