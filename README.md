# ChatRank - AI Visibility Checker

A professional landing page for ChatRank, an AI visibility checker that helps businesses understand how they appear in AI search results like ChatGPT.

## Features

- **Full-screen hero section** with compelling headline and CTA
- **How It Works section** with 3-step process explanation
- **Features section** highlighting key benefits
- **Testimonials section** with user feedback
- **Final CTA section** for conversion
- **Responsive design** optimized for all devices
- **Modern UI** with soft blue/gray color scheme

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Modern responsive design

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd chatrank
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
chatrank/
├── pages/
│   ├── _app.tsx          # App configuration
│   └── index.tsx         # Landing page
├── styles/
│   └── globals.css       # Global styles with Tailwind
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Pages

- **Homepage** (`/`) - Main landing page with all sections
- **Check Page** (`/check`) - Business checking form (to be implemented)

## Customization

The design uses a custom color palette defined in `tailwind.config.js`:
- Primary blues: `primary-50` to `primary-700`
- Neutral grays: `gray-50` to `gray-900`

All CTA buttons route to `/check` for the business checking functionality. 