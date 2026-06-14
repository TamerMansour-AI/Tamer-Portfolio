export type ProofMetric = {
  value: string;
  label: string;
  detail: string;
};

export type ProofItem = {
  title: string;
  category: string;
  summary: string;
  href?: string;
  linkLabel?: string;
  confidence: "High" | "Medium" | "Low";
};

export const proofMetricsEn: ProofMetric[] = [
  {
    value: "15+",
    label: "AI trainings and workshops",
    detail: "Qattan, Mishkal, AL Mahs3'al (Journalists), WAN-IFRA, Arab Bank, Birzeit, Sharek, and mixed professional audiences."
  },
  {
    value: "12+",
    label: "Public proof lanes",
    detail: "AI video, educational products, bilingual archive products, web products, Android apps, games, knowledge design, workshops, and cultural storytelling."
  },
  {
    value: "Android",
    label: "App development",
    detail: "Sakina, Flappy Flip, and additional Android app work in the Ramallah Labs product pipeline."
  },
  {
    value: "3",
    label: "Recent Superteam submissions",
    detail: "Live talent-profile activity for bounty and web3-facing proof."
  }
];

export const platformProofEn: ProofItem[] = [
  {
    title: "Primary Learning Visualised TPT Store",
    category: "Educational products",
    summary:
      "A public Teachers Pay Teachers store built with a Qatar-based teaching partner, showing repeatable primary science products: lesson slides, short video previews, worksheets, quick checks, answer keys, and product packaging.",
    href: "/education-products/",
    linkLabel: "Open product proof",
    confidence: "High"
  },
  {
    title: "AI Training and Workshop Delivery",
    category: "Training / workshops",
    summary:
      "Delivered and packaged practical AI sessions for media, artists, education, parent learning support, students, and institutional teams, with emphasis on responsible use, source preparation, prompting, review, and reusable workflows.",
    href: "/workshops/",
    linkLabel: "See workshop proof",
    confidence: "High"
  },
  {
    title: "Live Workshop Lab Systems",
    category: "Interactive learning labs",
    summary:
      "Public and local evidence now includes live lab-style training products such as AI Verification Lab for Journalists and Birzeit AI Fluency Lab 2026: prompt libraries, scenarios, worksheets, output builders, admin/display flows, and recap assets.",
    href: "/workshops/",
    linkLabel: "See workshop proof",
    confidence: "High"
  },
  {
    title: "Original AI Music Video Direction",
    category: "Music / video",
    summary:
      "Recent song work includes My Way and Between Me and the Earth. The portfolio uses short compressed previews and selected stills so the direction is visible without publishing heavy source folders or private source images.",
    href: "/music-videos/",
    linkLabel: "Open music video previews",
    confidence: "High"
  },
  {
    title: "Signal OS / Codex Execution Infrastructure",
    category: "Automation / operating system",
    summary:
      "A reusable internal execution layer for turning scattered ideas, research, account lanes, platform work, and Codex tasks into bounded outputs, checklists, proof ledgers, and delivery artifacts.",
    href: "/about/",
    linkLabel: "Read the operating story",
    confidence: "High"
  },
  {
    title: "Android App Development Pipeline",
    category: "Apps / games",
    summary:
      "Tamer develops Android app and game projects across spiritual reflection, casual play, and Arabic-first product ideas. Public pages should feature the product direction and replace temporary links once store listings are approved.",
    confidence: "Medium"
  },
  {
    title: "Suno Original Music Experiments",
    category: "Music / audio",
    summary:
      "Suno activity includes original tracks such as Almost Remembered Room, الخيل والليل, YA, and Canaanite Palestinian, supporting the Museum of Echoes music/archive narrative.",
    href: "https://museum-of-echoes.pages.dev/",
    linkLabel: "Open the music archive",
    confidence: "Medium"
  },
  {
    title: "Client-Safe AI Video Production System",
    category: "Client work / Upwork-facing proof",
    summary:
      "Anbiya Visuals now has a public-safe website edition: a compressed full montage with Arabic context overlays, plus careful avatar workflow framing that avoids private client details and identity-sensitive materials.",
    href: "/client-ai-production/",
    linkLabel: "Open client-safe proof",
    confidence: "High"
  }
];
