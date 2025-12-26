/**
 * @copyright 2025 David Alves
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { motion } from "motion/react";

/**
 * Custom modules
 */

import { fadeUp, staggerContainer } from "@/lib/animation";

/**
 * Components
 */

import { SectionHeader } from "@/components/SectionHeader";

export const About = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className="mt-30 scroll-mt-10"
      id="about"
    >
      <SectionHeader subtitle="Sobre mim" title="" />

      <motion.p
        variants={fadeUp}
        className="mt-4 text-neutral-100 text-[20px] md:w-210 2xl:w-250 grid-cols-2"
      >
          Opa, beleza? Muito bom ver você por aqui!
          <br />
          <br />
          Me chamo David e, pros mais íntimos, me chamam de <a className="underline decoration-emerald-600 hyphens-manual">Deivão</a>.
          <br />
          <br />
          Tenho 25 anos, me formei recentemente em Análise e Desenvolvimento 
          de Sistemas, e desde de muito novo sempre fui muito <a className="underline decoration-emerald-600 hyphens-manual">proativo</a> com tudo que me interessava e me despertava <a className="underline decoration-emerald-600 hyphens-manual">curiosidade</a>, 
          assim foi com a área da tecnologia.
          <br />
          <br />
          Deis de muito novo eu sempre fui de fazer desenhos incríveis 
          que pra minha idade era muito avançado, e foi dai 
          que despertou a minha vontade de desfrutar na área de 
          design e trazer experiências incríveis pros usuários.
          <br />
          <br />
          Muitas pessoas dizem que sou perfeccionista, mas apenas procuro sempre entregar o meu melhor.
          Hoje, unindo <a className="underline decoration-emerald-600 hyphens-manual">design e programação</a>, tenho cada vez mais certeza de que
          estou no lugar certo.
      </motion.p>

      <motion.div variants={fadeUp} transition={{ delay: 0.2 }}>
      </motion.div>
    </motion.section>
  );
};
