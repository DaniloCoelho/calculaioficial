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
    <nav class="web" style="z-index:10 ; clear: both;">
            <a href="default.php" class="logo">
                Calcule aí!</a>
            <ul class="ulprincipal">
                <li class="liprincipal">
                    <a href="default.php" class="dropcalculadoras">Início</a>
                </li>
                <li class="liprincipal">
                    <a class="dropcalculadoras">Calculadoras&#9662;</a>
                    <ul class="ulsecundario">
                        <li class="label_dropdown">Financeiro</li>
                        <a href="financiamento.html">
                            <li class="lisecundario">
                                Financiamentos</li>
                            <div class="borda_abaixo"></div>
                        </a>
                        
                        <a href="valor_futuro.html">
                            <li class="lisecundario">Valor Futuro de capital</li>
                            <div class="borda_abaixo"></div>
                        </a>
                        
                        <a href="combustivel.html">
                            <li class="lisecundario">Autonomia / Valor de combustível</li>
                            <div class="borda_abaixo"></div>
                        </a>
                        
                        <a href="precificar.html">
                            <li class="lisecundario">Precificar seu trabalho</li>
                            <div class="borda_abaixo"></div>
                        </a> 
                        <li class="label_dropdown"> Geometria </li>
                        <a href="cilindro.html">
                            <li class="lisecundario">Cilindro</li>
                        </a>
                        <div class="borda_abaixo"></div>
                        <a href="circulo.html">
                            <li class="lisecundario">Circulo</li>
                        </a>
                        <div class="borda_abaixo"></div>
                        <a href="cone.html">
                            <li class="lisecundario">Cone</li>
                            <div class="borda_abaixo"></div>
                        </a>
                        
                        <a href="pitagoras2.html">
                            <li class="lisecundario">Triângulo (sen ,cos ,tan)</li>
                            <div class="borda_abaixo"></div>
                        </a>
                        <a href="piramidequadrada.html">
                            <li class="lisecundario">Pirâmide quadrada</li> 
                            <div class="borda_abaixo"></div>  
                        </a>
                        <li class="label_dropdown"> Elétrica / Eletrônica</li>
                        <a href="leideohm.html">
                            <li class="lisecundario">Potência /Tensão /Corrente</li>
                            <div class="borda_abaixo"></div> 
                        </a>
                        <a href="resistividade.html">
                            <li class="lisecundario">Resistência de um condutor</li>
                        </a>
                        
                    </ul>
                </li>
                    
                <li class="liprincipal">
                    <a class="dropcalculadoras">Conversores&#9662;</a>
                    <ul class="ulsecundario">
                        <a href="medidas_comprimento.html">
                            <li class="lisecundario">Medidas de comprimento</li>
                            <div class="borda_abaixo"></div> 
                        </a>
                        <a href="conversor_de_bases.html">
                            <li class="lisecundario">Bases númericas</li>
                            <div class="borda_abaixo"></div> 
                        </a>
                        <a href="conversor_de_temperatura.html">
                            <li class="lisecundario">Medidas de Temperatura</li>
                            <div class="borda_abaixo"></div> 
                        </a>
                        <a href="conversor_de_peso.html">
                            <li class="lisecundario">Medidas de Peso</li>
                            
                        </a>
                        
                    </ul>
                </li>
                <li class="liprincipal">
                    <a href="contato.html" class="dropcalculadoras">Contato</a>
                </li>
            
            </ul>
        </nav>
        <nav class="mobile" style="z-index:10 ; clear: both;">
                <input type="checkbox" name="radio-btn" class="radio">
                <img src="img/icone menu.png" class="menu">
                <img src="img/icone_menu2.png" class="menuv" >
                <a href="default.php" class="logo">Calcule aí!</a>
            
            <ul class="ulprincipal">
                <a href="default.php" class="dropcalculadoras">
                    <li class="liprincipal">Início</li>
                    
                </a>
                
                <li class="liprincipal" for="radio">
                    <input type="checkbox" name="radio-btn" class="radioI" id="radio">
                    <a class="dropcalculadoras" >
                        <label for="radio">Calculadoras &#9662;</label> 
                        
                    </a>
                    <ul class="ulsecundarioI">
                        <li class="label_dropdown">Financeiro</li>
                        <div class="borda_abaixo"></div>
                        <a href="financiamento.html">
                            <li class="lisecundario">
                                Financiamentos
                            </li>
                        </a>
                        <a href="valor_futuro.html">
                            <li class="lisecundario">Valor Futuro de capital</li>
                        </a>
                        <a href="combustivel.html">
                            <li class="lisecundario">Autonomia / Valor de combustível</li>
                        </a>
                        <a href="precificar.html">
                            <li class="lisecundario">Precificar seu trabalho</li>
                        </a>
                        <li class="label_dropdown"> Geometria </li>
                        <div class="borda_abaixo"></div>
                        <a href="cilindro.html">
                            <li class="lisecundario">Cilindro</li>
                        </a>
                        <a href="circulo.html">
                            <li class="lisecundario">Circulo</li>
                        </a>
                        <a href="cone.html">
                            <li class="lisecundario">Cone</li>
                        </a>
                        <a href="pitagoras2.html">
                            <li class="lisecundario">Triângulo (sen ,cos ,tan)</li>
                        </a>
                        <a href="piramidequadrada.html">
                            <li class="lisecundario">Pirâmide quadrada</li>
                        </a>
                        <li class="label_dropdown"> Elétrica / Eletrônica </li>
                        <div class="borda_abaixo"></div>
                        <a href="leideohm.html">
                            <li class="lisecundario">Potência /Tensão /Corrente</li>
                        </a>
                        <a href="resistividade.html">
                            <li class="lisecundario">Resistência de um condutor</li>
                        </a>
                        
                    </ul>
                </li>
                    
                <li class="liprincipal">
                    <input type="checkbox" name="radio-btn" class="radioI" id="radioII">
                    <a class="dropcalculadoras">
                        <label for="radioII">Conversores&#9662;</label>
                        
                    </a>
                    <ul class="ulsecundarioI">
                        <a href="medidas_comprimento.html">
                            <li class="lisecundario">Medidas de comprimento</li>
                        </a>
                        <a href="conversor_de_bases.html">
                            <li class="lisecundario">Bases númericas</li>
                        </a>
                        <a href="conversor_de_temperatura.html">
                            <li class="lisecundario">Medidas de Temperatura</li>
                        </a>
                        <a href="conversor_de_peso.html">
                            <li class="lisecundario">Medidas de Peso</li>
                        </a>
                        
                    </ul>
                </li>
                <li class="liprincipal">
                    <a href="contato.html" class="dropcalculadoras">Contato
                        
                    </a>
                </li>
            
            </ul>

        </nav>
                
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