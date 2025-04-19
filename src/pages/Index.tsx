import { Mail, Linkedin, Github, Code, BookOpen, Award, School, Calendar, Briefcase, QrCode } from "lucide-react";
import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">PRADESHA S</h1>
          <h2 className="text-2xl md:text-3xl mb-6">ASPIRING PYTHON DEVELOPER</h2>
          <div className="flex gap-4">
            <a href="mailto:pradesha3112@gmail.com" className="flex items-center gap-2 hover:text-blue-200 transition-colors">
              <Mail size={20} /> Email
            </a>
            <a href="https://www.linkedin.com/in/pradesha" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-200 transition-colors">
              <Linkedin size={20} /> LinkedIn
            </a>
            <a href="https://github.com/Pradesha3112" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-200 transition-colors">
              <Github size={20} /> Github
            </a>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Objective Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Briefcase className="text-blue-600" /> OBJECTIVE
          </h2>
          <Card className="p-6">
            <p className="text-gray-700">
              Aspiring Python Developer with expertise in programming, software development, and analytics. 
              Proficient in Python, with practical experience in academic projects, internships, and certifications. 
              Adept at delivering innovative solutions with a commitment to continuous learning.
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
              <p>Python, C</p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-2">Frameworks</h3>
              <p>Pandas, NumPy, Matplotlib</p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-2">Tools</h3>
              <p>Canva, Git, Github</p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-2">Platforms</h3>
              <p>Jupyter Notebook, Visual Studio Code</p>
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
              <p className="text-blue-600">CGPA: 8.22</p>
            </Card>
            <Card className="p-6">
              <div className="flex items-center gap-2 text-blue-600 mb-2">
                <Calendar size={16} />
                <span>June 2021 - May 2023</span>
              </div>
              <h3 className="font-semibold text-lg mb-1">Rajan Matric Higher Secondary School</h3>
              <p className="mb-2">Computer Science - Mathematics</p>
              <p className="text-blue-600">Percentage: 87.3%</p>
            </Card>
          </div>
        </section>

        {/* Training Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <BookOpen className="text-blue-600" /> TRAINING
          </h2>
          <Card className="p-6">
            <div className="flex items-center gap-2 text-blue-600 mb-2">
              <Calendar size={16} />
              <span>January 20, 2025 – February 3, 2025</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Quantanics Techserv PVT LTD</h3>
            <h4 className="font-medium mb-2">Python and OpenCV</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Applied Python and OpenCV to practical application in computer vision.</li>
              <li>Demonstrated a proactive approach to problem-solving and a keen interest in learning.</li>
            </ul>
          </Card>
        </section>

        {/* Certifications Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Award className="text-blue-600" /> CERTIFICATIONS
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="font-semibold mb-2">NPTEL</h3>
              <p>Python for Data Science (75%)</p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-2">SRMIST</h3>
              <p>Data Science Tools for AI Application, Object Oriented Programming in Python</p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-2">Internshala</h3>
              <p>Placement Training (96%)</p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-2">Coursera</h3>
              <p>Introduction to MS Excel</p>
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
              <p className="text-gray-700 mb-2">
                A web application that generates QR codes dynamically for various types of content.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/Pradesha2005/QRCODE-GENRATOR" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:underline"
                >
                  GitHub Repository
                </a>
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
              <h3 className="font-semibold text-lg mb-2">TEXT CONVERTER</h3>
              <p className="text-gray-700 mb-2">Convert text or uploaded text file into downloadable PDF or Word file via a simple interface.</p>
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
          </div>
        </section>

        {/* Achievements Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Award className="text-blue-600" /> ACHIEVEMENTS
          </h2>
          <Card className="p-6">
            <p>1st prize, Intra college Science fair – Motion Tracking Project (Quantanics Training)</p>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center gap-6">
            <a href="mailto:pradesha3112@gmail.com" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Mail size={20} />
              <span>pradesha3112@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/pradesha" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/Pradesha3112" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Github size={20} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
