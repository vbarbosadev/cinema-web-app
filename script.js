const memoria = {
  casal: "Vinicius & Eduarda",
  titulo: "La vem algumas fotos nossas e varias engraçadas!",
  subtitulo: "Uma lembranca simples, mas cheia de amor, risadas e saudade.",
  fraseImpacto: "Porque alguns filmes acabam, mas o que a gente vive fica passando no coracao.",
  filme: "Documentario do Louis e todos os filmes que viraram desculpa para ficar perto",
  cinema: "Cinema, UF, ferias, comida boa e qualquer lugar com voce",
  local: "Onde a gente estiver junto",
  horario: "Sempre que bate saudade",
  momentoFavorito: "Cada vez que eu fui so para te ver, mesmo que fosse por dois horarios, e acabava querendo passar o dia inteiro com voce.",
  mensagem: [
    "Oiii, obrigado pelos melhores momentos da minha vida, voce faz isso aqui ser muito melhor e mais especial e eu nao trocaria isso tudo por nada!!!",
    "Voce e incrivel, e me faz ser a pessoa mais feliz do mundo sem precisar de nada, muito obrigado mesmo por me ama tanto e tambem me deixar te amar na mesma itensidade (aaah, e tambem por me aguentar tanto tempo, voce e uma guerreira!!)",
    "Voce e o amor da minha vida, e tudo que eu mais quero e te fazer a mulher mnais feliz e amada do mundo, e que a gente viva muuuuito mais coisas juntas (no rio pro show do louis quem sabe...)!!!",
    "Eu te amo muito meu amor, você é perfeita!!!",
    "— do seu namorado \"lindo\" que ama muuuuuito você 🥺"
  ],
  fotos: [
    {
      src: "assets/images/if.jpg",
      legenda: "A gente no IF, era tudo tao mais fácil que saudade!!!.",
      alt: "Vinicius e Eduarda abracados no comeco da historia"
    },
    {
      src: "assets/images/louis-doc.jpg",
      legenda: "O dia que a gente foi ver o documentario do Louis, com uma chata falando um monte.",
      alt: "Vinicius e Eduarda no dia do documentario do Louis"
    },
    {
      src: "assets/images/uf.jpg",
      legenda: "A gente na UF, eu indo so pra ver voce por dois horarios (eu sei essa foto não é a melhor kkkk)",
      alt: "Vinicius e Eduarda juntos na UF"
    },
    {
      src: "assets/images/olho-no-olho.jpg",
      legenda: "Você olhando pra mim que fofo (nem parece que quer me matar!!! de beijinhos).",
      alt: "Vinicius e Eduarda se olhando durante as ferias"
    },
    {
      src: "assets/images/hotel.jpg",
      legenda: "A gente indo comer uma comida muuuuuuuito gostosa. Mds que saudade.",
      alt: "Vinicius e Eduarda juntos antes de comer uma comida muito gostosa"
    },
    {
      src: "assets/images/no-cinema-3.jpg",
      legenda: "Nossa ultima vez vendo filme com foto.",
      alt: "Vinicius e Eduarda na ultima vez vendo filme com foto"
    },
    {
      src: "assets/images/no-cinema-3-l.jpg",
      legenda: "De novo só que essa é mais legal!!!.",
      alt: "Vinicius e Eduarda fazendo careta na ultima vez vendo filme com foto"
    },
    {
      src: "assets/images/carnaval.jpg",
      legenda: "A gente no carnavaaaal (eu amo essa foto)",
      alt: "Vinicius e Eduarda abracados no comeco da historia"
    }
  ],
  timeline: [
    "O comeco de tudo.",
    "O documentario do Louis e a chata falando um monte.",
    "A UF, os dois horarios e o dia inteiro que eu queria passar com voce.",
    "O filme nas ferias.",
    "A comida muuuuuuuito gostosa que da saudade ate hoje.",
    "Nossa ultima vez vendo filme com foto."
  ],
  mensagemFinal: "Que ainda venham muitos filmes, muitas fotos e muitos dias em que o melhor lugar seja do seu lado.",
  rodape: "Feito com carinho para Vinicius e Eduarda. \u2665"
};

function setTextFields() {
  document.querySelectorAll("[data-field]").forEach((element) => {
    const field = element.dataset.field;
    element.textContent = memoria[field] || "";
  });
}

function renderMensagem() {
  const container = document.querySelector("#mensagem-texto");
  container.innerHTML = "";

  memoria.mensagem.forEach((texto) => {
    const paragraph = document.createElement("p");
    paragraph.textContent = texto;
    container.appendChild(paragraph);
  });
}

function renderGaleria() {
  const container = document.querySelector("#galeria-fotos");
  container.innerHTML = "";

  memoria.fotos.forEach((foto) => {
    const figure = document.createElement("figure");
    figure.className = "gallery__figure reveal";

    const media = document.createElement("div");
    media.className = "gallery__media";

    const image = document.createElement("img");
    image.src = foto.src;
    image.alt = foto.alt;
    image.loading = "lazy";
    image.decoding = "async";
    image.addEventListener("error", () => {
      image.classList.add("is-hidden");
      media.setAttribute("aria-label", foto.alt);
    });

    const caption = document.createElement("figcaption");
    caption.textContent = foto.legenda;

    media.appendChild(image);
    figure.append(media, caption);
    container.appendChild(figure);
  });
}

function renderTimeline() {
  const container = document.querySelector("#timeline");
  container.innerHTML = "";

  memoria.timeline.forEach((item) => {
    const li = document.createElement("li");
    const text = document.createElement("span");
    text.textContent = item;
    li.appendChild(text);
    container.appendChild(li);
  });
}

function setupBackToTop() {
  document.querySelector("#voltar-topo").addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

setTextFields();
renderMensagem();
renderGaleria();
renderTimeline();
setupBackToTop();
