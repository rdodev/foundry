# Foundry
### A Rackspace-Flavored OpenStack™ Heat Web-Based Template Builder [![Build Status](https://travis-ci.org/rdodev/foundry.svg?branch=master)](https://travis-ci.org/rdodev/foundry)
---

## Intro:
A small web app that was born out of both, necessity and an out-of-the-box project. The intent is to provide a visual, constrained, scoped guide to leanr and use Rackspace Orchestration to deploy infrastructure in a repeatable, deterministic manner with virtually zero setup beyond a web browser and a Rackspace account.

## To Use Locally:
1. Clone this repository
2. `cd` into the directory it was cloned into
3. Either `python -m SimpleHTTPServer` or `python3 -m http.server`
4. Navigate to `http://localhost:8000`
5. Profit!

## To Use Over The Web:
Soon™

## To Develop:
1. Clone this repository
2. `cd` into the directory it was cloned into
3. run `npm install`
4. run `npm install -g karma-cli`
5. If you want coverage testing (and trust me, you do): `npm install istanbul karma-coverage --save-dev`

Entry point is app.js which is located in `app` directory. From here it should be obvious that all html markup goes in the `views` folder and the controller and business logic in `controllers`. If adding new controller or view, please follow the nomenclature convention already in place.
