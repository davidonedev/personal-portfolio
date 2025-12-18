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
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer(0)}
        className="mt-30 scroll-mt-10"
        id="about"
    >
        <SectionHeader 
        subtitle="Sobre mim" 
        title="Transforming complexity into 
        effortless design"
        />

        <motion.p variants={fadeUp}
        className="mt-4 text-neutral-300"
        >
            Lorem Ipsum is simply dummy text of the 
            printing and typesetting industry. Lorem 
            Ipsum has been the industry's standard 
            dummy text ever since the 1500s, when an 
            unknown printer took a galley of type and 
            scrambled it to make a type specimen book.
        </motion.p>

        <motion.div
        variants={fadeUp}
        transition={{ delay: 0.2 }}
        >
            <Button className="mt-5">Contact-me</Button>
        </motion.div>
    </motion.section>
    )
}