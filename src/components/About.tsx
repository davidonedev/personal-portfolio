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
import { Button } from "@/components/ui/button";

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

      <motion.p variants={fadeUp} className="mt-4 text-neutral-300 text-[20px] md:w-210 2xl:w-250">
        Opa, beleza? Muito bom ver você dando uma olhada por aqui! 
        <br/>
        <br/>
        Me chamo David e, pros mais íntimos, me chamam de Deivão.
        <br/>
        <br/>
        Tenho 25 anos, sou formado em Análise e Desenvolvimento de Sistemas e, desde muito novo, sempre 
        fui curioso e proativo. Aos 12 anos já montava e desmontava computadores e fazia desenhos avançados 
        pra minha idade, o que despertou meu interesse pelo design.
        <br/>
        <br/>
        Hoje, unindo design e programação, tenho cada vez mais certeza de que estou no lugar certo.
      </motion.p>

      <motion.div variants={fadeUp} transition={{ delay: 0.2 }}>
        {/* <Button className="mt-5">Contact-me</Button> */}
      </motion.div>
    </motion.section>
  );
};
