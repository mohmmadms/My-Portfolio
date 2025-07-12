
export const projects = [
  {
    id: 'Courses-website',
    title: 'Full Stack Learning Platform',
    description: 'A modern and responsive course platform with AI-powered course generation, user authentication, and a feature-rich admin dashboard.',
    image: '/SkillNest.png',
    tools: ['Next.js', 'Tailwind CSS', 'React','Node.js + Express','MongoDB','Firebase'],
    sections: [
      {
        heading: '🎓 Course Management',
        content:(
      <ul >
        <li>- Browse all available courses with detailed information.</li>
        <li>- View dynamic course pages with objectives, outcomes, content, and quizzes.</li>
        <li>- Enroll in any course and track user enrollments.</li>
      </ul>
    )
    },
      {
        heading: '🧠 AI-Powered Course Generator',
       content:(
      <ul >
        <li>- Generate a complete course with one click using OpenRouter.</li>
        <li>- Admins can pick from predefined topics or enter custom topics.</li>
        <li>- Enroll in any course and track user enrollments.</li>
      </ul>
    )
      },
      {
        heading: '💬 Contact Page (Nodemailer)',
        content:(
      <ul >
        <li>- Responsive Contact Us page styled for dark/light themes.</li>
        <li>- Sends real emails via nodemailer backend integration.</li>
      </ul>
    )
      },
      {
        heading: '🧑‍💻 Admin Dashboard',
        content:(
      <ul >
        <li>- View, edit, delete, and generate courses.</li>
        <li>- Monitor enrolled users per course.</li>
      </ul>
    )
      },
      {
        heading: '✅ Auth System',
        content:(
      <ul >
        <li>- Secure login and signup.</li>
        <li>- Token-based authentication.</li>
        <li>- Fully integrated user API.</li>
      </ul>
    )
      },
       {
        heading: 'Links:',
        content:(
      <ul >
        <li>🧑‍💻 GitHub: <a href="https://github.com/mohmmadms/my-app" target="_blank" rel="noopener" className="text-white underline hover:text-pink-500">https://github.com/mohmmadms/my-app</a></li>
        <li>🚀 Vercel: <a href="https://my-app-fe.vercel.app/" target="_blank" rel="noopener" className="text-white underline hover:text-pink-500">https://my-app-fe.vercel.app/</a></li>

      </ul>
    )
      },
    ],
  },
   {
    id: 'Legends-Website',
    title: 'Legends Team Website',
    description:
      'A sleek and interactive website for showcasing tours and gallery images, complete with an admin dashboard for content management.',
    image: '/Legends-Team.png',
    tools: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'NodeJs','ExpressJs' ,'Axios'],
    sections: [
      {
        heading: '🌍 Public Website',
        content: (
          <ul>
            <li>- Beautiful and responsive UI for users to explore tours and gallery.</li>
            <li>- Scroll-based animations using AOS and Framer Motion.</li>
            <li>- Tours and gallery data fetched dynamically from the backend.</li>
          </ul>
        ),
      },
      {
        heading: '🖼️ Gallery Page',
        content: (
          <ul>
            <li>- View a curated selection of images from various tours and events.</li>
            <li>- Carousel and image animations for enhanced visual experience.</li>
            <li>- "View All Gallery" feature for complete browsing.</li>
          </ul>
        ),
      },
      {
        heading: '🧭 Tours Page',
        content: (
          <ul>
            <li>- Displays detailed cards for each tour including title, description, and image.</li>
            <li>- Dynamic route for tour details with error handling and fallback UI.</li>
          </ul>
        ),
      },
      {
        heading: '🛠️ Admin Dashboard',
        content: (
          <ul>
            <li>- Add, edit, and delete tours and gallery items.</li>
            <li>- Intuitive form handling for tour data and image URLs.</li>
            <li>- Protected routes and simple admin access logic (cookie/token based).</li>
          </ul>
        ),
      },
      {
        heading: '⚙️ Tech Stack & Features',
        content: (
          <ul>
            <li>- Built with Next.js 14 App Router and React 18.</li>
            <li>- Styled with Tailwind CSS for rapid and responsive design.</li>
            <li>- Animations with Framer Motion and AOS.</li>
            <li>- Data fetched with Axios from backend APIs.</li>
          </ul>
        ),
      },
      {
        heading: '🔗 Links',
        content: (
          <ul>
            <li>
              🧑‍💻 GitHub:{' '}
              <a
                href="https://github.com/mohmmadms/legends-team"
                target="_blank"
                rel="noopener"
                className="text-white underline hover:text-pink-500"
              >
                https://github.com/mohmmadms/legends-team
              </a>
            </li>
            <li>
              🚀 Vercel:{' '}
              <a
                href="https://legends-team.vercel.app/"
                target="_blank"
                rel="noopener"
                className="text-white underline hover:text-pink-500"
              >
                https://legends-team.vercel.app/
              </a>
            </li>
          </ul>
        ),
      },
    ],
  },
   {
    id: 'Tableau-Dashboard',
    title: 'Interactive Data Dashboard (Tableau)',
    description:
      'A visually rich Tableau dashboard that provides insights into multiple metrics through interactive stories, charts, and filters.',
    image: '/Dashboard.png',
    tools: ['Tableau', 'Data Visualization', 'Interactive Charts', 'Storytelling', 'Dashboards'],
    sections: [
      {
        heading: '📊 Dashboard Overview',
        content: (
          <ul>
            <li>- Built using Tableau Public for web-based accessibility.</li>
            <li>- Combines multiple dashboards into a single interactive story.</li>
            <li>- Tailored layout for clear insights and storytelling through data.</li>
          </ul>
        ),
      },
      {
        heading: '📈 Visualizations Included',
        content: (
          <ul>
            <li>- Bar charts, line graphs, pie charts, and tables.</li>
            <li>- Drill-down capability for deeper analysis.</li>
            <li>- KPI indicators and comparison metrics.</li>
          </ul>
        ),
      },
      {
        heading: '🧭 Interactive Features',
        content: (
          <ul>
            <li>- Filters and dropdowns for dynamic data exploration.</li>
            <li>- Highlights and tooltips for on-hover details.</li>
            <li>- Navigation across multiple pages (stories) within one dashboard.</li>
          </ul>
        ),
      },
      {
        heading: '💡 Use Cases',
        content: (
          <ul>
            <li>- Business intelligence reporting.</li>
            <li>- Academic data presentation or portfolio enhancement.</li>
            <li>- Demonstrates strong understanding of data storytelling.</li>
          </ul>
        ),
      },
      {
        heading: '🔗 Links',
        content: (
          <ul>
            <li>
              📊 Tableau Public:{' '}
              <a
                href="https://public.tableau.com/app/profile/mohammad.smadi/viz/MohDashboard/Story1?publish=yes"
                target="_blank"
                rel="noopener"
                className="text-white underline hover:text-pink-500"
              >
                https://public.tableau.com/app/profile/mohammad.smadi/viz/MohDashboard/Story1
              </a>
            </li>
          </ul>
        ),
      },
    ],
  },
];
