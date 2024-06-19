import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { AdoIllLogo } from "./icons/AdoIllLogo";
import { AdophoLogo } from "./icons/AdophoLogo";
import { PythonLogo } from "./icons/PythonLogo";
import { ReactLogo } from "./icons/ReactLogo";

export const Skills = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant={"outline"}>Skills developed</Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Pour ma passion, Je sais travailler avec ...
      </h2>
      <div className="flex max-md:flex-col gap-4">
        <div className="flex flex-col gap-2">
          <ReactLogo
            size={42}
            className="animate-spin"
            style={{ animationDuration: "10s" }}
          />

          <h3 className="text-2xl font-semibold tracking-tight mb-3">React</h3>
          <p className="text-sm text-muted-foreground">
            Grâce à React, il est facile de créer des interfaces utilisateurs
            interactives.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <PythonLogo size={42} />
          <h3 className="text-2xl font-semibold tracking-tight mb-3">Python</h3>
          <p className="text-sm text-muted-foreground">
            il me permet de développer des logiciels bureautiques et des
            applications web, notamment.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <AdophoLogo size={42} />
          <h3 className="text-2xl font-semibold tracking-tight mb-3">
            Adobe Photoshop
          </h3>
          <p className="text-sm text-muted-foreground">
            il me permet de faire de les retouches photos, du graphisme ou
            encore du webdesign.
          </p>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <AdoIllLogo size={42} />

          <h3 className="text-2xl font-semibold tracking-tight mb-3">
            Adobe Illustrator
          </h3>
          <p className="text-sm text-muted-foreground">
            il est utilisé en complément ou indépendamment de Photoshop, cet
            outil est à la fois adapté à la création de documents destinés à
            l&apos;impression.
          </p>
        </div>
      </div>
    </Section>
  );
};
