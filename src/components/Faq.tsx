// fAQ accordion: only one answer is open at a time to keep the section compact and readable.

import React, { useCallback, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const faqItems = [
  { question: "What technologies do you specialize in?", answer: "I mainly work with React, TypeScript, Next.js, and Tailwind CSS, with experience across SQL and NoSQL databases." },
  { question: "Do you work with international clients?", answer: "Yes — I am comfortable working remotely, communicating asynchronously, and collaborating across time zones." },
  { question: "What's your typical project timeline?", answer: "It depends on scope, but most small-to-mid sized projects take around 2–6 weeks from kickoff to launch." },
  { question: "How do you handle project pricing?", answer: "I offer fixed-price quotes for well-defined projects and flexible pricing for ongoing or open-ended work." },
];

function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleItem = useCallback((index: number) => setOpenIndex((current) => (current === index ? null : index)), []);

  return (
    <section id="faq" className="w-full bg-secondary text-primary">
      <div className="container mx-auto px-5 py-16 md:py-24 lg:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accentBlue">FAQ</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Before we start.</h2>
          <p className="mt-4 text-secondaryDark">A few quick answers about how I work with freelance clients.</p>
        </div>
        <div className="mt-10 grid w-full grid-cols-1 gap-4 md:grid-cols-2">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return <div key={index} className={`overflow-hidden rounded-2xl border bg-white transition ${isOpen ? "border-accentBlue shadow-lg" : "border-gray-200 shadow-sm"}`}>
              <button type="button" onClick={() => toggleItem(index)} aria-expanded={isOpen} aria-controls={`faq-answer-${index}`} className="flex min-h-[72px] w-full items-center justify-between gap-4 p-5 text-left font-semibold">
                <span>{item.question}</span><ChevronDownIcon className={`size-5 shrink-0 text-accentBlue transition ${isOpen ? "rotate-180" : ""}`} />
              </button>
              <div id={`faq-answer-${index}`} className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}><div className="overflow-hidden"><p className="px-5 pb-5 text-sm leading-6 text-secondaryDark">{item.answer}</p></div></div>
            </div>;
          })}
        </div>
      </div>
    </section>
  );
}

export default React.memo(Faq);
