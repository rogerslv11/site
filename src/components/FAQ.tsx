import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'Por que contratar um desenvolvedor que também é consultor de segurança?',
    answer: 'A maioria das vulnerabilidades nasce no código. Ter um desenvolvedor com mentalidade de segurança garante que sua aplicação seja construída com defesas intrínsecas, economizando custos futuros com correções e evitando vazamentos de dados.'
  },
  {
    question: 'Quanto tempo dura uma auditoria de segurança completa?',
    answer: 'Depende da complexidade do sistema. Uma auditoria padrão geralmente leva de 1 a 3 semanas, incluindo análise de código, testes de invasão e entrega do relatório detalhado com recomendações.'
  },
  {
    question: 'Você trabalha com tecnologias específicas?',
    answer: 'Sim, sou especializado no ecossistema JavaScript (Node.js, React, NestJS) e PHP (Laravel). No entanto, os princípios de segurança e pentest aplicam-se a qualquer stack tecnológica.'
  },
  {
    question: 'Como funciona o suporte após a entrega do projeto?',
    answer: 'Ofereço pacotes de monitoramento contínuo e suporte prioritário para garantir que novas ameaças sejam mitigadas rapidamente e que o sistema permaneça atualizado.'
  },
  {
    question: 'Vocês oferecem treinamento para a nossa equipe interna?',
    answer: 'Sim! Acredito fortemente na cultura DevSecOps. Posso criar workshops fofocados na sua stack de tecnologia para capacitar a sua equipe com práticas de segurança.'
  },
  {
    question: 'E se vocês encontrarem uma vulnerabilidade crítica durante uma auditoria?',
    answer: 'Nesses casos, relatamos imediatamente a vulnerabilidade junto a um patch provisório ou instruções de mitigação se possível, garantindo sua segurança antes mesmo da auditoria terminar.'
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-cyber-black">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-mono text-cyber-light/40 uppercase tracking-widest mb-4"
          >
            Dúvidas Frequentes
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold"
          >
            Perguntas <span className="text-cyber-light/40 italic">comuns</span>.
          </motion.h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-3xl border-cyber-white/5 overflow-hidden"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-cyber-white/5 transition-colors"
              >
                <span className="font-bold text-lg">{faq.question}</span>
                {activeIndex === i ? (
                  <Minus className="w-5 h-5 text-cyber-light" />
                ) : (
                  <Plus className="w-5 h-5 text-cyber-light" />
                )}
              </button>
              
              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-8 text-cyber-light/60 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
