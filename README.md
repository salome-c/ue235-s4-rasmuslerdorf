Créer dossier vide sur PC et son conteneur dans Docker

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

DocumentRoot /var/www/html/ → DocumentRoot /var/www/html/public
<Directory /> → <Directory /var/www/html/public>

Echap → :wq
service apache2 reload
composer update

A la racine du dossier du projet : dupliquer .env et le renommer en .env.local

Powershell :
php bin/console doctrine:migrations:migrate → yes
php bin/console doctrine:fixtures:load → yes
apt install npm → y
composer require symfony/webpack-encore-bundle
npm install
npm run build

Plus qu'à faire des commit/push etc. à partir du dossier du projet
(en l'ouvrant dans Sublime Merge en tant que repo local, par exemple)
:)