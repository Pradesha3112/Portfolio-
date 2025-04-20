import { Mail, Linkedin, Github, Code, BookOpen, Award, School, Calendar, Briefcase, QrCode } from "lucide-react";
import { Card } from "@/components/ui/card";
import Logo from "@/components/Logo";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import ProjectDialog from "@/components/ProjectDialog";
import { Badge } from "@/components/ui/badge";
import { projectsData } from "@/data/projects";

const Index = () => {
  return (
    <div className="min-h-screen text-custom-text border-8 border-[#FFA500]/50 rounded-3xl max-w-screen-xl mx-auto p-2 shadow-lg">
      {/* Hero Section with Navigation */}
      <header className="relative">
        <div className="container mx-auto px-4 pt-6">
          <Navigation />
          <div className="flex flex-col md:flex-row items-center justify-between py-20 gap-8">
            <div className="text-custom-text space-y-6 max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                Hi, I'm <span className="text-black">Pradesha S</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-800">
                Aspiring Python Developer | Creative UI/UX Enthusiast
              </h2>
              <p className="text-gray-900 text-lg">
                Passionate about building smart, data-driven solutions with Python. 
                I enjoy turning ideas into real-world projects — crafting user-friendly 
                websites with both code and intuitive no-code tools.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" className="text-black border-black hover:bg-black/10" asChild>
                  <a href="#projects">View Projects</a>
                </Button>
                <Button className="bg-[#FFA500] text-white hover:bg-[#FFA500]/90" asChild>
                  <a href="#contact">Contact Me</a>
                </Button>
              </div>
            </div>
            <div className="flex-shrink-0">
              <Logo />
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 space-y-24 text-custom-text">
        {/* Objective Section */}
        <section id="objective" className="mb-12">
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
        <section id="skills" className="mb-12">
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
              <p>Strong analytical skills, report writing, Content Writing, Creative Writing, Blog Writing, basic UI/UX design</p>
            </Card>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="mb-12">
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

        {/* Training & Workshops Section */}
        <section id="training" className="mb-12">
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

            {/* Academic Engagement Subsection */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <School className="text-blue-600" /> Academic Engagement
              </h3>
              <div className="space-y-4">
                <Card className="p-6">
                  <h4 className="font-semibold text-lg mb-2">Workshop on Generative AI and Machine Learning</h4>
                  <p className="mb-2 text-gray-900">Kalasalingam Academy of Research and Education</p>
                  <p className="text-gray-700">• Gained hands-on experience and insights into Generative AI models and real-world ML applications.</p>
                </Card>
                <Card className="p-6">
                  <h4 className="font-semibold text-lg mb-2">Technical Symposium – Techutserv</h4>
                  <p className="mb-2 text-gray-900">Thiyagarajar College of Engineering, Madurai</p>
                  <p className="text-gray-700">• Engaged in events and technical sessions focused on emerging trends in software development and data science.</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Code className="text-blue-600" /> PROJECTS
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projectsData.map((project) => (
              <ProjectDialog key={project.id} project={project}>
                <Card className="p-6 cursor-pointer hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    {project.id === "qrcode-generator" && <QrCode className="text-blue-600" />}
                    {project.title}
                  </h3>
                  <p className="text-gray-700 mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tools.map((tool, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                  <Button size="sm" className="mt-2">View Details</Button>
                </Card>
              </ProjectDialog>
            ))}
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="mb-12">
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

      {/* Footer with Contact Section */}
      <footer id="contact" className="bg-gray-900 py-12">
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
