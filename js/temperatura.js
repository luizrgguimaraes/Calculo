const FRAMERATE = 1;
const CANVASW = 400;
const CANVASH = 700;
const CORFUNDOCANVAS = 50;
class G{}


class Barra{
    constructor(){
        this.matrizT = new Array();
        this.tMaxDivisoes = 10;
        this.xMaxDivisoes = 10;
        this.ht = 1;
        this.hx = 10;
        this.t = new Array();
        this.t[0] = 0;
        this.x = new Array();
        this.x[0] = 0;

        
        //criar Matriz  
        for(var t=0; t <= this.tMaxDivisoes;t++){
            if(t > 0){
                this.t[t] = this.t[t-1] + this.ht;
            }
            this.matrizT[t] = new Array();        
            for(var x=0; x <= this.xMaxDivisoes;x++){
                this.matrizT[t][x] = 0;
                
                if(x == 0){
                    this.matrizT[t][x] = 0;
                }else if(x == this.xMaxDivisoes){
                    this.matrizT[t][x] = 0;
                } 
            }
        }
        
        for(var x=1; x <= this.xMaxDivisoes;x++){
            this.x[x] = this.x[x-1]+this.hx; 
        }        
    }
    
    definirLinha0(){
        try{
            for(var x=1;x<this.xMaxDivisoes;x++){
                this.matrizT[0][x] = temperaturaInicial(this.x[x]);
            
            }        
        
        
        }catch(err){alert('Erro definirLinha0: '+err);}
    }
    
    definirLinha(tempo){
        try{
            for(var x=1;x<this.xMaxDivisoes;x++){
                this.matrizT[tempo][x] = this.matrizT[tempo - 1][x]+ 0.001*(this.matrizT[tempo-1][x-1] - 2* this.matrizT[tempo-1][x] + this.matrizT[tempo-1][x+1]);
            }        
        }catch(err){alert('Erro definirLinha: '+err);}
    }
    
    definirPontos(){
        try{
            this.pontos = new Pontos();
            for(var t in this.matrizT){
                //for(var x in this.matrizT[t]){
                    this.pontos.add(new Ponto(this.t[t],this.matrizT[t][1]));
                //}
            }
            
        }catch(err){alert('Erro definirPontos: '+err);}
    }
    
    
    
    print(){
        
        var head = new Array();
        head.push('');
        for(var x in this.t){
            head.push(this.x[x]);
        }
        Print.tabela(head,true);
        
        for(var t=0; t <= this.tMaxDivisoes;t++){
            var linha = new Array();
            linha.push(this.t[t]);
            for(var x in this.matrizT[t]){
                linha.push(this.matrizT[t][x]);
            }
            Print.tabela(linha);
        }
    
    }
    
    printLinha(t){
        
//         var head = new Array();
//         head.push('');
//         for(var x in this.t){
//             head.push(this.x[x]);
//         }
//         Print.tabela(head,true);
        
        //for(var t=0; t <= this.tMaxDivisoes;t++){
            var linha = new Array();
            linha.push(this.t[t]);
            for(var x in this.matrizT[t]){
                linha.push(this.matrizT[t][x]);
            }
            Print.tabela(linha);
        //}
    
    }
}

function temperaturaInicial(x){
    return x*(x-1);
}


function setup(flag) {
    try{
        frameRate(FRAMERATE);
        createCanvas(CANVASH, CANVASW);
        background(CORFUNDOCANVAS);
        
        G.barra = new Barra();        
        G.barra.definirLinha0();
        //barra.definirColuna0();
        for(var linha=1;linha < G.barra.matrizT.length;linha++ ){
            //G.barra.definirLinha(linha);
        }
        
        
        //barra.pontos.extremos.imprimir();
        G.barra.linha = 1;
        G.barra.print();
        G.barra.pontos = new Pontos();
        
        
        if(!G.extremos){
            G.extremos = new Extremos(null,null,null,null);
        }
        
        
    }catch(err){alert('Erro setup: '+err);}
    
        
}

function draw() {
    try{
        background(CORFUNDOCANVAS);
        //G.barra.printLinha(G.barra.linha);
        
        G.barra.definirLinha(G.barra.linha);
        //alert('i = '+G.barra.linha);
        G.barra.pontos.add(new Ponto(G.barra.t[G.barra.linha],G.barra.matrizT[G.barra.linha][9]));
        Print.tabela([G.barra.pontos.array[G.barra.linha-1].x,G.barra.pontos.array[G.barra.linha-1].y]);
        //G.barra.pontos.setExtremos();
        G.extremos.atualiza(G.barra.pontos.setExtremos());
        G.barra.pontos.setRelative(G.extremos,0,0,0,0);
        Desenho.desenharElipses(G.barra.pontos,255,3);
        G.barra.printLinha(G.barra.linha);
        
        //var amplitude = G.extremos.maxY - G.extremos.minY;
        //alert(amplitude);
        var calor = Math.round(G.barra.matrizT[G.barra.linha][9]*255/G.extremos.maxY);
        alert(calor);
        noStroke();
        //fill(calor,0,0);
        //rect(X,Y,L,H);     
        
        G.barra.linha++;
        if(G.barra.linha > 10){
            noLoop();
        }
    
    }catch(err){alert('Erro draw: '+err);}
}

    


alert('temperatura OK');