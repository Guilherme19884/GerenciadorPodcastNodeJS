# Gerenciador de PodCast
Podcaster Manager

### Descrição
Um App estilo netflix, onde possa centralizar diferentes podcasts separados por categoria.

### Domínio
Podcasts feitos em vídeo

### Features
-Listar os podcasts em sessões de categorias
    -[saúde, fitness, menstalidade, humor]
-Filtrar episódiso pr nome de podcast

## Como

### Feature
Vou retornar um uma api rest (json) 
nome podcast,
nome do episodio,
imagem da capa,
link,
category


```Js
[
    {
    podcastName: "flow",
    episode: "CBUM - flow #319"
    cover: "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg"
    videoId: "pQSuQmUfS30"
    link: "https://www.youtube.com/watch?v=pQSuQmUfS30&t=4s"
    categories: ["body builder", "esporte", "saúde"]
    },
    {
    podcastName: "flow",
    episode: "RUBENS BARRICHELLO -Flow #339"
    cover: "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg"
    link: "https://www.youtube.com/watch?v=4KDGTdiOV4I"
    videoId: "4KDGTdiOV4I"
    categories: ["Esporte", "Corrida"]
    }
]
```