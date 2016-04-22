#This can be placed on deployment server to download and start application

sudo apt-get update
sudo apt-get install git

git clone git://github.com/nodejs/node.git
cd node
./configure
make
sudo make install

cd ../
cd urlbundle

git clone git@github.com:gregorysobotka/urlbundle.git

#install app
cd urlBundleApp
sudo npm install

#global installs
sudo npm install pm2 -g

#start app
pm2 start bin/www