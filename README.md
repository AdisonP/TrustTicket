# TrustTickets 🎫🎫
***Projet de fin d'année Pré-MSC Promo 2024 {EPITECH} Marseille***

## Description du projet 🔬
Une plateforme destinée au monde de l'évennementiel qui permet aux organisateurs de générer leurs billets sous forme de NFT sur la blockchain Polygon et aux utilisateur d'acheter et d'échanger leurs billets de manière équitable pour les organisateurs. L'objectif étant de contrer la revente illégale de billets

## Technologies 🛠

  ### Frontend 💻
  
  - ***React.js*** https://reactjs.org/
  - ***Next.js*** https://nextjs.org/
  
  
  ### Backend 📡
  
  - ***Node.JS*** https://nodejs.org/en/
  - ***Express.JS*** https://expressjs.com/
  - ***Mysql*** https://www.mysql.com/fr/
  
  ### Blockchain ⛓
  
  - ***Polygon blockchain*** https://polygon.technology/
  - ***HardHat*** https://hardhat.org/
  - ***Alchemy*** https://www.alchemy.com/
  - ***IPFS*** https://ipfs.io/


## Déploiement docker 🌊
  - Créer un fichier .env à la racine du projet et remplir les champs correspondants
```
TOKEN_SECRET={your_secret}
DB_HOST={db_host}
DB_USER={db_user}
DB_PASSWORD={db_password}
DB_PORT={db_port}
DB_NAME={db_name}
PORT={api_port}
PRIVATE_KEY={clé privée d'un wallet metamask}
REACT_APP_PINATA_KEY={clé d'un compte pinata}
REACT_APP_PINATA_SECRET={secret du compte pinata}
```
  - Lancer la commande de déploiement : ``docker-compose --env-file .env up -d``
