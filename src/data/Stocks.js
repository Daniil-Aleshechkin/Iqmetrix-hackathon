const stockNames = [
  {
    name: "scootched",
    region: "Lennox and Addington"
  },
  {
    name: "somersaulted",
    region: "Sept-Rivi�res--Caniapiscau"
  },
  {
    name: "ordines",
    region: "Le Rocher-Perc�"
  },
  {
    name: "peppers",
    region: "Chatham-Kent"
  },
  {
    name: "bestrowing",
    region: "Chatham-Kent"
  },
  {
    name: "hypogea",
    region: "Minganie--Le Golfe-du-Saint-Laurent"
  },
  {
    name: "optimizations",
    region: "Haldimand-Norfolk"
  },
  {
    name: "coronae",
    region: "Pierre-De Saurel"
  },
  {
    name: "caravelles",
    region: "Rainy River"
  },
  {
    name: "raven",
    region: "Northumberland"
  },
  {
    name: "connectional",
    region: "Les Jardins-de-Napierville"
  },
  {
    name: "guile",
    region: "La C�te-de-Beaupr�"
  },
  {
    name: "assorting",
    region: "Le Val-Saint-Fran�ois"
  },
  {
    name: "fille",
    region: "Saint John"
  },
  {
    name: "medakas",
    region: "Avignon"
  },
  {
    name: "opalesced",
    region: "Richmond"
  },
  {
    name: "orthotists",
    region: "Lunenburg"
  },
  {
    name: "mensurability",
    region: "Northumberland"
  },
  {
    name: "nightspot",
    region: "Coaticook"
  },
  {
    name: "overpayments",
    region: "Nanaimo"
  },
  {
    name: "outstretching",
    region: "Comox Valley"
  },
  {
    name: "verst",
    region: "Division No. 12"
  },
  {
    name: "geobotany",
    region: "Division No.  4"
  },
  {
    name: "slype",
    region: "Sunshine Coast"
  },
  {
    name: "clienteles",
    region: "Division No.  5"
  },
  {
    name: "harmonizes",
    region: "Division No.  7"
  },
  {
    name: "erythrismal",
    region: "Nanaimo"
  },
  {
    name: "cholinergic",
    region: "L�vis"
  },
  {
    name: "guipures",
    region: "Division No.  2"
  },
  {
    name: "everlastingness",
    region: "Hastings"
  },
  {
    name: "paroled",
    region: "Elgin"
  },
  {
    name: "champs",
    region: "Division No. 16"
  },
  {
    name: "backstays",
    region: "Division No. 19"
  },
  {
    name: "penuriousness",
    region: "Dufferin"
  },
  {
    name: "tuckering",
    region: "Charlevoix-Est"
  },
  {
    name: "allotments",
    region: "Division No. 12"
  },
  {
    name: "kimchee",
    region: "Huron"
  },
  {
    name: "fenlands",
    region: "Queens"
  },
  {
    name: "frostbitings",
    region: "Division No. 15"
  },
  {
    name: "workabilities",
    region: "Thompson-Nicola"
  },
  {
    name: "succinyls",
    region: "Gatineau"
  },
  {
    name: "tongmen",
    region: "Division No.  7"
  },
  {
    name: "mycoses",
    region: "Division No. 16"
  },
  {
    name: "autodidactic",
    region: "Timiskaming"
  },
  {
    name: "peins",
    region: "Antoine-Labelle"
  },
  {
    name: "virginalist",
    region: "Colchester"
  },
  {
    name: "naives",
    region: "La Haute-Yamaska"
  },
  {
    name: "avouched",
    region: "Alberni-Clayoquot"
  },
  {
    name: "cormorant",
    region: "Cowichan Valley"
  },
  {
    name: "psychopathics",
    region: "Division No.  3"
  },
  {
    name: "calamary",
    region: "Toronto"
  },
  {
    name: "dishpan",
    region: "Renfrew"
  },
  {
    name: "acetazolamide",
    region: "Cowichan Valley"
  },
  {
    name: "coombs",
    region: "Division No.  7"
  },
  {
    name: "dankness",
    region: "Queens"
  },
  {
    name: "honorers",
    region: "Sunbury"
  },
  {
    name: "graffiting",
    region: "Baffin"
  },
  {
    name: "haftorahs",
    region: "Division No. 13"
  },
  {
    name: "autosuggest",
    region: "Region 4"
  },
  {
    name: "bergeres",
    region: "Division No.  3"
  },
  {
    name: "iterances",
    region: "La Jacques-Cartier"
  },
  {
    name: "across",
    region: "Portneuf"
  },
  {
    name: "deciliters",
    region: "La Vall�e-du-Richelieu"
  },
  {
    name: "decimalizes",
    region: "Kings"
  },
  {
    name: "wad",
    region: "East Kootenay"
  },
  {
    name: "corbinas",
    region: "Division No.  2"
  },
  {
    name: "nonparasitic",
    region: "Perth"
  },
  {
    name: "suspects",
    region: "T�miscamingue"
  },
  {
    name: "workforces",
    region: "North Okanagan"
  },
  {
    name: "sartorially",
    region: "Division No.  5"
  },
  {
    name: "vocalese",
    region: "Kawartha Lakes"
  },
  {
    name: "robberies",
    region: "Division No. 18"
  },
  {
    name: "autarchical",
    region: "La Tuque"
  },
  {
    name: "scragging",
    region: "Division No. 11"
  },
  {
    name: "wadmel",
    region: "Division No.  6"
  },
  {
    name: "shuttlers",
    region: "Division No. 12"
  },
  {
    name: "gambusia",
    region: "Parry Sound"
  },
  {
    name: "polarography",
    region: "Charlevoix"
  },
  {
    name: "bedmakers",
    region: "Division No.  4"
  },
  {
    name: "surprise",
    region: "Antoine-Labelle"
  },
  {
    name: "misappropriated",
    region: "Kitimat-Stikine"
  },
  {
    name: "predisposed",
    region: "Bulkley-Nechako"
  },
  {
    name: "oxalises",
    region: "Division No.  3"
  },
  {
    name: "operations",
    region: "T�miscamingue"
  },
  {
    name: "gunnels",
    region: "Cowichan Valley"
  },
  {
    name: "padauks",
    region: "T�miscouata"
  },
  {
    name: "playfully",
    region: "Division No.  7"
  },
  {
    name: "outhandled",
    region: "B�cancour"
  },
  {
    name: "carnelians",
    region: "Shelburne"
  },
  {
    name: "unreinforced",
    region: "L'�le-d'Orl�ans"
  },
  {
    name: "epizooty",
    region: "Montr�al"
  },
  {
    name: "reselected",
    region: "Baffin"
  },
  {
    name: "saggared",
    region: "Rouville"
  },
  {
    name: "foreseeable",
    region: "Nicolet-Yamaska"
  },
  {
    name: "superboards",
    region: "Timiskaming"
  },
  {
    name: "microflora",
    region: "Frontenac"
  },
  {
    name: "elmy",
    region: "Division No. 20"
  },
  {
    name: "duenna",
    region: "Les Appalaches"
  }
];
export default stockNames;
