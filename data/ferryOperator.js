import AnkesSuperFast from '@/assets/ankesuperfast.png';
import BlueStarFerries from '@/assets/BlueStarFerries.png';
import SeaJets from '@/assets/seatjets.png';
import italy from '@/assets/italy.png';
import greece from '@/assets/greece.png';

export const ferryOperators = [
    {
      id: 1,
      name: "Blue Star Ferries",
      image: BlueStarFerries,
      description: "Blue Star Ferries is currently the biggest ferry company in Greece. It is a member of Attica Group, one of the most significant companies in the Greek shipping industry. Its fleet consists of vessels of the latest technology and serves itineraries starting from the port of Piraeus and heading to the islands of Cyclades (Mykonos, Santorini, Paros etc.) Dodecanese (Rhodes, Kos etc.). Blue Star Ferries reaches over 50 destinations in total.",
      vessels: 8,
      ferryTypes: "8 normal",
      reviews: 1342,
      popularVessels: ["Blue Star Delos", "Blue Star Naxos"],
      country: "Greece",
      countryImage: greece,
      rating: 4.7,
      buttonValue: "More about Blue Star Ferries"
    },
    {
      id: 2,
      name: "Seajets",
      image: SeaJets,
      description: "Seajets is the biggest company of high-speed vessels of the Aegean Sea. It is a joint venture of speedboats that was initially founded in 1989 to provide shipping services. The company's passenger ferries have been connecting over 25 destinations in the Aegean Sea since 2002. Their fleet consists of 14 high-speed catamarans and 3 conventional ones, with a speed of up to 50 knots. Seajets connects the main ports of Athens (Piraeus, Rafina, and Lavrio), other parts of the mainland (Thessaloniki, Kavala, Peloponnese), and various islands.",
      vessels: 17,
      ferryTypes: "10 normal and 17 High-speed ferries",
      reviews: 2467,
      popularVessels: ["WorldChampion jet", "Seajet 2"],
      country: "Greece",
      countryImage: greece,
      rating: 3.5,
      buttonValue: "More about Seajets"
    },
    {
      id: 3,
      name: "Anek-Superfast",
      image: AnkesSuperFast,
      description: "Anek-Superfast is a joint venture established in June 2011 as a result of cooperation between two major Greek ferry companies, Anek Lines and Superfast Ferries. The goal was to provide fast and convenient service to the customers, as both companies had vessels of the latest technology. The ferry links operated by the companies connect mainland Greece (Crete [Piraeus to Heraklion and Chania]) but also make the route from Greece to Italy (from Ancona, Bari and Venice to Patra, Corfu, and Igoumenitsa).",
      vessels: 6,
      ferryTypes: "Normal ferries",
      reviews: 667,
      popularVessels: ["Superfast XI", "Superfast X"],
      country: ["Greece", "Italy"],
      countryImage: [greece,italy],
      rating: 3.9,
      buttonValue: "More about Anek-Superfast"
    }
  ];