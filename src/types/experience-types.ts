interface WorkExperience {
    company: string;
    title: string;
    description: string;
    start: string;
    end?: string;
    link: string;
    badges: readonly string[] | string[];
    star_tag?: readonly string[] | string[];
  }
  