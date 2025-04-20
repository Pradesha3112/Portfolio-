
import React from "react";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Download, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";

export interface ProjectDetails {
  id: string;
  title: string;
  type: string;
  tools: string[];
  description: string;
  skills: string[];
  images: string[];
  learnings: string;
  links?: {
    live?: string;
    github?: string;
    download?: string;
  };
  feedback?: string;
  date?: string;
  tags?: string[];
}

interface ProjectDialogProps {
  project: ProjectDetails;
  children: React.ReactNode;
}

const ProjectDialog = ({ project, children }: ProjectDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{project.title}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          {/* Project Type & Tools */}
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="bg-gray-100 text-gray-800">
              {project.type}
            </Badge>
            {project.tools.map((tool, index) => (
              <Badge key={index} variant="secondary">
                {tool}
              </Badge>
            ))}
          </div>

          {/* Date if available */}
          {project.date && (
            <div className="flex items-center gap-2 text-blue-600 text-sm">
              <Calendar size={16} />
              <span>{project.date}</span>
            </div>
          )}

          {/* Project Description */}
          <div>
            <h3 className="text-lg font-semibold mb-2">About this project</h3>
            <p className="text-gray-700">{project.description}</p>
          </div>

          {/* Skills Demonstrated */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Skills Demonstrated</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {project.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>

          {/* Project Images */}
          {project.images.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Preview</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.images.map((image, index) => (
                  <Card key={index} className="overflow-hidden">
                    <img 
                      src={image} 
                      alt={`${project.title} screenshot ${index + 1}`} 
                      className="w-full h-auto object-cover cursor-pointer"
                      onClick={() => window.open(image, '_blank')}
                    />
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* What You Learned */}
          <div>
            <h3 className="text-lg font-semibold mb-2">What I Learned</h3>
            <p className="text-gray-700">{project.learnings}</p>
          </div>

          {/* Feedback if available */}
          {project.feedback && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Feedback</h3>
              <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700">
                "{project.feedback}"
              </blockquote>
            </div>
          )}

          {/* Tags if available */}
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="text-sm">
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            {project.links?.live && (
              <Button variant="outline" className="gap-2" onClick={() => window.open(project.links?.live, '_blank')} asChild>
                <a target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} />
                  View Live
                </a>
              </Button>
            )}
            {project.links?.github && (
              <Button variant="outline" className="gap-2" asChild>
                <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} />
                  GitHub Repo
                </a>
              </Button>
            )}
            {project.links?.download && (
              <Button className="gap-2 bg-[#FFA500] text-white hover:bg-[#FFA500]/90" asChild>
                <a href={project.links.download} target="_blank" rel="noopener noreferrer">
                  <Download size={16} />
                  Download
                </a>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDialog;
