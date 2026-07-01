import { motion } from 'motion/react';
import { Terminal, Shield, Cpu, Globe } from 'lucide-react';

const stats = [
  { label: 'Anos de Experiência', value: '8+' },
  { label: 'Projetos Seguros', value: '120+' },
  { label: 'Vulnerabilidades Reportadas', value: '500+' },
  { label: 'Sistemas Auditados', value: '45+' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-cyber-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-mono text-cyber-light/40 uppercase tracking-widest mb-4">Sobre mim</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Unindo a arte de construir com a ciência de <span className="text-cyber-light/40 italic">proteger</span>.
            </h3>
            
            <div className="space-y-6 text-cyber-light/60 text-lg leading-relaxed">
              <p>
                Como desenvolvedor Full Stack e Consultor de Cibersegurança, minha missão é garantir que a inovação digital não venha acompanhada de riscos desnecessários. Especializado em arquiteturas modernas e testes de intrusão.
              </p>
              <p>
                Acredito que a segurança deve ser intrínseca ao processo de desenvolvimento (DevSecOps), e não uma camada adicionada ao final. Minha abordagem combina rigor técnico com uma visão estratégica de negócios.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-12">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold text-cyber-white mb-1">{stat.value}</div>
                  <div className="text-xs font-mono text-cyber-light/40 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="glass p-8 rounded-3xl border-cyber-white/5 hover:border-cyber-white/20 transition-colors group">
                <Terminal className="w-10 h-10 mb-4 text-cyber-white group-hover:scale-110 transition-transform" />
                <h4 className="font-bold mb-2">Full Stack</h4>
                <p className="text-sm text-cyber-light/40">Node.js, NestJS, React, Laravel</p>
              </div>
              <div className="glass p-8 rounded-3xl border-cyber-white/5 hover:border-cyber-white/20 transition-colors group">
                <Shield className="w-10 h-10 mb-4 text-cyber-white group-hover:scale-110 transition-transform" />
                <h4 className="font-bold mb-2">Pentest</h4>
                <p className="text-sm text-cyber-light/40">Testes de invasão e auditoria</p>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="glass p-8 rounded-3xl border-cyber-white/5 hover:border-cyber-white/20 transition-colors group">
                <Cpu className="w-10 h-10 mb-4 text-cyber-white group-hover:scale-110 transition-transform" />
                <h4 className="font-bold mb-2">Arquitetura</h4>
                <p className="text-sm text-cyber-light/40">Sistemas seguros e escaláveis</p>
              </div>
              <div className="glass p-8 rounded-3xl border-cyber-white/5 hover:border-cyber-white/20 transition-colors group">
                <Globe className="w-10 h-10 mb-4 text-cyber-white group-hover:scale-110 transition-transform" />
                <h4 className="font-bold mb-2">Consultoria</h4>
                <p className="text-sm text-cyber-light/40">Estratégia e conformidade</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
