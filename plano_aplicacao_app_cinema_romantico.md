# Plano completo da aplicação web: QR Code Amoroso de Cinema

## 1. Objetivo da aplicação

Criar uma aplicação web simples, responsiva e romântica, acessada por meio de um QR Code. Ao escanear o QR Code, a pessoa será direcionada para uma página especial contendo informações sobre uma ida ao cinema, fotos do casal, uma mensagem afetiva e detalhes personalizados da experiência.

A aplicação deve ser leve, visualmente agradável, fácil de hospedar e acessível pelo celular sem necessidade de login.

---

## 2. Ideia principal

A aplicação funcionará como uma lembrança digital de uma ida ao cinema. A pessoa escaneia o QR Code e abre uma página com:

- Título romântico personalizado.
- Data do encontro.
- Nome do cinema ou local.
- Filme assistido.
- Pequeno texto contando a memória daquele dia.
- Galeria com fotos das duas pessoas.
- Frases românticas ou mensagens escondidas.
- Elementos visuais relacionados a cinema e amor.

Exemplo de conceito:

> “Nosso dia no cinema”  
> Uma página feita para lembrar o dia em que assistimos juntos a um filme especial.

---

## 3. Público-alvo

A aplicação é feita para uma pessoa específica, em contexto romântico. O uso esperado é individual e emocional, não comercial.

A experiência deve parecer um presente digital, não apenas uma página informativa.

---

## 4. Tipo de aplicação

Aplicação web estática.

Não é necessário backend, banco de dados ou autenticação na primeira versão.

A aplicação pode ser feita com:

- HTML
- CSS
- JavaScript simples

Também pode ser feita com React, caso o agente prefira uma estrutura mais componentizada. Porém, para simplicidade, a recomendação principal é usar HTML, CSS e JavaScript puro.

---

## 5. Requisitos funcionais

### RF01 — Acesso via QR Code

A aplicação deve ser acessada por meio de uma URL pública. Essa URL será transformada em QR Code.

Quando a pessoa escanear o QR Code, ela deve ser levada diretamente para a página principal da aplicação.

### RF02 — Página inicial romântica

A página inicial deve exibir uma seção de abertura com:

- Título principal.
- Subtítulo afetivo.
- Data da ida ao cinema.
- Pequena frase de impacto.

Exemplo:

```text
Nosso dia no cinema
Uma lembrança simples, mas cheia de amor.
15 de abril de 2026
```

### RF03 — Informações do encontro

A aplicação deve exibir uma seção com os detalhes da ida ao cinema:

- Nome do filme.
- Nome do cinema.
- Cidade ou local.
- Data.
- Horário, se disponível.
- Observação especial sobre o dia.

Exemplo:

```text
Filme: Ainda Estou Aqui
Cinema: Cinépolis Natal Shopping
Data: 15/04/2026
Momento favorito: quando saímos comentando o filme juntos.
```

### RF04 — Texto romântico personalizado

A aplicação deve conter uma seção de texto, escrita como uma carta curta ou mensagem carinhosa.

O texto deve ser dividido em parágrafos pequenos, para leitura confortável no celular.

Exemplo:

```text
Esse dia foi especial porque não foi apenas sobre assistir a um filme.
Foi sobre estar ao seu lado, dividir risadas, olhares e pequenos momentos que ficam guardados.
```

### RF05 — Galeria de fotos

A aplicação deve mostrar fotos das duas pessoas no dia do cinema.

A primeira versão deve aceitar pelo menos duas fotos.

A galeria deve:

- Ser responsiva.
- Funcionar bem em telas pequenas.
- Ter bordas arredondadas.
- Ter legenda opcional para cada foto.
- Manter boa proporção das imagens.

### RF06 — Linha do tempo do encontro

A aplicação pode conter uma pequena linha do tempo com momentos do dia.

Exemplo:

```text
1. Escolhemos o filme.
2. Chegamos ao cinema.
3. Tiramos nossas fotos.
4. Assistimos juntos.
5. Saímos comentando tudo.
```

Essa seção é opcional, mas recomendada para deixar a experiência mais completa.

### RF07 — Mensagem final

A página deve terminar com uma mensagem romântica curta.

Exemplo:

```text
Que esse seja apenas mais um dos muitos momentos lindos que ainda vamos viver juntos.
```

### RF08 — Botão de ação opcional

