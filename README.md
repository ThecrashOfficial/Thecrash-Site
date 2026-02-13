# Thecrash

**Your Personal Tech Hub for Projects, Learning & AI Mentors**

Thecrash is a modern, full-stack personal workspace platform designed for creators, builders, and learners. Built with Next.js 16 with a clean, minimal aesthetic, it serves as a central hub for projects, learning resources, and AI-powered mentorship.

## Features

### 🏠 Homepage
- Clean, welcoming interface with personal introduction
- Quick access to all major sections (Meta, Blog, Market, AI Agents)
- About Me section showcasing your journey and expertise
- Featured blog posts and resources
- Community engagement section

### 💼 Meta (Projects)
- Portfolio showcase of your projects and works
- Project categorization and filtering
- Detailed project cards with descriptions
- Live demo links and integration examples

### 📚 Blog
- Tech insights, tutorials, and thought leadership
- Clean list-based article layout with categories
- Easy content discovery and navigation
- Tags for content organization

### 🤖 AI Mentors
- 6 specialized AI coaches for different guidance needs:
  - **Thecrash** - Personal guidance
  - **Life Coach** - Personal growth & balance
  - **Financial Coach** - Money & wealth building
  - **Philosopher** - Wisdom & mindfulness
  - **Learning Coach** - Learning strategies
  - **Meta Coach** - Thinking & prompt engineering
- Real-time chat interface
- Mobile-optimized conversation experience
- Dynamic UI changes based on selected mentor

### 🛍️ Market
- Premium templates and resources
- Curated tools for builders
- Easy discovery and purchasing

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Theme**: Next-themes (Light/Dark mode)
- **Animations**: CSS transitions & animations
- **Deployment**: Vercel

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Thecrash/thecrash-site.git
cd thecrash-site

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## Project Structure

```
thecrash-site/
├── app/
│   ├── page.tsx              # Homepage
│   ├── agent/page.tsx        # AI Mentors
│   ├── blog/page.tsx         # Blog articles
│   ├── meta/page.tsx         # Projects showcase
│   ├── market/page.tsx       # Premium resources
│   └── api/chat/route.ts     # AI chat API
├── components/
│   ├── navigation.tsx        # Main navigation
│   ├── blog-card.tsx         # Blog post card
│   ├── ui/                   # shadcn components
│   └── [other components]
├── public/                   # Static assets & logos
└── styles/                   # Global CSS
```

## Key Pages

### Homepage (`/`)
- Hero section with call-to-action buttons
- About Me card with professional introduction
- Featured projects from Meta
- Latest blog posts preview
- AI Mentors quick access
- Community engagement section

### AI Mentors (`/agent`)
- Responsive mentor selector
- Real-time chat interface
- Mentor-specific color schemes
- Mobile-optimized layout with minimal UI
- Horizontal scrolling mentor list on mobile

### Blog (`/blog`)
- Minimal list-based layout
- Floating card effects
- Category badges
- Read time indicators
- Easy navigation to full articles

### Meta (`/meta`)
- Portfolio-style project showcase
- Project details and descriptions
- Filter and categorization system
- Live links to projects

## Design Philosophy

Thecrash embraces a **modern, minimal aesthetic**:
- Clean typography and spacing
- Dark/Light theme support
- Smooth transitions and animations
- Mobile-first responsive design
- Floating card effects for depth
- Semantic HTML with proper accessibility
- Inclusive color scheme with good contrast

## Performance

- Server-side rendering for fast initial loads
- Optimized image handling
- Responsive images with proper sizing
- Minimal CSS footprint with Tailwind
- Smooth animations without jank

## Features to Explore

- **Theme Toggle**: Switch between light and dark modes (top navigation)
- **Responsive Design**: Try resizing or viewing on mobile
- **AI Chat**: Test the AI mentors with various questions
- **Blog Navigation**: Browse recent tech articles
- **Project Showcase**: View the Meta projects collection
- **Community**: Connect via social links

## Author

**Pyae Sone Phyo (Thecrash)**
- Builder & Creator
- Focus: Web Development, AI Automation, Tech Education
- Location: Myanmar
- Mission: Empowering Myanmar's tech ecosystem

### Connect
- GitHub: [@sonesone222006](https://github.com/sonesone222006)
- Telegram: [@thecrashOfficial](https://t.me/thecrashOfficial)
- Website: [thecrash.me](https://thecrash.me)

## License

MIT License - Feel free to use this project as inspiration for your own!

---

**Thecrash** - Where ideas, learning, and community converge.
