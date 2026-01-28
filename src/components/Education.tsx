import { GraduationCap, Award, Globe } from 'lucide-react';

const certifications = [
  'Data Analyst in Power BI — DataCamp',
  'Associate Data Analyst in SQL — DataCamp',
  'Advanced SQL Querying — Maven Analytics',
  'Data Analysis with Excel Power Tools — DataCamp',
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Education & Certifications</h2>

        <div className="bg-white rounded-xl p-8 shadow-md mb-8 border-l-4 border-blue-600">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-6 h-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                B.Sc. in Computer & Information Science
              </h3>
              <p className="text-blue-600 font-semibold mb-1">
                Ain Shams University – Scientific Computing Department
              </p>
              <p className="text-slate-600 mb-4">2020 – 2024</p>

              <div className="bg-slate-50 rounded-lg p-4 mt-4">
                <h4 className="font-bold text-slate-900 mb-2">Graduation Project: Data-Driven English Practice App</h4>
                <ul className="space-y-2">
                  <li className="text-slate-600 flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span>Processed datasets to simulate conversations and grammar correction</span>
                  </li>
                  <li className="text-slate-600 flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span>Applied data-driven techniques to improve feedback accuracy</span>
                  </li>
                  <li className="text-slate-600 flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span>Worked on data preparation, model fine-tuning, and results analysis</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-md mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Award className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Certifications</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <span className="text-blue-600 mt-1">✓</span>
                <span className="text-slate-700">{cert}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-md">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Globe className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Languages</h3>
          </div>
          <div className="flex gap-6">
            <div className="flex-1">
              <p className="font-semibold text-slate-900 mb-1">Arabic</p>
              <p className="text-slate-600">Native</p>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-slate-900 mb-1">English</p>
              <p className="text-slate-600">Professional Proficiency</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
