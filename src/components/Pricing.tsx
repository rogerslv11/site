import { motion } from 'motion/react';
import { Check, ArrowRight, Zap, Shield, Crown } from 'lucide-react';

const plans = [
  {
    name: 'Auditoria Básica',
    price: 'Sob consulta',
    description: 'Ideal para startups e pequenos projetos que precisam de uma validação inicial de segurança.',
    icon: Zap,
    features: [
      'Análise OWASP Top 10',
      'Scan de vulnerabilidades automatizado',
      'Relatório de riscos críticos',
      'Sugestões de correção básica',
      'Suporte via e-mail'
    ],
    highlight: false
  },
  {
    name: 'Pentest Completo',
    price: 'Sob consulta',
    description: 'Teste de intrusão profundo simulando ataques reais para empresas que levam a segurança a sério.',
    icon: Shield,
    features: [
      'Tudo do plano Básico',
      'Exploração manual de falhas',
      'Teste de APIs e Infraestrutura',
      'Relatório técnico detalhado (Executivo + Técnico)',
      'Reunião de debriefing',
      'Validação de correções (Retest)'
    ],
    highlight: true
  },
  {
    name: 'Consultoria Mensal',
    price: 'Sob consulta',
    description: 'Parceria contínua para manter sua aplicação segura e atualizada durante todo o desenvolvimento.',
    icon: Crown,
    features: [
      'Tudo do Pentest Completo',
      'Acompanhamento DevSecOps',
      'Code Review de novas features',
      'Monitoramento de ameaças 24/7',
      'Treinamento de equipe',
      'Suporte prioritário'
    ],
    highlight: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-cyber-dark relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-mono text-cyber-light/40 uppercase tracking-widest mb-4"
          >
            Investimento
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Planos de <span className="text-cyber-light/40 italic">segurança</span> e consultoria.
          </motion.h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative glass p-10 rounded-[40px] border-cyber-white/5 flex flex-col ${plan.highlight ? 'border-cyber-white/20 ring-1 ring-cyber-white/10 scale-105 z-10' : ''}`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-cyber-white text-cyber-black text-[10px] font-bold uppercase tracking-widest rounded-full">
                  Mais procurado
                </div>
              )}
              
              <div className="mb-8">
                <plan.icon className="w-10 h-10 mb-6 text-cyber-white" />
                <h4 className="text-2xl font-bold mb-2">{plan.name}</h4>
                <div className="text-cyber-light/40 text-sm mb-4">{plan.description}</div>
                <div className="text-3xl font-bold">{plan.price}</div>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {plan.features.map(feature => (
                  <div key={feature} className="flex items-start gap-3 text-sm text-cyber-light/70">
                    <Check className="w-4 h-4 text-cyber-white mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <a 
                href="#contact"
                className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all ${plan.highlight ? 'bg-cyber-white text-cyber-black hover:bg-cyber-light' : 'bg-cyber-white/5 border border-cyber-white/10 text-cyber-white hover:bg-cyber-white/10'}`}
              >
                Selecionar plano
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-cyber-light/40 text-sm">
            Precisa de algo personalizado? <a href="#contact" className="text-cyber-white underline underline-offset-4">Fale comigo</a> para um orçamento sob medida.
          </p>
        </div>
      </div>
    </section>
  );
}
