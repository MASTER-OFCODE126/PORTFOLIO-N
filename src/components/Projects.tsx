"use client"
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
// import Image from "next/image";
import project1 from "public/assets/project-1.png";
import project2 from "public/assets/project-2.png";
import project3 from "public/assets/project-3.png";
import project4 from "public/assets/project-4.png";

const projects = [
  {
    title: "SORTING VISUALIZER",
    category: "TOOL",
    description:
      "Built an animated visualizer for Merge, Quick, and Heap Sort using React . Includes user controls and visual feedback.",
    image: project1,
    tags: ["React", "TypeScript", "Tailwind"],
    link: "https://sorting-visualizer-6ovp.vercel.app/",
    github: "https://github.com/MASTER-OFCODE126/Sorting-Visualizer",
  },
  {
    title: "KZ2",
    category: "Animated Web App",
    description:
      "A multipage React application featuring smooth UI animations, interactive transitions, and responsive layouts. Built with GSAP for motion effects.",
    image: project2,
    tags: ["React ", "GSAP", "Tailwind"],
    link: "https://nz-1.vercel.app/",
    github: "https://github.com/MASTER-OFCODE126/NZ1",
  },

  {
    title: "DESIGN PRESENTATION",
    category: "Branding",
    description:
      "A beautifull multipage website with seamless animations",
    image: project3,
    tags: ["React", "Tailwind", "Framer Motion"],
    link: "https://presentation-zx.vercel.app/",
    github: "https://github.com/MASTER-OFCODE126/PRESENTATION-ZX",
  },
  {
    title: "3D ANIMATED DESIGN",
    category: "Branding",
    description:
      "Interactive, shader-driven visual experience inspired by modern creative studios ",
    image: project4,
    tags: ["React", "THREE JS", "React-3-Fiber"],
    link: "https://interlace-mu.vercel.app/",
    github: "https://github.com/MASTER-OFCODE126/INTERLACE",
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative  overflow-hidden rounded-2xl bg-card border border-border">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <motion.img
            src={project.image.src}
            alt={project.title}
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-6">
          <span className="text-primary text-sm font-medium">
            {project.category}
          </span>
          <h3 className="fontZ text-2xl text-zinc-200 font-semibold mt-2 mb-3 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-secondary font-medium text-secondary-foreground text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-4">
            <a
              href={project.link}
              className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
              target="_blanck"
            >
              <ExternalLink className="w-4 h-4" />
              View Project
            </a>
            <a
              href={project.github}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              target="_blanck"
            >
              <Github className="w-4 h-4" />
              Code
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32">
      <div className="container px-6">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block text-primary font-medium mb-4"
          >
            Selected Work
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display fontZ text-4xl md:text-5xl text-zinc-100 font-semibold"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
