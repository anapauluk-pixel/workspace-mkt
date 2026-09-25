/**
 * Workspace MKT
 * Estado global da aplicação
 */

const State = {

    currentUser: {
        id: null,
        nome: null,
        perfil: null
    },

    currentModule: "dashboard",

    currentVisualization: null,

    sidebarCollapsed: false,

    filters: {},

    initialized: false

};
