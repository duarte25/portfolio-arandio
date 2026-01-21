import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-[#102a43] text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Arandio</h3>
            <p className="text-white/70">
              Sabedoria em tecnologia. Transformando ideias em soluções inovadoras.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2 text-white/70">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">Início</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">Serviços</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">Sobre</a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white transition-colors">Contato</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-white/70">
              <li>Sistemas ERP</li>
              <li>Software Personalizado</li>
              <li>Apps para Eventos</li>
              <li>Chatbots</li>
              <li>Consultoria</li>
            </ul>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8 text-center text-white/70"
        >
          <p>&copy; {new Date().getFullYear()} Arandio. Todos os direitos reservados.</p>
        </motion.div>
      </div>
    </footer>
  );
}
