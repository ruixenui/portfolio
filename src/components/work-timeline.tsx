"use client";

import React from "react";
import { AnimatePresence } from "framer-motion";
import { ExperienceTimelineItem } from "./ruixen/experience-time-line-item";

interface WorkTimelineProps {
  experiences: readonly WorkExperience[] | WorkExperience[];
}

export const WorkTimeline: React.FC<WorkTimelineProps> = ({ experiences }) => {

  const visibleExperiences = experiences;

  return (
    <div className="mt-6">
      <AnimatePresence>
        {visibleExperiences.map((work, index) => (
          <ExperienceTimelineItem
            key={`${work.company}-${work.start}`}
            work={work}
            index={index}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};
