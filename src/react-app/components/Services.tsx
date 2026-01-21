import { motion } from 'framer-motion';
import { Code2, Smartphone, Bot, BarChart3, Globe, Users } from 'lucide-react';

const services = [
  {
    icon: BarChart3,
    title: 'Sistemas ERP',
    description: 'Implementação e customização de sistemas de gestão empresarial para otimizar seus processos.'
  },
  {
    icon: Code2,
    title: 'Software Personalizado',
    description: 'Desenvolvimento de soluções sob medida para atender às necessidades específicas do seu negócio.'
  },
  {
    icon: Globe,
    title: 'Landing Pages',
    description: 'Criação de páginas de alta conversão com design moderno e responsivo.'
  },
  {
    icon: Smartphone,
    title: 'Apps para Eventos',
    description: 'Aplicativos completos para gestão de eventos, vendas de ingressos e controle de acesso via QR Code.'
  },
  {
    icon: Bot,
    title: 'Chatbots',
    description: 'Desenvolvimento de assistentes virtuais inteligentes para atendimento e automação.'
  },
  {
    icon: Users,
    title: 'Consultoria',
    description: 'Orientação estratégica em tecnologia para transformação digital do seu negócio.'
  }
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#102a43] mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-[#102a43]/70 max-w-2xl mx-auto">
            Oferecemos soluções completas em tecnologia para impulsionar seu negócio
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -8, 
                boxShadow: "0 20px 40px rgba(24, 72, 160, 0.15)" 
              }}
              className="bg-gradient-to-br from-[#f0f4f8] to-white p-8 rounded-2xl border border-[#1848a0]/10 hover:border-[#1848a0]/30 transition-all cursor-pointer group"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-14 h-14 bg-[#1848a0] rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-[#1848a0]/30 transition-shadow"
              >
                <service.icon className="text-white" size={28} />
              </motion.div>
              <h3 className="text-xl font-semibold text-[#102a43] mb-3">
                {service.title}
              </h3>
              <p className="text-[#102a43]/70">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
