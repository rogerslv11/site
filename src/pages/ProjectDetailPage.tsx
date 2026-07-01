import { motion } from 'motion/react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, ShieldCheck, Lock, Cpu, CheckCircle2 } from 'lucide-react';
import { allProjects } from '../data/projects';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import PageTransition from '../components/PageTransition';

export default function ProjectDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = allProjects.find(p => p.id === id);

  useEffect(() => {
    if (!project) {
      navigate('/portfolio');
    }
  }, [project, navigate]);

  if (!project) return null;

  return (
    <div className="min-h-screen bg-cyber-black">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-12"
          >
            <Link 
              to="/portfolio" 
              className="inline-flex items-center gap-2 text-cyber-light/40 hover:text-cyber-white transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Voltar para o portfólio
            </Link>
          </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="text-xs font-mono text-cyber-light/40 uppercase tracking-widest mb-4">{project.category}</div>
                <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">{project.title}</h1>
                
                <p className="text-xl text-cyber-light/60 mb-12 leading-relaxed">
                  {project.fullDescription}
                </p>

                <div className="grid sm:grid-cols-2 gap-8 mb-12">
                  <div className="glass p-8 rounded-3xl border-cyber-white/5">
                    <h3 className="text-sm font-mono text-cyber-light/40 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4" /> Desafio
                    </h3>
                    <p className="text-cyber-light/70 text-sm leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                  <div className="glass p-8 rounded-3xl border-cyber-white/5">
                    <h3 className="text-sm font-mono text-cyber-light/40 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" /> Solução
                    </h3>
                    <p className="text-cyber-light/70 text-sm leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>

                <div className="space-y-12">
                  <div>
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                      <Cpu className="w-5 h-5 text-cyber-light/40" /> Funcionalidades Principais
                    </h3>
                    <ul className="grid sm:grid-cols-2 gap-4">
                      {project.features.map(feature => (
                        <li key={feature} className="flex items-start gap-3 text-cyber-light/60 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyber-white mt-1.5 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                      <Lock className="w-5 h-5 text-cyber-light/40" /> Medidas de Segurança
                    </h3>
                    <ul className="grid sm:grid-cols-2 gap-4">
                      {project.securityMeasures.map(measure => (
                        <li key={measure} className="flex items-start gap-3 text-cyber-light/60 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500/50 mt-1.5 shrink-0" />
                          {measure}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mt-12">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      className="px-8 py-4 bg-cyber-white/5 border border-cyber-white/10 text-cyber-white font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-cyber-white/10 transition-all"
                    >
                      <Github className="w-5 h-5" /> Código Fonte
                    </a>
                  )}
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      className="px-8 py-4 bg-cyber-white text-cyber-black font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-cyber-light transition-all"
                    >
                      <ExternalLink className="w-5 h-5" /> Ver Online
                    </a>
                  )}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="space-y-8"
              >
                <div className="relative rounded-[40px] overflow-hidden border border-cyber-white/10">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full aspect-[4/3] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="glass p-8 rounded-[40px] border-cyber-white/5">
                  <h3 className="text-sm font-mono text-cyber-light/40 uppercase tracking-widest mb-6">Tecnologias Utilizadas</h3>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map(t => (
                      <span key={t} className="px-4 py-2 rounded-xl bg-cyber-white/5 text-xs font-mono text-cyber-light/60 border border-cyber-white/5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </main>

      <Footer />
    </div>
  );
}
