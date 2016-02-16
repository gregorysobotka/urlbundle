#This can be placed on deployment server to download and start application

sudo apt-get update
sudo apt-get install git

#global installs
sudo npm install pm2 -g

git clone git@github.com:gregorysobotka/urlbundle.git

#install app
cd urlBundleApp
sudo npm install

#start app
pm2 start bin/www