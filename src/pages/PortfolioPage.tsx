import { motion } from 'motion/react';
import { useState } from 'react';
import { ExternalLink, Github, Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { allProjects } from '../data/projects';

const categories = ['Todos', 'Imobiliária', 'Loja Online', 'Consultoria', 'Viagens'];

export default function PortfolioPage() {
  const [filter, setFilter] = useState('Todos');

  const filteredProjects = filter === 'Todos' 
    ? allProjects 
    : allProjects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-cyber-black">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <header className="mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Portfólio <span className="text-cyber-light/40 italic">Completo</span>.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-cyber-light/60 max-w-2xl"
            >
              Explore meus projetos mais recentes em desenvolvimento web e consultoria de segurança. Cada linha de código é escrita com foco em proteção e performance.
            </motion.p>
          </header>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <div className="flex items-center gap-2 text-cyber-light/40 mr-4">
              <Filter className="w-4 h-4" />
              <span className="text-xs font-mono uppercase tracking-widest">Filtrar por:</span>
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat 
                    ? 'bg-cyber-white text-cyber-black' 
                    : 'bg-cyber-white/5 text-cyber-light/60 hover:bg-cyber-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glass rounded-[40px] border-cyber-white/5 overflow-hidden group"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-cyber-black/80 backdrop-blur-md text-[10px] font-mono text-cyber-white uppercase tracking-wider border border-cyber-white/10">
                    {project.category}
                  </div>
                </div>
                
                <div className="p-8">
                  <h4 className="text-xl font-bold mb-3 group-hover:text-cyber-light transition-colors">{project.title}</h4>
                  <p className="text-cyber-light/60 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map(t => (
                      <span key={t} className="px-2 py-1 rounded-lg bg-cyber-white/5 text-[10px] font-mono text-cyber-light/40 uppercase tracking-wider">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-cyber-white/5">
                    <Link to={`/portfolio/${project.id}`} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-cyber-light transition-colors">
                      Detalhes <ExternalLink className="w-4 h-4" />
                    </Link>
                    {project.github && (
                      <a href={project.github} target="_blank" className="text-cyber-light/40 hover:text-cyber-white transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
