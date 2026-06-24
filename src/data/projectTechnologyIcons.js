import { Braces, Smartphone } from "lucide-react";

import reactIcon from "@/assets/images/logos/react.svg";
import tailwindIcon from "@/assets/images/logos/tailwind.svg";
import firebaseIcon from "@/assets/images/logos/firebase.svg";
import nodeIcon from "@/assets/images/logos/nodejs.svg";
import javascriptIcon from "@/assets/images/logos/javascript.svg";
import viteIcon from "@/assets/images/logos/vite.svg";

import { ExpressIcon } from "@/components/ui/icons";

export const projectTechnologyIcons = {
  React: {
    type: "image",
    source: reactIcon,
  },
  "React Native": {
    type: "image",
    source: reactIcon,
  },
  "Tailwind CSS": {
    type: "image",
    source: tailwindIcon,
  },
  Firebase: {
    type: "image",
    source: firebaseIcon,
  },
  Express: {
    type: "component",
    source: ExpressIcon,
  },
  "Node.js": {
    type: "image",
    source: nodeIcon,
  },
  JavaScript: {
    type: "image",
    source: javascriptIcon,
  },
  Vite: {
    type: "image",
    source: viteIcon,
  },
  Expo: {
    type: "component",
    source: Smartphone,
  },
  "REST API": {
    type: "component",
    source: Braces,
  },
};