Pode existir um botão ao final da página, como:

- “Ver nossas fotos de novo”
- “Voltar ao início”
- “Ler a mensagem novamente”

O botão pode usar JavaScript para rolar a página para o topo.

---

## 6. Requisitos não funcionais

### RNF01 — Responsividade

A aplicação deve ser pensada primeiro para celular, pois o acesso será feito via QR Code.

Deve funcionar bem em:

- Celulares pequenos.
- Celulares grandes.
- Tablets.
- Desktop.

### RNF02 — Simplicidade

A aplicação deve ser simples de abrir e rápida de carregar.

Não deve exigir:

- Login.
- Cadastro.
- Instalação.
- Permissão especial.

### RNF03 — Performance

As imagens devem ser otimizadas antes do deploy.

Recomendações:

- Usar imagens em `.jpg`, `.jpeg`, `.png` ou `.webp`.
- Evitar imagens muito pesadas.
- Redimensionar fotos para no máximo 1200px de largura.

### RNF04 — Privacidade

Como a aplicação contém fotos pessoais, o link deve ser compartilhado apenas com a pessoa desejada.

A página será pública se hospedada em GitHub Pages, Netlify ou Vercel sem autenticação.

### RNF05 — Compatibilidade

A aplicação deve funcionar nos navegadores modernos:

- Google Chrome.
- Safari.
- Edge.
- Firefox.
- Navegadores móveis Android/iOS.

---

## 7. Estrutura visual da aplicação

A página pode ser organizada nas seguintes seções:

```text
[Hero / Capa]
    Título romântico
    Subtítulo
    Data
    Ícone ou emoji de cinema/coração

[Sobre o dia]
    Filme
    Cinema
    Data
    Local
    Pequeno resumo

[Mensagem]
    Texto romântico personalizado

[Galeria]
    Foto 1 + legenda
    Foto 2 + legenda
    Outras fotos opcionais

[Linha do tempo]
    Momentos importantes do encontro

[Mensagem final]
    Frase de encerramento
    Botão para voltar ao topo
```

---

## 8. Identidade visual sugerida

### Paleta de cores

Sugestão de cores:

```text
Fundo principal: #fff5f7
Rosa claro: #ffd6e0
Rosa médio: #ff8fab
Vermelho suave: #e63946
Texto principal: #2b2b2b
Texto secundário: #666666
Cards: #ffffff
```

### Fontes

Sugestão:

- Títulos: uma fonte mais delicada ou arredondada.
- Textos: fonte simples e legível.

Se usar Google Fonts:

- `Poppins` para textos gerais.
- `Playfair Display` ou `Dancing Script` para títulos românticos.

### Estilo

A interface deve transmitir:

- Afeto.
- Simplicidade.
- Leveza.
- Memória afetiva.

Elementos visuais recomendados:

- Corações discretos.
- Ícones de cinema.
- Cards arredondados.
- Sombra suave.
- Animações leves.

---

## 9. Estrutura de arquivos recomendada

```text
cinema-love-app/
│
├── index.html
├── style.css
├── script.js
├── README.md
│
├── assets/
│   ├── images/
│   │   ├── foto-1.jpg
│   │   ├── foto-2.jpg
│   │   └── capa.jpg
│   │
│   └── icons/
│       └── heart.svg
│
└── qr/
    └── qr-code.png
```

---

## 10. Conteúdo configurável

O agente deve deixar o conteúdo fácil de modificar.

Uma forma simples é concentrar textos e informações no próprio `index.html`.

Uma forma melhor é criar um objeto no `script.js`:

```javascript
const memoria = {
  casal: "Vinicius & Nome da Pessoa",
  titulo: "Nosso dia no cinema",
  subtitulo: "Uma lembrança simples, mas cheia de amor.",
  data: "15 de abril de 2026",
  filme: "Nome do filme",
  cinema: "Nome do cinema",
  local: "Cidade - Estado",
  mensagem: [
    "Esse dia foi especial porque eu estava com você.",
    "Não foi apenas sobre o filme, mas sobre cada momento ao seu lado."
  ],
  fotos: [
    {
      src: "assets/images/foto-1.jpg",
      legenda: "Antes do filme"
    },
    {
      src: "assets/images/foto-2.jpg",
      legenda: "Depois da sessão"
    }
  ],
  timeline: [
    "Escolhemos o filme.",
    "Chegamos ao cinema.",
    "Tiramos nossas fotos.",
    "Assistimos juntinhos.",
    "Guardamos esse momento na memória."
  ]
};
```

