Créer dossier vide sur PC et son conteneur dans Docker

------------------------------------------------------

Powershell :

docker exec -it nomduconteneur /bin/bash

php -v

composer -V

composer self-update

a2enmod rewrite && service apache2 reload

apt update && apt install php8.0-sqlite3 -y

apt install apt-transport-https ca-certificates -y && update-ca-certificates

cd /var/www/html

git clone https://github.com/salome-c/ue235-s4-rasmuslerdorf.git .

vim /etc/apache2/sites-available/000-default.conf

i

------------------------------------------------------

DocumentRoot /var/www/html/ → DocumentRoot /var/www/html/public

<Directory / > → <Directory /var/www/html/public>

------------------------------------------------------

Echap → :wq

service apache2 reload

composer update

------------------------------------------------------

A la racine du dossier du projet : dupliquer .env et le renommer en .env.local

------------------------------------------------------

Powershell :

php bin/console doctrine:migrations:migrate → yes

php bin/console doctrine:fixtures:load → yes

apt install npm → y

composer require symfony/webpack-encore-bundle

npm install

npm run build

------------------------------------------------------

Si l'ajout ou la modification d'un article ou d'une catégorie

génère une erreur SQL (read only) alors dans Powershell :

chmod 777 /var/www/html/var/blog.db

------------------------------------------------------

Plus qu'à faire des commit/push etc. à partir du dossier du projet

(en l'ouvrant dans Sublime Merge en tant que repo local, par exemple)

:)

------------------------------------------------------

Pagination dans la liste des articles avec KNP Paginator

Installation nécessaire :

cd /var/www/html

composer require knplabs/knp-paginator-bundle -W

(-W pour l'installer avec toutes ses dépendances)

NB : le menu de pagination ne s'affiche pas si tous les articles sont déjà affichés dans la page

https://nouvelle-techno.fr/articles/symfony-4-creer-un-blog-pas-a-pas-mettre-en-place-la-pagination

------------------------------------------------------

L'utilisateur peut choisir le nombre d'articles à afficher dans la liste avec un select

par intégration de jQuery et envoi de variable en URL pour traitement par le contrôleur

https://stackoverflow.com/questions/22295112/dynamic-limit-per-page-knp-pagination

https://grafikart.fr/forum/24959

------------------------------------------------------

Mise à jour et prise en compte des fichiers CSS et JavaScript dans assets/styles/app.css et assets/app.js

Pour que les fichiers CSS et JavaScript soient pris en compte :

cd /var/www/html

npm run build

------------------------------------------------------

