module.exports = {
  apps : [{
    name: "api",
    script: "./src/app.js",
    instances: 1,
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}
