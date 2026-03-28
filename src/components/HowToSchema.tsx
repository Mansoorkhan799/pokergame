function safeJsonLd(obj: object): string {
  return JSON.stringify(obj).replace(/</g, "\\u003c");
}

export type HowToStepInput = { name: string; text: string };

type HowToSchemaProps = {
  id: string;
  name: string;
  description: string;
  steps: HowToStepInput[];
  /** Optional image URL (e.g. hero or logo) for rich results */
  image?: string;
};

/**
 * JSON-LD HowTo for Google rich results (step-by-step guides).
 */
export default function HowToSchema({
  id,
  name,
  description,
  steps,
  image,
}: HowToSchemaProps) {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    inLanguage: "en-US",
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
  if (image) {
    data.image = image;
  }

  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLd(data) }}
    />
  );
}
