function mostrar(id) {

  // limpa todos os textos antes
  document.getElementById('msg1').innerText = "";
  document.getElementById('msg2').innerText = "";
  document.getElementById('msg3').innerText = "";

  // mostra o texto certo
  if (id === 'msg1') {
    document.getElementById('msg1').innerText =
      "O seu jeito de existir é uma das coisas mais bonitas que eu já conheci, é leve, é único, é você sendo você, e isso já é tudo pra mim.";
  }

  if (id === 'msg2') {
    document.getElementById('msg2').innerText =
      "O seu sorriso tem um jeito de iluminar tudo ao redor, principalmente o meu dia, é impossível não se perder nele.";
  }

  if (id === 'msg3') {
    document.getElementById('msg3').innerText =
      "Quando você fala comigo, parece que o mundo fica mais calmo como se tudo fizesse sentido só por você estar ali.";
  }
}
function abrirGalaxia() {
  document.getElementById('galaxia').style.display = 'block';
}

function fecharGalaxia() {
  document.getElementById('galaxia').style.display = 'none';
}

function tocarMusica() {
    var musica = document.getElementById("musica");

    if (musica.paused) {
        
        musica.play().catch(function(error) {
            console.log("Erro ao tocar: ", error);
            
            musica.load();
            musica.play();
        });
    } else {
        musica.pause();
    }
}
