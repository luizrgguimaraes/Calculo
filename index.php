<?php

echo '<!DOCTYPE html>
    <html>
        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            <title>Transferenência de Liquidos</title>
            <link href="style.css" rel="stylesheet">
            <script src="js/utils.js"></script>
            <script src="js/Cores.js"></script>
            <script src="js/Print.js"></script>
            <script src="js/Ponto.js"></script>
            <script src="js/Desenho.js"></script>
            <script src="js/p5.min.js"></script>
            <script src="js/Liquido.js"></script>
            <script src="js/Recipiente.js"></script>
            <script src="js/Compartimento.js"></script>
            <script src="js/Calculo.js"></script>
            
        </head>
        <body>
';

//Campos de entrada
echo '<button onclick="draw();">passo</button>';
echo '<button onclick="setup(true);">iniciar</button>';
echo '<button onclick="noLoop();">pause</button>';
echo '<button onclick="setup();">reset</button>';
echo '<button onclick="loop();">continuar</button>';
echo "<h1>Modelos Compartimentais - Centro Universitario SENAC - Santo Amaro - Abril/19</h1>";
echo '<div id="divResultados" style="position:absolute;top:520px;left:10px;border: 0px solid red;height:550px;overflow:auto;">
          <h2>Resultados Parciais</h2>
          <table id="tabelaResultados">
          </table>
</div>';

echo '<div id="divConfigurações" style="position:absolute;top:100px;left:800px;">
        <b style="font-size:30px;">Configurações</b>
        <table id="tableConfiguracoes">
            <tr><th>Passo</th><th>tMax</th><th>iMax</th><th>Estability</th><th>hMin</th><th>hMax</th><th>erroMax</th></tr>
            <tr>
                <td>
                    <input id=passo value=0.001></input>
                </td>
                <td>
                    <input id=tempoMax value=1></input>
                </td>
                <td>
                    <input id=iMax></input>
                </td>
                <td>
                    <input id=estabilidade value=0.0001></input>
                </td>
                <td>
                    <input id=hMin value=0.0001></input>
                </td>
                <td>
                    <input id=hMax value=0.001></input>
                </td>
                <td>
                    <input id=erroMax value=0.0001></input>
                </td>
                <td>
                <input type="checkbox" id="rk6" checked>RK6</input>

                </td>
        
            </tr>
        </table>
            
    
        
        
        </br><b style="font-size:30px;">Compartimentos</b>
        <table id="tableCompartimentos">
            <th>Id</th><th>Volume</th>
        </table>
        <button onclick="inserirCompartimento();">  +  </button>

        </br></br><b style="font-size:30px;">Conexões</b>
        <table id="tableConexoes">
            <th>Origem</th><th>Taxa</th><th>Destino</th>
        </table>
        <button onclick="inserirConexao();">  +  </button>
        
        </br></br><b style="font-size:30px;">Avisos</b>
        

</div>';


echo '<script src="js/compartimentos.js"></script>';
echo '</body></html>';

?>