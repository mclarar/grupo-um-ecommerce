function Avaliar(estrela,id1,id2,id3,id4,id5,rating,card) {
  var url = window.location;
  url = url.toString();
  url = url.split("index.html");
  url = url[0];

  var s1 = document.getElementById(id1).src;
  var s2 = document.getElementById(id2).src;
  var s3 = document.getElementById(id3).src;
  var s4 = document.getElementById(id4).src;
  var s5 = document.getElementById(id5).src;
  var avaliacao = 0;

  if (estrela == 5) {
    if (s5 == url + "assets/img/star0.png") {
      document.getElementById(id1).src = "assets/img/star1.png";
      document.getElementById(id2).src = "assets/img/star1.png";
      document.getElementById(id3).src = "assets/img/star1.png";
      document.getElementById(id4).src = "assets/img/star1.png";
      document.getElementById(id5).src = "assets/img/star1.png";
      document.getElementById(card).className="com-borda";
      avaliacao = 5;
    } else {
      document.getElementById(id1).src = "assets/img/star1.png";
      document.getElementById(id2).src = "assets/img/star1.png";
      document.getElementById(id3).src = "assets/img/star1.png";
      document.getElementById(id4).src = "assets/img/star1.png";
      document.getElementById(id5).src = "assets/img/star0.png";
      document.getElementById(card).className="card";
      avaliacao = 4;
    }
  }

  //ESTRELA 4
  if (estrela == 4) {
    if (s4 == url + "assets/img/star0.png") {
      document.getElementById(id1).src = "assets/img/star1.png";
      document.getElementById(id2).src = "assets/img/star1.png";
      document.getElementById(id3).src = "assets/img/star1.png";
      document.getElementById(id4).src = "assets/img/star1.png";
      document.getElementById(id5).src = "assets/img/star0.png";
      document.getElementById(card).className="card";
      avaliacao = 4;
    } else {
      document.getElementById(id1).src = "assets/img/star1.png";
      document.getElementById(id2).src = "assets/img/star1.png";
      document.getElementById(id3).src = "assets/img/star1.png";
      document.getElementById(id4).src = "assets/img/star0.png";
      document.getElementById(id5).src = "assets/img/star0.png";
      document.getElementById(card).className="card";
      avaliacao = 3;
    }
  }

  //ESTRELA 3
  if (estrela == 3) {
    if (s3 == url + "assets/img/star0.png") {
      document.getElementById(id1).src = "assets/img/star1.png";
      document.getElementById(id2).src = "assets/img/star1.png";
      document.getElementById(id3).src = "assets/img/star1.png";
      document.getElementById(id4).src = "assets/img/star0.png";
      document.getElementById(id5).src = "assets/img/star0.png";
      document.getElementById(card).className="card";
      avaliacao = 3;
    } else {
      document.getElementById(id1).src = "assets/img/star1.png";
      document.getElementById(id2).src = "assets/img/star1.png";
      document.getElementById(id3).src = "assets/img/star0.png";
      document.getElementById(id4).src = "assets/img/star0.png";
      document.getElementById(id5).src = "assets/img/star0.png";
      document.getElementById(card).className="card";
      avaliacao = 2;
    }
  }

  //ESTRELA 2
  if (estrela == 2) {
    if (s2 == url + "assets/img/star0.png") {
      document.getElementById(id1).src = "assets/img/star1.png";
      document.getElementById(id2).src = "assets/img/star1.png";
      document.getElementById(id3).src = "assets/img/star0.png";
      document.getElementById(id4).src = "assets/img/star0.png";
      document.getElementById(id5).src = "assets/img/star0.png";
      document.getElementById(card).className="card";
      avaliacao = 2;
    } else {
      document.getElementById(id1).src = "assets/img/star1.png";
      document.getElementById(id2).src = "assets/img/star0.png";
      document.getElementById(id3).src = "assets/img/star0.png";
      document.getElementById(id4).src = "assets/img/star0.png";
      document.getElementById(id5).src = "assets/img/star0.png";
      document.getElementById(card).className="card";
      avaliacao = 1;
    }
  }

  //ESTRELA 1
  if (estrela == 1) {
    if (s1 == url + "assets/img/star0.png") {
      document.getElementById(id1).src = "assets/img/star1.png";
      document.getElementById(id2).src = "assets/img/star0.png";
      document.getElementById(id3).src = "assets/img/star0.png";
      document.getElementById(id4).src = "assets/img/star0.png";
      document.getElementById(id5).src = "assets/img/star0.png";
      document.getElementById(card).className="card";
      avaliacao = 1;
    } else {
      document.getElementById(id1).src = "assets/img/star0.png";
      document.getElementById(id2).src = "assets/img/star0.png";
      document.getElementById(id3).src = "assets/img/star0.png";
      document.getElementById(id4).src = "assets/img/star0.png";
      document.getElementById(id5).src = "assets/img/star0.png";
      document.getElementById(card).className="card";
      avaliacao = 0;
    }
  }

  document.getElementById(rating).innerHTML = avaliacao;
}
