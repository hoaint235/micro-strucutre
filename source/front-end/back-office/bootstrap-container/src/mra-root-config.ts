import { start } from "single-spa";
import { Account } from "./modules/account";

const forceImport = ["react", "react-dom"];

Promise.all(forceImport.map(pkg => { return System.import(pkg) })).then(() => {
  Account.register();

  start({
    urlRerouteOnly: true,
  });
});

