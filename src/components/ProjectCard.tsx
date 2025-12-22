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

import { fadeUp } from "@/lib/animation";

/**
 * Types
 */

import type { ProjectType } from "@/types";

export const ProjectCard = ({ imgSrc, tags, title }: ProjectType) => {
  return (
    <motion.div variants={fadeUp} className="relative">
      <figure className="overflow-hidden rounded-md">
        <img
          src={imgSrc}
          alt={title}
          className="rounded-md transition 
                duration-500 hover:scale-115 w-full"
        />
      </figure>

      <div
        className="absolute bottom-0 p-2 flex
        gap-2"
      >
        {tags.map((tag, i) => (
          <a
            key={i}
            href={tag.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="
        bg-background hover:bg-primary
        hover:text-black py-1 px-2
        rounded-sm text-sm cursor-pointer
      "
          >
            {tag.label}
          </a>
        ))}
      </div>
    </motion.div>
  );
};
