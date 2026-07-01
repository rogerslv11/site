import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-cyber-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyber-white/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-mono text-cyber-light/40 uppercase tracking-widest mb-4">Contato</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8">
              Pronto para elevar sua <span className="text-cyber-light/40 italic">segurança</span>?
            </h3>
            <p className="text-cyber-light/60 text-lg mb-12 max-w-md">
              Seja para um novo projeto de desenvolvimento ou uma auditoria crítica de segurança, estou pronto para ajudar sua empresa a crescer com confiança.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-cyber-white/5 flex items-center justify-center group-hover:bg-cyber-white group-hover:text-cyber-black transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-cyber-light/40 uppercase tracking-wider mb-1">E-mail</div>
                  <div className="text-lg font-medium">rogeralxslv@gmail.com</div>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-cyber-white/5 flex items-center justify-center group-hover:bg-cyber-white group-hover:text-cyber-black transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-cyber-light/40 uppercase tracking-wider mb-1">WhatsApp</div>
                  <div className="text-lg font-medium">+55 (14) 99115-2236</div>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-cyber-white/5 flex items-center justify-center group-hover:bg-cyber-white group-hover:text-cyber-black transition-all">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-cyber-light/40 uppercase tracking-wider mb-1">Localização</div>
                  <div className="text-lg font-medium">São Paulo, Brasil (Remoto Global)</div>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <a 
                href="https://wa.me/5514991152236" 
                target="_blank"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white font-bold rounded-2xl hover:opacity-90 transition-opacity"
              >
                <MessageSquare className="w-5 h-5" />
                Falar no WhatsApp
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-[40px] border-cyber-white/5"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-cyber-light/40 uppercase tracking-wider ml-1">Nome</label>
                  <input 
                    type="text" 
                    placeholder="Seu nome"
                    className="w-full bg-cyber-white/5 border border-cyber-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-cyber-white/30 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-cyber-light/40 uppercase tracking-wider ml-1">E-mail</label>
                  <input 
                    type="email" 
                    placeholder="seu@email.com"
                    className="w-full bg-cyber-white/5 border border-cyber-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-cyber-white/30 transition-colors"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-cyber-light/40 uppercase tracking-wider ml-1">Empresa</label>
                  <input 
                    type="text" 
                    placeholder="Nome da sua empresa"
                    className="w-full bg-cyber-white/5 border border-cyber-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-cyber-white/30 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-cyber-light/40 uppercase tracking-wider ml-1">Telefone</label>
                  <input 
                    type="tel" 
                    placeholder="(00) 00000-0000"
                    className="w-full bg-cyber-white/5 border border-cyber-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-cyber-white/30 transition-colors"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-mono text-cyber-light/40 uppercase tracking-wider ml-1">Assunto</label>
                <select className="w-full bg-cyber-white/5 border border-cyber-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-cyber-white/30 transition-colors appearance-none">
                  <option className="bg-cyber-black">Auditoria de Segurança</option>
                  <option className="bg-cyber-black">Desenvolvimento Web</option>
                  <option className="bg-cyber-black">Consultoria</option>
                  <option className="bg-cyber-black">Outros</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-mono text-cyber-light/40 uppercase tracking-wider ml-1">Mensagem</label>
                <textarea 
                  rows={4}
                  placeholder="Como posso ajudar?"
                  className="w-full bg-cyber-white/5 border border-cyber-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-cyber-white/30 transition-colors resize-none"
                />
              </div>
              
              <button className="w-full py-5 bg-cyber-white text-cyber-black font-bold rounded-2xl flex items-center justify-center gap-3 hover:bg-cyber-light transition-colors group">
                Enviar Mensagem
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              
              <p className="text-center text-[10px] font-mono text-cyber-light/20 uppercase tracking-widest">
                Seus dados estão protegidos por criptografia de ponta a ponta.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
