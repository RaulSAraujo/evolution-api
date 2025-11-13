module.exports = {
  apps: [
    {
      name: 'ApiEvolution',
      cwd: '/home/deltatec/develop/evolution-api',
      script: '/home/deltatec/.nvm/versions/node/v20.19.5/bin/node',
      args: '--max-old-space-size=4096 --max-semi-space-size=128 node_modules/.bin/tsx ./src/main.ts',
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      max_memory_restart: '4G',
      env: {
        NODE_ENV: 'production',
        NVM_DIR: '/home/deltatec/.nvm',
        PATH: '/home/deltatec/.nvm/versions/node/v20.19.5/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin',
      },
      error_file: '/home/deltatec/.pm2/logs/ApiEvolution-error.log',
      out_file: '/home/deltatec/.pm2/logs/ApiEvolution-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      autorestart: true,
      max_restarts: 10,
      min_uptime: '10s',
      restart_delay: 4000,
    },
  ],
};

