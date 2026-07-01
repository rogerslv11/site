import { motion } from 'motion/react';
import { Code, Search, ShieldAlert, Users, Layout, Database } from 'lucide-react';

const services = [
  {
    title: 'Desenvolvimento Web',
    description: 'Criação de aplicações web de alta performance com foco em escalabilidade e segurança desde o design.',
    icon: Layout,
    tags: ['React', 'Node.js', 'NestJS', 'Laravel']
  },
  {
    title: 'Auditoria de Segurança',
    description: 'Análise profunda de código e infraestrutura para identificar brechas e garantir conformidade.',
    icon: Search,
    tags: ['Code Review', 'Infra Audit', 'Compliance']
  },
  {
    title: 'Pentest (Invasão Ética)',
    description: 'Simulação de ataques reais para testar a resiliência dos seus sistemas contra hackers maliciosos.',
    icon: ShieldAlert,
    tags: ['Web', 'Network', 'Mobile', 'API']
  },
  {
    title: 'Consultoria em Cibersegurança',
    description: 'Estratégias personalizadas para proteger os ativos digitais da sua empresa e treinar sua equipe.',
    icon: Users,
    tags: ['Strategy', 'Training', 'Incident Response']
  },
  {
    title: 'Arquitetura Segura',
    description: 'Design de sistemas baseados em princípios de Zero Trust e segurança por design.',
    icon: Database,
    tags: ['Cloud', 'Microservices', 'Zero Trust']
  },
  {
    title: 'Engenharia Social',
    description: 'Testes de conscientização humana para prevenir ataques de phishing e manipulação.',
    icon: Code,
    tags: ['Phishing', 'Awareness', 'Physical']
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-cyber-dark relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-mono text-cyber-light/40 uppercase tracking-widest mb-4"
          >
            Serviços Especializados
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Soluções para um mundo <span className="text-cyber-light/40 italic">conectado</span>.
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-3xl border-cyber-white/5 hover:border-cyber-white/20 transition-all group hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-2xl bg-cyber-white/5 flex items-center justify-center mb-6 group-hover:bg-cyber-white group-hover:text-cyber-black transition-colors">
                <service.icon className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-4">{service.title}</h4>
              <p className="text-cyber-light/60 mb-8 leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-cyber-white/5 text-[10px] font-mono text-cyber-light/40 uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
