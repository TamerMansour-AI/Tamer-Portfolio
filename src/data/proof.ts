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
    value: "8+",
    label: "Public proof lanes",
    detail: "AI video, bilingual archive products, web products, Android apps, games, knowledge design, workshops, and cultural storytelling."
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
    title: "AI Training and Workshop Delivery",
    category: "Training / workshops",
    summary:
      "Delivered and packaged practical AI sessions for media, artists, education, parent learning support, students, and institutional teams, with emphasis on responsible use, source preparation, prompting, review, and reusable workflows.",
    href: "/workshops/",
    linkLabel: "See workshop proof",
    confidence: "High"
  },
  {
    title: "Birzeit and AL Mahs3'al Journalist Lab Systems",
    category: "Interactive learning labs",
    summary:
      "Local evidence shows lab-style training products such as AI Verification Lab for Journalists, Gaza AI Narrative Lab, and Birzeit AI Fluency Lab patterns: prompt libraries, scenarios, worksheets, and output builders.",
    href: "/workshops/",
    linkLabel: "See workshop proof",
    confidence: "Medium"
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
      "A recent Upwork lead validates demand for repeatable AI presenter-video production systems. Keep public copy client-safe: describe the capability without names, private messages, budgets, or account details.",
    href: "/services/",
    linkLabel: "See production system offer",
    confidence: "Medium"
  }
];
