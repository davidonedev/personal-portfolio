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
import { staggerContainer } from "@/lib/animation";

/**
 * Components
 */
import { SectionHeader } from "@/components/SectionHeader";


/**
 * Constants
 */
import { projectsData } from '@/constants'
import { ProjectCard } from "@/components/ProjectCard";

export const Projects = () => {
    return (
        <motion.section
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer(0)}
        className="mt-30 scroll-mt-10"
        id="projects"
        >
            <SectionHeader 
            title="Meus Projetos"
            subtitle="Projetos"
            />

            <motion.div 
            className="grid md:grid-cols-2 gap-10 mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3}}
            variants={staggerContainer(0.5)}
            >
                {projectsData.map((project, i) => (
                    <ProjectCard 
                    key={i} 
                    imgSrc={project.imgSrc}
                    projectLink={project.projectLink}
                    tags={project.tags}
                    title={project.title}   
                    />
                ))}
            </motion.div>
        </motion.section>
    );
};