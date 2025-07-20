// users.js
// Gère les utilisateurs autorisés (identifiants)
// Tu peux ajouter/modifier ici les comptes

const users = [
  { username: "admin", password: "white.2674" },
  { username: "Pearl's", password: "482391" },
  { username: "Hen House", password: "947203" },
  { username: "Uwu Café", password: "628340" },
  { username: "Delight", password: "130982" },
  { username: "Rex Diner", password: "562713" },
  { username: "Paradiso", password: "792134" },
  { username: "Vice Room", password: "340125" },
  { username: "Yellow Jack", password: "871932" },
  { username: "Esthétique Grove Street", password: "Est.GS2025" },
  { username: "Esthétique Vespucci", password: "Est.Ve2025" },
  { username: "Esthétique Vinewood", password: "Est.Vi2025" },
  { username: "Esthétique Paleto", password: "Est.P2025" },
  { username: "Esthétique Sandy", password: "Est.S2025" },
  { username: "Millar's Fishery", password: "671238" },
  { username: "Ferme de Grapeseed", password: "Ferme.G2025" },
  { username: "Vignoble", password: "893274" },
  { username: "GB Foundry", password: "GBF2025" },
  { username: "Ferme Biogood", password: "Ferme.B2025" },
  { username: "LD Organics", password: "LDO2025" },
  { username: "Fresh Meat", password: "780234" },
  { username: "Davis Quartz", password: "913470" },
  { username: "Roxwood PWR", password: "614825" },
  { username: "LS Customs", password: "LSC" },
  { username: "Auto-Exotic", password: "237816" },
  { username: "Custom Motors", password: "749021" },
  { username: "Flywheels", password: "902134" },
  { username: "Benny's", password: "184639" },
  { username: "Dock Tease", password: "398245" },
  { username: "PawnShop", password: "576103" },
  { username: "PawnShop Roxwood", password: "219470" },
  { username: "Maze Event", password: "835729" },
];

// Fonction pour vérifier les identifiants
function checkUser(username, password) {
  return users.some(
    (u) => u.username === username && u.password === password
  );
}
