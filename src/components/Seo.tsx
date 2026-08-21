// central SEO helper: keeps page metadata and structured data consistent across the portfolio.
import { useEffect } from "react";

interface SeoProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  noIndex?: boolean;
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>;
}

export const SITE_URL = "https://gasparyanvazgen.github.io/website-tailwind-react";
export const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;

function upsertMeta(attribute: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let link = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!link) {
    link = document.createElement("link");
    link.rel = rel;
    document.head.appendChild(link);
  }
  link.href = href;
}

function Seo({
  title,
  description,
  path = "/",
  image = DEFAULT_IMAGE,
  type = "website",
  noIndex = false,
  structuredData,
}: SeoProps) {
  useEffect(() => {
    const normalizedPath = path === "/" ? "/" : `/${path.replace(/^\/+|\/+$/g, "")}`;
    const canonicalUrl = normalizedPath === "/" ? `${SITE_URL}/` : `${SITE_URL}${normalizedPath}`;

    document.title = title;
    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", noIndex ? "noindex,nofollow" : "index,follow,max-image-preview:large");
    upsertMeta("name", "author", "Vazgen Gasparian");
    upsertMeta("name", "theme-color", "#111827");

    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:image", image);
    upsertMeta("property", "og:image:alt", `${title} — VazgenDev`);
    upsertMeta("property", "og:site_name", "VazgenDev");
    upsertMeta("property", "og:locale", "en_US");

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", image);
    upsertMeta("name", "twitter:image:alt", `${title} — VazgenDev`);

    upsertLink("canonical", canonicalUrl);

    // Replace only this page's JSON-LD block so client-side navigation never leaves stale schema behind.
    const schemaId = "vazgendev-structured-data";
    document.getElementById(schemaId)?.remove();
    if (!structuredData) return;

    const script = document.createElement("script");
    script.id = schemaId;
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => document.getElementById(schemaId)?.remove();
  }, [description, image, noIndex, path, structuredData, title, type]);

  return null;
}

export default Seo;
