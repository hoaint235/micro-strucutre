import { Account } from "./modules/account";
import { start } from "single-spa";
import { Authentication } from "./modules/authentication";
import { Common } from "./modules/common";
import { Routing } from "./modules/routing";
import { Layout } from "./modules/layout";

const forceImport = [
  "single-spa",
  "react",
  "react-dom",
  "@mra/utility",
  "@mra/theme",
  "@mra/layout",
];

Promise.all(
  forceImport.map((pkg) => {
    return System.import(pkg);
  })
).then(() => {
  Common.register();
  Routing.register();
  Authentication.register();
  Account.register();
  Layout.register();

  start({
    urlRerouteOnly: true,
  });
});
