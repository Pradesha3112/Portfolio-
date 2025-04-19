
import React from 'react';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

const Navigation = () => (
  <NavigationMenu className="max-w-full w-full justify-end">
    <NavigationMenuList>
      {["About", "Skills", "Education", "Projects", "Contact"].map((item) => (
        <NavigationMenuItem key={item}>
          <NavigationMenuLink 
            className={navigationMenuTriggerStyle() + " text-black hover:text-gray-700"} 
            href={`#${item.toLowerCase()}`}
          >
            {item}
          </NavigationMenuLink>
        </NavigationMenuItem>
      ))}
    </NavigationMenuList>
  </NavigationMenu>
);

export default Navigation;
