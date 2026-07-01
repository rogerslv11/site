import { motion } from 'motion/react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { allProjects } from '../data/projects';

const projects = allProjects.slice(0, 3);

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-cyber-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-sm font-mono text-cyber-light/40 uppercase tracking-widest mb-4"
            >
              Portfólio Selecionado
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold"
            >
              Projetos que definem <span className="text-cyber-light/40 italic">excelência</span>.
            </motion.h3>
          </div>
          <div className="flex flex-col items-end gap-4">
            <motion.a 
              href="https://github.com"
              target="_blank"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-cyber-light/60 hover:text-cyber-white transition-colors group"
            >
              Ver mais no GitHub
              <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </motion.a>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Link 
                to="/portfolio"
                className="flex items-center gap-2 px-6 py-3 bg-cyber-white text-cyber-black font-bold rounded-xl hover:bg-cyber-light transition-all group"
              >
                Ver todos os projetos
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="space-y-24">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              <div className="w-full lg:w-1/2 group relative overflow-hidden rounded-3xl">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full aspect-[4/3] object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-cyber-black/20 group-hover:bg-transparent transition-colors" />
              </div>
              
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="text-xs font-mono text-cyber-light/40 uppercase tracking-widest">{project.category}</div>
                <h4 className="text-3xl font-bold">{project.title}</h4>
                <p className="text-cyber-light/60 leading-relaxed text-lg">
                  {project.description}
                </p>
                
                <div className="grid grid-cols-2 gap-8 py-6 border-y border-cyber-white/5">
                  <div>
                    <div className="text-[10px] font-mono text-cyber-light/40 uppercase mb-2">Problema</div>
                    <p className="text-sm text-cyber-light/70">{project.problem}</p>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-cyber-light/40 uppercase mb-2">Solução</div>
                    <p className="text-sm text-cyber-light/70">{project.solution}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 rounded-full bg-cyber-white/5 text-[10px] font-mono text-cyber-light/40 uppercase tracking-wider">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <Link to={`/portfolio/${project.id}`} className="flex items-center gap-2 text-sm font-bold hover:text-cyber-light transition-colors">
                    Ver detalhes <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
