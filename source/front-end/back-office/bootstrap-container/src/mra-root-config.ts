import { start } from "single-spa";
import { Authentication } from "./modules/authentication";
import { Common } from "./modules/common";
import { Routing } from "./modules/routing";

const forceImport = ["react", "react-dom", "@mra/utility"];

Promise.all(
  forceImport.map((pkg) => {
    return System.import(pkg);
  })
).then(() => {
  Common.register();
  Routing.register();
  Authentication.register();

  start({
    urlRerouteOnly: true,
  });
});
