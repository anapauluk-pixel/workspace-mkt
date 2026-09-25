/**
 * Workspace MKT
 * Permissões da aplicação
 */

const Permissions = {

    colaborador: {

        dashboard: true,
        demandas: true,
        aprovacoes: true,
        equipe: false,
        relatorios: false,
        configuracoes: false

    },

    gestor: {

        dashboard: true,
        demandas: true,
        aprovacoes: true,
        equipe: true,
        relatorios: true,
        configuracoes: false

    },

    administrador: {

        dashboard: true,
        demandas: true,
        aprovacoes: true,
        equipe: true,
        relatorios: true,
        configuracoes: true

    }

};
