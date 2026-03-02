# NextBuildX Website

NextBuildX is a static-first, high-performance website for a student-led rural development NGO. It is designed to be lightweight, accessible, and easily deployable to static hosting services like GitHub Pages, Vercel, or Netlify.

## Features

- **Tech Stack:** Next.js (App Router), Tailwind CSS, TypeScript.
- **Static Export:** Fully static site generation (SSG) for low-cost hosting.
- **Localization:** Built-in support for English (`/en`) and Hindi (`/hi`).
- **Lite Mode:** A unique "Text-only" mode for low-bandwidth users (toggle in header).
- **Accessibility:** Semantic HTML, ARIA labels, and high-contrast options.
- **Content Management:** Markdown-based blog and JSON-based project/team data.
- **Forms:** Client-side form handling (ready for Formspree/Netlify Forms).

## Getting Started

### Prerequisites

- Node.js 18+ installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/nextbuildx-website.git
   cd nextbuildx-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Building for Production

To create a production build (static export):

```bash
npm run build
```

The output will be in the `out/` directory.

## Deployment

### GitHub Pages

1. Push your code to a GitHub repository.
2. Go to **Settings > Pages**.
3. Source: **GitHub Actions**.
4. Use the "Next.js" configure button or add a workflow `.github/workflows/nextjs.yml`.
   *Alternatively, simpler method:*
   - Update `next.config.ts` with `basePath: '/repo-name'` if not using a custom domain.
   - Run `npm run build`.
   - Commit the `out/` folder to a `gh-pages` branch.

### Vercel / Netlify (Recommended)

**One-Click Deploy:**

1. Connect your GitHub repository to Vercel or Netlify.
2. The platform will automatically detect Next.js.
3. Build Command: `npm run build`
4. Output Directory: `out` (or default `.next` if not using static export, but `out` is safer for pure static).

## Configuration

### Customizing Content

- **Projects:** Edit `src/data/projects.json`.
- **Stories:** Edit `src/data/stories.json`.
- **Team:** Edit `src/data/team.json`.
- **Blog Posts:** Add `.md` files to `src/content/blog/`.
- **Translations:** Edit `src/lib/dictionary.ts`.

### Forms

The contact and volunteer forms are set up with placeholder actions. To make them functional:

1. **Formspree:** Change the `action` URL in `ContactForm.tsx` to your Formspree endpoint.
2. **Netlify Forms:** Add `data-netlify="true"` to the `<form>` tag in `ContactForm.tsx` and `VolunteerForm.tsx`.

## Accessibility Checklist

- [x] Semantic HTML structure
- [x] Alt text for images (placeholders used)
- [x] Keyboard navigation support
- [x] Lite Mode for low bandwidth
- [ ] Manual testing with screen readers (Recommended before launch)

## License

This project is licensed under the MIT License. See `LICENSE` for details.
