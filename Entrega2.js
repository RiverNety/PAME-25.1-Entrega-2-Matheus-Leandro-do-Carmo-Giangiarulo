const prompt = require('prompt-sync')(); //usar prompt-sync

class Reserva {
    constructor(id_unico, id_cliente, status_, data_entrega, data_saida, tipo_de_quarto){
        this.id_unico = id_unico;
        this.id_cliente = id_cliente;
        this.status = status_;
        this.data_entrega = data_entrega;
        this.data_saida = data_saida;
        this.tipo_de_quarto = tipo_de_quarto;
    }
}

class Funcionario {
    constructor(id_unico, nome, cpf, email, senha){
        this.id = id_unico;
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.senha = senha; //fazer limicatoes aqui dentro
    }
    ver_dados() {
        console.log("Dados do funcionário:");
        console.log("ID: " + this.id);
        console.log("Nome: " + this.nome);
        console.log("CPF: " + this.cpf);
        console.log("Email: " + this.email);
    }
}

class Cliente {
    constructor(id_, nome, data_de_nascimento, cpf, email, senha){
        this.id_ = id_;
        this.nome = nome;
        this.data_de_nascimento = data_de_nascimento;
        this.cpf = cpf;
        this.email = email;
        this.senha = senha; //fazer limicacoes aqui dentro
    }
    ver_dados() {
        console.log("Dados do cliente:");
        console.log("ID: " + this.id_);
        console.log("Nome: " + this.nome);
        console.log("Data de Nascimento: " + this.data_de_nascimento);
        console.log("CPF: " + this.cpf);
        console.log("Email: " + this.email);
    }
}

class Quarto {
    constructor(nome_do_quarto, qtd_de_camas, qtd_disponivel, preco_noite, descricao)
    {
        this.nome_do_quarto = nome_do_quarto;
        this.qtd_de_camas = qtd_de_camas;
        this.qtd_disponivel = qtd_disponivel;
        this.preco_noite = preco_noite;
        this.descricao = descricao; // essa classe sera instanciada a partir das caracteristicas do hotel
    }

}

class Sistema {
    constructor(){
    }

    tratar_cliente() {
        console.log("digite seu email")
        let email = prompt();
        console.log("digite sua senha")
        let senha = prompt();
        let cliente = this.achar_cliente(email, senha);
        if (cliente == false) {
            console.log("Credenciais incorretas");
        } else {
            console.log("Login realizado com sucesso!");
            cliente.ver_dados();
            this.menu_cliente(cliente);
        }
    }

    tratar_funcionario() {
        console.log("digite seu email")
        let email = prompt();
        console.log("digite sua senha")
        let senha = prompt();
        let cliente = this.achar_funcionario(email, senha);
        if (cliente == false) {
            console.log("Credenciais incorretas");
        } else {
            console.log("Login realizado com sucesso!");
            this.menu_funcionario(cliente);
        }
    }
    
    achar_funcionario(email, senha) {
    for (let i = 0; i < dados_funcionario.length; i++) {
        if (dados_funcionario[i].email == email && dados_funcionario[i].senha == senha) {
            return dados_funcionario[i];
        }
    }
    return false;
}

    achar_cliente(email, senha) {
    for (let i = 0; i < dados_clientes.length; i++) {
        if (dados_clientes[i].email == email && dados_clientes[i].senha == senha) {
            return dados_clientes[i];
        }
    }
    return false;
}

    
    iniciar() {
        this.login();
    }

    cadastro_cliente(){
        console.clear();
        console.log("Cadastro de Cliente");
        console.log("Digite seu nome:");
        let nome = prompt();

        console.log("Digite sua data de nascimento (DD/MM/AAAA):");
        let data_de_nascimento = prompt();

        console.log("Digite seu CPF:");
        let cpf = prompt();

        console.log("Digite seu email:");
        let email = prompt();

        console.log("Digite sua senha:");
        let senha = prompt();

        dados_clientes.push(new cliente(this.novo_id_unico_cliente(), nome, data_de_nascimento, cpf, email, senha));
        console.log("Cadastro realizado.");

    }


