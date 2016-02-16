#on deployment server only

cd urlbundle

#update environment
sudo apt-get updates

#update app
git pull
sudo npm install
grunt

#start app
pm2 start www

