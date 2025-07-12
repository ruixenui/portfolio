"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { MailIcon } from "lucide-react";
import { motion } from "framer-motion";

export function AuthorInfo() {
  return (
    <Card className="overflow-hidden border border-muted mt-8 mb-8">
      <CardHeader className="p-6">
        <div className="flex items-center gap-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Avatar className="size-16 md:size-20 border-2 border-primary/20">
              <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
              <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
            </Avatar>
          </motion.div>
          
          <div>
            <h3 className="text-lg font-semibold">{RESUME_DATA.name}</h3>
            <p className="text-sm text-muted-foreground">{RESUME_DATA.about}</p>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-6 pt-0">
        <p className="text-sm text-muted-foreground mb-4">
          {RESUME_DATA.summary}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {RESUME_DATA.contact.email ? (
            <Button
              className="size-9"
              variant="outline"
              size="icon"
              asChild
            >
              <a href={`mailto:${RESUME_DATA.contact.email}`} title="Email">
                <MailIcon className="size-4" />
              </a>
            </Button>
          ) : null}
          {RESUME_DATA.contact.social.map((social) => (
            <Button
              key={social.name}
              className="size-9"
              variant="outline"
              size="icon"
              asChild
              title={social.name}
            >
              <a href={social.url} target="_blank" rel="noopener noreferrer">
                <social.icon className="size-4" />
              </a>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}