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

import { Button } from '@/components/ui/button';

/**
 * Assets
 */
import { SparkleIcon } from "lucide-react";

export const Hero = () => {
    return (
        <motion.section
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer(0)}
        className="pt-8"
        id="hero"
        >
            <motion.p variants={fadeUp} className="flex items-center
            justify-center py-1 gap-2 border border-gray-500 rounded-sm w-32">
                <SparkleIcon size={15} /> <span>Informações
                </span>
            </motion.p>

            <motion.h1 
            variants={fadeUp} 
            className="text-4xl md:text-5xl lg:text-6xl
            font-semibold capitalize mt-2 max-w-3xl
            md:leading-16"
            >
                Olá, sou <span className="lowercase">o</span> <span className="text-primary">David
                </span> UI/UX designer & frontend developer.
            </motion.h1>

            <motion.div 
            variants={fadeUp} 
            className="mt-5 flex gap-2"
            >
                <Button asChild>
                    <a className="cursor-pointer" href="#projects">Meus Projetos</a>
                </Button>

                <Button className="cursor-pointer" variant='outline'>Download CV</Button>

            </motion.div>
        </motion.section>
    )
}