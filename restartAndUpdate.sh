#on deployment server only

cd urlBundleApp

#update environment
sudo apt-get updates

#update app
git pull
sudo npm install

#start app
pm2 start www

