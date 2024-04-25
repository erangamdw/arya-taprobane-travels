module.exports = {
  apps : [{
    script: 'npm start',
  }],

  deploy : {
    production : {
      key:'arya.pem',
      user : 'ubuntu',
      host : '18.170.120.86',
      ref  : 'origin/main',
      repo : 'git@github.com:erangamdw/arya-taprobane-travels.git',
      path : 'home/ubuntu',
      'pre-deploy-local': '',
      'post-deploy' : 'source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh_options':'forwardAgent=yes'
    }
  }
};
