#on deployment server only

sudo apt-get updates

#update app
git pull
sudo npm install

grunt

#start app
pm2 start bin/www

