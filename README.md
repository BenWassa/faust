# Project Faust
## The Architecture of Ambition

A digital essay exploring how career became identity in modern cities, why extreme ambition is rational yet destructive, and what alternative frameworks offer. Research-driven analysis of workism, platform dynamics, and paths toward flourishing beyond performance.

## Project Overview

This website synthesizes extensive research into career-centric identity, housing precarity, and platform-amplified status anxiety among young professionals in global cities (Toronto, NYC, Vancouver, London). It offers both diagnostic analysis and alternative ethical frameworks (Christian vocation, Aristotelian virtue, humanistic psychology).

### Core Thesis
Extreme career ambition is a "rational maladaptation"—economically logical in cities with 10.4 price-to-income ratios, but psychologically destructive. Alternative architectures exist.

## Structure

- **The System**: Workism, tyranny of merit, status anxiety
- **The Cities**: Economic data from Toronto, Vancouver, NYC, London
- **The Machines**: LinkedIn and Instagram as engines of envy
- **The Casualties**: Millennial burnout, Gen Z algorithmic nihilism
- **The Exits**: Alternative frameworks (vocation, eudaimonia, self-transcendence)
- **The Practice**: Communication strategies for living differently

## Tech Stack

- **Build Tool**: Vite (fast development and optimized production builds)
- **Styling**: Tailwind CSS (utility-first CSS framework with custom theme)
- **Architecture**: Multi-page static site with HTML entry points
- **Deployment**: Static files ready for any hosting service

## Development

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Starts the Vite development server with hot reload at `http://localhost:5173`.

### Build for Production
```bash
npm run build
```
Generates optimized static files in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```
Serves the built files locally for testing.

## Project Structure

```
faust/
├── src/
│   ├── index.html              # Main homepage
│   ├── archetypes/
│   │   ├── architect.html      # Architect archetype page
│   │   ├── departed.html       # Departed archetype page
│   │   ├── faithful.html       # Faithful archetype page
│   │   ├── visible.html        # Visible archetype page
│   │   └── watchman.html       # Watchman archetype page
│   ├── style.css               # Tailwind CSS entry point
│   └── main.js                 # JavaScript entry (currently empty)
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
└── package.json                # Project dependencies and scripts
```

## Design Direction

**Aesthetic**: "The Panopticon Revealed" - Editorial magazine meets data visualization meets architectural blueprint. Clean, intentional, generous spacing that respects reader attention.

## Contributing

This is a research-driven public resource. Feedback, corrections, and additional perspectives welcome.

## License

Content: CC BY-NC-SA 4.0 (research, writing)  
Code: MIT (website implementation)

---

**Research Sources**: 8 deep research runs synthesizing economics, psychology, sociology, philosophy, and digital media studies.