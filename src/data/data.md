---
routes:
  - slug: /
    label: Home
    metaTitle: Home
    metaDescription: Home description
    metaImage: ""
    hidden: true
    componentIds: [Hero_homepage]
  - slug: /escursioni
    label: Escursioni
    metaTitle: Escursioni
    metaDescription: Escursioni descrizione
    metaImage: ""
    componentIds: [Hero_escursioni, RichText_escursioni, ListOfCards_escursioni,]
    routes:
      - slug: /alpe-granda
        label: Alpe Granda
        metaTitle: Alpe Granda
        metaDescription: Alpe Granda descrizione
        metaImage: ""
        icon: home
        hidden: true
        componentIds: [Hero_alpeGranda, RichText_alpeGranda1, ListOfImages_alpeGranda1, RichText_alpeGranda2, ListOfImages_alpeGranda2]


components:
  - id: Hero_homepage
    maintitle: Asutkin
    image: 
      src: https://res.cloudinary.com/dmgymopan/image/upload/v1590508076/assets/Group_31_e2ynwa.png
  - id: Hero_escursioni
    title: Escursioni
    image: 
      src: https://res.cloudinary.com/dmgymopan/image/upload/v1590504923/24.05.2020/WhatsApp_Image_2020-05-24_at_18.55.00_thik3t.jpg
  - id: RichText_escursioni
    text: <p>Di seguito le nostre escursioni</p>
    wrapper: regular
    padder: regular
  - id: ListOfCards_escursioni
    wrapper: large
    padder: regular
    background: "#fafafafa"
    items:
      - slug: /escursioni/alpe-granda
        supertitle: "24.05.2020"
        title: Rifugio Alpe Granda
        tags: [ 🏔Valtellina, ⌛︎2h, ⇡ 450m ]
        subtitle: Bel paesaggio in una bella giornata di sole 
        content: Gita semplice durante una bella giornata di domenica soleggiata
        image:
          src: https://res.cloudinary.com/dmgymopan/image/upload/v1590494942/samples/24.05.2020%20-%20Rifugio%20Alpe%20Granda/WhatsApp_Image_2020-05-24_at_18.51.43_q1htwn.jpg


  - id: Hero_alpeGranda
    image: 
      src: https://res.cloudinary.com/dmgymopan/image/upload/v1590494942/samples/24.05.2020%20-%20Rifugio%20Alpe%20Granda/WhatsApp_Image_2020-05-24_at_18.54.26_ur2xuh.jpg
    supertitle: "24.05.2020"
    title: Rifugio Alpe Granda
    subtitle: Bel paesaggio in una bella giornata di sole 
  - id: RichText_alpeGranda1
    text: Ecco le foto di Rifugio alpe granda
    wrapper: regular
    padder: regular


  - id: ListOfImages_alpeGranda1
    wrapper: large
    padder: regular
    background: "#fafafafa"
    items:
      - image:
          src: https://res.cloudinary.com/dmgymopan/image/upload/v1590504923/24.05.2020/WhatsApp_Image_2020-05-24_at_22.03.39_pqfsr2.jpg
          alt: " "
          description: Salendo verso la cima
      - image:
          src: https://res.cloudinary.com/dmgymopan/image/upload/v1590504923/24.05.2020/WhatsApp_Image_2020-05-24_at_18.55.00_thik3t.jpg
          alt: " "
          description: Sempre piu' in alto
      - image:
          src: https://res.cloudinary.com/dmgymopan/image/upload/v1590504922/24.05.2020/WhatsApp_Image_2020-05-24_at_18.54.34_zl6un9.jpg
          alt: " "
          description: Ecco il prato finale
      - image:
          src: https://res.cloudinary.com/dmgymopan/image/upload/v1590504926/24.05.2020/WhatsApp_Image_2020-05-24_at_18.54.26_ufvudu.jpg
          alt: " "
          description: Con le montagne tutte attorno


  - id: RichText_alpeGranda2
    text: Ed infine eccola, Asutkin
    wrapper: regular
    padder: regular

  - id: ListOfImages_alpeGranda2
    wrapper: large
    padder: regular
    background: "#fafafafa"
    items:
      - image:
          src: https://res.cloudinary.com/dmgymopan/image/upload/v1590504923/24.05.2020/WhatsApp_Image_2020-05-24_at_18.51.43_rquvuf.jpg
          alt: ""
          description: Ed ecco Asutkin