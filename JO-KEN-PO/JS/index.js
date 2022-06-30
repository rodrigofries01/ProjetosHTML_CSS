var contador   = document.getElementById("contar"),
    formPc     = document.getElementById("pchoose"),
    rock       = document.getElementById("pedra"),
    largato       = document.getElementById("largato"),
    spock       = document.getElementById("spock"),
    paper      = document.getElementById("papel"),
    scissors   = document.getElementById("tesoura"),
    choose     = document.getElementById("choose"),
    win        = document.getElementById("win"),
    lose       = document.getElementById("lose"),
    empate     = document.getElementById("draw"),
    resetar    = document.getElementById("reset"),
    back       = document.getElementById("jogar"),
    vitoria    = 0,
    derrota    = 0;

resetar.onclick = function(){
  formPc.reset();
  contador.reset();

}
function winDisappear(){
    choose.style.display="none";
    win.style.display="none";
    lose.style.display="none";
    empate.style.display="none";
  }

function delay(){
  setTimeout(function(){winDisappear()},750);
}

function showWin(){
  choose.style.display="block";
  win.style.display="block";
  delay();
}

function showDraw(){
  choose.style.display="block";
  empate.style.display="block";
  delay();
}

function showLose(){
  choose.style.display="block";
  lose.style.display="block";
  delay();
}

var compare = function(arma){
  
    var computer = [1,2,3,4,5];
    var random = computer[Math.floor(Math.random()*computer.length)];
      
      if (random == 1){
    computer = "Pedra!";
      }else if (random == 2){
    computer = "Papel!";
      }else if(random == 3){
    computer = "Tessoura!";
      }else if(random == 4){
        computer = "Largato!";
      }else {
        computer = "Spock!";
      }
  
  if (arma == "pedra"){
    if (computer == "Pedra!"){
      
      formPc.pc.value = computer;
      contador.empate.value = +contador.empate.value + 1;
      showDraw();
     
    } else if (computer == "Papel!"){
      
       formPc.pc.value = computer;
      contador.lose.value = +contador.lose.value + 1;
      showLose();
      
    
    } else if(computer == "Tessoura!"){
      formPc.pc.value = computer;
      contador.vic.value = +contador.vic.value + 1;
      showWin();
      }else if(computer== "Largato!"){
      formPc.pc.value = computer;
      contador.vic.value = +contador.vic.value + 1;
      showWin();
      }else{
      formPc.pc.value = computer;
      contador.lose.value = +contador.lose.value + 1;
      showLose();
      }
  }
  if (arma == "papel"){
    if (computer == "Pedra!"){
      
      formPc.pc.value = computer;
      contador.vic.value = +contador.vic.value + 1;
      showWin();
      
    } else if (computer == "Papel!"){
      
      formPc.pc.value = computer;
      contador.empate.value = +contador.empate.value + 1;
      showDraw();
      
    } else if(computer == "Tessoura!") {
      formPc.pc.value = computer;
      contador.lose.value = +contador.lose.value + 1; 
      showLose();
    }else if(computer == "Largato!"){
      formPc.pc.value = computer;
      contador.lose.value = +contador.lose.value + 1; 
      showLose();
    }else{
      formPc.pc.value = computer;
      contador.vic.value = +contador.vic.value + 1;
      showWin();
    }
  }
  if (arma == "tesoura"){
    if (computer == "Pedra!"){
      
      formPc.pc.value = computer;
      contador.lose.value = +contador.lose.value + 1;
      showLose();
     
    } else if (computer == "Papel!"){
      
       formPc.pc.value = computer;
      contador.vic.value = +contador.vic.value + 1;
      showWin();
    
    } else if(computer == "Tessoura!"){
      formPc.pc.value = computer;
      contador.empate.value = +contador.empate.value + 1;
      showDraw();
   
    }else if(computer == "Largato!"){
      formPc.pc.value = computer;
      contador.vic.value = +contador.vic.value + 1;
      showWin();
    }else {
       formPc.pc.value = computer;
      contador.lose.value = +contador.lose.value + 1;
      showLose();
    }
  }
  if (arma == "largato"){
    if(computer == "Pedra!"){
       formPc.pc.value = computer;
      contador.lose.value = +contador.lose.value + 1;
      showLose();
    }else if(computer=="Papel!"){
      formPc.pc.value = computer;
      contador.vic.value = +contador.vic.value + 1;
      showWin();
    }else if(computer == "Tessoura!"){
      formPc.pc.value = computer;
      contador.lose.value = +contador.lose.value + 1;
      showLose();
    }else if(computer == "Largato!"){
      formPc.pc.value = computer;
      contador.empate.value = +contador.empate.value + 1;
      showDraw();
    }else{
      formPc.pc.value = computer;
      contador.vic.value = +contador.vic.value + 1;
      showWin();
    }
  }
  if(arma == "spock")
    if(computer == "Pedra!"){
      formPc.pc.value = computer;
      contador.vic.value = +contador.vic.value + 1;
      showWin();
    }else if(computer=="Papel!"){
      formPc.pc.value = computer;
      contador.lose.value = +contador.lose.value + 1;
      showLose();
    }else if(computer == "Tessoura!"){
      formPc.pc.value = computer;
      contador.vic.value = +contador.vic.value + 1;
      showWin();
    }else if(computer == "Largato!"){
      formPc.pc.value = computer;
      contador.lose.value = +contador.lose.value + 1;
      showLose();
    }else{
      formPc.pc.value = computer;
      contador.empate.value = +contador.empate.value + 1;
      showDraw();
    }
}

rock.onclick = function(){
    compare("pedra");
}
paper.onclick = function(){
  compare("papel");
}

scissors.onclick = function(){
  compare("tesoura");
}
largato.onclick = function(){
  compare("largato");
}
spock.onclick = function(){
  compare("spock");
}

                                       
