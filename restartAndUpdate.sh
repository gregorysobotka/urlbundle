#on deployment server only

cd urlBundleApp

#update environment
sudo apt-get update

#update app
git pull
sudo npm install

#start app
cd bin
pm2 start www

