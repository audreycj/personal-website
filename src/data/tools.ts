// ==========================================================
// TOOLBOX (home page)
// Grouped by what I use them for. Add or remove freely.
// ==========================================================

export type ToolGroup = {
  title: string;
  color: 'sage' | 'butter' | 'lilac' | 'peach' | 'sky';
  doodle: string;
  tools: string[];
};

export const toolGroups: ToolGroup[] = [
  { title: 'design', color: 'lilac', doodle: 'brush', tools: ['Figma', 'Canva', 'Framer'] },
  { title: 'data', color: 'peach', doodle: 'chart', tools: ['Power BI', 'Looker Studio', 'PostgreSQL', 'Google BigQuery', 'Excel', 'Google Sheets'] },
  { title: 'code', color: 'sage', doodle: 'laptop', tools: ['VS Code', 'GitHub', 'Java', 'Python', 'JavaScript', 'Astro', 'Cloudflare Workers', 'Claude'] },
  { title: 'class', color: 'butter', doodle: 'chalkboard', tools: ['Discord', 'Claude'] },
];
