/**
 * Workspace MKT
 * Ponto de entrada da aplicação
 */

const App = {

    init() {

        console.log("Workspace MKT iniciado");

        State.initialized = true;

        Router.navigate(Routes.DASHBOARD);

    }

};

document.addEventListener("DOMContentLoaded", () => {

    App.init();

});
