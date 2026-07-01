import { motion } from 'motion/react';
import { Search, ShieldAlert, FileText, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    title: 'Reconhecimento',
    description: 'Análise inicial da superfície de ataque e coleta de informações sobre a infraestrutura.',
    icon: Search,
    color: 'text-blue-400'
  },
  {
    title: 'Análise de Vulnerabilidades',
    description: 'Identificação técnica de brechas, falhas de configuração e pontos fracos no código.',
    icon: ShieldAlert,
    color: 'text-red-400'
  },
  {
    title: 'Exploração & Correção',
    description: 'Simulação controlada de ataques e implementação imediata de patches de segurança.',
    icon: CheckCircle2,
    color: 'text-green-400'
  },
  {
    title: 'Relatório & Monitoramento',
    description: 'Entrega de documentação técnica detalhada e configuração de alertas contínuos.',
    icon: FileText,
    color: 'text-purple-400'
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-cyber-dark relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-mono text-cyber-light/40 uppercase tracking-widest mb-4">Metodologia</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8">
              O ciclo de <span className="text-cyber-light/40 italic">segurança</span> contínua.
            </h3>
            <p className="text-cyber-light/60 text-lg mb-8 leading-relaxed">
              Minha metodologia é baseada nos frameworks mais rigorosos do mercado, garantindo que cada etapa do processo seja documentada e verificável.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm font-mono text-cyber-light/80">
                <span className="w-1.5 h-1.5 rounded-full bg-cyber-white" />
                Conformidade com OWASP Top 10
              </div>
              <div className="flex items-center gap-3 text-sm font-mono text-cyber-light/80">
                <span className="w-1.5 h-1.5 rounded-full bg-cyber-white" />
                Padrões NIST e ISO 27001
              </div>
              <div className="flex items-center gap-3 text-sm font-mono text-cyber-light/80">
                <span className="w-1.5 h-1.5 rounded-full bg-cyber-white" />
                Abordagem DevSecOps
              </div>
            </div>
          </motion.div>

          <div className="grid gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-6 rounded-3xl border-cyber-white/5 flex gap-6 items-start group hover:border-cyber-white/20 transition-all"
              >
                <div className={`w-12 h-12 rounded-2xl bg-cyber-white/5 flex items-center justify-center shrink-0 group-hover:bg-cyber-white group-hover:text-cyber-black transition-colors`}>
                  <step.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
                    <span className="text-xs font-mono text-cyber-light/20">0{i + 1}</span>
                    {step.title}
                  </h4>
                  <p className="text-sm text-cyber-light/60 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
