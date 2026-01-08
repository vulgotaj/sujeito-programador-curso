// Buscar meu arquivo que conecta com banco de dados.

import { connection, statusConnection } from './database/connection';
import status, { resetarBanco } from './database/aplicativo';

function acessarSistema() {
    connection({
        ip: "192.168.1.1",
        name: "MySQL"
    })
}

acessarSistema();

statusConnection();

status();

resetarBanco();

