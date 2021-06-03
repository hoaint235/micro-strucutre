import { start } from "single-spa";
import { Account } from "./modules/account";
import { initHttpInterceptor } from "@mra/utility";

const forceImport = ["react", "react-dom"];

Promise.all(
  forceImport.map((pkg) => {
    return System.import(pkg);
  })
).then(() => {
  initHttpInterceptor();

  Account.register();

  start({
    urlRerouteOnly: true,
  });
});
