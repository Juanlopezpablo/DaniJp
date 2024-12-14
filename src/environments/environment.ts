// Este archivo puede ser reemplazado durante la construcción usando el array `fileReplacements`.
// `ng build` reemplaza `environment.ts` con `environment.prod.ts`.
// La lista de reemplazos de archivo puede encontrarse en `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyAKxovDAFH3kQ_8D9YLx6wZoX27gC0f11E",
    authDomain: "duoclopez.firebaseapp.com",
    projectId: "duoclopez",
    storageBucket: "duoclopez.firebasestorage.app",
    messagingSenderId: "557114941202",
    appId: "1:557114941202:web:31b8ec95be868008db1dcb",
    measurementId: "G-13MZYZMY33"
  },
  apiUrl: "https://uber-nodejs-server-git-d61f89-guillermovillacuratorres-projects.vercel.app/api/"
};

/*
 * Para facilitar la depuración en el modo de desarrollo, puedes importar el siguiente archivo
 * para ignorar las pilas de errores relacionadas con la zona, como `zone.run`, `zoneDelegate.invokeTask`.
 *
 * Este import debe comentarse en el modo de producción porque tendrá un impacto negativo
 * en el rendimiento si se lanza un error.
 */
// import 'zone.js/plugins/zone-error';  // Incluido con Angular CLI.
