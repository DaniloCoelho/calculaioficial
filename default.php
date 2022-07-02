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
                <label class="logo">Calcule aí!</label>
                <ul>
                    <li>
                        <a href="index.html">Inicio</a>
                    </li>
                    <li><a>Calculadoras&#9662;</a>
                        <ul>
                            <li class="label_dropdown">Financeiro</li><br>
                            
                            <li style="min-width: 200px;"><a href="financiamento.html">Financiamentos</a></li><br>
                            
                            <li style="min-width: 200px;"><a href="valor_futuro.html">Valor Futuro de capital</a></li><br>
                            <li style="min-width: 200px;"><a href="combustivel.html">Autonomia / Valor de combustível</a></li><br>
                            <li style="min-width: 200px;"><a href="precificar.html">Precificar seu trabalho</a></li><br>
                            <li class="label_dropdown"> Geometria </li>
                            
                            <li style="min-width: 200px;"><a href="cilindro.html">Cilindro</a></li><br>
                            <li style="min-width: 200px;"><a href="circulo.html">Circulo</a></li><br>
                            <li style="min-width: 200px;"><a href="cone.html">Cone</a></li><br>
                            <li style="min-width: 200px;"><a href="pitagoras2.html">Triângulo (sen ,cos ,tan)</a></li><br>
                            <li class="aparecer_1"><a href="metodologias.html">Metodologias</a></li>
                            
                            
                        </ul>
                        
                    </li>
                    <li class="aparecer"><a href="metodologias.html">Metodologias</a></li>
                    <li><a href="contato.html">Contato</a></li>
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