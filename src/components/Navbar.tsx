import { motion } from 'motion/react';
import { Shield, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Sobre', href: '/#about' },
  { name: 'Serviços', href: '/#services' },
  { name: 'Portfólio', href: '/portfolio' },
  { name: 'Blog', href: '/#blog' },
  { name: 'Contato', href: '/#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass border-b border-cyber-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link to="/" className="flex items-center gap-2 text-xl font-bold tracking-tighter">
            <Shield className="w-8 h-8 text-cyber-white" />
            <span>ROGER <span className="text-cyber-light/60">SLV</span></span>
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => {
            const isExternal = link.href.startsWith('/#') || link.href === '/';
            const Component = (isExternal && isHome) ? 'a' : Link;
            const toProp = (isExternal && isHome) ? { href: link.href.replace('/', '') || '#home' } : { to: link.href };

            return (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {/* @ts-ignore */}
                <Component
                  {...toProp}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    location.pathname === link.href ? "text-cyber-white" : "text-cyber-light/70 hover:text-cyber-white"
                  )}
                >
                  {link.name}
                </Component>
              </motion.div>
            );
          })}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <Link
              to="/#contact"
              className="px-5 py-2 bg-cyber-white text-cyber-black text-sm font-bold rounded-full hover:bg-cyber-light transition-colors"
            >
              Falar com especialista
            </Link>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-cyber-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 w-full glass border-b border-cyber-white/10 p-6 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-cyber-light/70 hover:text-cyber-white"
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
