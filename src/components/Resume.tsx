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
import { ExpCard } from "@/components/ExpCard";
import { ToolsCard } from "./ToolsCard";

/**
 * Constants
 */
import { education, experience, tools } from "@/constants";



export const Resume = () => {
    return (
     <motion.section
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer(0)}
        className="mt-30 scroll-mt-10"
        id="resume"
    >
        <SectionHeader 
        subtitle="Resume" 
        title=""
        />

        <motion.p 
        variants={fadeUp} 
        className="mt-4 text-neutral-300"
        >
            There are many variations of passages of Lorem Ipsum available, 
            but the majority have suffered alteration in some form, by 
            injected humour, or randomised words which don't look even 
            slightly believable.
        </motion.p>

        <div className="grid gap-x-10 my-16 md:grid-cols-2">
            <motion.div 
            variants={fadeUp}
            className="mb-16 md:mb-0"
            >
                <h2 className="text-3xl font-semibold 
                mb-8">Formação</h2>

                <div className="space-y-8 border-l 
                 border-border pl-6">
                    {education.map((item, i) => (
                        <ExpCard 
                        key={i} 
                        item={item} 
                        />
                    ))}
                </div>
            </motion.div>

            <motion.div variants={fadeUp}>
                <h2 className="text-3xl font-semibold 
                mb-8">Experiência</h2>

                <div className="space-y-8 border-l 
                 border-border pl-6">
                    {experience.map((item, i) => (
                        <ExpCard 
                        key={i} 
                        item={item} 
                        />
                    ))}
                </div>
            </motion.div>
        </div>

        <div className="my-16">
            <motion.h2 
                variants={fadeUp} 
                className="text-3xl font-semibold mb-8 capitalize"
                >
                My favorite tools
            </motion.h2>

            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer(0.5)}
            className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4"
            >
                {tools.map((tool, i) => (
                    <ToolsCard
                    key={i}
                    tool={tool}
                    />
                ))}
            </motion.div>
        </div>
    </motion.section>
    );
};