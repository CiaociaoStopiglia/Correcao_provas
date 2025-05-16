let pedido = 3;
let nomeCombo = "";
let preco = 0

switch (pedido) {
    case 1:
        nomeCombo = "Batata + Suco"
        preco = 12;
        break;
    
    case 2:
        nomeCombo = "Hamburger"
        preco = 15
        break;

    case 3:
        nomeCombo = "Pizza Broto";
        preco = 20
        break

    default:
        console.log("Combo não válido")
    }
