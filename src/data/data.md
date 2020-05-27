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
    componentIds: [Hero_escursioni, RichText_escursioni, ListOfCards_escursioni]
    routes:
      - slug: /alpe-granda
        label: Alpe Granda
        metaTitle: Alpe Granda
        metaDescription: Alpe Granda descrizione
        metaImage: ""
        hidden: true
        componentIds: [Hero_alpeGranda, InfoPanel_alpeGranda, RichText_alpeGranda1, ListOfImages_alpeGranda1, RichText_alpeGranda2, ListOfImages_alpeGranda2]
      - slug: /crotto-dangri
        label: Crotto Dangri
        metaTitle: Crotto Dangri
        metaDescription: Crotto Dangri descrizione
        metaImage: ""
        hidden: true
        componentIds: [Hero_crottoDangri, InfoPanel_crottoDangri, RichText_crottoDangri, ListOfImages_crottoDangri ]


components:
  - id: Hero_homepage
    maintitle: Asutkin
    image: 
      src: https://res.cloudinary.com/dmgymopan/image/upload/q_auto:low/v1590508076/assets/Group_31_e2ynwa.png
  - id: Hero_escursioni
    title: Escursioni
    image: 
      src: https://res.cloudinary.com/dmgymopan/image/upload/q_auto:low/v1590504923/24.05.2020/WhatsApp_Image_2020-05-24_at_18.55.00_thik3t.jpg
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
        content: Gita durante una bella giornata di domenica soleggiata
        image:
          src: https://res.cloudinary.com/dmgymopan/image/upload/q_30/v1590504923/24.05.2020/WhatsApp_Image_2020-05-24_at_18.55.00_thik3t.jpg
      - slug: /escursioni/crotto-dangri
        supertitle: "08.03.2020"
        title: Crotto Dangri
        tags: [ 🏔Lago di Como, ⌛︎1h, ⇡ 100m ]
        content: Passeggiata tranquilla per sgranchirsi le gambe
        image:
          src: https://res.cloudinary.com/dmgymopan/image/upload/q_30/v1590593962/08.03.2020/IMG_20200308_161922_b19byh.jpg


  - id: Hero_alpeGranda
    image: 
      src: https://res.cloudinary.com/dmgymopan/image/upload/q_auto:low/v1590504923/24.05.2020/WhatsApp_Image_2020-05-24_at_18.55.00_thik3t.jpg
    supertitle: "24.05.2020"
    title: Rifugio Alpe Granda
    subtitle: Bel paesaggio in una bella giornata di sole
  
  - id: Hero_crottoDangri
    image: 
      src: https://res.cloudinary.com/dmgymopan/image/upload/q_auto:low/v1590593962/08.03.2020/IMG_20200308_161922_b19byh.jpg
    supertitle: "08.03.2020"
    title: Crotto Dangri
    subtitle: Passeggiata tranquilla per sgranchirsi le gambe

  - id: InfoPanel_alpeGranda
    coordinates: [9.658833617, 46.2068017]
    wrapper: large
    padder: big
    background: #fafafafa
    items: 
      - icon: StepForwardOutlined
        title: Partenza
        text: Sopra i monti di Buglio in monte - 1300m
      - icon: StepBackwardOutlined
        title: Arrivo
        text: Alpe Granda - 1750m
      - icon: FieldTimeOutlined
        title: tempo
        text: 2h
      - icon: ToolOutlined
        title: Attezzatura
        text: Passeggino, e altra roba

  - id: InfoPanel_crottoDangri
    coordinates: [9.3072946, 46.1732255]
    wrapper: large
    padder: big
    background: #fafafafa
    items: 
      - icon: StepForwardOutlined
        title: Partenza
        text: Sopra Livo (Gravedona ed Uniti) - 600m
      - icon: StepBackwardOutlined
        title: Arrivo
        text: Crotto Dangri - 650m
      - icon: FieldTimeOutlined
        title: tempo
        text: 1h30min
      - icon: ToolOutlined
        title: Attezzatura
        text: Passeggino, e altra roba


  - id: RichText_alpeGranda1
    text: <h2>Immagini della salita</h2><p>La salita è stata piuttosto semplice, anche con la bimba a bordo!</p>
    wrapper: large
    padder: regular

  - id: RichText_crottoDangri
    text: <h2>Qualche immagine</h2>
    wrapper: large
    padder: regular

  - id: ListOfImages_alpeGranda1
    wrapper: large
    padder: regular
    background: "#fafafafa"
    items:
      - image:
          src: https://res.cloudinary.com/dmgymopan/image/upload/q_30/v1590504923/24.05.2020/WhatsApp_Image_2020-05-24_at_22.03.39_pqfsr2.jpg
          alt: " "
          description: Salendo verso la cima
      - image:
          src: https://res.cloudinary.com/dmgymopan/image/upload/q_30/v1590504923/24.05.2020/WhatsApp_Image_2020-05-24_at_18.55.00_thik3t.jpg
          alt: " "
          description: Sempre piu' in alto
      - image:
          src: https://res.cloudinary.com/dmgymopan/image/upload/q_30/v1590504922/24.05.2020/WhatsApp_Image_2020-05-24_at_18.54.34_zl6un9.jpg
          alt: " "
          description: Ecco il prato finale
      - image:
          src: https://res.cloudinary.com/dmgymopan/image/upload/q_30/v1590504926/24.05.2020/WhatsApp_Image_2020-05-24_at_18.54.26_ufvudu.jpg
          alt: " "
          description: Con le montagne tutte attorno

  - id: ListOfImages_crottoDangri
    wrapper: large
    padder: regular
    background: "#fafafafa"
    items:
      - image:
          src: https://res.cloudinary.com/dmgymopan/image/upload/q_30/v1590593962/08.03.2020/IMG_20200308_161922_b19byh.jpg
          alt: " "
          description: Lungo la via
      - image:
          src: https://res.cloudinary.com/dmgymopan/image/upload/q_30/v1590593962/08.03.2020/IMG_20200308_161330_haii91.jpg
          alt: " "
          description: Ecco Asiutkin



  - id: RichText_alpeGranda2
    text: <h2>L'arrivo</h2><p>Ed infine eccola, Asutkin</p>
    wrapper: large
    padder: regular

  - id: ListOfImages_alpeGranda2
    wrapper: large
    padder: regular
    background: "#fafafafa"
    items:
      - image:
          src: https://res.cloudinary.com/dmgymopan/image/upload/q_30/v1590504923/24.05.2020/WhatsApp_Image_2020-05-24_at_18.51.43_rquvuf.jpg
          alt: ""
          description: Ed ecco Asutkin