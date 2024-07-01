// Initial Data
let operacao: string | any = null;
let valor1: number | any = null;
let valor2: number | any = null;


// Funções
function adicionarNumero(n: string) {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value += n;
}

function sinalOperacao(op: string){
    const display = document.getElementById('display') as HTMLInputElement;
    valor1 = parseFloat(display.value);
    operacao = op;
    display.value = '';
}

function calcular(){
    const display = document.getElementById('display') as HTMLInputElement;
    valor2 = parseFloat(display.value);

    if(valor1 !== null && operacao !== null && valor2 !== null){
        let resultado: number;

        switch(operacao) {
            case '+':
                resultado = valor1 + valor2;
            break;

            case '-':
                resultado = valor1 - valor2;
            break;

            case '*':
                resultado = valor1 * valor2;
            break;
            
            case '/':
                if(valor2 === 0){
                    alert('Você não pode dividir por 0!');
                    limparDisplay();
                }
                resultado = valor1 / valor2;
            break;

            default:
                return;
            break;
        }

        display.value = resultado.toString();
        valor1 = null;
        valor2 = null;
        operacao = null;
    }

}

function limparDisplay() {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = '';
}