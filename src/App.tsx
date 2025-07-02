import React, { useState } from 'react';
import { 
  Mail,
  GraduationCap, 
  BookOpen, 
  Briefcase, 
  FolderGit2, 
  Activity,
  Heart,
  Github,
  Linkedin,
  Menu,
  X,
  ChevronDown,
  Twitter,
  Award,
  Code
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sections = [
    { id: 'home', title: 'Home' },
    { id: 'education', title: 'Education', icon: GraduationCap },
    { id: 'courses', title: 'Courses', icon: BookOpen },
    { id: 'experience', title: 'Experience', icon: Briefcase },
    { id: 'projects', title: 'Projects', icon: FolderGit2 },
    { id: 'activities', title: 'Activities', icon: Activity },
    { id: 'contact', title: 'Contact', icon: Mail }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                Hira Amanat
              </h1>
            </div>
            
            {/* Social Links */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="mailto:hiraamanatali19@gmail.com"
                className="text-gray-600 hover:text-purple-600 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                 href="https://www.linkedin.com/in/hira-amanat-800104245"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-gray-600 hover:text-purple-600 transition-colors"
                aria-label="LinkedIn"
                >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href="https://github.com/iAmHira19"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-purple-600 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/HiraAmanat1919"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-purple-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-600 hover:bg-purple-50 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  scrollToSection(section.id);
                  setIsMenuOpen(false);
                }}
                className={`w-full flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                  activeSection === section.id
                    ? 'bg-purple-100 text-purple-700'
                    : 'text-gray-700 hover:bg-purple-50 hover:text-purple-600'
                }`}
              >
                {section.icon && <section.icon className="w-4 h-4 mr-2" />}
                {section.title}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Desktop Navigation Pills */}
      <div className="hidden md:block fixed top-20 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-md rounded-full shadow-sm px-4 py-2 z-40">
        <div className="flex space-x-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeSection === section.id
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-600 hover:bg-purple-50 hover:text-purple-600'
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>
      </div>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        {/* Home Section */}
        <section id="home" className="min-h-[calc(100vh-8rem)] flex items-center">
          <div className="w-full grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Hello, I'm Hira Amanat 
                <span className="block mt-2 bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                  Software Engineer, Leader, and Innovator
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Software Engineering student (2021-2025) from UET Lahore, focused on impactful tech solutions. Vice President of ACM UET Lahore, leading community-driven initiatives.
              </p>
              <div className="flex space-x-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Get in Touch
                </button>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors"
                >
                  View Projects
                </button>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center mt-4">
           <img
    src="src\Untitled design (1)_LE_upscale_balanced_x4.jpg"
    alt="Hira Amanat"
    className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-lg ring-4 ring-purple-100"
           />
</div>

          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-purple-600" />
          </div>
        </section>


       {/* Education Section */}
