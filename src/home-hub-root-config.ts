import { registerApplication, start, LifeCycles } from "single-spa";
/*
registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import<LifeCycles>(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/"],
});
*/

registerApplication({
  name: "@home-hub/react-navbar",
  app: () => System.import<LifeCycles>("@home-hub/react-navbar"),
  activeWhen: ["/"]
});
registerApplication({
  name: "@home-hub/react-dashboard",
  app: () => System.import<LifeCycles>("@home-hub/react-dashboard"),
  activeWhen: ["/"]
});



// registerApplication({
//   name: "@home-hub/navbar",
//   app: () => System.import("@home-hub/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
