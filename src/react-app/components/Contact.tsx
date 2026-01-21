import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Contact form submission would go here
    console.log('Form submitted:', formData);
    alert('Obrigado! Entraremos em contato em breve.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#102a43] mb-4">
            Vamos Conversar?
          </h2>
          <p className="text-lg text-[#102a43]/70 max-w-2xl mx-auto">
            Entre em contato e descubra como podemos transformar suas ideias em realidade
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-[#102a43] mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-4">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 text-[#102a43]/70"
                >
                  <div className="w-12 h-12 bg-[#1848a0]/10 rounded-lg flex items-center justify-center">
                    <Mail className="text-[#1848a0]" size={20} />
                  </div>
                  <div>
                    <div className="font-medium text-[#102a43]">Email</div>
                    <div>arandiotech@gmail.com</div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 text-[#102a43]/70"
                >
                  <div className="w-12 h-12 bg-[#1848a0]/10 rounded-lg flex items-center justify-center">
                    <Phone className="text-[#1848a0]" size={20} />
                  </div>
                  <div>
                    <div className="font-medium text-[#102a43]">Telefone</div>
                    <div>+55 (69) 99266-1119</div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 text-[#102a43]/70"
                >
                  <div className="w-12 h-12 bg-[#1848a0]/10 rounded-lg flex items-center justify-center">
                    <MapPin className="text-[#1848a0]" size={20} />
                  </div>
                  <div>
                    <div className="font-medium text-[#102a43]">Localização</div>
                    <div>Vilhena, RO - Brasil</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[#102a43] mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-[#1848a0]/20 focus:border-[#1848a0] focus:outline-none focus:ring-2 focus:ring-[#1848a0]/20 transition-all"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#102a43] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-[#1848a0]/20 focus:border-[#1848a0] focus:outline-none focus:ring-2 focus:ring-[#1848a0]/20 transition-all"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#102a43] mb-2">
                  Mensagem
                </label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-[#1848a0]/20 focus:border-[#1848a0] focus:outline-none focus:ring-2 focus:ring-[#1848a0]/20 transition-all resize-none"
                  placeholder="Conte-nos sobre seu projeto..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 10px 40px rgba(24, 72, 160, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-8 py-4 bg-[#1848a0] text-white rounded-lg font-semibold flex items-center justify-center gap-2 shadow-lg hover:bg-[#1848a0]/90 transition-colors"
              >
                Enviar Mensagem
                <Send size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
