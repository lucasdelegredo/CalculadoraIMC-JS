# +Saúde
Projeto de estudo de criação de uma página utilizando HTML, CSS e JAVASCRIPT para uma calculadora de IMC

## Objetivos do Projeto
O objetivos do projeto foi exercitar alguns conhecimentos em Javascript interagindo com páginas em HTML e CSS

## Aprendizados obtidos

- Integrar HTML com um CSS externo
- Integrar a página com um script externo
- Tornar a página dinâmica que atualiza em tempo real o valor dos resultados das funções
- utilizar conceitos de FUNCTIONS
- Aprender o comando INNERHTML e GetElementById
- E exercitar conceitos de Lógica e Condicional usando Javascript

## Pontos importante do projeto
Um dos pontos importantes a ser citado foi o conceito do InnerHTML utilizado no JAVASCRIPT para a criação de uma página dinâmica que não precisaria recarregar outra página para mostrar o programa funcionando, e sim atualizaria na mesma página as informações e resultado do cálculo do IMC

## Sobre o projeto

Chamarei esse projeto de "+Saúde" pois estaria aberta a possíveis atualizações e exercitar conceitos em projetos que envolvam a área de saúde

![logo](https://user-images.githubusercontent.com/74476423/132253994-fbc52680-ea71-416f-b539-58c172ea13ff.png)

Durante a criação do projeto foi pensado em criar uma calculadora de IMC (Índice de Massa Corporal), com isso trataria-se de um formulário a ser preenchido com altura e peso da pessoa que deseja calcular. Dessa forma criei um design de página através do PHOTOSHOP:

![TELA1](https://user-images.githubusercontent.com/74476423/132253976-aa54b985-7a29-4344-8262-d60c1b36e85a.png)

 Esta seria a tela inicial do nosso sistema web, dessa forma teriamos os campos a serem preenchidos pelo usuário que deseja calcular.
 
 Conforme o usuário inserisse todos os dados e clicasse  no botão "CALCULAR" o programa executaria o calculo e retornaria para ele na mesma página, assim:
 
 ![TELA2](https://user-images.githubusercontent.com/74476423/132254131-69088755-ed06-4e7a-9858-d8bbb19ef59a.PNG)

Como podemos ver o formulário anteriormente existente seria escondido, e apenas veríamos agora o resultado do cálculo, uma mensagem referente ao resultado, e uma tabela de referência do IMC.

Assim caso o usuário pretendesse calcular novamente um outro IMC de outra pessoa, ou então alterar algum valor, ele poderia clicar no botao "VOLTAR" que faria a função de recarregar a página, dessa forma o formulário de preenchimento apareceria novamente e os resultados seria ocultados, pois a página recarregou.


## Agora, falando de códigos...

A respeito dos códigos, criei um arquivo separado chamado "main.js" e nele temos as principais funções criadas e utilizados no +Saúde. Dessa forma, criei uma função responsável por calcular o IMC, assim que o usuário clicar no botão ele executaria essa função. Nela, os valores que foram preenchidos nos campos de altura e peso são capturados e armanezados, com isso foi possível realizar o calculo de IMC

![image](https://user-images.githubusercontent.com/74476423/132254592-84a52eeb-4175-4961-a77a-f2734cdf7003.png)

Depois disso é válido lembrar que precisamos verificar o valor de resultado para compararmos com a tabela de referência. Assim criei uma outra função de verificarIMC() passando como parâmetro o imc obtido pela outra função, assim ele faria diversas comparações com condicionais e retornaria a mensagem final baseado na categoria do IMC do usuário. 

![image](https://user-images.githubusercontent.com/74476423/132254678-d752db0b-8bd7-46de-9069-707bbc4b5537.png)

Depois disso, podemos perceber que na função calcularIMC() eu chamei a função verificarIMC(imc) dentro dela, pois exatamente após o resultado ser dado executamos uma rotina de condicionais para verificar a categoria do IMC. Após esses passos já temos o resultado do IMC e a CATEGORIA do imc, então restaria dispor essas informações no HTML, e para isso utlizei o comando INNERHTML pegando como referencia um ID dentro da estrutura do HTML.

![image](https://user-images.githubusercontent.com/74476423/132254814-af940bbc-c3e7-4e97-ac56-96c23cd312d5.png)

Com isso inseri a tebela de imc dentro de uma label juntamente com o IMC resultado arredondado em duas casas decimais (.toFixed(2))
E também foi inserido a mensagem da categoria do resultado do IMC na div onde estaria o FORM. Juntamente com a mensagem foi colocado um botão em tag input html que executa a função do Javascript que recarrega a página novamente, esse seria o botão "VOLTAR" do programa.

Por fim, esse foi o programa e seus códigos!
