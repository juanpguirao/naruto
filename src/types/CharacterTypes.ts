export interface CharacterData {
    id: number;
    name: string;
    images: string;
    debut: {
      manga: string,
      anime: string,
      novel: string,
      movie: string,
      game: string,
      ova: string,
      appearsIn: string
    };
    family: {
      "incarnation with the god tree": string,
      "depowered form": string
    };
    jutsu: string[];
    natureType: string[];
    personal: {
      age: {
        "Part I": string,
        "Part II": string,
        "Academy Graduate": string,
        "Chunin Promotion": string
      }
      status: string,
      kekkeiGenkai: string,
      classification: string,
      jinchūriki: string[],
      titles: string[],
      height: {
        "Part I": string,
        "Part II": string,
        "Blank Period": string,
        "Gaiden": string,
      },
      "weight": {
        "Part I": string,
        "Part II": string,
      },
      "bloodType": string,
      "occupation": string[],
      "affiliation": string[],
      "team": string[],
      "clan": string,
    },
    tools: string[];
    voiceActors: {
      "japanese": string,
      "english": string
    }
  }