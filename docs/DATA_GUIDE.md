# Real Data ထည့်သွင်းရန် လမ်းညွှန်ချက်

## 📍 ဘယ်နေရာမှာ ဘယ်လို Data တွေ ထည့်ရမှာလဲ

### 1. **Homepage (app/page.tsx)**

**ဘာတွေ ပြောင်းရမှာလဲ:**
- Site logo
- Hero section description
- Feature cards

**ဘယ်မှာ ရှာရမှာလဲ:**
\`\`\`typescript
// Line ~70 - Hub Cards Array
const hubCards = [
  {
    title: "About",  // ဒီမှာ ပြောင်းပါ
    description: "Pyae Sone Phyo...",  // သင့် description ထည့်ပါ
    icon: UserIcon,
    href: "/about",
    color: "from-cyan-500/10 to-blue-500/10",
  },
  // ... နောက်ထပ် cards များ
]
\`\`\`

**ဥပမာ:**
\`\`\`typescript
{
  title: "Resources",
  description: "100+ Free Templates, Guides & Book Summaries",  // သင့်ရဲ့ real numbers
  icon: ResourcesIcon,
  href: "/resources",
  color: "from-yellow-500/10 to-amber-500/10",
}
\`\`\`

---

### 2. **Learn Page (app/learn/page.tsx)**

**ဘာတွေ ပြောင်းရမှာလဲ:**
- Articles list
- Free resources
- Categories

**Articles ထည့်နည်း:**
\`\`\`typescript
// Line ~60 - Articles Array
const articles = [
  {
    title: "သင့်ရဲ့ Article ခေါင်းစဉ်",
    excerpt: "အကျဉ်းချုပ် description",
    category: "Web Development",  // သို့မဟုတ် "AI", "CSS", etc.
    date: "2024-01-15",  // YYYY-MM-DD format
    readTime: "8 min read",
    slug: "your-article-slug",  // URL အတွက် (no spaces)
  },
  // နောက်ထပ် articles ထပ်ထည့်ပါ...
]
\`\`\`

**Free Resources ထည့်နည်း:**
\`\`\`typescript
// Line ~30 - Free Resources Array
const freeResources = [
  {
    title: "သင့်ရဲ့ Resource အမည်",
    description: "ဘာပါဝင်သလဲ ရှင်းပြပါ",
    downloads: "2.5K+",  // အရေအတွက်
    type: "PDF Template",
    fileUrl: "/downloads/your-file.pdf",  // သင့် file path
  },
]
\`\`\`

---

### 3. **Resources Page (app/resources/page.tsx)**

**Featured Prompts ထည့်နည်း:**
\`\`\`typescript
// Line ~80 - Featured Prompts Array
const featuredPrompts = [
  {
    title: "Prompt အမည်",
    prompt: "သင့်ရဲ့ actual prompt text ဒီမှာ ထည့်ပါ",
    useCase: "ဘာအတွက် သုံးသလဲ",
    tier: "Free",  // or "Premium"
  },
]
\`\`\`

**Notion Templates ထည့်နည်း:**
\`\`\`typescript
// Line ~95 - Notion Templates Array
const notionTemplates = [
  {
    title: "Template အမည်",
    description: "ဘာတွေ ပါဝင်သလဲ",
    category: "Notion Template",
    uses: "1,234",  // အသုံးပြုသူ အရေအတွက်
    link: "https://notion.so/your-template",  // သင့် Notion template link
    tier: "Free",
  },
]
\`\`\`

**Video Plugins ထည့်နည်း:**
\`\`\`typescript
// Line ~110 - Video Plugins Array
const videoPlugins = [
  {
    title: "Plugin အမည်",
    description: "ဘာလုပ်နိုင်သလဲ",
    category: "DaVinci Resolve",  // or "Adobe Premiere"
    downloads: "1,234",
    format: "ZIP (LUT files)",
    tier: "Free",
    fileUrl: "/downloads/your-plugin.zip",
  },
]
\`\`\`

**Guides & Books ထည့်နည်း:**
\`\`\`typescript
// Line ~130 - Resources Array
const resources = [
  {
    title: "Guide/Book အမည်",
    description: "အသေးစိတ် ရှင်းပြချက်",
    category: "AI & Prompts",  // Category
    downloads: "2,543",
    format: "PDF",
    pages: "45 pages",
    tier: "Free",  // or "Premium"
  },
]
\`\`\`

---

### 4. **Projects Page (app/projects/page.tsx)**

**Projects ထည့်နည်း:**
\`\`\`typescript
// Line ~40 - Projects Array
const projects = [
  {
    title: "သင့် Project အမည်",
    subtitle: "တစ်ကြောင်း description",
    version: "v2.0",
    logo: "/your-logo.svg",  // သင့် logo path
    description: "အသေးစိတ် project description...",
    features: [
      "Feature 1 ရှင်းပြချက်",
      "Feature 2 ရှင်းပြချက်",
      // နောက်ထပ် features...
    ],
    tags: ["React", "Next.js", "AI"],  // Technologies
    github: "https://github.com/yourusername/project",
    demo: "https://yourproject.com",
    year: "2024",
  },
]
\`\`\`

---

### 5. **Services Page (app/services/page.tsx)**

**Services ထည့်နည်း:**
\`\`\`typescript
// Line ~10 - Services Array
const services = [
  {
    title: "Service အမည်",
    description: "ဘာတွေ လုပ်ပေးနိုင်သလဲ",
    price: "$50/hour",  // သင့် pricing
    features: [
      "Feature 1",
      "Feature 2",
      // နောက်ထပ် features...
    ],
    badge: "Most Popular",  // or null
    cta: "Book Session",  // Button text
  },
]
\`\`\`

---

### 6. **Community Page (app/community/page.tsx)**

**Community Links ထည့်နည်း:**
\`\`\`typescript
const communities = [
  {
    name: "Community အမည်",
    description: "ဘာတွေ ဆွေးနွေးလဲ",
    platform: "Telegram",  // or "Discord", "Facebook", "Viber"
    members: "500+",
    link: "https://t.me/yourchannel",
    color: "from-blue-500/10 to-cyan-500/10",
  },
]
\`\`\`

---

### 7. **About Page (app/about/page.tsx)**

**Philosophical Quotes ထည့်နည်း:**
\`\`\`typescript
// Quotes Array ရှာပါ
const philosophicalQuotes = [
  "သင့်ရဲ့ quote သို့မဟုတ် သင့်ရဲ့ စာတို",
  "နောက်ထပ် quote...",
  // 10-15 quotes ထည့်နိုင်ပါတယ်
]
\`\`\`

---

### 8. **AI Agent Page (app/agent/page.tsx)**

**Mentor Types ထည့်နည်း:**
\`\`\`typescript
const mentorTypes = [
  {
    id: "new-mentor",
    name: "Mentor အမည်",
    description: "ဘာတွေ ကူညီပေးနိုင်သလဲ",
    systemPrompt: "AI ကို ဘယ်လို ပြောမှာလဲ ရှင်းပြပါ...",
  },
]
\`\`\`

---

### 9. **Digital Garden Page (app/garden/page.tsx)**

**Garden Notes ထည့်နည်း:**
\`\`\`typescript
const gardenItems = [
  {
    id: "note-1",
    title: "Note ခေါင်းစဉ်",
    excerpt: "အကျဉ်းချုပ်",
    category: "Coding",  // or "AI", "Business", "Life"
    status: "Growing",  // or "Seedling", "Evergreen"
    lastUpdated: "2024-01-15",
    tags: ["react", "nextjs"],
  },
]
\`\`\`

---

## 📝 အရေးကြီးတဲ့ Tips

### File Paths
\`\`\`typescript
// ပုံတွေ ထည့်တဲ့အခါ
logo: "/your-logo.svg"  // public folder ထဲမှာ ထားပါ

// Downloads
fileUrl: "/downloads/your-file.pdf"  // public/downloads/ folder ထဲမှာ ထားပါ
\`\`\`

### Date Format
\`\`\`typescript
date: "2024-01-15"  // YYYY-MM-DD format သုံးပါ
\`\`\`

### URLs
\`\`\`typescript
// External links
link: "https://yourwebsite.com"

// Internal links
href: "/about"  // / ခြေကနေ စပါ
\`\`\`

### File Organization
\`\`\`
public/
  ├── downloads/          ← PDF, ZIP files
  ├── images/            ← Images
  ├── your-logo.svg      ← Logo files
  └── favicon.ico
\`\`\`

---

## 🚀 အမြန်ဆုံး စတင်နည်း

1. **Homepage** - `hubCards` array မှာ descriptions ပြောင်းပါ
2. **Projects** - သင့် real projects 3-4 ခု ထည့်ပါ
3. **Resources** - သင့် prompts/templates အနည်းဆုံး 5 ခု ထည့်ပါ
4. **Learn** - articles 3-5 ခု ထည့်ပါ
5. **About** - သင့် quotes/thoughts 10 ခု ထည့်ပါ

---

## ❓ မေးခွန်းများ

**Q: Array ထဲမှာ item ဘယ်နှခု ထည့်နိုင်လဲ?**
A: လိုသလောက် ထည့်နိုင်ပါတယ်။ ပုံမှန်တော့ 5-10 items ထားပါ။

**Q: Image files ဘယ်မှာ ထားရမလဲ?**
A: `public/` folder ထဲမှာ ထားပါ။ ပြီးရင် `/image-name.jpg` လို့ reference လုပ်ပါ။

**Q: Data ပြောင်းပြီးရင် ဘာလုပ်ရမှာလဲ?**
A: Save လုပ်ရုံပါပဲ။ Next.js က auto-reload လုပ်ပါလိမ့်မယ်။
