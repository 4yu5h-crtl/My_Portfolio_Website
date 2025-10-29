"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectCardProps {
  title: string;
  image: string;
  github?: string;
  demo?: string | null;
  description: string;
  tech: string[];
  ongoing?: boolean;
}

export default function ProjectCard({
  title,
  image,
  github,
  demo,
  description,
  tech,
  ongoing = false,
}: ProjectCardProps) {
  const { ref, inView } = useInView({
    threshold: 0.3,
    rootMargin: "-100px 0px",
    triggerOnce: true,
  });

  const hasProjectLink = Boolean(demo || github);

  return (
    <div
      ref={ref}
      className={`w-full rounded-[20px] backdrop-blur-md bg-gradient-to-r from-[#d9d9d91f] to-[#7373731f] grid grid-cols-1 items-start lg:grid-cols-12 gap-5 p-4 sm:p-5 duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <div className="relative w-full h-[200px] lg:h-[220px] lg:col-span-5">
        <Image
          src={image}
          fill
          alt={title}
          className="rounded-[10px] object-cover"
          sizes="(max-width: 1024px) 100vw, 600px"
        />
      </div>
      <div className="flex flex-col gap-3 lg:col-span-7">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
          <h2 className="text-xl sm:text-2xl font-bold">
            {title}
            {ongoing && (
              <span className="ml-2 px-2 py-0.5 text-xs font-medium rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
                Ongoing
              </span>
            )}
          </h2>
          <div className="flex gap-2 text-lg relative isolate z-10">
            {demo && (
              <Link
                href={demo}
                className="rounded-full bg-gradient-to-r from-[#007BFF]/20 to-[#0056b3]/20 p-2 transition-all cursor-pointer relative z-20"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Live Demo"
                data-no-blobity="true"
              >
                <FaExternalLinkAlt />
              </Link>
            )}
            {github && (
              <Link
                href={github}
                className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full transition-all hover:bg-gray-800 cursor-pointer relative z-20"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Github Repo"
              >
                <FaGithub className="text-lg" /> GitHub
              </Link>
            )}
          </div>
        </div>
        <p className="text-sm sm:text-base text-white/70 line-clamp-3">{description}</p>
        <div className="flex gap-2 flex-wrap">
          {tech.map((technology, index) => (
            <span
              key={index}
              className="px-2 py-0.5 text-xs rounded-full bg-[#007BFF]/20 text-[#007BFF] border border-[#007BFF]/30"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
