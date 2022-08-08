<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="estilo.css">
    <link rel="stylesheet" href="slide.css">
    <title>Calcular</title>
</head>
<body>
    <div class="fundo" id="fundo">
        <div>
                <nav style="z-index:10 ; clear: both;">
                    <a href="default.php" class="logo" style="text-decoration: none;"><label class="logo">Calcule aí!</label></a>
                    
                    <ul>
                        <li>
                            <a href="default.php" id="inicio">Inicio</a>
                        </li>
                        <li><a>Calculadoras&#9662;</a>
                            <ul>
                                <li class="label_dropdown">Financeiro</li>
                                
                                <li style="min-width: 250px;"><a href="financiamento.html">Financiamentos</a></li>
                                
                                <li style="min-width: 250px;"><a href="valor_futuro.html">Valor Futuro de capital</a></li>
                                <li style="min-width: 250px;"><a href="combustivel.html">Autonomia / Valor de combustível</a></li>
                                <li style="min-width: 250px;"><a href="precificar.html">Precificar seu trabalho</a></li>
                                <li class="label_dropdown"> Geometria </li>
                                
                                <li style="min-width: 250px;"><a href="cilindro.html">Cilindro</a></li>
                                <li style="min-width: 250px;"><a href="circulo.html">Circulo</a></li>
                                <li style="min-width: 250px;"><a href="cone.html">Cone</a></li>
                                <li style="min-width: 250px;"><a href="pitagoras2.html">Triângulo (sen ,cos ,tan)</a></li>
                                <li style="min-width: 250px;"><a href="piramidequadrada.html">Pirâmide quadrada</a></li>
                                <li class="label_dropdown"> Elétrica / Eletrônica </li>
                                <li style="min-width: 250px;"><a href="leideohm.html">Potência /Tensão /Corrente</a></li>
                                <li style="min-width: 250px;"><a href="resistividade.html">Resistência de um condutor</a></li>
                                <li class="aparecer_1"><a href="metodologias.html">Metodologias</a></li>  
                            </ul>  
                        </li>
                        <li><a>Conversores&#9662;</a>
                            <ul style="margin-left: -150px;">
                                <li class="label_dropdown"> Conversores</li>
                                <li style="min-width: 250px; "><a href="medidas_comprimento.html">Medidas de comprimento</a></li>
                                <li style="min-width: 250px;"><a href="conversor_de_bases.html">Conversor de bases</a></li>
                                <!--<li style="min-width: 250px;"><a href="combustivel.html">Conversor
                                </a></li>
                                <li style="min-width: 250px;"><a href="precificar.html">xxxx</a></li>-->
                                
                            </ul>  
                        </li>
                        <li><a href="contato.html">Contato</a></li>
                    </ul>

                </nav>
        </div>
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