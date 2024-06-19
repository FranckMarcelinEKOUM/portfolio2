"use client";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import Image from "next/image";
import { Section } from "./Section";

export const Status = () => {
  return (
    <Section className="">
      <div className="">
        <h1 className="relative rounded bg-muted text-3xl text-center font-semibold">
          PARCOURS ACADEMIQUE
        </h1>
        <CardContent>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>
                  <div className="font-medium">2013-2014</div>
                  <div className="hidden text-sm text-muted-foreground md:inline">
                    Douala-Cameroun
                  </div>
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  <div className="font-medium">
                    Licence en genie mécanique et productique (GMP)
                  </div>
                  <div className="hidden text-sm text-muted-foreground md:inline">
                    ISTAMA (Institut Supérieur de Technologie Avancé et de
                    Management)
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div className="font-medium">2012-2013</div>
                  <div className="hidden text-sm text-muted-foreground md:inline">
                    Douala-Cameroun
                  </div>
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  <div className="font-medium">
                    Brevet de Technicien Supérieur en Construction Mécanique
                    (CM)
                  </div>
                  <div className="hidden text-sm text-muted-foreground md:inline">
                    ISTAMA (Institut Supérieur de Technologie Avancé et de
                    Management)
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div className="font-medium">2009-2010</div>
                  <div className="hidden text-sm text-muted-foreground md:inline">
                    Douala-Cameroun
                  </div>
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  <div className="font-medium">
                    Baccalauréat E (Mathématiques et construction mécanique)
                  </div>
                  <div className="hidden text-sm text-muted-foreground md:inline">
                    Lycée Technique de Douala-Koumassi
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </div>

      <br />

      <div className="">
        <h1 className="relative rounded bg-muted text-3xl text-center font-semibold">
          FORMATION
        </h1>
        <div>
          <CardContent>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Dec. 2022</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      Douala-Cameroun
                    </div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <div className="font-medium">
                      Formation sur le contrôle qualité, securité et
                      environnement des produits petroliers
                    </div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      Ministère de l&apos;eau et de l&apos;energie
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </div>
      </div>

      <br />

      <div className="">
        <h1 className="relative rounded bg-muted text-3xl text-center font-semibold">
          EXPERIENCE PROFESSIONNELLE
        </h1>
        <br />
        <div className="rounded border">
          <CardContent>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <div className="font-medium text-md">
                      Oct. 2014 - actuel
                    </div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      Douala-Cameroun
                    </div>
                  </TableCell>
                  <TableCell className="hidden xl:table-cell text-lg">
                    <h3 className="font-medium">
                      SOCAVER, Secteur exploitation et elaboration du verre
                      creux
                    </h3>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
          <h3 className="text-2xl font-caption text-center">
            Poste actuel :
            <u>Technicien d&apos;exploitation Four de Fusion du verre</u>{" "}
            (FONDEUR)
          </h3>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <span>Missions et tâches réalisées : </span>
            <li>
              Contrôle des paramètres de fonctionnement de deux unités de
              production du verre creux de capacité totale journalière 150
              Tonnes par jour (Pressions, Temperatures, Débits combustibles et
              comburants).
            </li>
            <li>
              Execution du calendrier d&apos;entretien systematique des
              equipements de production (Entretien à preventif des systèmes
              hydrauliques, Aménagement et exploitation du réseau hydraulique).
            </li>
            <li>Contrôle et réglage des systèmes proportionnels.</li>
            <li>Participer au progamme d&apos;inventaire annuel.</li>
            <li>Respect et Mise en application des 5S.</li>
            <li>Encadrement par compagnonnage et suivi des stagiaires.</li>
            <li>
              Respect des règles de sécurité rélatif à la SDA (Sécurité des
              denrées alimentaires).
            </li>
          </ul>
        </div>
      </div>
      <br />
      <div className="rounded border">
        <CardContent>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>
                  <div className="font-medium">Mai 2012 - Oct.2014</div>
                  <div className="hidden text-sm text-muted-foreground md:inline">
                    Douala-Cameroun
                  </div>
                </TableCell>
                <TableCell className="hidden sm:table-cell text-lg">
                  <div className="font-medium">
                    SOPRESCAM, (Sous-traitance sur le site SOCAVER)
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
        <h3 className="text-2xl font-caption text-center">
          Poste occupé :
          <u>Technicien d&apos;exploitation Machine de contrôle</u> (Agent
          Machine)
        </h3>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <span>Missions et tâches réalisées : </span>
          <li>
            Responsable des machines de contrôle qualité des défauts de
            verrerie.
          </li>
          <li>
            Assister les équipes de contrôle qualité et suivre les differents
            défauts de verrerie.
          </li>
          <li>
            Contrôle du dégré de contamination des fluides et lubrifications à
            pulverisé sur les bouteilles lors du traitement à froid.
          </li>
          <li>
            Identifier sur les machines de contrôle les dysfonctionnements, les
            imprévus lors de la production puis faire un rapport détaillé et
            apporter des solutions préventives.
          </li>
          <li>
            Assister les agents techniques de quarts lors des interventions pour
            dépannage, travaux et visites de maintenance préventive.
          </li>
          <li>
            Participer au demarche de certification et assurer la pérennité des
            certifications en vigueur.
          </li>
          <li>Participer au progamme d&apos;inventaire mensuel.</li>
          <li>Participer à des réunions pour Plan de Prévention.</li>
          <li>Réaliser toutes les tâches administratives liées au poste.</li>
        </ul>
      </div>

      <br />

      <div className="">
        <h1 className="relative rounded bg-muted text-3xl text-center font-semibold">
          DOCUMENTS
        </h1>
        <br />
        <div className="rounded border">
          <Sheet>
            <div>Attestation de réussite de la Licence Professionnelle</div>
            <div className="text-end">
              <SheetTrigger asChild>
                <Button variant="outline">Ouvrir</Button>
              </SheetTrigger>
            </div>
            <SheetContent className="h-[1050px] xl:h-[1050px]">
              <SheetHeader>
                <SheetTitle>
                  Attestation reussite de Licence Professionnelle
                </SheetTitle>
                <SheetDescription>
                  <Image
                    src="/attestation.jpg"
                    alt="Licence professionnelle"
                    width={1250}
                    height={950}
                  />
                </SheetDescription>
              </SheetHeader>
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit">Fermer</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
        <br />
        <div className="rounded border">
          <Sheet>
            <div>
              Attestation de Formation interne sur le contrôle qualité, securité
              et environnement des produits petroliers
            </div>
            <div className="text-end">
              <SheetTrigger asChild>
                <Button variant="outline">Ouvrir</Button>
              </SheetTrigger>
            </div>
            <SheetContent className="h-[1050px] xl:h-[1050px]">
              <SheetHeader>
                <SheetTitle>
                  Attestation de Formation interne sur le contrôle qualité,
                  securité et environnement des produits petroliers
                </SheetTitle>
                <SheetDescription>
                  <Image
                    src="/Minee.jpg"
                    alt="Attestation formation"
                    width={1250}
                    height={950}
                  />
                </SheetDescription>
              </SheetHeader>
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit">Fermer</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
        <br/>
        <div className="rounded border">
          <Sheet>
            <div className="flex-auto">
              Diplôme de Baccalauréat
            </div>
            <div className="text-end">
              <SheetTrigger asChild>
                <Button variant="outline">Ouvrir</Button>
              </SheetTrigger>
            </div>
            <SheetContent className="h-[1050px] xl:h-[1050px]">
              <SheetHeader>
                <SheetTitle>
                  Diplôme de Baccalauréat
                </SheetTitle>
                <SheetDescription>
                  <Image
                    src="/Bac.jpg"
                    alt="Baccauleréat"
                    width={1250}
                    height={950}
                  />
                </SheetDescription>
              </SheetHeader>
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit">Fermer</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </Section>
  );
};
