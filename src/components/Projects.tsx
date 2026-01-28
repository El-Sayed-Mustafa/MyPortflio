import { BarChart3, Users, TrendingDown, Github } from 'lucide-react';

const projects = [
  {
    title: 'AdventureWorks Business Intelligence Dashboard',
    icon: BarChart3,
    tech: 'Power BI',
    link: 'https://github.com/El-Sayed-Mustafa/AdventureWorks-Report',
    image: 'src/components/images/ADV.png',
    highlights: [
      'Built executive-level dashboards for sales and customer analysis, including geo-mapping',
      'Discovered that top 20% of products generate 75% of revenue',
      'Tracked 12% MoM and 18% YoY sales growth',
    ],
  },
  
  {
    title: 'HR Analytics Dashboard',
    icon: Users,
    tech: 'Power BI',
    link: 'https://github.com/El-Sayed-Mustafa/HR-Analytics',
    image: 'src/components/images/HR.png', 
    highlights: [
      'Designed dashboards to monitor workforce KPIs and attrition',
      'Identified 16.12% attrition rate, strongly linked to overtime and short employee tenure',
    ],
  },
  {
    title: 'Customer Churn Analysis',
    icon: TrendingDown,
    tech: 'Power BI, Excel',
    link: 'https://github.com/El-Sayed-Mustafa/Customer-Churn-Analysis-using-Power-BI',
    image: 'src/components/images/Churn.png',
    highlights: [
      'Analyzed telecom customer behavior and churn patterns',
      'Reported 26.86% churn rate',
      'Recommended loyalty programs for senior and monthly-contract customers',
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="bg-slate-50 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200 flex flex-col"
              >
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover"
                />

                <div className="p-6 flex flex-col flex-grow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {project.title}
                  </h3>

                  <p className="text-sm text-blue-600 font-semibold mb-4">
                    {project.tech}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-slate-600 text-sm flex items-start">
                        <span className="text-blue-600 mr-2 mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition"
                  >
                    <Github className="w-4 h-4" />
                    View on GitHub
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
