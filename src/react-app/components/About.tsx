import { motion } from 'framer-motion';
import { Target, Lightbulb, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-gradient-to-br from-[#f0f4f8] to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#102a43] mb-6">
              Sobre a Arandio
            </h2>
            <p className="text-lg text-[#102a43]/70 mb-6">
              Nosso nome vem de <strong className="text-[#1848a0]">Arandu</strong>,
              palavra em Tupi-Guarani que significa <strong className="text-[#1848a0]">sabedoria</strong>.
              Este conceito é a essência do nosso trabalho.
            </p>
            <p className="text-lg text-[#102a43]/70 mb-8">
              Combinamos conhecimento técnico profundo com visão estratégica para criar
              soluções tecnológicas que realmente fazem a diferença no seu negócio.
            </p>

            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-[#1848a0] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#102a43] mb-1">Nossa Missão</h3>
                  <p className="text-[#102a43]/70">
                    Desenvolver soluções tecnológicas inovadoras que impulsionem o crescimento dos nossos clientes.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-[#1848a0] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#102a43] mb-1">Nossa Visão</h3>
                  <p className="text-[#102a43]/70">
                    Ser referência em transformação digital, reconhecida pela excelência e inovação.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-[#1848a0] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#102a43] mb-1">Nossos Valores</h3>
                  <p className="text-[#102a43]/70">
                    Excelência, inovação, transparência e compromisso com resultados.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mt-8 md:mt-0"
          >
            <div className="relative">
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -top-10 -right-10 w-40 h-40 bg-[#1848a0]/10 rounded-full blur-2xl"
              />
              <motion.div
                animate={{
                  rotate: [360, 0],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#1848a0]/10 rounded-full blur-2xl"
              />

              <div className="relative bg-gradient-to-br from-[#1848a0] to-[#102a43] rounded-2xl p-8 sm:p-12 shadow-2xl mx-4 sm:mx-0">
                <div className="text-center text-white">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-4xl sm:text-6xl font-bold mb-4"
                  >
                    Arandio
                  </motion.div>
                  <div className="text-lg opacity-75">Sabedoria em Tecnologia</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
