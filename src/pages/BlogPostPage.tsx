import { motion } from 'motion/react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Share2, Tag, User } from 'lucide-react';
import { getPostById } from '../lib/posts';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

export default function BlogPostPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = id ? getPostById(id) : undefined;

  useEffect(() => {
    if (!post) {
      navigate('/blog');
    }
  }, [post, navigate]);

  if (!post) return null;

  return (
    <div className="min-h-screen bg-cyber-black">
      <Navbar />

      <main className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-12"
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-cyber-light/40 hover:text-cyber-white transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Voltar para o blog
            </Link>
          </motion.div>

          <article>
            <header className="mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-4 text-sm font-mono text-cyber-light/40 mb-6"
              >
                <span className="px-3 py-1 rounded-full bg-cyber-white/5 border border-cyber-white/10 text-cyber-white">
                  {post.category}
                </span>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
              >
                {post.title}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center justify-between py-8 border-y border-cyber-white/5"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-12 h-12 rounded-2xl object-cover grayscale"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="font-bold text-cyber-white">{post.author.name}</div>
                    <div className="text-xs font-mono text-cyber-light/40 uppercase">
                      {post.author.role}
                    </div>
                  </div>
                </div>
                <button className="p-3 rounded-2xl bg-cyber-white/5 border border-cyber-white/10 hover:bg-cyber-white/10 transition-colors">
                  <Share2 className="w-5 h-5 text-cyber-light/60" />
                </button>
              </motion.div>
            </header>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="relative rounded-[40px] overflow-hidden mb-16 border border-cyber-white/10"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full aspect-video object-cover grayscale"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="prose prose-invert prose-cyber max-w-none text-cyber-light/70 text-lg leading-relaxed space-y-8"
            >
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </motion.div>

            <footer className="mt-16 pt-12 border-t border-cyber-white/5">
              <div className="flex flex-wrap gap-3">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyber-white/5 text-xs font-mono text-cyber-light/40 border border-cyber-white/5"
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>
            </footer>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
