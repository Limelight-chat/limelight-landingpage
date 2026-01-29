# Navbar Copy

This folder contains a complete copy of the navbar from the original project, ready to be used in another project.

## Structure

```
copy-nav/
├── components/
│   ├── navbar5.tsx          # Main navbar component
│   ├── nav-main.tsx         # Sidebar navigation component
│   ├── footer.tsx           # Footer component
│   └── ui/                  # UI components
│       ├── navigation-menu.tsx
│       ├── button.tsx
│       ├── sheet.tsx
│       ├── accordion.tsx
│       └── sidebar.tsx
├── lib/
│   └── utils.ts             # Utility functions
├── layout.tsx               # Layout component
├── package-dependencies.json # Required dependencies
└── README.md               # This file
```

## Installation

1. Copy all files to your new project
2. Install the required dependencies from `package-dependencies.json`
3. Make sure you have Tailwind CSS configured
4. Update import paths to match your project structure
5. Replace the logo import with your own logo

## Usage

```tsx
import { Navbar5 } from './components/navbar5';
import Footer from './components/footer';

export default function Layout({ children }) {
  return (
    <>
      <Navbar5 />
      {children}
      <Footer />
    </>
  );
}
```

## Customization

- Update the navigation items in `navbar5.tsx`
- Replace the logo in the imports
- Modify colors and styling as needed
- Update the footer content and links