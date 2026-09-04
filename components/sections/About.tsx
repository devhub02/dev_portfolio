'use client';

import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';

const focusAreas = [
  {
    title: 'Retrieval systems',
    body: 'RAG pipelines end to end — chunking, embeddings, vector search and the evaluation harness that tells you whether any of it actually improved.',
  },
  {
    title: 'Agentic infrastructure',
    body: 'LangGraph workflows and MCP servers: the protocol plumbing that lets models call real tools reliably rather than in a demo.',
  },
  {
    title: 'Developer tooling',
    body: 'CLIs that live in a terminal and get used daily — local-first, offline-capable, and fast enough that nobody reaches for the old command.',
  },
];

export default function About() {
  return (
    <Section
      id="about"
      index="05"
      title="About"
      description="Mechanical Engineering student and AI/software developer. I build intelligent systems and treat every project as something to engineer, not just experiment with."
      className="border-y border-[var(--border)] bg-[var(--bg-subtle)]"
    >
      <div className="grid gap-14 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
        {/* Narrative */}
        <Reveal className="space-y-5">
          <p className="text-lg leading-relaxed text-ink">
            Mechanical Engineering student and AI/software developer. I build
            intelligent systems and treat every project as something to engineer,
            not just experiment with.
          </p>
          <p className="prose-muted">
            I started with mechanical engineering, but my curiosity quickly moved
            beyond traditional engineering. Learning AI and software development
            showed me how much can be built by combining engineering fundamentals
            with code, automation, and intelligent systems.
          </p>
          <p className="prose-muted">
            That became the throughline of my work. I learn by building and
            experimenting, whether it is an AI system, a developer tool, a
            robotics project, or a software application.
          </p>
          <p className="prose-muted">
            I'm interested in AI, software development, robotics, automation,
            and mechanical systems, with a focus on turning ideas into practical,
            working solutions. I build to understand how things work, improve
            them through iteration, and ship what I learn.
          </p>
        </Reveal>

        {/* Focus areas */}
        <div className="space-y-px overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--border)]">
          {focusAreas.map((area, i) => (
            <Reveal key={area.title} delay={i * 0.06}>
              <div className="bg-[var(--bg)] px-5 py-6">
                <h3 className="text-sm font-medium">{area.title}</h3>
                <p className="prose-muted mt-2 text-sm">{area.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
