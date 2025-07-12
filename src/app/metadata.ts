import { RESUME_DATA } from "@/data/resume-data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
};