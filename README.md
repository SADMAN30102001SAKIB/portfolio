# Sadman Sakib - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Featuring smooth animations, glassmorphism design, and a comprehensive showcase of my projects and skills.

## 🚀 Features

- **Modern Design**: Clean, professional interface with glassmorphism effects
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Smooth animations and transitions using Framer Motion
- **Performance**: Built with Next.js 15 for optimal performance
- **Type Safe**: Full TypeScript support for better development experience
- **Easy to Maintain**: Modular component structure and well-organized data

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📁 Project Structure

```
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── ProjectsSection.tsx
│   ├── SkillsSection.tsx
│   └── Navigation.tsx
├── data/
│   └── portfolio.ts
├── types/
│   └── index.ts
└── public/
    └── images/
```

## 🚦 Getting Started

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd sadman-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### Adding New Projects

Edit the `data/portfolio.ts` file and add your project to the `projects` array:

```typescript
{
  id: "your-project-id",
  title: "Your Project Title",
  description: "Brief description",
  fullDescription: "Detailed description",
  technologies: ["Tech1", "Tech2"],
  category: "Web Development",
  featured: true,
  liveUrl: "https://your-project.com",
  githubUrl: "https://github.com/your-repo",
  // ... other fields
}
```

### Updating Skills

Modify the `skills` array in `data/portfolio.ts` to reflect your expertise:

```typescript
{
  name: "Technology Name",
  category: "Frontend", // or Backend, Database, etc.
  proficiency: 5, // 1-5 scale
  yearsOfExperience: 2,
  projects: ["project-id-1", "project-id-2"]
}
```

### Personal Information

Update your personal details in the `personalInfo` and `contact` objects in `data/portfolio.ts`.

## 🎨 Design Features

- **Dark Theme**: Professional dark color scheme
- **Gradient Text**: Eye-catching gradient text effects
- **Glass Morphism**: Modern glass-like UI elements
- **Smooth Animations**: Framer Motion powered animations
- **Interactive Elements**: Hover effects and smooth transitions

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## ⚡ Performance

- **Fast Loading**: Optimized images and code splitting
- **SEO Friendly**: Proper meta tags and semantic HTML
- **Accessibility**: WCAG compliant with proper ARIA labels

## 🚀 Deployment

The easiest way to deploy this portfolio is using Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

Alternatively, you can deploy to other platforms like Netlify, Railway, or any static hosting service.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## 📞 Contact

- **Email**: sadman30102001sakib@gmail.com
- **GitHub**: [SADMAN30102001SAKIB](https://github.com/SADMAN30102001SAKIB)
- **LinkedIn**: [Sadman Sakib](https://www.linkedin.com/in/sadmansakib30102001)

---

Built with ❤️ by Sadman Sakib
