import { BarChart3, Users, TrendingDown, Github, ExternalLink, MessageSquare } from 'lucide-react';

const projects = [
  {
    title: 'The Pulse of Connection: Chat Analytics',
    icon: MessageSquare,
    tech: 'Power BI, Python, NLP',
    link: 'https://github.com/El-Sayed-Mustafa/WhatsApp-Chat-Analytics-Sentiment-Engine', // Replace with your actual repo link
    image: 'public/chat.png', // Ensure you add the image to your public folder
    highlights: [
      'Transformed 64,000+ unstructured messages into a Star Schema BI solution',
      'Engineered NLP sentiment scoring to track emotional trends and "lag" impact',
      'Built interactive UI with dynamic toggles and AI-powered smart narratives',
    ],
  },
  {
    title: 'AdventureWorks Business Intelligence Dashboard',
    icon: BarChart3,
    tech: 'Power BI',
    link: 'https://github.com/El-Sayed-Mustafa/AdventureWorks-Report',
    image: '/ADV.png',
    highlights: [
      'Built executive-level dashboards for sales and customer analysis',
      'Discovered that top 20% of products generate 75% of revenue',
      'Tracked 12% MoM and 18% YoY sales growth',
    ],
  },
  {
    title: 'HR Analytics Dashboard',
    icon: Users,
    tech: 'Power BI',
    link: 'https://github.com/El-Sayed-Mustafa/HR-Analytics',
    image: '/HR.png', 
    highlights: [
      'Designed dashboards to monitor workforce KPIs and attrition',
      'Identified 16.12% attrition rate, linked to overtime trends',
    ],
  },
  {
    title: 'Customer Churn Analysis',
    icon: TrendingDown,
    tech: 'Power BI, Excel',
    link: 'https://github.com/El-Sayed-Mustafa/Customer-Churn-Analysis-using-Power-BI',
    image: '/Churn.png',
    highlights: [
      'Analyzed telecom customer behavior and churn patterns',
      'Reported 26.86% churn rate with actionable loyalty recommendations',
    ],
  },
];


export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#0a1120] text-white border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A showcase of data storytelling through interactive dashboards and deep-dive business analysis.
          </p>
        </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-16">    
                  {projects.map((project, index) => { 
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="group bg-[#1e293b] rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all duration-500 shadow-2xl flex flex-col"
              >
                <div className="relative h-128 overflow-hidden">
                  <div className="absolute inset-0 bg-[#0a1120]/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-4 right-4 z-20">
                    <div className="bg-[#0a1120]/80 backdrop-blur-md p-2 rounded-lg border border-white/10">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  <div className="flex gap-2 mb-4">
                    {project.tech.split(', ').map((t, i) => (
                      <span key={i} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-blue-500/10 text-blue-400 rounded-md border border-blue-500/20">
                        {t}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-slate-400 text-sm flex items-start gap-2">
                        <span className="text-blue-500 font-bold mt-1">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-[#0a1120] hover:bg-blue-600 text-slate-300 hover:text-white rounded-xl border border-slate-700 hover:border-blue-500 transition-all flex items-center justify-center gap-2 font-medium group/btn"
                  >
                    <Github className="w-4 h-4" />
                    View Case Study
                    <ExternalLink className="w-3 h-3 opacity-50 group-hover/btn:opacity-100" />
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