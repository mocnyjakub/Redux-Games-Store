import biomutant from "../assets/images/biomutant.jpg";
import cyberpunk from "../assets/images/cyberpunk.jpg";
import farcry from "../assets/images/far-cry-6.jpg";
import ittakestwo from "../assets/images/it-takes-two.png";
import outriders from "../assets/images/outriders.png";
import residentEvil from "../assets/images/resident-evil.png";

export const products = [
  {
    id: 1,
    name: "Biomutant",
    price: 59.99,
    image: biomutant,
    category: "RPG",
    description:
      "BIOMUTANT® is an open-world, post-apocalyptic Kung-Fu fable RPG, with a unique martial arts styled combat system allowing you to mix melee, shooting and mutant ability action.",
    inCartQuantity: 1,
    productQuantity: 20,
  },
  {
    id: 2,
    name: "Far Cry 6",
    price: 39.99,
    image: farcry,
    category: "SHOOTER",
    description:
      "Welcome to Yara, a tropical paradise frozen in time. As the dictator of Yara, Anton Castillo is intent on restoring his nation back to its former glory by any means, with his son, Diego, following in his bloody footsteps.",
    inCartQuantity: 1,
    productQuantity: 20,
  },
  {
    id: 3,
    name: "CyberPunk 2077",
    price: 29.99,
    image: cyberpunk,
    category: "RPG",
    description:
      "Cyberpunk 2077 is a science fiction game loosely based on the role-playing game Cyberpunk 2020. Setting The game is set in the year 2077 in a fictional futuristic metropolis Night City in California.",
    inCartQuantity: 1,
    productQuantity: 20,
  },
  {
    id: 4,
    name: "It Takes Two",
    price: 49.99,
    image: ittakestwo,
    category: "PLATFORMER",
    description:
      "Bring your favorite co-op partner and together step into the shoes of May and Cody. As the couple is going through a divorce, through unknown means their minds are transported into two dolls which their daughter, Rose, made to represent them.",
    inCartQuantity: 1,
    productQuantity: 20,
  },
  {
    id: 5,
    name: "Outriders",
    price: 49.99,
    image: outriders,
    category: "ACTION",
    description:
      "Outriders is a 1-3 player, drop-in-drop-out, co-op shooter, set in an original dark and desperate sci-fi universe.",
    inCartQuantity: 1,
    productQuantity: 20,
  },
  {
    id: 6,
    name: "Resident Evil Village",
    price: 69.99,
    image: residentEvil,
    category: "HORROR",
    description:
      "Experience survival horror like never before in the eighth major installment in the storied Resident Evil franchise - Resident Evil Village.",
    inCartQuantity: 1,
    productQuantity: 20,
  },
];
export default products;
