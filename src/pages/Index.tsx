import { Mail, Linkedin, Github, Code, BookOpen, Award, School, Calendar, Briefcase, QrCode } from "lucide-react";
import { Card } from "@/components/ui/card";
import Logo from "@/components/Logo";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#F1F0FB]">
      {/* Hero Section with Navigation */}
      <header className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90" />
        <div className="relative container mx-auto px-4 pt-6">
          <Navigation />
          <div className="flex flex-col md:flex-row items-center justify-between py-20 gap-8">
            <div className="text-white space-y-6 max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                Hi, I'm <span className="text-blue-300">PRADESHA S</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-200">
                Aspiring Python Developer
              </h2>
              <p className="text-gray-300 text-lg">
                Passionate about data science, AI, and automation. Building efficient and scalable solutions in dynamic environments.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" className="text-white border-white hover:bg-white/10" asChild>
                  <a href="#contact">Contact Me</a>
                </Button>
                <Button className="bg-blue-500 hover:bg-blue-600" asChild>
                  <a href="#projects">View Projects</a>
                </Button>
              </div>
            </div>
            <div className="flex-shrink-0">
              <Logo />
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 space-y-24">
        {/* Objective Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Briefcase className="text-blue-600" /> OBJECTIVE
          </h2>
          <Card className="p-6">
            <p className="text-gray-700">
              Motivated and detail-oriented Python Developer with hands-on experience in building real-world applications. 
              Passionate about data science, AI, and automation. Demonstrates strong problem-solving skills, 
              a keen interest in continuous learning, and the ability to work both independently and in a team. 
              Looking to leverage technical knowledge to build efficient and scalable solutions in dynamic environments.
            </p>
          </Card>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Code className="text-blue-600" /> SKILLS
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="font-semibold mb-2">Languages</h3>
              <p>Python, C, Java (basic)</p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-2">Libraries/Frameworks</h3>
              <p>Pandas, NumPy, Matplotlib, OpenCV</p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-2">Tools</h3>
              <p>Git, GitHub, Canva, MS Excel, PowerPoint</p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-2">Platforms</h3>
              <p>Jupyter Notebook, Visual Studio Code, Google Colab</p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-2">Other Skills</h3>
              <p>Strong analytical skills, report writing, version control, basic UI/UX design</p>
            </Card>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <School className="text-blue-600" /> EDUCATION
          </h2>
          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-center gap-2 text-blue-600 mb-2">
                <Calendar size={16} />
                <span>August 2023 - May 2027</span>
              </div>
              <h3 className="font-semibold text-lg mb-1">SRM Madurai College of Engineering and Technology</h3>
              <p className="mb-2">Bachelor of Technology in Information Technology</p>
              <p className="text-blue-600 mb-2">CGPA: 8.22</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Courses: Data Structures, Algorithms, Object-Oriented Programming, Data Science, Database Management</li>
                <li>Participated in technical symposiums and coding challenges</li>
              </ul>
            </Card>
            <Card className="p-6">
              <div className="flex items-center gap-2 text-blue-600 mb-2">
                <Calendar size={16} />
                <span>June 2021 - May 2023</span>
              </div>
              <h3 className="font-semibold text-lg mb-1">Rajan Matric Higher Secondary School</h3>
              <p className="mb-2">Computer Science - Mathematics</p>
              <p className="text-blue-600 mb-2">Percentage: 87.3%</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Developed logical reasoning and computational thinking</li>
                <li>Achieved high scores in computer science and mathematics subjects</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Training Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <BookOpen className="text-blue-600" /> TRAINING & WORKSHOPS
          </h2>
          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-center gap-2 text-blue-600 mb-2">
                <Calendar size={16} />
                <span>January 20, 2025 – February 3, 2025</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Quantanics Techserv PVT LTD - Python & OpenCV Intern</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Built image-processing programs to detect motion and extract object boundaries</li>
                <li>Explored basic machine vision tasks including face and eye detection</li>
                <li>Learned the integration of NumPy with OpenCV for advanced array manipulations</li>
                <li>Collaborated with team members to debug and present final project reports</li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-2">Workshop on Generative AI and Machine Learning</h3>
              <p className="mb-2">Kalasalingam Academy of Research and Education</p>
              <p className="text-gray-700">Gained hands-on experience and insights into Generative AI models and real-world ML applications</p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-2">Technical Symposium – Techutserv</h3>
              <p className="mb-2">Thiyagarajar College of Engineering, Madurai</p>
              <p className="text-gray-700">Engaged in events and technical sessions focused on emerging trends in software development and data science</p>
            </Card>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Award className="text-blue-600" /> CERTIFICATIONS
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="font-semibold mb-2">NPTEL</h3>
              <p className="text-gray-700">Python for Data Science (75%) - Learned data preprocessing, analysis techniques, and hands-on exercises using Pandas and Matplotlib</p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-2">SRM IST</h3>
              <p className="text-gray-700">Object-Oriented Programming in Python & Data Science Tools for AI Application - Applied OOP concepts and gained familiarity with AI tools</p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-2">Internshala</h3>
              <p className="text-gray-700">Placement Training (96%) - Completed modules on group discussion, resume building, communication skills, and mock interviews</p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-2">Coursera</h3>
              <p className="text-gray-700">Introduction to MS Excel - Acquired foundational Excel skills including conditional formatting, charts, data filtering, and formulas</p>
            </Card>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Code className="text-blue-600" /> PROJECTS
          </h2>
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <QrCode className="text-blue-600" /> QR CODE GENERATOR
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Built a Python-based QR code generator using qrcode and Tkinter libraries</li>
                <li>Allowed users to input text, URLs, email IDs, or upload images and convert them into QR codes</li>
                <li>Enabled real-time QR code preview and download functionality</li>
                <li>Useful for digital visiting cards, website links, and product tagging</li>
              </ul>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/Pradesha2005/QRCODE-GENRATOR" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:underline"
                >
                  GitHub Repository
                </a>
              </div>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-2">TEXT CONVERTER</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Created a user-friendly GUI with Tkinter for text-to-document conversion</li>
                <li>Supported .txt file uploads and implemented error handling with pop-up alerts</li>
                <li>Integrated options for font styling, line spacing, and document export</li>
              </ul>
              <div className="flex gap-4">
                <a 
                  href="https://marvelous-stroopwafel-8d90d6.netlify.app" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:underline"
                >
                  Live Demo
                </a>
              </div>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-2">TECHNOLOGY BLOG</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Developed and hosted a personal blog using HTML, CSS, and Netlify</li>
                <li>Shared weekly posts on AI, machine learning, cloud computing, and blockchain</li>
                <li>Designed for mobile responsiveness and fast loading times</li>
              </ul>
              <div className="flex gap-4">
                <a 
                  href="https://quiet-panda-84ed62.netlify.app" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:underline"
                >
                  Visit Blog
                </a>
              </div>
            </Card>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Award className="text-blue-600" /> ACHIEVEMENTS
          </h2>
          <Card className="p-6">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>1st Prize, Intra-College Science Fair for "Motion Tracking Project" under Quantanics training</li>
              <li>Participated in hackathons and workshops on AI, Data Science, and Python programming</li>
              <li>Contributed to GitHub repositories and collaborated on team coding challenges</li>
              <li>Actively maintained a tech blog and showcased project portfolios on GitHub and LinkedIn</li>
            </ul>
          </Card>
        </section>
      </main>

      {/* Footer with updated styling */}
      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Logo />
            <div className="flex gap-6">
              <a href="mailto:pradesha3112@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={24} />
              </a>
              <a href="https://www.linkedin.com/in/pradesha" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/Pradesha3112" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
