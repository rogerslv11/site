import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Roger',
    role: 'Diretor de Segurança @ SecureFin',
    content: 'Tivemos uma falha crítica de vazamento de credenciais em produção. O Roger Slv respondeu em minutos, localizou a brecha exata e nos ajudou a implantar o patch com total profissionalismo.',
    avatar: 'https://picsum.photos/seed/roger/100/100'
  },
  {
    name: 'Ricardo Santos',
    role: 'CTO @ TechFlow',
    content: 'A auditoria de segurança realizada foi um divisor de águas para nossa infraestrutura. Identificamos falhas críticas que nunca havíamos percebido.',
    avatar: 'https://picsum.photos/seed/person1/100/100'
  },
  {
    name: 'Ana Oliveira',
    role: 'Fundadora @ SafePay',
    content: 'O desenvolvimento do nosso sistema transacional foi impecável. Segurança e performance andam juntas em cada detalhe do código entregue.',
    avatar: 'https://picsum.photos/seed/person2/100/100'
  },
  {
    name: 'Marcos Viana',
    role: 'Gerente de TI @ GlobalLog',
    content: 'Excelente consultoria. O treinamento de engenharia social reduziu drasticamente nossos incidentes internos de segurança.',
    avatar: 'https://picsum.photos/seed/person3/100/100'
  },
  {
    name: 'Júlia Costa',
    role: 'Diretora @ FinTech Plus',
    content: 'Implementamos a solução Zero Trust de forma suave. A documentação fornecida e a assistência contínua são de outro nível.',
    avatar: 'https://picsum.photos/seed/person4/100/100'
  },
  {
    name: 'Felipe Rocha',
    role: 'CEO @ DataSecure',
    content: 'O suporte prestado na mitigação de ataques DDoS foi rápido e eficiente. Nossos serviços permaneceram online graças à rápida intervenção.',
    avatar: 'https://picsum.photos/seed/person5/100/100'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-cyber-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-mono text-cyber-light/40 uppercase tracking-widest mb-4"
          >
            Depoimentos
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold"
          >
            O que dizem os <span className="text-cyber-light/40 italic">parceiros</span>.
          </motion.h3>
        </div>

        <div className="relative flex overflow-x-hidden group">
          <div className="animate-marquee py-4 whitespace-nowrap flex gap-8">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={`${t.name}-${i}`}
                className="glass p-8 w-[400px] flex-shrink-0 rounded-[40px] border-cyber-white/5 relative inline-block whitespace-normal"
              >
                <Quote className="absolute top-8 right-8 w-10 h-10 text-cyber-white/5 transition-colors" />
                
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-cyber-white text-cyber-white" />
                  ))}
                </div>
                
                <p className="text-cyber-light/70 mb-8 italic leading-relaxed">
                  "{t.content}"
                </p>
                
                <div className="flex items-center gap-4">
                  <img 
                    src={t.avatar} 
                    alt={t.name} 
                    className="w-12 h-12 rounded-2xl object-cover grayscale"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="font-bold text-cyber-white">{t.name}</div>
                    <div className="text-xs font-mono text-cyber-light/40 uppercase">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute top-0 animate-marquee2 py-4 whitespace-nowrap flex gap-8">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={`second-${t.name}-${i}`}
                className="glass p-8 w-[400px] flex-shrink-0 rounded-[40px] border-cyber-white/5 relative inline-block whitespace-normal"
              >
                <Quote className="absolute top-8 right-8 w-10 h-10 text-cyber-white/5 transition-colors" />
                
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-cyber-white text-cyber-white" />
                  ))}
                </div>
                
                <p className="text-cyber-light/70 mb-8 italic leading-relaxed">
                  "{t.content}"
                </p>
                
                <div className="flex items-center gap-4">
                  <img 
                    src={t.avatar} 
                    alt={t.name} 
                    className="w-12 h-12 rounded-2xl object-cover grayscale"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="font-bold text-cyber-white">{t.name}</div>
                    <div className="text-xs font-mono text-cyber-light/40 uppercase">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
