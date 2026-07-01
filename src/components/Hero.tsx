import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Code2, Lock } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden cyber-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-black/50 to-cyber-black pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-white/5 border border-cyber-white/10 text-xs font-mono text-cyber-light/60 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            DISPONÍVEL PARA NOVOS PROJETOS
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            Desenvolvimento seguro desde a <span className="text-cyber-light/40 italic">primeira linha</span> de código.
          </h1>
          
          <p className="text-lg md:text-xl text-cyber-light/60 mb-10 max-w-xl leading-relaxed">
            Especialista em criar aplicações robustas e escaláveis, unindo a excelência do desenvolvimento full stack com as melhores práticas de cibersegurança do mercado.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact"
              className="px-8 py-4 bg-cyber-white text-cyber-black font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-cyber-light transition-all group"
            >
              Solicitar auditoria
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#portfolio"
              className="px-8 py-4 bg-cyber-white/5 border border-cyber-white/10 text-cyber-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-cyber-white/10 transition-all"
            >
              Ver portfólio
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-8 opacity-40 grayscale">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5" />
              <span className="text-xs font-mono">OWASP TOP 10</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5" />
              <span className="text-xs font-mono">SECURE ARCH</span>
            </div>
            <div className="flex items-center gap-2">
              <Code2 className="w-5 h-5" />
              <span className="text-xs font-mono">FULL STACK</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 glass rounded-3xl p-8 border-cyber-white/10 aspect-square flex flex-col justify-center overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyber-white/20 to-transparent" />
            
            <div className="space-y-6 font-mono text-sm text-cyber-light/40">
              <div className="flex gap-4">
                <span className="text-cyber-white/20">01</span>
                <span className="text-green-400">class</span> <span className="text-cyber-white">SecurityConsultant</span> {'{'}
              </div>
              <div className="flex gap-4 pl-8">
                <span className="text-cyber-white/20">02</span>
                <span className="text-cyber-white">constructor() {'{'}</span>
              </div>
              <div className="flex gap-4 pl-16">
                <span className="text-cyber-white/20">03</span>
                <span className="text-cyber-white">this.focus = <span className="text-orange-300">"Security-First"</span>;</span>
              </div>
              <div className="flex gap-4 pl-16">
                <span className="text-cyber-white/20">04</span>
                <span className="text-cyber-white">this.stack = [<span className="text-blue-300">"Node"</span>, <span className="text-blue-300">"React"</span>, <span className="text-blue-300">"Nest"</span>];</span>
              </div>
              <div className="flex gap-4 pl-8">
                <span className="text-cyber-white/20">05</span>
                <span className="text-cyber-white">{'}'}</span>
              </div>
              <div className="flex gap-4 pl-8">
                <span className="text-cyber-white/20">06</span>
                <span className="text-cyber-white">async <span className="text-yellow-300">audit</span>(system) {'{'}</span>
              </div>
              <div className="flex gap-4 pl-16">
                <span className="text-cyber-white/20">07</span>
                <span className="text-cyber-white">return await pentest(system);</span>
              </div>
              <div className="flex gap-4 pl-8">
                <span className="text-cyber-white/20">08</span>
                <span className="text-cyber-white">{'}'}</span>
              </div>
              <div className="flex gap-4">
                <span className="text-cyber-white/20">09</span>
                <span className="text-cyber-white">{'}'}</span>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-cyber-white/5 rounded-full blur-3xl" />
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-cyber-white/5 rounded-full blur-3xl" />
          </div>
          
          {/* Floating badges */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 glass p-4 rounded-2xl border-cyber-white/20 z-20"
          >
            <ShieldCheck className="w-8 h-8 text-cyber-white" />
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-6 -left-6 glass p-4 rounded-2xl border-cyber-white/20 z-20"
          >
            <Lock className="w-8 h-8 text-cyber-white" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
