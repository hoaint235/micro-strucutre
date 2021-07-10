require("dotenv").config();

const MRA_APP = /MRA/i;

function getEnv() {
  const raw = Object.keys(process.env)
    .filter((key) => MRA_APP.test(key))
    .reduce(
      (env, key) => {
        env[key] = process.env[key].toString();
        return env;
      },
      {
        HOST: process.env.HOST || "0.0.0.0",
        PORT: process.env.PORT,
        ENV: process.env.ENV || "development",
        WDS_SOCKET_HOST: process.env.WDS_SOCKET_HOST,
        WDS_SOCKET_PATH: process.env.WDS_SOCKET_PATH,
        WDS_SOCKET_PORT: process.env.WDS_SOCKET_PORT,
      }
    );

  const stringified = {
    "process.env": Object.keys(raw).reduce((env, key) => {
      env[key] = JSON.stringify(raw[key]);
      return env;
    }, {}),
  };

  return {
    raw,
    stringified,
  };
}

module.exports = getEnv;
