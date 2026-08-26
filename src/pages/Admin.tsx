// local admin dashboard for editing portfolio settings stored in the browser.

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import {
  ArrowLeftIcon,
  ArrowTopRightOnSquareIcon,
  ChartBarIcon,
  DocumentTextIcon,
  EnvelopeIcon,
  FolderIcon,
  LinkIcon,
  PencilSquareIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

type SiteSettings = {
  email: string;
  github: string;
  linkedin: string;
  availability: string;
};

const defaultSettings: SiteSettings = {
  email: "infogasparian@gmail.com",
  github: "https://github.com/gasparyanvazgen",
  linkedin: "https://linkedin.com/in/vazgen-gasparyan",
  availability: "Available for freelance & remote work",
};

function Admin() {
  // persist simple portfolio settings locally; no server-side secrets are stored here.
  const [settings, setSettings] = useState<SiteSettings>(defaultSettings);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("vazgendev-admin-settings");
    if (stored) {
      try {
        setSettings({ ...defaultSettings, ...JSON.parse(stored) });
      } catch {
        // ignore malformed local settings.
      }
    }
  }, []);

  const update = (key: keyof SiteSettings, value: string) => {
    setSettings((current) => ({ ...current, [key]: value }));
    setSaved(false);
  };

  const save = () => {
    localStorage.setItem("vazgendev-admin-settings", JSON.stringify(settings));
    setSaved(true);
  };

  const stats = [
    { label: "Projects", value: "3", icon: FolderIcon },
    { label: "Articles", value: "3", icon: DocumentTextIcon },
    { label: "Services", value: "4", icon: SparklesIcon },
    { label: "Site status", value: "Live-ready", icon: ChartBarIcon },
  ];

  return (
    <main className="min-h-screen bg-secondary text-primary">
      <Seo title="Admin | VazgenDev" description="Private portfolio administration page." path="/admin" noIndex />
      <header className="sticky top-0 z-40 border-b border-gray-200/80 bg-secondary/95 backdrop-blur">
        <div className="container mx-auto flex items-center justify-between px-5 py-5">
          <Link to="/" className="text-xl font-semibold tracking-tight">
            Vazgen<span className="text-accentBlue">Dev.</span>
            <span className="ml-2 rounded-full bg-primary px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-secondary">
              Admin
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <a
              href={`${process.env.PUBLIC_URL || ""}/`}
              className="hidden items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm font-semibold transition hover:border-accentBlue hover:text-accentBlue sm:inline-flex"
            >
              View site <ArrowTopRightOnSquareIcon className="h-4 w-4" />
            </a>
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-secondary transition hover:bg-gray-800"
            >
              <ArrowLeftIcon className="h-4 w-4" /> Home
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-5 py-10 md:py-14">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accentBlue">
            Control center
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Manage your VazgenDev presence.
          </h1>
          <p className="mt-4 max-w-2xl leading-7 text-secondaryDark">
            A lightweight front-end dashboard for your portfolio settings, links,
            and content overview. Changes saved here are stored in this browser.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <stat.icon className="h-6 w-6 text-accentBlue" />
              <p className="mt-5 text-2xl font-semibold">{stat.value}</p>
              <p className="mt-1 text-sm text-secondaryDark">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.75fr]">
          <section className="rounded-[1.75rem] border border-gray-200 bg-white p-6 shadow-sm md:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accentBlue">
                  Site settings
                </p>
                <h2 className="mt-2 text-2xl font-semibold">Public contact & social links</h2>
              </div>
              <PencilSquareIcon className="h-6 w-6 text-secondaryDark" />
            </div>

            <div className="mt-7 space-y-5">
              <label className="block text-sm font-semibold">
                Contact email
                <input
                  value={settings.email}
                  onChange={(e) => update("email", e.target.value)}
                  type="email"
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-secondary px-4 py-3 outline-none transition focus:border-accentBlue focus:ring-4 focus:ring-accentBlueLight/60"
                />
              </label>
              <label className="block text-sm font-semibold">
                GitHub
                <input
                  value={settings.github}
                  onChange={(e) => update("github", e.target.value)}
                  type="url"
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-secondary px-4 py-3 outline-none transition focus:border-accentBlue focus:ring-4 focus:ring-accentBlueLight/60"
                />
              </label>
              <label className="block text-sm font-semibold">
                LinkedIn
                <input
                  value={settings.linkedin}
                  onChange={(e) => update("linkedin", e.target.value)}
                  type="url"
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-secondary px-4 py-3 outline-none transition focus:border-accentBlue focus:ring-4 focus:ring-accentBlueLight/60"
                />
              </label>
              <label className="block text-sm font-semibold">
                Availability label
                <input
                  value={settings.availability}
                  onChange={(e) => update("availability", e.target.value)}
                  type="text"
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-secondary px-4 py-3 outline-none transition focus:border-accentBlue focus:ring-4 focus:ring-accentBlueLight/60"
                />
              </label>
              <button
                onClick={save}
                className="inline-flex items-center rounded-xl bg-primary px-5 py-3 font-semibold text-secondary transition hover:bg-gray-800"
              >
                Save settings
              </button>
              {saved && <span className="ml-3 text-sm font-medium text-green-700">Saved locally.</span>}
            </div>
          </section>

          <aside className="space-y-6">
            <section className="rounded-[1.75rem] bg-primary p-6 text-secondary shadow-xl md:p-8">
              <LinkIcon className="h-7 w-7 text-accentBlueLight" />
              <h2 className="mt-5 text-2xl font-semibold">Quick links</h2>
              <div className="mt-6 space-y-3">
                <a href="https://github.com/gasparyanvazgen" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between rounded-xl border border-secondary/10 bg-secondary/5 p-4 transition hover:bg-secondary/10">
                  GitHub <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                </a>
                <a href="https://linkedin.com/in/vazgen-gasparyan" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between rounded-xl border border-secondary/10 bg-secondary/5 p-4 transition hover:bg-secondary/10">
                  LinkedIn <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                </a>
                <a href="mailto:infogasparian@gmail.com" className="flex items-center justify-between rounded-xl border border-secondary/10 bg-secondary/5 p-4 transition hover:bg-secondary/10">
                  Email <EnvelopeIcon className="h-4 w-4" />
                </a>
              </div>
            </section>

            <section className="rounded-[1.75rem] border border-gray-200 bg-white p-6 shadow-sm md:p-8">
              <DocumentTextIcon className="h-7 w-7 text-accentBlue" />
              <h2 className="mt-5 text-xl font-semibold">Content workflow</h2>
              <p className="mt-2 text-sm leading-6 text-secondaryDark">
                Projects and articles are currently defined in the React source.
                This dashboard is ready for a future CMS or backend connection.
              </p>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}

export default Admin;
