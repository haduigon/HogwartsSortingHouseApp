export type Hero = {
  actor: string;
  alive: boolean;
  alternate_names: string[];
  ancestry: string;
  dateOfBirth: string | null;
  eyeColour: string;
  gender: string;
  hairColour: string;
  hogwartsStaff: boolean;
  hogwartsStudent: boolean;
  house: string;
  id: string;
  image: string;
  name: string;
  patronus: string;
  species: string;
  wand: {
    core: string;
    length: number | null;
    wood: string;
  };
  wizard: boolean;
  yearOfBirth: number | null;
  attempts: number;
};

export type AppProps =
  | "hero"
  | "success"
  | "failed"
  | "students"
  | "list"
  | "currentHero"
  | "total";
