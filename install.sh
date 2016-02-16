#on deployment server only

sudo apt-get updates
sudo apt-get install git

#global installs
sudo npm install pm2 -g

git clone git@github.com:gregorysobotka/urlbundle.git


#install app
git pull
sudo npm install

grunt

#start app
pm2 start bin/www