    login() {
    console.clear();
    console.log("Seja bem vindo, selecione o tipo de login:");
    console.log("1. Cliente");
    console.log("2. Funcionário");
    console.log("3. Cadastro");
    console.log("4. Sair");
    let tipo_de_login = prompt();

    switch (tipo_de_login) {
        case "1":
            this.tratar_cliente();
            break;
        case "2":
            this.tratar_funcionario();
            break;
        case "3":
            this.cadastro_cliente();
            var continuar = prompt("Pressione Enter para continuar...");
            this.login();
            break;
        case "4":
            console.log("Encerrando");
            break;
        default:
            console.log("Por favor, selecione uma opção válida.");
            this.login();
    }
}

    listar_quartos() {
        console.clear();
        console.log("Lista de Quartos:");
        for (let i = 0; i < dados_quartos.length; i++) {
            console.log("Quarto: ", dados_quartos[i].nome_do_quarto, "Camas: ", dados_quartos[i].qtd_de_camas, "Disponíveis: ",dados_quartos[i].qtd_disponivel, "Preço por noite: R$", dados_quartos[i].preco_noite, "Descrição: ", dados_quartos[i].descricao);
        }
    }
    novo_id_unico_reserva() {
        return 1 + dados_reservas.length;
    }
    novo_id_unico_cliente() {
        return 1 + dados_clientes.length;
    }

    fazer_reserva() {
        console.log("Fazendo reserva");
        console.log("Digite seu ID de cliente:");
        let id_cliente = prompt();

    let cliente_encontrado = false;
    for (let i = 0; i < dados_clientes.length; i++) {
        if (String(dados_clientes[i].id_) === String(id_cliente)) //ta dando erro sem string()
     {
            cliente_encontrado = true;
            break;
        }
    }
    if (!cliente_encontrado) {
        console.log("Cliente não encontrado.");
        return;
    }

    console.log("Escolha o tipo de quarto (Quarto de luxo ou quarto padrão):");
    let tipo_de_quarto = prompt();
    console.log("Digite a data de entrega (DD/MM/AAAA):");
    let data_entrega = prompt();
    console.log("Digite a data de saída (DD/MM/AAAA):");
    let data_saida = prompt();
    dados_reservas.push(new Reserva(this.novo_id_unico_reserva(), id_cliente, "reservado", data_entrega, data_saida, tipo_de_quarto));
    console.log("Reserva realizada com sucesso!");
}

    ver_reserva() {
        console.log("Digite seu ID de cliente:");
        let id_cliente = prompt();
        console.log("Reservas do cliente:");
        for (let i = 0; i < dados_reservas.length; i++) {
            if (dados_reservas[i].id_cliente == id_cliente) {
                console.log("ID da reserva: ", dados_reservas[i].id_unico, "Status: ", dados_reservas[i].status, "Data de Entrega: ", dados_reservas[i].data_entrega, "Data de Saída: ", dados_reservas[i].data_saida, "Tipo de Quarto: ", dados_reservas[i].tipo_de_quarto);
            }
        }
    }

