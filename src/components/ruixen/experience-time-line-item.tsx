"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon, BriefcaseIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { companyLogos } from "@/data/experience-data";

interface ExperienceTimelineItemProps {
  work: WorkExperience;
  index: number;
}

export const ExperienceTimelineItem: React.FC<ExperienceTimelineItemProps> = ({
  work,
  index,
}) => {
  const logoSrc = companyLogos[work.company];

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ delay: index * 0.1 }}
    >


      <div className="group flex gap-4">
        {/* Timeline icon or logo */}
        <div className="relative z-10 flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-muted bg-background shadow-md">
          {logoSrc ? (
            <Image
              src={logoSrc}
              alt={`${work.company} logo`}
              fill
              className="object-cover p-1"
            />
          ) : (
            <BriefcaseIcon className="h-5 w-5 text-primary/80 transition-colors duration-300 group-hover:text-primary" />
          )}
        </div>

        {/* Content */}
        <div className="flex-1 pb-2">

          <div className="rounded-lg border border-muted bg-card p-4 shadow-sm transition-all duration-300 hover:bg-card/95 hover:shadow group-hover:border-muted/80">
            <div className="mb-1 flex flex-col justify-between gap-2 md:flex-row md:items-center">
              <div className="flex items-center gap-2">
                <h3 className="text-base font-medium">
                  <Link
                    href={work.link}
                    className="transition-colors duration-300 hover:text-primary"
                  >
                    {work.company}
                  </Link>
                </h3>
                {work.star_tag && <Badge className="bg-blue-100 text-[10px] text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  {work.star_tag}
                </Badge>
                }
              </div>
              <div className="text-sm tabular-nums text-muted-foreground">
                {work.start} - {work.end ?? "Present"}
              </div>
            </div>

            <div className="mb-2 flex flex-wrap gap-1">
              <span className=" text-sm font-medium text-gray-700">
                {work.title}
              </span>
              <div className="flex-1" />
              {work.badges.map((badge) => (
                <Badge key={badge} variant="outline" className="text-xs">
                  {badge}
                </Badge>
              ))}
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              {work.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
