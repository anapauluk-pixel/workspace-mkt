/**
 * Workspace MKT
 * Controle de navegação da SPA
 */

const Router = {

    currentRoute: Routes.DASHBOARD,

    navigate(route) {

        this.currentRoute = route;

        console.log("Rota ativa:", route);

    }

};
