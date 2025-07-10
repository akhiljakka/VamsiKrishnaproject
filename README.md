# Personal Portfolio Website

A beautiful, responsive, and fully customizable portfolio website built with Next.js and Tailwind CSS. This project is designed to be easily customizable by editing a single configuration file.

## Features

- 🚀 **Modern Tech Stack**: Built with Next.js 13+ (App Router), React, and Tailwind CSS
- 📱 **Fully Responsive**: Optimized for all devices and screen sizes
- 🎨 **Beautiful Design**: Professional, clean, and modern design with smooth animations
- 🔧 **Easy Customization**: Change all content by editing just one config file
- 🎯 **SEO Optimized**: Built-in SEO with dynamic meta tags from config data
- 💼 **Professional Sections**: Home, About, Skills, Education, Experience, Projects, Contact
- 🎭 **Component-Based**: Reusable and maintainable React components
- 🌟 **Production Ready**: Optimized for performance and ready for deployment

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Quick Setup

To customize this portfolio for your own use, simply edit the `config.js` file in the root directory. This file contains all the personal information, content, and data used throughout the website.

### Configuration Structure

The `config.js` file contains the following sections:

```javascript
export default {
  // Basic Information
  name: "Your Name",
  title: "Your Professional Title",
  photo: "URL to your photo",
  
  // Contact Information
  contact: {
    phone: "+1234567890",
    email: "your.email@example.com",
  },
  
  // Social Media Links
  social: {
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourusername"
  },
  
  // Professional Information
  objective: "Your career objective...",
  summary: ["Summary point 1", "Summary point 2"],
  skills: ["Skill 1", "Skill 2", "Skill 3"],
  
  // Education
  education: [
    {
      degree: "Your Degree",
      school: "University Name",
      year: "2020-2024",
      cgpa: "8.5"
    }
  ],
  
  // Work Experience
  experience: [
    {
      role: "Job Title",
      company: "Company Name",
      start: "2023-01-01",
      end: "2024-01-01",
      bullets: ["Achievement 1", "Achievement 2"]
    }
  ],
  
  // And more...
}
```

### Customization Steps

1. **Edit Personal Information**: Update name, title, contact details, and photo URL
2. **Add Your Content**: Update objective, summary, skills, and other sections
3. **Update Experience**: Add your work history with roles, companies, and achievements
4. **Add Education**: Include your academic background and certifications
5. **Customize Social Links**: Add your LinkedIn, GitHub, and other social profiles
6. **Add Projects**: Include your notable projects and achievements

### Adding Photos

For photos, you can either:
- Use external URLs (like Pexels, Unsplash)
- Add images to the `public/` folder and reference them as `/image-name.jpg`

## Project Structure

```
portfolio-website/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── education/
│   │   └── page.tsx
│   ├── experience/
│   │   └── page.tsx
│   ├── projects/
│   │   └── page.tsx
│   ├── skills/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Navigation.tsx
│   └── Footer.tsx
├── public/
│   └── (static assets)
├── config.js
└── README.md
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

This portfolio can be deployed to various platforms:

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Run `npm run build`
2. Upload the `out` folder to Netlify
3. Configure as a static site

### Other Platforms
The built files in the `out` folder can be hosted on any static file hosting service.

## Technologies Used

- **Next.js 13+** - React framework with App Router
- **React 18** - JavaScript library for user interfaces
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type-safe JavaScript
- **Lucide React** - Beautiful icons
- **shadcn/ui** - High-quality React components

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you need help customizing this portfolio or encounter any issues, please open an issue in the repository.

---

**Happy building!** 🚀