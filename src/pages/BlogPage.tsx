import { motion } from 'motion/react';
import { useState } from 'react';
import { Search, Calendar, Clock, ArrowRight, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getAllPosts } from '../lib/posts';
import PageTransition from '../components/PageTransition';

const categories = ['Todos', 'Segurança', 'Hacking Ético', 'Arquitetura', 'Desenvolvimento', 'DevSecOps', 'Estratégia'];

export default function BlogPage() {
  const [filter, setFilter] = useState('Todos');
  const [search, setSearch] = useState('');
  
  const allPosts = getAllPosts();

  const filteredPosts = allPosts.filter(post => {
    const matchesFilter = filter === 'Todos' || post.category === filter;
    const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

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
                Blog <span className="text-cyber-light/40 italic">Técnico</span>.
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-cyber-light/60 max-w-2xl"
              >
                Artigos aprofundados sobre cibersegurança, desenvolvimento web moderno e as tendências que estão moldando o futuro digital.
              </motion.p>
            </header>

            {/* Search and Filters */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-12">
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 text-cyber-light/40 mr-2">
                  <Filter className="w-4 h-4" />
                  <span className="text-xs font-mono uppercase tracking-widest">Filtrar:</span>
                </div>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                      filter === cat 
                        ? 'bg-cyber-white text-cyber-black' 
                        : 'bg-cyber-white/5 text-cyber-light/60 hover:bg-cyber-white/10'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="relative w-full lg:w-80">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-cyber-light/40" />
                <input 
                  type="text"
                  placeholder="Buscar artigos..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-cyber-white/5 border border-cyber-white/10 rounded-2xl pl-12 pr-6 py-3 focus:outline-none focus:border-cyber-white/30 transition-colors"
                />
              </div>
            </div>

            {/* Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, i) => (
                <motion.article
                  key={post.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="group cursor-pointer"
                >
                  <Link to={`/blog/${post.id}`}>
                    <div className="relative overflow-hidden rounded-[40px] mb-6 aspect-video border border-cyber-white/5">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-cyber-black/80 backdrop-blur-md text-[10px] font-mono text-cyber-white uppercase tracking-wider border border-cyber-white/10">
                        {post.category}
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 text-xs font-mono text-cyber-light/40">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </div>
                      </div>
                      
                      <h4 className="text-2xl font-bold group-hover:text-cyber-light transition-colors leading-tight">
                        {post.title}
                      </h4>
                      
                      <p className="text-cyber-light/60 text-sm leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="pt-2 flex items-center gap-2 text-xs font-bold uppercase tracking-widest group-hover:gap-4 transition-all">
                        Ler artigo <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-24">
                <p className="text-cyber-light/40 text-lg">Nenhum artigo encontrado para sua busca.</p>
              </div>
            )}
          </div>
        </main>

      <Footer />
    </div>
  );
}
