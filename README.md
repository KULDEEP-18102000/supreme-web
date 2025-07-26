🛠️ Project Setup Instructions

1.Clone the repository
git clone https://github.com/KULDEEP-18102000/supreme-web.git
cd supreme-web

2.Install dependencies
npm install

3.Run the development server
npm run dev

4.Build for production
npm run build

5.Preview production build
npm run start


🧩 Component Architecture Overview

This Next.js project follows a modular and scalable architecture based on component reusability, section separation, and clean separation of concerns:

1./app
Contains the core application structure using the App Router.

Includes:

layout.tsx: Global layout wrapper (e.g., for shared header/footer).

page.tsx: Main landing page of the website.

globals.css: Global styles.

2./components
Houses UI and layout components shared across multiple pages or sections.

Organized as:

layout/ — Contains site-wide layout elements:

Header.tsx

Footer.tsx

3./sections
Contains page-specific or feature-focused components grouped into sections of the homepage:

HeroSection.tsx: Hero banner area.

ProductSection.tsx: Product/features showcase.

ContactSection.tsx: Contact form and footer CTA.
➕ _components/
A subfolder within sections/ for reusable or supportive UI components, including:

CircularProgressBarButton.tsx: A circular loading/progress indicator.

ContactForm.tsx: Form used in ContactSection.

SolutionCard.tsx: UI card for showcasing solutions.

Tab.tsx: Likely a tabbed UI component used in a section.

4. /hooks
Contains custom React hooks.
useScrollDirection.tsx: Hook for detecting scroll direction, useful for hiding/showing navbar dynamically.

5./public
Static assets such as images and videos:

images/: (You may have additional image assets here.)

videos/: Contains SVG icons for file, globe, next, vercel, and window.



📱 Responsive Design Strategy
This project is fully responsive and adapts seamlessly across various screen sizes (mobile, tablet, desktop) using Tailwind CSS utility classes.

✅ Approach:
Utilized Tailwind’s mobile-first responsive design system.

Applied breakpoint-based utilities such as:

sm:, md:, lg:, xl: and 2xl: to control layout and styling per device width.

Made use of flexbox, grid, and spacing utilities to ensure consistent layout alignment and spacing.
