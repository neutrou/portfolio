'use client';

import Link from 'next/link';
import Icon from './components/Icon';
import ProjectCard from './components/ProjectCard';
import Separator from './components/Separator';

const SOCIAL_LINKS = [
  { href: 'https://github.com/neutrou/', icon: 'github', label: 'GitHub' },
  {
    href: 'https://www.linkedin.com/in/victor-algranti',
    icon: 'linkedin',
    label: 'LinkedIn',
  },
];

const FEATURED_PROJECTS = ['red-tetris', 'ft-transcendence', 'gomoku'];

export default function Home() {
  return (
    <div className="size-full flex justify-center">
      <div className="flex flex-col gap-10 page-padding md:flex-row md:gap-0 lg:max-w-[90%]">
        {/* SIDEBAR */}
        <aside className="md:min-w-[50%]">
          <div className="flex flex-col gap-2.5 md:h-[88%] md:justify-between md:fixed">
            {/* HEADER */}
            <div className="flex flex-col gap-1.25">
              <h1 className="title">Victor Algranti</h1>
              <h2 className="subtitle">Software Engineer</h2>
              <p className="default max-w-80 lg:max-w-110">
                I build software and solutions to complex problems.
              </p>
            </div>

            {/* SOCIAL LINKS */}
            <nav className="flex flex-row gap-4 md:justify-center" aria-label="Social links">
              {SOCIAL_LINKS.map(({ href, icon, label }) => (
                <Link
                  key={icon}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${label}`}
                  className="hover:opacity-80 transition-opacity"
                >
                  <Icon url={icon} width={35} height={35} alt={label} />
                </Link>
              ))}
            </nav>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex flex-col gap-10">
          {/* ABOUT SECTION */}
          <section className="flex flex-col gap-3.75">
            <h2 className="subtitle">About</h2>
            <p className="default">
              I am a work-driven junior developer, who loves learning, solving
              problems, and helping others grow.
            </p>
            <p className="default">
              Currently studying at 42, I am an active member of the student
              association committee.
            </p>
            <p className="default">
              I am curious, and have different interests including machine
              learning, user interfaces, both board and video games.
            </p>
            <p className="default">
              Outside of my studies, you can usually find me climbing, playing
              video games, or building side projects to solve dumb tasks.
            </p>
          </section>

          {/* RECENT PROJECTS SECTION */}
          <section className="flex flex-col gap-7.5">
            <h2 className="subtitle">Recent Projects</h2>
            {FEATURED_PROJECTS.map((slug, index) => (
              <div key={slug}>
                <ProjectCard slug={slug} />
                {index < FEATURED_PROJECTS.length - 1 && <Separator className="mt-7.5" />}
              </div>
            ))}
            <Separator />
            <div className="flex justify-center">
              <Link
                href="/projects"
                className="bg-tag-bg tracking-[-5%] text-xl text-text-primary font-semibold rounded-md p-2 w-fit hover:opacity-80 transition-opacity"
              >
                View full project archive
              </Link>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
