export type WorkshopProof = {
  title: string;
  audience: string;
  proof: string;
  outcome: string;
  status: "Delivered" | "Prepared" | "In progress";
};

export const workshopProofEn: WorkshopProof[] = [
  {
    title: "A.M. Qattan Foundation AI Training",
    audience: "Cultural and professional teams",
    proof: "Two-day practical training on using AI tools in professional and creative work.",
    outcome: "Hands-on fluency, practical use cases, and responsible review habits.",
    status: "Delivered"
  },
  {
    title: "Mishkal / Goethe-Institut Artist Workshops",
    audience: "Artists and visual creators",
    proof: "Three workshops on using AI to enhance visual development, creative practice, and artwork production.",
    outcome: "AI-assisted visual development workflows for artists without flattening personal style.",
    status: "Delivered"
  },
  {
    title: "AL Mahs3'al (Journalists) Trainings",
    audience: "Journalists and media practitioners",
    proof: "Journalism-focused AI trainings, including practical use, verification, content workflows, and human review.",
    outcome: "A safer AI workflow for media work: research, drafting, checking, and editorial judgment.",
    status: "Delivered"
  },
  {
    title: "WAN-IFRA Newsroom AI Trainings",
    audience: "Newsroom and content teams",
    proof: "Four trainings related to AI use in newsroom and content workflows.",
    outcome: "Practical newsroom adoption patterns, prompt discipline, and workflow thinking.",
    status: "Delivered"
  },
  {
    title: "Arab Bank Parent AI Workshop",
    audience: "Parents and education-support audience",
    proof: "A parent-focused AI workshop package with lesson-to-media examples, NotebookLM source-pack logic, prompt guides, and learning outputs.",
    outcome: "Parents can turn lessons, notes, and child profiles into useful study support materials.",
    status: "Delivered"
  },
  {
    title: "Birzeit AI Fluency Workshops",
    audience: "University students nearing graduation",
    proof: "Prepared multi-session AI fluency and job-search workshop tracks with runbooks, activities, prompt libraries, responsible-use handouts, and PDF exports.",
    outcome: "Students practice AI for research, communication, CV/profile improvement, interviews, and personal workflows.",
    status: "In progress"
  },
  {
    title: "Sharek Youth Forum AI Content Training",
    audience: "Youth and communication groups",
    proof: "Training on using AI tools in content creation and communication work.",
    outcome: "Practical content workflows for non-technical participants.",
    status: "Delivered"
  },
  {
    title: "Advanced AI-Powered Presentations",
    audience: "Teams, trainers, managers, and professional presenters",
    proof: "Workshop design for moving from traditional slides to AI-supported presentation systems using ChatGPT, NotebookLM, Codex, Canva, and image generation.",
    outcome: "Better presentation structure, visual direction, source-grounded material, and interactive web-based presentation options.",
    status: "Prepared"
  }
];