    cancelar_reserva() {
        console.log("Cancelar reserva");
        console.log("Digite o ID da reserva que deseja cancelar:");
        let id_reserva = prompt();
        for (let i = 0; i < dados_reservas.length; i++) {
            if (dados_reservas[i].id_unico == id_reserva) {
                dados_reservas.splice(i, 1);
                console.log("Reserva cancelada com sucesso!");
                return;
                }
            }
            console.log("Reserva não encontrada.");
    }
    adicionar_quarto() {
        console.log("Nome do quarto: ")
        let nome_do_quarto = prompt();
        console.log("Quantidade de camas: ")
        let qtd_de_camas = prompt();
        console.log("Quantidade disponível: ")
        let qtd_disponivel = prompt();
        console.log("Preço por noite: ")
        let preco_noite = prompt();
        console.log("Descrição do quarto: ")
        let descricao = prompt();
        dados_quartos.push(new Quarto(nome_do_quarto, qtd_de_camas, qtd_disponivel, preco_noite, descricao));
        console.log("Quarto adicionado");
    }
    mudar_reserva() {
        console.log("Digite o ID da reserva:");
        let id_reserva = prompt();
        for (let i = 0; i < dados_reservas.length; i++) {
            if (dados_reservas[i].id_unico == id_reserva) {
                console.log("Status atual: ", dados_reservas[i].status);
                console.log("Digite o novo status:");
                let novo_status = prompt();
                dados_reservas[i].status = novo_status;
                console.log("Status alterado.");
                return;
            }
        }
        console.log("Reserva não encontrada.");
    }
    menu_funcionario(funcionario) {
        console.clear();
        console.log("Menu do Funcionário");
        console.log("1. Ver dados ");
        console.log("2. Ver lista de quartos");
        console.log("3. Ver reservas");
        console.log("4. Ver Lista de clientes");
        console.log("5. Mudar status de reserva");
        console.log("6. Adicionar novo quarto");
        console.log("7. Sair");
        let opcao = prompt("Escolha uma opção: ");
        switch(opcao) {
            case "1":
                console.clear();
                funcionario.ver_dados();
                var continuar = prompt("Pressione Enter para continuar...");
                this.menu_funcionario(funcionario);
                break;

            case "2":
                this.listar_quartos();
                var continuar = prompt("Pressione Enter para continuar...");
                this.menu_funcionario(funcionario);
                break;

            case "3":
                this.ver_reserva();
                var continuar = prompt("Pressione Enter para continuar...");
                this.menu_funcionario(funcionario);
                break;

            case "4":
                console.log("Lista de clientes:");
                this.ver_lista_de_clientes();
                var continuar = prompt("Pressione Enter para continuar...");
                this.menu_funcionario(funcionario);
                break;

            case "5":
                this.mudar_reserva();
                var continuar = prompt("Pressione Enter para continuar...");
                this.menu_funcionario(funcionario);
                break;

            case "6":
                this.adicionar_quarto();
                var continuar = prompt("Pressione Enter para continuar...");
                this.menu_funcionario(funcionario);
                break;
            case "7":
                console.log("Saindo...");
                var continuar = prompt("Pressione Enter para continuar...");
                this.login();
                break    

            default:
                this.menu_funcionario(funcionario);
        }

    }
    ver_lista_de_clientes() {
        for (let i = 0; i < dados_clientes.length; i++) {
            console.log("ID: ", dados_clientes[i].id_ , "Nome: ", dados_clientes[i].nome, "Email: ", dados_clientes[i].email);
        }
    }


    menu_cliente(cliente) {
        console.clear();
        console.log("Menu do Cliente");
        console.log("1. Ver dados ");
        console.log("2. Ver lista de quartos");
        console.log("3. Ver reserva");
        console.log("4. Fazer reserva")
        console.log("5. Cancelar reserva");
        console.log("6. Sair");
        let opcao = prompt("Escolha uma opção: ");

        switch(opcao) {
            case "1":
                cliente.ver_dados();
                var continuar = prompt("Pressione Enter para continuar...");
                this.menu_cliente(cliente);
                break;

            case "2":
                this.listar_quartos();
                var continuar = prompt("Pressione Enter para continuar...");
                this.menu_cliente(cliente);
                break;
            
            case "3":
                this.ver_reserva();
                var continuar = prompt("Pressione Enter para continuar...");
                this.menu_cliente(cliente);
                break

            case "4":
                this.fazer_reserva();
                var continuar = prompt("Pressione Enter para continuar...");
                this.menu_cliente(cliente);
                break;

            case "5":
                this.cancelar_reserva();
                var continuar = prompt("Pressione Enter para continuar...");
                this.menu_cliente(cliente);
                break;

            case "6":
                console.log("Saindo...");
                this.login();
                break;

            default:
                this.menu_cliente(cliente);
        }
    }

}





//base de dados
let funcionario1 = new Funcionario(1, "João", "123456789-00", "joao@gmail.com", "thor")
let dados_funcionario = [funcionario1]; //armazena os usuarios dos funcionarios

let cliente1 = new Cliente(1, "Maria", (14,11,2001), 98765432100, "maria@gmail.com", "arroba")
let dados_clientes = [cliente1]; //armazena os clientes

let quarto1 = new Quarto("Quarto de luxo", 3, 5, 500, "Quarto com vista para o mar");
let quarto2 = new Quarto("Quarto padrão", 2, 20, 200, "Quarto normal");
let dados_quartos = [quarto1, quarto2];

let dados_reservas = [];



let sistema_do_hotel = new Sistema();


sistema_do_hotel.iniciar()


