# Portico Exchange-frontend ⚡️

[![Build Status](https://travis-ci.org/BoltzExchange/boltz-frontend.svg?branch=master)](https://travis-ci.org/BoltzExchange/boltz-frontend)


Frontend for Portico Exchange. 

# Requiriments 

Node.Js/NPM and Node Lightning Network or LND

## install
* Clone the repo, install requirements and compile  
`git clone https://github.com/PorticoExchange/PorticoExchangefrontend.git`  
`cd porticoExchangefrontend  && npm i && npm run compile`  
* Start btc & lnd  
`npm run docker:regtest`
* Start LN 
`npm run porticoexchangefrontend:geth`
* Fund a regtest account and deploy latest contracts  
* Copy boltz.conf to ~/.boltz/boltz.conf and modify as needed  
* Start the app  
`npm run start`

## use
* Visit `http://localhost:9001/getpairs` to see the API.
* Deploy [frontend](https://github.com/pseudozach/boltz-frontend) and visit `http:localhost:3000` to see the GUI.



## acknowledgement
* Portico Exchange is a fork of [Boltz](https://github.com/BoltzExchange/boltz-backend).

## documentation
* API documentation: [Read the Docs](https://docs.boltz.exchange/en/latest/)
