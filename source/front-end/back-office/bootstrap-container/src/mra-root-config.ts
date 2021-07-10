import { registerApplication as register, start } from "single-spa";
import application from "../config";
import { API, Cognito } from "@mra/utility";
import "./asset/styles/styles.scss";
import { Routing } from "./routing";

const modules = application.modules;
let requiredModules: Module[] = [],
  normalModules: Module[] = [];

for (let moduleName in modules) {
  if (moduleName === "root") {
    continue;
  }
  const module = modules[moduleName];
  if (module.required) {
    requiredModules.push(module);
  } else {
    normalModules.push(module);
  }
}

function registerApps() {
  normalModules.map((module: Module) =>
    register({
      name: module.name,
      app: () => System.import(module.name),
      activeWhen:
        module.router === true ? () => true : (module.router as string[]),
    })
  );
}

Promise.all(
  requiredModules.map((module) => {
    return System.import(module.name);
  })
).then(() => {
  registerApps();

  Routing.register();
  Cognito.initialize();
  API.userInterceptor();

  start({ urlRerouteOnly: true });
});
