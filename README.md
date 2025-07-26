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


⚡ Performance Optimization Techniques Employed
Image optimization using Next.js <Image> component with lazy loading and responsive sizes.
Minimized and compressed assets via Next.js' production build.



♿ Accessibility Considerations

Semantic HTML elements (<header>, <main>, <nav>, <footer>) used for better structure.

Alt attributes for all images.
Keyboard navigable UI with focus outlines.
Accessible form labels and ARIA roles for custom components.

📦 Third-Party Libraries Used

Framer Motion: for smooth animations and scroll-based transitions.
React Hook Form + Zod: for efficient and type-safe form validation.
TailwindCSS: for styling (based on what you used).

🤔 Assumptions & Key Decisions

The website will serve static content and does not require a backend.
Chose Next.js for its static site generation and routing simplicity.
Opted for minimal libraries to reduce bundle size and dependency complexity.


🧱 Challenges Faced & Solutions

Challenge	Solution
Smooth video autoplay on all browsers -	Used useEffect with play() and fallback handling
Scroll-based UI behavior - Used Framer Motion's useScroll, useMotionValueEvent hooks
Ensuring performance on low-end devices	Lazy-loaded heavy sections, reduced initial bundle
Cross-browser scrollbar consistency	Customized scrollbar using ::-webkit-scrollbar styles

🌱 Suggested Upcoming Features & Improvements

Light/Dark mode toggle
CMS integration for dynamic content (e.g. Sanity, Strapi)
Multi-language support (i18n)
Analytics integration (Google Analytics, Vercel Analytics)
Unit & Integration Tests using Jest + Testing Library

📝 Additional Remarks

Deployed on Vercel with CI/CD pipeline.
Open to contributions, feedback, or suggestions—feel free to create an issue or PR.
Built with ❤️ using modern frontend best practices.

