import { motion } from 'motion/react';
import { Database, Layout, Server, Shield, Terminal, Cpu, Globe, Lock } from 'lucide-react';

const categories = [
  {
    name: 'Frontend',
    icon: Layout,
    skills: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion']
  },
  {
    name: 'Backend',
    icon: Server,
    skills: ['Node.js', 'NestJS', 'Laravel', 'Express', 'GraphQL']
  },
  {
    name: 'Database',
    icon: Database,
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Prisma']
  },
  {
    name: 'Security Tools',
    icon: Shield,
    skills: ['Burp Suite', 'Metasploit', 'Nmap', 'Wireshark', 'OWASP ZAP']
  }
];

export default function TechStack() {
  return (
    <section id="stack" className="py-24 bg-cyber-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-mono text-cyber-light/40 uppercase tracking-widest mb-4"
          >
            Stack Tecnológica
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Ferramentas de <span className="text-cyber-light/40 italic">elite</span>.
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-[40px] border-cyber-white/5 hover:border-cyber-white/10 transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-cyber-white/5 flex items-center justify-center mb-6 group-hover:bg-cyber-white group-hover:text-cyber-black transition-colors">
                <cat.icon className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-6">{cat.name}</h4>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(skill => (
                  <span key={skill} className="px-3 py-1.5 rounded-xl bg-cyber-white/5 text-xs font-mono text-cyber-light/60 border border-cyber-white/5 hover:border-cyber-white/20 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Security Badges / Standards */}
        <div className="mt-20 pt-12 border-t border-cyber-white/5 flex flex-wrap justify-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-3">
            <Shield className="w-6 h-6" />
            <span className="font-mono text-sm uppercase tracking-widest">OWASP Compliance</span>
          </div>
          <div className="flex items-center gap-3">
            <Lock className="w-6 h-6" />
            <span className="font-mono text-sm uppercase tracking-widest">GDPR / LGPD Ready</span>
          </div>
          <div className="flex items-center gap-3">
            <Terminal className="w-6 h-6" />
            <span className="font-mono text-sm uppercase tracking-widest">Secure Coding</span>
          </div>
          <div className="flex items-center gap-3">
            <Globe className="w-6 h-6" />
            <span className="font-mono text-sm uppercase tracking-widest">Global Standards</span>
          </div>
        </div>
      </div>
    </section>
  );
}
