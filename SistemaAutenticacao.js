/* Polimorfismo: Tratar objetos diferentes de maneira similar */
/* Duck Type: Não importa o tipo do objeto que estou tratando e sim se ele tem as propriedades que eu queroz */

export class SistemaAutenticacao {
    
    static login(autenticavel, senha) {
        
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)) {
            return autenticavel.autenticar(senha);
        }
        
        return false;
    };
    
    /* Ser aunteticável significa ter o método "autenticar" */
    static ehAutenticavel(autenticavel) {
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function;
    }

};