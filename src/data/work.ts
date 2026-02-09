const buildThumbs = (videoId: string) => ({
  maxres: `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`,
  hq: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
});

export type WorkItem = {
  title: string;
  type: string;
  summary: string;
  youtubeUrl: string;
  youtubeId: string;
  image: string;
  thumbnailFallback: string;
  tags: string[];
  arabicDescription?: string;
};

const workSeed = [
  {
    youtubeUrl: "https://youtu.be/lqVwVUdH6Hk?si=bFrBQseef10kjFxG",
    youtubeId: "lqVwVUdH6Hk",
    title: "Rituals in Motion",
    type: "Cinematic Production",
    summary: "A premium visual narrative built around texture, rhythm, and emotional focus.",
    tags: ["Cinematic", "Narrative", "Premium Edit"],
    arabicDescription: "??? ???? ??????? ????? ??? ??????? ??????? ???????."
  },
  {
    youtubeUrl: "https://youtu.be/dqGQJQ1jvHg?list=TLGGX1bvsOfqR0swOTAyMjAyNg",
    youtubeId: "dqGQJQ1jvHg",
    title: "Brand Atmosphere Study",
    type: "Visual Narrative",
    summary: "A concise concept film that sharpens brand mood and message delivery.",
    tags: ["Brand Story", "Mood", "High Retention"],
    arabicDescription: "???? ????? ???? ??? ???? ?????? ????? ??????? ?????? ????????."
  },
  {
    youtubeUrl: "https://youtu.be/ft0zRjyBNQ4?list=TLGGjNIzCLeVJBAwOTAyMjAyNg",
    youtubeId: "ft0zRjyBNQ4",
    title: "Momentum Cut",
    type: "Campaign Film",
    summary: "Fast, elegant pacing designed for social attention and conversion intent.",
    tags: ["Campaign", "Social", "Conversion"],
    arabicDescription: "?????? ???? ?????? ???? ???? ??? ?????? ????? ???????."
  },
  {
    youtubeUrl: "https://youtu.be/4HPt1qOpIw0?list=TLGGVDWoj-0-l0cwOTAyMjAyNg",
    youtubeId: "4HPt1qOpIw0",
    title: "Cultural Light",
    type: "Art Documentary",
    summary: "A documentary-framed piece blending place, people, and poetic visual language.",
    tags: ["Documentary", "Culture", "Art Direction"],
    arabicDescription: "?????? ??????? ???? ???? ?????? ?????? ???? ????? ?????."
  },
  {
    youtubeUrl: "https://youtu.be/E6Rt-agXCYM?list=TLGGzII0OhNHrdQwOTAyMjAyNg",
    youtubeId: "E6Rt-agXCYM",
    title: "Impact Sequence",
    type: "Cinematic Production",
    summary: "A focused visual sequence that turns complex ideas into memorable moments.",
    tags: ["Story Clarity", "Cinematic", "Impact"],
    arabicDescription: "????? ???? ???? ???? ??????? ??????? ??? ????? ????? ??????."
  },
  {
    youtubeUrl: "https://youtu.be/N7T1ouDs9bs?list=TLGG0KmB1K6djqgwOTAyMjAyNg",
    youtubeId: "N7T1ouDs9bs",
    title: "Heritage Reimagined",
    type: "Visual Narrative",
    summary: "A modern interpretation of heritage aesthetics with editorial-level craft.",
    tags: ["Heritage", "Editorial", "Craft"],
    arabicDescription: "???? ?????? ?????? ??????? ?????? ?????? ????."
  },
  {
    youtubeUrl: "https://youtu.be/QquQdE2YZGU?list=TLGGUvcpT0katqwwOTAyMjAyNg",
    youtubeId: "QquQdE2YZGU",
    title: "Future Classroom",
    type: "Training and Workshops",
    summary: "An education-centered piece showing practical methods for modern visual teams.",
    tags: ["Training", "Education", "AI Workflow"],
    arabicDescription: "????? ?????? ???? ????? ??????? ????? ???? ??????? ???????."
  }
] as const;

export const workItemsEn: WorkItem[] = workSeed.map((item) => {
  const thumbs = buildThumbs(item.youtubeId);
  return {
    ...item,
    image: thumbs.maxres,
    thumbnailFallback: thumbs.hq
  };
});

export const workItemsAr: WorkItem[] = workItemsEn;

export const pinterestPlaceholderEn = {
  title: "Pinterest Boards (Curated Mood + References)",
  description: "A living set of visual references for campaign tone, color, and composition.",
  url: "https://www.pinterest.com/TamerCreates/"
};

export const pinterestPlaceholderAr = {
  title: "Pinterest Boards",
  description: "A living set of visual references for campaign tone, color, and composition.",
  url: "https://www.pinterest.com/TamerCreates/"
};
