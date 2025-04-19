
import React from 'react';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

const Navigation = () => {
  const scrollToSection = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuItems = [
    { label: "About", sectionId: "objective" },
    { label: "Skills", sectionId: "skills" },
    { label: "Education", sectionId: "education" },
    { label: "Projects", sectionId: "projects" },
    { label: "Contact", sectionId: "contact" }
  ];

  return (
    <NavigationMenu className="max-w-full w-full justify-end">
      <NavigationMenuList>
        {menuItems.map((item) => (
          <NavigationMenuItem key={item.label}>
            <NavigationMenuLink 
              className={navigationMenuTriggerStyle() + " text-black hover:text-gray-700"} 
              href={`#${item.sectionId}`}
              onClick={scrollToSection(item.sectionId)}
            >
              {item.label}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navigation;