O agente pode usar esse objeto para preencher a página dinamicamente.

---

## 11. Componentes da interface

### 11.1 Header / Hero

Deve ocupar a primeira tela ou quase a primeira tela no celular.

Elementos:

- Emoji ou ícone: 🎬❤️
- Título.
- Subtítulo.
- Data.

### 11.2 Card de informações

Um card com os dados da ida ao cinema.

Campos:

- Filme.
- Cinema.
- Local.
- Data.
- Momento favorito.

### 11.3 Seção de mensagem

Área com texto romântico.

Deve ter boa legibilidade:

- Largura limitada.
- Espaçamento entre linhas.
- Parágrafos curtos.

### 11.4 Galeria

Grid responsivo com fotos.

Em celular:

- Uma foto por linha ou duas fotos lado a lado, dependendo da largura.

Em desktop:

- Duas ou três colunas.

### 11.5 Linha do tempo

Lista vertical com pequenos eventos.

Pode usar ícones ou círculos laterais.

### 11.6 Rodapé

Mensagem final.

Exemplo:

```text
Feito com carinho para lembrar esse dia especial. ❤️
```

---

## 12. Comportamentos com JavaScript

O JavaScript deve ser simples.

Funcionalidades sugeridas:

1. Renderizar informações do objeto `memoria`.
2. Renderizar fotos automaticamente.
3. Renderizar timeline automaticamente.
4. Criar botão “voltar ao início”.
5. Adicionar animação suave de entrada nos elementos.

Exemplo de botão:

```javascript
function voltarAoInicio() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
```

---

## 13. Acessibilidade

O agente deve implementar:

- Textos alternativos nas imagens (`alt`).
- Bom contraste entre texto e fundo.
- Botões com texto claro.
- Layout que funcione com zoom do navegador.
- Evitar textos muito pequenos.

Exemplo:

```html
<img src="assets/images/foto-1.jpg" alt="Casal sorrindo na entrada do cinema">
```

---

## 14. Segurança e privacidade

Como o app possui fotos pessoais:

- Não incluir dados sensíveis.
- Não incluir endereço residencial.
- Não incluir documentos.
- Evitar expor sobrenomes completos se não for necessário.
- Usar somente fotos autorizadas pelas pessoas envolvidas.

---

## 15. Critérios de aceite

A aplicação estará pronta quando:

- Abrir corretamente pelo navegador.
- Estiver acessível por uma URL pública.
- O QR Code redirecionar para a URL correta.
- A página carregar bem no celular.
- As fotos aparecerem corretamente.
- O texto romântico estiver formatado e legível.
- O layout estiver visualmente agradável.
- O botão de voltar ao topo funcionar, caso implementado.

---

## 16. Melhorias futuras

Possíveis evoluções:

- Adicionar música de fundo.
- Criar carrossel de fotos.
- Adicionar senha simples antes de abrir a página.
- Adicionar contador de dias juntos.
- Adicionar animação de corações caindo.
- Adicionar vídeo curto do casal.
- Criar painel administrativo simples para editar textos e fotos.
- Usar Firebase/Supabase para armazenar mensagens.

---

## 17. Prompt resumido para o agente implementador

```text
Crie uma aplicação web estática, responsiva e romântica chamada cinema-love-app. A aplicação será acessada via QR Code e deve mostrar uma memória de uma ida ao cinema de um casal.

Use HTML, CSS e JavaScript puro.

A página deve conter:
- Capa com título, subtítulo, data e emojis de cinema/coração.
- Card com informações do filme, cinema, local e data.
- Seção com mensagem romântica personalizada.
- Galeria responsiva com pelo menos duas fotos.
- Linha do tempo do encontro.
- Mensagem final com botão para voltar ao topo.

Organize os arquivos em:
- index.html
- style.css
- script.js
- assets/images/
- qr/

Use um objeto JavaScript chamado memoria para centralizar os dados editáveis.

O design deve ser mobile-first, com tons de rosa/vermelho suave, cards arredondados, sombras leves, boa legibilidade e responsividade.

Garanta acessibilidade básica com alt nas imagens, bom contraste e botões claros.
```
