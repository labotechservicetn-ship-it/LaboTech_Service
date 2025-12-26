# Labotech Assistance Website

A modern, responsive website for Labotech Assistance built with React, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Carousel**: Showcasing different appliance repair services
- **Contact Form**: Easy-to-use service request form with validation
- **Service Sections**: Detailed information about repair services offered
- **Customer Testimonials**: Social proof from satisfied customers
- **Portfolio Gallery**: Examples of completed repair work
- **SEO Optimized**: Structured for search engine visibility

## Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **Lucide React** - Beautiful icon library

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section with carousel
│   ├── Services.tsx    # Services showcase
│   ├── About.tsx       # About company section
│   ├── Portfolio.tsx   # Work portfolio
│   ├── Testimonials.tsx # Customer reviews
│   ├── Contact.tsx     # Contact form and info
│   └── Footer.tsx      # Site footer
├── data/               # Static data and configuration
│   ├── siteConfig.ts   # Site-wide configuration
│   ├── services.ts     # Service data
│   ├── testimonials.ts # Customer testimonials
│   └── portfolio.ts    # Portfolio items
├── App.tsx             # Main app component
├── main.tsx           # App entry point
└── index.css          # Global styles
```

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment

This project is optimized for deployment on:

- **Netlify** (recommended) - Includes `netlify.toml` configuration
- **Vercel**
- **GitHub Pages**
- Any static hosting service

### Netlify Deployment

1. Connect your repository to Netlify
2. Build settings are automatically configured via `netlify.toml`
3. Deploy!

## Customization

### Site Configuration

Edit `src/data/siteConfig.ts` to update:
- Company information
- Contact details
- Service areas
- Business hours
- Pricing

### Services

Modify `src/data/services.ts` to:
- Add/remove services
- Update service descriptions
- Change service images
- Modify supported brands

### Styling

The project uses Tailwind CSS. Customize:
- Colors in `tailwind.config.js`
- Global styles in `src/index.css`
- Component-specific styles inline

## Features for Netlify Visual Editor

This project is structured to be compatible with Netlify's Visual Editor:

- **Modular Components**: Each section is a separate component
- **Data Separation**: Content is separated from presentation
- **Clean Structure**: Organized file structure for easy editing
- **TypeScript Support**: Type-safe development
- **Responsive Design**: Mobile-first approach

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License.

## Support

For support or questions about this website, please contact:
- Email: info@LabotechAssistance.services
- Phone: (123) 456-7890