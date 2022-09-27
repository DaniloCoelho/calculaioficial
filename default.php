<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="estilo.css">
    <link rel="stylesheet" href="slide.css">
    <link rel="stylesheet" href="menudropdown.css">
    <title>Calcular</title>
</head>
<body>
    <div class="fundo" id="fundo">
    <nav class="web">
            <a href="#" class="logo">Calcule aí!</a>
            <ul class="ulprincipal">
                <li class="liprincipal">
                    <a href="default.php" class="dropcalculadoras">Início</a>
                </li>
                <li class="liprincipal">
                    <a class="dropcalculadoras">Calculadoras&#9662;</a>
                    <ul class="ulsecundario">
                        <li class="label_dropdown">Financeiro</li>
                        <li class="lisecundario"><a href="financiamento.html">Financiamentos</a></li>
                        <li class="lisecundario"><a href="valor_futuro.html">Valor Futuro de capital</a></li>
                        <li class="lisecundario"><a href="combustivel.html">Autonomia / Valor de combustível</a></li>
                        <li class="lisecundario"><a href="precificar.html">Precificar seu trabalho</a></li>
                        <li class="label_dropdown"> Geometria </li>
                        <li class="lisecundario"><a href="cilindro.html">Cilindro</a></li>
                        <li class="lisecundario"><a href="circulo.html">Circulo</a></li>
                        <li class="lisecundario"><a href="cone.html">Cone</a></li>
                        <li class="lisecundario"><a href="pitagoras2.html">Triângulo (sen ,cos ,tan)</a></li>
                        <li class="lisecundario"><a href="piramidequadrada.html">Pirâmide quadrada</a></li>
                        <li class="label_dropdown"> Elétrica / Eletrônica </li>
                        <li class="lisecundario"><a href="leideohm.html">Potência /Tensão /Corrente</a></li>
                        <li class="lisecundario"><a href="resistividade.html">Resistência de um condutor</a></li>
                    </ul>
                </li>
                    
                <li class="liprincipal">
                    <a class="dropcalculadoras">Conversores&#9662;</a>
                    <ul class="ulsecundario">
                        <li class="lisecundario"><a href="medidas_comprimento.html">Medidas de comprimento</a></li>
                        <li class="lisecundario"><a href="conversor_de_bases.html">Bases númericas</a></li>
                        <li class="lisecundario"><a href="conversor_de_temperatura.html">Medidas de Temperatura</a></li>
                        <li class="lisecundario"><a href="conversor_de_peso.html">Medidas de Peso</a></li>
                    </ul>
                </li>
                <li class="liprincipal">
                    <a href="contato.html" class="dropcalculadoras">Contato</a>
                </li>
            
            </ul>
        </nav>
        <nav class="mobile">
            <input type="checkbox" name="radio-btn" class="radio">
            <img src="img/icone menu.png" class="menu">
            <img src="img/icone_menu2.png" class="menuv" > 
            <a href="#" class="logo">Calcule aí!</a>
            <ul class="ulprincipal">
                <li class="liprincipal">
                    <a href="default.php" class="dropcalculadoras">Início</a>
                </li>
                <li class="liprincipal">
                    <a class="dropcalculadoras">Calculadoras&#9662;</a>
                    <ul class="ulsecundario">
                        <li class="label_dropdown">Financeiro</li>
                        <li class="lisecundario"><a href="financiamento.html">Financiamentos</a></li>
                        <li class="lisecundario"><a href="valor_futuro.html">Valor Futuro de capital</a></li>
                        <li class="lisecundario"><a href="combustivel.html">Autonomia / Valor de combustível</a></li>
                        <li class="lisecundario"><a href="precificar.html">Precificar seu trabalho</a></li>
                        <li class="label_dropdown"> Geometria </li>
                        <li class="lisecundario"><a href="cilindro.html">Cilindro</a></li>
                        <li class="lisecundario"><a href="circulo.html">Circulo</a></li>
                        <li class="lisecundario"><a href="cone.html">Cone</a></li>
                        <li class="lisecundario"><a href="pitagoras2.html">Triângulo (sen ,cos ,tan)</a></li>
                        <li class="lisecundario"><a href="piramidequadrada.html">Pirâmide quadrada</a></li>
                        <li class="label_dropdown"> Elétrica / Eletrônica </li>
                        <li class="lisecundario"><a href="leideohm.html">Potência /Tensão /Corrente</a></li>
                        <li class="lisecundario"><a href="resistividade.html">Resistência de um condutor</a></li>
                    </ul>
                </li>
                    
                <li class="liprincipal">
                    <a class="dropcalculadoras">Conversores&#9662;</a>
                    <ul class="ulsecundario">
                        <li class="lisecundario"><a href="medidas_comprimento.html">Medidas de comprimento</a></li>
                        <li class="lisecundario"><a href="conversor_de_bases.html">Bases númericas</a></li>
                        <li class="lisecundario"><a href="conversor_de_temperatura.html">Medidas de Temperatura</a></li>
                        <li class="lisecundario"><a href="conversor_de_peso.html">Medidas de Peso</a></li>
                    </ul>
                </li>
                <li class="liprincipal">
                    <a href="contato.html" class="dropcalculadoras">Contato</a>
                </li>
            
            </ul>

        </nav>
        <div class="linha"></div>
        <div class="div_central">
            <div class="div_anuncio">
                <!--anuncio-->
            </div>
            <div class="calculadora" id="calculadora" style="background-color: rgb(255, 255, 255);box-shadow:none;" >
            <div class="slider">
        <div class="slides" >

            <input type="radio" name="radio-btn" id="radio1">
            <input type="radio" name="radio-btn" id="radio2">
            <input type="radio" name="radio-btn" id="radio3">
            <input type="radio" name="radio-btn" id="radio4">

            <div class="slide first">
                <img src="img/calcaporte.png" alt="aporte">
                <label for="img/calcaporte.png">aaaa</label>
            </div>
            <div class="slide">
                <img src="img/calccombus.png" alt="aporte2">
            </div>
            <div class="slide">
                <img src="img/calcfinan.png" alt="aporte3">
            </div>
            <div class="slide">
                <img src="img/calctrigono.png" alt="aporte4">
            </div>

            <div class="navigation-auto">
                <div class="autobtn1"></div>
                <div class="autobtn2"></div>
                <div class="autobtn3"></div>
                <div class="autobtn4"></div>   
            </div>
            <div class="manual-navigation">
                <label for="radio1" class="manual-btn"></label>
                <label for="radio2" class="manual-btn"></label>
                <label for="radio3" class="manual-btn"></label>
                <label for="radio4" class="manual-btn"></label>
            </div>
        </div>
        

    </div>
                
            <div class="div_anuncio">
                <!--anuncio-->
            </div>

        </div>
        <div class="linha"></div>
        <div class="rodape" style="margin: auto;">
            <p>Este site/ferramenta não se responsabiliza por danos a qualquer parte , pois esta ferramenta serve como simulação e com valores , se essa simulação for para uso profissional ou comercial é recomendado a consulta de um profissional especializado .</p>
        </div>
        <div class="linha"></div>
        <div class="div_anucio_rodape">
            <!--anuncio-->
        </div>


    </div>
    <script src="logica.js"></script>
    <script src="slide.js"></script>
</body>
</html>