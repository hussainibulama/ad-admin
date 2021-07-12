#!/bin/bash

cd /var/www/react/test/admin-frontend
# pm2 delete AdmoniAuth # This is background app index assigned to advert service
# pm2 --name AdmoniAuth start npm -- start
pm2 restart AdmoniAdmin