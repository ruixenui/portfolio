"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";
import { CloudIcon, DatabaseIcon, Code2Icon, ServerIcon, BoxIcon, TerminalIcon, GaugeIcon, LayoutIcon, CodeIcon, CircuitBoardIcon, PackageIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

// Category icons and skill icons
const categoryIcons: Record<string, React.ReactNode> = {
  "AI Research": <CloudIcon className="h-5 w-5 text-primary" />,
  "MLOps & Deployment": <ServerIcon className="h-5 w-5 text-primary" />,
  "Data Engineering": <DatabaseIcon className="h-5 w-5 text-primary" />,
  "Frontend & APIs": <LayoutIcon className="h-5 w-5 text-primary" />,
  "Vector Search": <BoxIcon className="h-5 w-5 text-primary" />,
  "Languages": <Code2Icon className="h-5 w-5 text-primary" />,
  "Cloud & Infra": <CloudIcon className="h-5 w-5 text-primary" />,
  "Other": <TerminalIcon className="h-5 w-5 text-primary" />,
};

// Skill icon function
const getSkillIcon = (skill: string): React.ReactNode => {
  const lowerSkill = skill.toLowerCase();
  if (lowerSkill.includes("pytorch") || lowerSkill.includes("transformers")) return <CircuitBoardIcon className="h-3.5 w-3.5" />;
  if (lowerSkill.includes("fastapi") || lowerSkill.includes("flask")) return <PackageIcon className="h-3.5 w-3.5" />;
  if (lowerSkill.includes("docker") || lowerSkill.includes("kubernetes")) return <BoxIcon className="h-3.5 w-3.5" />;
  if (lowerSkill.includes("cloud") || lowerSkill.includes("aws")) return <CloudIcon className="h-3.5 w-3.5" />;
  if (lowerSkill.includes("sql") || lowerSkill.includes("mongo")) return <DatabaseIcon className="h-3.5 w-3.5" />;
  if (lowerSkill.includes("python")) return <TerminalIcon className="h-3.5 w-3.5" />;
  if (lowerSkill.includes("react") || lowerSkill.includes("next")) return <CodeIcon className="h-3.5 w-3.5" />;
  if (lowerSkill.includes("langchain") || lowerSkill.includes("api")) return <ServerIcon className="h-3.5 w-3.5" />;
  return <GaugeIcon className="h-3.5 w-3.5" />;
};

interface SkillCategoryProps {
  name: string;
  skills: readonly string[];
  icon?: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
  count: number;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ name, skills, icon, isActive, onClick, count }) => (
  <div
    onClick={onClick}
    className={cn(
      "flex flex-col items-center gap-1 p-3 cursor-pointer",
      isActive ? "bg-primary text-white rounded-xl shadow-md" : "bg-muted hover:bg-muted/80"
    )}
  >
    <div className="flex items-center gap-2">{icon && icon}</div>
    <span className="text-sm">{name}</span>
    <span
      className={cn(
        "rounded-full text-xs w-5 h-5 flex items-center justify-center",
        isActive ? "bg-white text-primary" : "bg-background text-muted-foreground"
      )}
    >
      {count}
    </span>
  </div>
);

interface InteractiveSkillsProps {
  skills: Record<string, readonly string[]>;
}

export const InteractiveSkills: React.FC<InteractiveSkillsProps> = ({ skills }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Object.keys(skills);
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  const currentSkills = selectedCategory ? skills[selectedCategory] : categories.flatMap(cat => skills[cat]);

  return (
    <div className="space-y-6">
      {/* Tabs for categories */}
      <Tabs defaultValue="all" className="flex flex-wrap gap-4 mb-4 justify-start">
        <TabsList>
          <TabsTrigger value="all" onClick={() => setSelectedCategory(null)}>
            All Skills
          </TabsTrigger>
          {categories.map((category) => (
            <TabsTrigger key={category} value={category} onClick={() => handleCategoryClick(category)}>
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Content for each category */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory || 'all'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-wrap items-center justify-center mx-auto gap-3 mt-4"
          >
            {currentSkills.map((skill, index) => (
              <motion.div
                key={`${skill}-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ delay: index * 0.03, duration: 0.2 }}
              >
                <Badge
                  variant="secondary"
                  className="py-1 px-2 text-sm cursor-pointer rounded-xl bg-gray-100 flex items-center gap-2"
                >
                  {getSkillIcon(skill)}
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </Tabs>
    </div>
  );
};
