#!/bin/bash

cd /var/www/react/test/admin-frontend
npm install --save --save-exact 
npm config set save-exact=true
npm i react-chartjs-2@3.0.3