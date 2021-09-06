
function calcularIMC(){
    altura = document.getElementById('altura').value;
    peso = document.getElementById('peso').value;
    
    let imc;
    imc = (peso)/((altura/100)*(altura/100));
    console.log(imc.toFixed(2))

    console.log(verificarIMC(imc));
    let final;
    final = verificarIMC(imc);



    document.getElementById('resultado').innerHTML = "<img src='../images/tabela.png' class='img-tabela'>" +"<br>"+ "Resultado IMC: " + imc.toFixed(2);
    document.getElementById('container-form').innerHTML = final + "<br>" + "<input type='button'value='VOLTAR' id='btn-retorno' onclick='location.reload();' class='btn-imc'>";
    

}
function verificarIMC(imc){
    
        if(imc<18.5){
            mensagem = "Peso Baixo";
        }else{
            if(imc>=18.5 && imc<25){
                mensagem = "Peso Normal";
            }else{
                if(imc>=25 && imc<30){
                    mensagem = "Sobrepeso";
                }else{
                    if(imc>=30 && imc<35){
                        mensagem = "Obesidade(Grau I)";
                    }else{
                        if(imc>=35 && imc<40){
                            mensagem = "Obesidade Severa(Grau II)"
                        }else{
                            if(imc>=40){
                                mensagem = "Obesidade Mórbida(Grau III)"
                            }
                        }
                    }
                }
            }
        }

    return mensagem;

}