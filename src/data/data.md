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
    componentIds: [Hero_escursioni, RichText_escursioni, ListOfCards_escursioni, ListOfCards_escursioni, ListOfCards_escursioni, ListOfCards_escursioni]
    routes:
      - slug: /alpe-granda
        label: Alpe Granda
        metaTitle: Alpe Granda
        metaDescription: Alpe Granda descrizione
        metaImage: ""
        icon: home
        hidden: true
        componentIds: [Hero_alpeGranda, RichText_alpeGranda1]
  - slug: /viaggi
    label: Viaggi
    metaTitle: Viaggi
    metaDescription: Viaggi descrizione
    metaImage: ""
    componentIds: [Hero_escursioni, RichText_escursioni, ListOfCards_escursioni, ListOfCards_escursioni, ListOfCards_escursioni, ListOfCards_escursioni]
    routes:
      - slug: /alpe-granda
        label: Alpe Granda
        metaTitle: Alpe Granda
        metaDescription: Alpe Granda descrizione
        metaImage: ""
        icon: home
        hidden: true
        componentIds: [Hero_alpeGranda, RichText_alpeGranda1]

components:
  - id: Hero_homepage
    supertitle: Asutkin
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
    items:
      - slug: /escursioni/alpe-granda
        supertitle: "24.05.2020"
        title: Rifugio alpe granda
        tags: [Valtellina, 2h, vista valle, post-lock-down]
        subtitle: Gita facile in giornata soleggiata
        content: In questa gita è stato interessante soprattutto la salita, e il fatto che è stata e
        image:
          src: https://res.cloudinary.com/dmgymopan/image/upload/v1590494942/samples/24.05.2020%20-%20Rifugio%20Alpe%20Granda/WhatsApp_Image_2020-05-24_at_18.51.43_q1htwn.jpg


      - slug: /escursioni/alpe-granda
        supertitle: "24.05.2020"
        title: Rifugio alpe granda
        tags: [Valtellina, 2h, vista valle, post-lock-down]
        subtitle: Gita facile in giornata soleggiata
        content: In questa gita è stato interessante soprattutto la salita, e il fatto che è stata e
        image:
          src: https://res.cloudinary.com/dmgymopan/image/upload/v1590494942/samples/24.05.2020%20-%20Rifugio%20Alpe%20Granda/WhatsApp_Image_2020-05-24_at_18.51.43_q1htwn.jpg


      - slug: /escursioni/alpe-granda
        supertitle: "24.05.2020"
        title: Rifugio alpe granda
        tags: [Valtellina, 2h, vista valle, post-lock-down]
        subtitle: Gita facile in giornata soleggiata
        content: In questa gita è stato interessante soprattutto la salita, e il fatto che è stata e
        image:
          src: https://res.cloudinary.com/dmgymopan/image/upload/v1590494942/samples/24.05.2020%20-%20Rifugio%20Alpe%20Granda/WhatsApp_Image_2020-05-24_at_18.51.43_q1htwn.jpg






  - id: Hero_alpeGranda
    image: 
      src: https://res.cloudinary.com/dmgymopan/image/upload/v1590494942/samples/24.05.2020%20-%20Rifugio%20Alpe%20Granda/WhatsApp_Image_2020-05-24_at_18.54.26_ur2xuh.jpg
    title: Rifugio Alpe Granda
    date: "24.05.2020"
    text: Bel paesaggio in una bella giornata di sole 
  - id: RichText_alpeGranda1
    text: Ecco le foto di Rifugio alpe granda
    wrapper: regular
    padder: regular
    background: red