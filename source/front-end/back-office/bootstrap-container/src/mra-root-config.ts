import { start } from "single-spa";
import { Account } from "./modules/account";
import { Common } from "./modules/common";
import { Routing } from "./modules/routing";

const forceImport = ["react", "react-dom", "@mra/utility"];

Promise.all(
  forceImport.map((pkg) => {
    return System.import(pkg);
  })
).then(() => {
  Routing.register();
  Common.register();
  Account.register();

  start({
    urlRerouteOnly: true,
  });
});
