import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Section } from "./Section";
import { Githubicon } from "./icons/Githubicon";
import { Linkedinicon } from "./icons/Linkedinicon";

export const Header = () => {
  return (
    <header className="sticky top-0 py-4">
      <Section className="flex items-baseline">
        <h1 className="text-3xl font-bold text-primary-foreground">
          <span className="text-indigo-600">FranckMarcelinEKOUM@hotmail</span>
          <span className="text-gray-900">.com</span>
        </h1>
        <div className="flex-1" />
        <ul className="flex items-center gap-2">
          <Link
            href="https://github.com/FranckMarcelinEKOUM"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <Githubicon size={16} className="text-foreground" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/franck-marcelin-e-631abab2/"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <Linkedinicon size={16} className="text-foreground" />
          </Link>
        </ul>
      </Section>
    </header>
  );
};
