module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'test',
      script    : './src/index.js',
      env: {
          NODE_ENV: 'development'
      },
      env_production : {
        NODE_ENV: 'production'
      }
    },

    // Second application
    // {
    //   name      : 'WEB',
    //   script    : 'web.js'
    // }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : 'root',
      host : '192.168.2.171',
      ref  : 'origin/master',
      repo : 'https://github.com/zc3212521/react-ssr.git',
      path : '/var/www/test',
      'post-deploy' : 'cnpm install && pm2 reload ecosystem.config.js --env production'
    },
    dev : {
      user : 'root',
      host : '192.168.2.171',
      ref  : 'origin/master',
      repo : 'git@github.com:zc3212521/react-ssr.git',
      path : '/var/www/dev',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env dev',
      env  : {
        NODE_ENV: 'dev'
      }
    }
  }
};
