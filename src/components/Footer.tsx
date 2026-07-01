import { Shield, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 bg-cyber-black border-t border-cyber-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex items-center gap-2 text-xl font-bold tracking-tighter">
            <Shield className="w-8 h-8 text-cyber-white" />
            <span>ROGER <span className="text-cyber-light/60">SLV</span></span>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-cyber-light/40 hover:text-cyber-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-cyber-light/40 hover:text-cyber-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-cyber-light/40 hover:text-cyber-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-cyber-light/40 hover:text-cyber-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-cyber-white/5">
          <div className="text-xs font-mono text-cyber-light/20 uppercase tracking-widest">
            © 2026 ROGER SLV. TODOS OS DIREITOS RESERVADOS.
          </div>
          
          <div className="flex gap-8 text-[10px] font-mono text-cyber-light/20 uppercase tracking-widest">
            <a href="#" className="hover:text-cyber-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-cyber-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-cyber-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
