"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ComponentPropsWithoutRef } from "react";
import { Section } from "./Section";

const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
  return (
    <span
      className={cn("bg-accent/30 border-accent p-1 -m-1", className)}
      {...props}
    />
  );
};

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-start">
      <div className="flex-[3] w-full flex flex-col gap-2">
        <h2 className="font-caption text-4xl text-primary text-center">
          EKOUM FRANCK MARCELIN
        </h2>
        <h3 className="text-2xl font-caption text-center">
          <u>Technicien d&apos;exploitation industriel</u>
        </h3>
        <br />
        <p>
          Je suis originaire du Cameroun (Pays d&apos;Afrique Central qui compte
          240 ethnies, reparties en trois grands groupes qui sont les Bantous,
          les Semi-Bantous et les Soudanais avec au totale 240 langues
          nationales); Née vers la fin des années 80 plus précisement en 89, le
          cumul des experiences enrichissantes m&apos;ont permis d&apos;être
          discipliné, travailleur, rigoureux et polyvalent d&apos;où mon nindo :
          Discipline + travail = succès.
        </p>
        <p>
          Passioné de la programmation informatique, j&apos;obtiens le
          baccalauréat en mathématique et technique en 2009, 3 ans plutard une
          licence en génie mécanique et productique.
        </p>
        <p>
          en 2012, j&apos;intègre le monde professionel au poste de Technicien
          d&apos;exploitation des machines de contrôle dans l&apos;industrie du
          verre; plutard en 2015 j&apos;occupe le poste de Technicien
          d&apos;exploitation (ou encore Fondeur) des fours de verreries de
          capacité de production moyenne 150 tonnes de verre par jour.
        </p>
      </div>
      <div className="flex-[2] max-md:m-auto ml-auto">
        <Image
          className={cn("rounded-lg")}
          src="/franck1.jpg"
          alt="Franck Marcelin EKOUM"
          width={500}
          height={500}
        />
      </div>
    </Section>
  );
};
