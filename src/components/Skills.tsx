import { Database, Code, Brain, Cog, MessageSquare } from 'lucide-react';

const skillCategories = [
  {
    title: 'Data Analysis',
    icon: Database,
    color: 'from-blue-500 to-cyan-400',
    skills: ['SQL', 'Power BI', 'Advanced Excel'],
  },
  {
    title: 'Programming',
    icon: Code,
    color: 'from-purple-500 to-pink-400',
    skills: ['Python (Pandas, NumPy)', 'Bash'],
  },
  {
    title: 'Data Science',
    icon: Brain,
    color: 'from-emerald-500 to-teal-400',
    skills: ['Machine Learning', 'NLP', 'Exploratory Data Analysis (EDA)'],
  },
  {
    title: 'Data Engineering',
    icon: Cog,
    color: 'from-orange-500 to-yellow-400',
    skills: ['ETL', 'Data Modeling', 'Data Warehousing'],
  },
  {
    title: 'Soft Skills',
    icon: MessageSquare,
    color: 'from-blue-600 to-indigo-400',
    skills: ['Analytical Thinking', 'Problem Solving', 'Teaching', 'Communication'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#0a1120] text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
            Technical Stack
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group relative bg-[#1e293b]/40 rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm shadow-xl"
              >
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-[0.03] transition-opacity rounded-2xl`}></div>

                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-[#0a1120]" />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2 relative z-10">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-1.5 bg-[#0f172a] text-slate-300 text-xs font-medium rounded-lg border border-slate-700/50 group-hover:border-blue-500/30 group-hover:text-blue-100 transition-colors"
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