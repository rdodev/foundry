#!/bin/bash
aptitude update
aptitude install -y nginx
echo '<h1>YASSSSSS!</h1>' > /usr/share/nginx/html/index.html