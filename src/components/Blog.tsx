import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getAllPosts } from '../lib/posts';

const posts = getAllPosts().slice(0, 3);

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-cyber-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-sm font-mono text-cyber-light/40 uppercase tracking-widest mb-4"
            >
              Artigos & Insights
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold"
            >
              Conhecimento para um <span className="text-cyber-light/40 italic">futuro seguro</span>.
            </motion.h3>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link 
              to="/blog"
              className="flex items-center gap-2 text-cyber-light/60 hover:text-cyber-white transition-colors group"
            >
              Ver todos os artigos
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <Link to={`/blog/${post.id}`}>
                <div className="relative overflow-hidden rounded-3xl mb-6 aspect-video">
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
                
                <h4 className="text-xl font-bold group-hover:text-cyber-light transition-colors leading-tight">
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
      </div>
    </section>
  );
}