<section id="education" className="py-20">
  <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Education</h2>
  <div className="space-y-6 max-w-4xl mx-auto">
    {[
      {
        degree: 'B.Sc. (Hons.) Software Engineering',
        institute: 'University Of Engineering And Technology (UET) Lahore',
        period: '2021 – 2025',
        description: 'Graduated with a strong foundation in software development, machine learning, and systems design. Completed multiple projects and a final year thesis on EEG-based epileptic seizure prediction.'
      },
      {
        degree: 'Intermediate in Computer Science (ICS)',
        institute: 'Royal College of Science, Narowal',
        period: '2019 – 2021',
        description: 'Achieved 1083 out of 1100 marks (A+ Grade) with specialization in Computer Science, Mathematics, and Physics.'
      }
    ].map((edu, index) => (
      <div
        key={index}
        className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
      >
        <div className="flex items-start gap-4">
          <div className="bg-purple-100 rounded-lg p-3">
            <GraduationCap className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{edu.degree}</h3>
            <p className="text-purple-600 font-medium">{edu.institute}</p>
            <p className="text-gray-500">{edu.period}</p>
            <p className="text-gray-600 mt-2">{edu.description}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>


        {/* Experience Section */}
        <section id="experience" className="py-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Professional Experience</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            {[
              {
                company: 'KICS UET',
                role: 'React Developer Intern',
                period: 'Summer 2024',
                description: 'Developed and maintained React-based web applications. Implemented responsive UI components and integrated RESTful APIs. Collaborated with the development team to optimize application performance.'
              },
              {
                company: 'Apex Space',
                role: 'Mern Stack Developement',
                period: 'Summer 2023',
                description: 'Led development of innovative software solutions, focusing on scalable architecture and modern technologies. Collaborated with cross-functional teams to deliver high-quality code.'
              },
              {
                company: 'CodSoft',
                role: 'Development Intern',
                period: 'Fall 2023',
                description: 'Developed full-stack applications using React and Node.js. Implemented responsive designs and optimized application performance. Worked on multiple client projects simultaneously.'
              },
              {
                company: 'TechnoHacks',
                role: 'Web Development Intern',
                period: 'Summer 2023',
                description: 'Created responsive web applications with modern frameworks. Worked on UI/UX improvements and implemented best practices. Led a team of junior developers.'
              },
              {
                company: 'CodeAlpha',
                role: 'Machine Learning Intern',
                period: 'Spring 2023',
                description: 'Built scalable software solutions using modern technologies. Participated in code reviews and agile development processes. Implemented new features and fixed bugs.'
              }
            ].map((exp) => (
              <div
                key={exp.company}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 rounded-lg p-3">
                    <Briefcase className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{exp.role}</h3>
                    <p className="text-purple-600 font-medium">{exp.company}</p>
                    <p className="text-gray-500">{exp.period}</p>
                    <p className="text-gray-600 mt-2">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Courses Section */}
        <section id="courses" className="py-20 bg-white rounded-3xl shadow-sm">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Courses & Certifications</h2>
          
          {/* University Courses */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">University Courses</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
              {[
                'Natural Language Processing',
                'Computer Vision & Image Processing',
                'Object-Oriented Programming',
                'Data Structures & Algorithms',
                'Operating Systems',
                'Database Systems',
                'Programming Fundamentals',
                'Software Engineering',
                'Web Technologies',
                'Computer Networks',
                'Software Requirements Engineering',
                'Software Quality Engineering',
                'Software Project Management',
                'Mobile Application Development',
                'Cloud Computing'
              ].map((course) => (
                <div
                  key={course}
                  className="bg-purple-50 rounded-xl p-6 hover:bg-purple-100 transition-colors"
                >
                  <BookOpen className="w-6 h-6 text-purple-600 mb-3" />
                  <p className="font-medium text-gray-800">{course}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto px-4">
              {[
                {
                  title: 'Google AI Essentials',
                  issuer: 'Issued by Coursera',
                  date: '2024'
                },
                {
                  title: 'Basics of Machine Learning',
                  issuer: 'Great Learning',
                  date: '2024'
                },
                {
                  title: 'CertificateOfCompletion_What Is Generative AI',
                  issuer: 'LinkedIn',
                  date: '2024'
                },
                {
                  title: 'College Algebra with Python',
                  issuer: 'freeCodeCamp',
                  date: '2024 Credential ID hira-amanat-cawp'
                },
                {
                  title: 'Copilot in Excel: Supercharge Your Productivity',
                  issuer: 'LinkedIn',
                  date: '2024'
                },
                {
                  title: 'Copilot in Outlook: Maximize Your Workday Efficiency',
                  issuer: 'LinkedIn',
                  date: '2024'
                },
                {
                  title: 'Copilot in PowerPoint: From Prompt to Presentation',
                  issuer: 'LinkedIn',
                  date: '2024'
                },
                {
                  title: 'Copilot in Teams: AI-Powered Collaboration',
                  issuer: 'LinkedIn',
                  date: '2024'
                },
                {
                  title: 'Copilot in Word: Create and Refine Documents with AI',
                  issuer: 'LinkedIn',
                  date: '2024'
                },
                {
                  title: 'Ethics in the Age of Generative AI',
                  issuer: 'LinkedIn',
                  date: '2024'
                },
                {
                  title: 'Introduction to Artificial Intelligence',
                  issuer: 'LinkedIn',
                  date: '2024'
                },
                {
                  title: 'Introduction to Career Skills in Data Analytics',
                  issuer: 'LinkedIn',
                  date: '2024'
                },
                {
                  title: 'Learning Microsoft 365 Copilot',
                  issuer: 'LinkedIn',
                  date: '2024'
                },
                {
                  title: 'Machine Learning with Python',
                  issuer: 'freeCodeCamp',
                  date: '2024'
                },
                {
                  title: 'Microsoft Copilot Learning Path - LinkedIn Learning Certificate of Completion',
                  issuer: 'LinkedIn',
                  date: '2024'
                },
                {
                  title: 'ITech 24',
                  issuer: 'University of Engineering and Technology, Lahore',
                  date: '2024'
                },
                {
                  title: 'Web Developement',
                  issuer: 'TechnoHacks EduTech Official',
                  date: '2023'
                },
                {
                  title: 'Microsoft Learn Student Ambassador',
                  issuer: 'Microsoft Learn Student Ambassador ',
                  date: '2023'
                },
                {
                  title: 'What Is Generative AI?',
                  issuer: 'LinkedIn',
                  date: '2024'
                },
                {
                  title: 'IBM Certified Specialist - Storwize V7000 Technical Solutions V2',
                  issuer: 'edX',
                  date: '2024'
                }
              ].map((cert) => (
                <div
                  key={cert.title}
                  className="bg-purple-50 rounded-xl p-6 hover:bg-purple-100 transition-colors"
                >
                  <Award className="w-6 h-6 text-purple-600 mb-3" />
                  <h4 className="font-semibold text-gray-900">{cert.title}</h4>
                  <p className="text-gray-600">{cert.issuer}</p>
                  <p className="text-purple-600 text-sm">{cert.date}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-white rounded-3xl shadow-sm">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Notable Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
            {[
            {
              title: 'NeuroInsight',
              description: 'Developed an intelligent EEG-based system for epileptic seizure prediction and monitoring using machine learning and real-time data analysis',
              tech: ['Python', 'TensorFlow', 'React.js', 'Flask', 'EEG Processing']
              },
              {
                title: 'Vitality Pulse',
                description: 'Healthcare management system for tracking patient vitals and medical records with real-time monitoring',
                tech: ['HTML', 'CSS', 'JavaScript']
              },
              {
                
                title: 'Currency Converter Web App',
                description: 'Built a responsive web application to convert currencies in real time using a public API, enabling users to calculate exchange values instantly based on input',
                tech: ['HTML', 'CSS', 'JavaScript', 'Fetch API']
              },
              {
                title: 'URL Zenith',
                description: 'Advanced URL shortening service with analytics, custom alias support, and click tracking features',
                tech: ['ReactJs', 'NextJs', 'PostgreSQL']
              },
              {
                title: 'Task Manager',
                description: 'Smart task management system with prioritization and scheduling',
                tech: ['ReactJs', 'Tailwind CSS', 'FastAPI']
              },
              {
                title: 'Chatbot for Punjab Police Khidmat Markaz',
                description: 'A bilingual (Urdu/English) chatbot application for Punjab Police Khidmat Markaz that provides information about police services using AI-powered responses',
                tech: ['Python', 'Dialogflow', 'Flask', 'HTML/CSS', 'JavaScript']
              },
              {
                title: 'Mini Operating System',
                description: 'Developed a simplified operating system demonstrating core OS concepts including process management and scheduling',
                tech: ['C++', 'Assembly', 'OS Concepts']
              },
              {
                title: 'Food-Waste-Management',
                description: 'Developed a web-based system to track, manage, and reduce food waste by connecting donors with food collection centers and needy communities in real time',
                tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Bootstrap']
              },
              {
                title: 'Portfolio Website',
                description: 'Modern personal portfolio showcasing projects and professional experience with responsive design',
                tech: ['React', 'Tailwind CSS', 'TypeScript']
              },
              {
                title: 'Exam Management System',
                description: 'Designed and developed a secure, scalable exam automation system with role-based access control, room allocation, batch scheduling, and attendance exports for academic institutions',
                tech: ['ASP.NET Core', 'Entity Framework Core', 'C#', 'SQL Server', 'Tailwind CSS', 'Bootstrap', 'JavaScript']
              },
              {
                title: 'Invoice Management System (CVIP Project)',
                description: 'Built a system using image processing and OCR to extract, organize, and manage invoice data efficiently from scanned documents and images',
                tech: ['Python', 'OpenCV', 'Tesseract OCR', 'NumPy', 'Pandas']
              },
              {
                title: 'Temperature Converter WebApp',
                description: 'Developed a responsive web application to convert temperatures between Celsius, Fahrenheit, and Kelvin with real-time unit conversion and clean UI',
                tech: ['HTML', 'CSS', 'JavaScript']
              },
              {
                title: 'Graphing Calculator',
                description: 'Built a multi-functional graphing calculator in Python using Google Colab to plot functions, solve systems of equations, generate (x, y) tables, and visualize quadratic solutions with interactive graphs',
                tech: ['Python', 'Matplotlib', 'NumPy', 'Google Colaboratory']
              },
              {
                 title: 'Interactive Multi-Function Calculator',
                 description: 'Created a Python-based interactive calculator capable of solving proportions, linear equations, factoring square roots, and converting between decimals, fractions, and percents',
                 tech: ['Python']
               },
               {
                 title: 'Neural Network SMS Text Classifier',
                 description: 'Built a machine learning model using Naive Bayes to classify SMS messages as spam or ham, leveraging text preprocessing and the SMS Spam Collection dataset',
                 tech: ['Python', 'Scikit-learn', 'Pandas', 'NLP', 'Jupyter Notebook']
               },
               {
                 title: 'Healthcare Cost Prediction',
                 description: 'Developed a linear regression model to predict individual medical charges using features like age, BMI, smoking status, and region from the Kaggle Medical Cost dataset',
                 tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn']
                },
                {
                  title: 'Travel Booking System',
                  description: 'Developed a full-stack travel booking platform with user authentication, real-time search, reservation handling, and optional payment integration using a structured database and modern web technologies',
                  tech: ['HTML', 'CSS', 'JavaScript', 'Node.js/PHP', 'MySQL', 'API Integration', 'GitHub']
                },
                {
                  title: 'Music Recommendation System',
                  description: 'Built a machine learning-based system inspired by Spotify to predict repeated song plays using user listening history and timestamps, generating personalized music recommendations',
                  tech: ['Python', 'Pandas', 'Scikit-learn', 'NumPy', 'Matplotlib']
                }


            ].map((project) => (
              <div
                key={project.title}
                className="bg-purple-50 rounded-xl p-6 hover:bg-purple-100 transition-colors"
              >
                <FolderGit2 className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-purple-200 text-purple-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Activities Section */}
        <section id="activities" className="py-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Leadership & Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                role: 'Class Representative (CR) - Final Year',
                description: 'Leading and representing the final year software engineering class. Coordinating between faculty and students, organizing academic activities, and managing class affairs.'
              },
              {
                role: 'Microsoft Learn Student Ambassador',
                description: 'Organizing technical workshops and representing Microsoft in campus events. Leading initiatives to promote cloud technologies and student engagement.'
              },
              {
                role: 'Co-Lead Web Developer at GDSC',
                description: 'Leading web development initiatives, mentoring team members, and organizing coding workshops for students. Managing multiple web projects simultaneously.'
              },
              {
                role: 'Secretary Communication at TEDx UET Lahore',
                description: 'Managing communications, coordinating with speakers, and organizing successful TEDx events. Leading a team of volunteers.'
              },
              {
                role: 'Vice President at ACM UET Lahore',
                description: 'Leading technical initiatives, organizing workshops, and fostering a vibrant tech community on campus. Managing executive committee and event planning.'
              },
              {
                role: 'Open Source Contributor',
                description: 'Contributing to various open source projects, particularly in web development and machine learning domains. Collaborating with global developer communities.'
              },
             {
               role: 'Campus Ambassador',
               description: 'Represented MT BYTES LIMITED as a Campus Ambassador, promoting company initiatives, engaging students through events and campaigns, and strengthening industry-academia collaboration.'
              },
              {
               role: 'AI & ML Trainee – NAVTTC/UET Lahore',
               description: 'Completed a 3-month hands-on training on Artificial Intelligence and Machine Learning through NAVTTC at UET Lahore. Gained practical experience in model building, data preprocessing, and real-time applications.'
              }
            
            ].map((activity) => (
              <div
                key={activity.role}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <Activity className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{activity.role}</h3>
                <p className="text-gray-600">{activity.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="bg-white rounded-3xl shadow-sm p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Get in Touch</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-600 mb-6">
                  I'm always interested in hearing about new opportunities, 
                  collaborations, or just having a chat about technology.
                </p>
                <div className="space-y-4">
                  <a
                    href="mailto:hiraamanat99@gmail.com"
                    className="flex items-center gap-3 text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    hiraamanatali19@gmail.com
                  </a>
                  <a
                    href="https://www.linkedin.com/in/hira-amanat-800104245/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    LinkedIn Profile
                  </a>
                  <a
                    href="https://github.com/iAmHira19"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    GitHub Portfolio
                  </a>
                  <a
                    href="https://x.com/HiraAmanat1919"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                    Twitter Profile
                  </a>
                </div>
              </div>
              <div className="bg-purple-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Hobbies & Interests</h3>
                <div className="space-y-4">
                  {[
                    {
                      title: 'Reading',
                      description: 'Exploring new worlds through books and technical literature'
                    },
                    {
                      title: 'Development',
                      description: 'Building side projects and learning new technologies'
                    },
                    {
                      title: 'Community',
                      description: 'Contributing to tech communities and mentoring others'
                    }
                  ].map((hobby) => (
                    <div key={hobby.title} className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-purple-600 mt-1" />
                      <div>
                        <h4 className="font-medium text-gray-900">{hobby.title}</h4>
                        <p className="text-gray-600">{hobby.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      {/* Footer */}
<footer className="bg-white mt-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div className="flex flex-col md:flex-row justify-between items-center">
      <p className="text-gray-600">
        © {new Date().getFullYear()} Hira Amanat. All rights reserved.
      </p>
      <div className="flex space-x-6 mt-4 md:mt-0">
        {/* Email */}
        <a
          href="mailto:hiraamanatali19@gmail.com"
          className="text-gray-600 hover:text-purple-600 transition-colors"
          aria-label="Email"
        >
          <Mail className="w-5 h-5" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/hira-amanat-800104245/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-purple-600 transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-5 h-5" />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/iAmHira19"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-purple-600 transition-colors"
          aria-label="GitHub"
        >
          <Github className="w-5 h-5" />
        </a>

        {/* Twitter / X */}
        <a
          href="https://x.com/HiraAmanat1919"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-purple-600 transition-colors"
          aria-label="Twitter"
        >
          <Twitter className="w-5 h-5" />
        </a>
      </div>
    </div>
  </div>
</footer>

    </div>
  );
}

export default App;