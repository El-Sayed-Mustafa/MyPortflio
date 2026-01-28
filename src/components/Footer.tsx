import { Mail, Phone, Github, ExternalLink, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Elsayed Mustafa</h3>
            <p className="text-slate-400">
              Data Analyst specializing in turning raw data into actionable business insights.
            </p>
            <div className="flex items-center gap-2 mt-4 text-slate-400">
              <Shield className="w-4 h-4" />
              <span className="text-sm">Military Service: Completed</span>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="mailto:elsayed.mustafa.ibrahim@gmail.com"
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">elsayed.mustafa.ibrahim@gmail.com</span>
              </a>
              <div className="flex items-center gap-2 text-slate-400">
                <Phone className="w-4 h-4" />
                <span className="text-sm">01559850933</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Links</h4>
            <div className="space-y-3">
              <a
                href="https://github.com/Elsayed-Mustafa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                <span className="text-sm">GitHub Profile</span>
              </a>
              <a
                href="https://github.com/El-Sayed-Mustafa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span className="text-sm">Portfolio</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} Elsayed Mustafa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
