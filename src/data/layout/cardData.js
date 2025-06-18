import cardA from '../../../public/images/cardA.png';
import cardB from '../../../public/images/cardB.png';
import cardC from '../../../public/images/cardC.png';

const cardData = [
  {
    heading: "Authorization Code Flow with PKCE",
    desc: "Securely authenticate users in public clients (like mobile or SPA) using PKCE to prevent token interception.",
    image: cardA,
    link: "/oauth/pkce"
  },
  {
    heading: "Client Credentials Flow",
    desc: "Ideal for service-to-service authentication without user interaction. Authenticate backend services securely.",
    image: cardB,
    link: "/oauth/client"
  },
  {
    heading: "Standard Authorization Code Flow",
    desc: "Authenticate users in confidential clients like web servers using a secure redirection-based login.",
    image: cardC,
    link: "/oauth/code"
  },
];

export default cardData;
