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
      - slug: /isola-bregaglia
        label: Isola - Bregaglia
        metaTitle: Isola - Bregaglia
        metaDescription: Isola - Bregaglia descrizione
        metaImage: ""
        hidden: true
        componentIds: [Hero_isolaBregaglia, InfoPanel_isolaBregaglia, RichText_isolaBregaglia, ListOfImages_isolaBregaglia ]
      - slug: /segna
        label: Segna
        metaTitle: Segna
        metaDescription: Segna descrizione
        metaImage: ""
        hidden: true
        componentIds: [Hero_segna, InfoPanel_segna, RichText_segna, ListOfImages_segna ]
      - slug: /piani-di-gembro
        label: Piani di Gemmbro
        metaTitle: Piani di Gemmbro
        metaDescription: Piani di Gemmbro descrizione
        metaImage: ""
        hidden: true
        componentIds: [Hero_pianiDiGembro, InfoPanel_pianiDiGembro, RichText_pianiDiGembro, ListOfImages_pianiDiGembro ]
      - slug: /lagh-da-cavloc
        label: Lägh da Cavloc
        metaTitle: Lägh da Cavloc
        metaDescription: Lägh da Cavloc descrizione
        metaImage: ""
        hidden: true
        componentIds: [Hero_laghDaCavloc, InfoPanel_laghDaCavloc, RichText_laghDaCavloc, ListOfImages_laghDaCavloc ]


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
    text: <h2>Di seguito le nostre escursioni</h2><p>Il Lago di Como e la Valtellina sono le nostre mete preferite!</p>
    wrapper: large
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
      - slug: /escursioni/segna
        supertitle: "17.05.2020"
        title: Segna
        tags: [ 🏔Lago di Como, ⌛︎2h, ⇡ 400m ]
        content: Anello Gravedona - Segna - Domaso
        image:
          src: https://res.cloudinary.com/dmgymopan/image/upload/q_30/v1590673836/17.05.2020/WhatsApp_Image_2020-05-28_at_15.47.09_4_o0fxhl.jpg
      - slug: /escursioni/piani-di-gembro
        supertitle: "09.05.2020"
        title: Piani di Gembro (Aprica)
        tags: [ 🏔Valtellina, ⌛︎3h, ⇡ 100m ]
        content: Anello nella Riserva naturale dei Piani di Gembro
        image:
          src: https://res.cloudinary.com/dmgymopan/image/upload/q_30/v1590698934/09.05.2020/WhatsApp_Image_2020-05-28_at_21.26.27_i5ar4c.jpg
      - slug: /escursioni/crotto-dangri
        supertitle: "08.03.2020"
        title: Crotto Dangri
        tags: [ 🏔Lago di Como, ⌛︎1h, ⇡ 100m ]
        content: Passeggiata tranquilla per sgranchirsi le gambe
        image:
          src: https://res.cloudinary.com/dmgymopan/image/upload/q_30/v1590593962/08.03.2020/IMG_20200308_161922_b19byh.jpg
      - slug: /escursioni/isola-bregaglia
        supertitle: "29.09.2019"
        title: Isola - Bregaglia (Svizzera)
        tags: [ 🏔Passo Maloja, ⌛︎4h, ⇡ 50m ]
        content: Bellissima passeggiata panoramica, con scorci
        image:
          src: https://res.cloudinary.com/dmgymopan/image/upload/q_30/v1590595353/29.09.2019/IMG_20190929_152453_d7p67b.jpg
      - slug: /escursioni/lagh-da-cavloc
        supertitle: "07.09.2019"
        title: Lägh da Cavloc (Svizzera)
        tags: [ 🏔Passo Maloja, ⌛︎3h, ⇡ 200m ]
        content: Bellissima passeggiata in mezzo ai boschi, alle montagne e con meta un lago alpino
        image:
          src: https://res.cloudinary.com/dmgymopan/image/upload/q_30/v1590700640/07.09.2019/WhatsApp_Image_2020-05-28_at_21.46.59_spwnze.jpg


  - id: Hero_alpeGranda
    image: 
      src: https://res.cloudinary.com/dmgymopan/image/upload/q_auto:low/v1590504923/24.05.2020/WhatsApp_Image_2020-05-24_at_18.55.00_thik3t.jpg
    supertitle: "24.05.2020"
    title: Rifugio Alpe Granda
    subtitle: Bel paesaggio in una bella giornata di sole
  
  - id: Hero_segna
    image: 
      src: https://res.cloudinary.com/dmgymopan/image/upload/q_auto:low/v1590673836/17.05.2020/WhatsApp_Image_2020-05-28_at_15.47.09_4_o0fxhl.jpg
    supertitle: "17.05.2020"
    title: Segna
    subtitle: Anello Gravedona - Segna - Domaso
  
  - id: Hero_pianiDiGembro
    image: 
      src: https://res.cloudinary.com/dmgymopan/image/upload/q_auto:low/v1590698934/09.05.2020/WhatsApp_Image_2020-05-28_at_21.26.27_i5ar4c.jpg
    supertitle: "09.05.2020"
    title: Piani di Gembro (Aprica)
    subtitle: Anello attorno alla riserva dei Piani di Gembro
  
  - id: Hero_crottoDangri
    image: 
      src: https://res.cloudinary.com/dmgymopan/image/upload/q_auto:low/v1590593962/08.03.2020/IMG_20200308_161922_b19byh.jpg
    supertitle: "08.03.2020"
    title: Crotto Dangri
    subtitle: Passeggiata tranquilla per sgranchirsi le gambe

  - id: Hero_isolaBregaglia
    image: 
      src: https://res.cloudinary.com/dmgymopan/image/upload/q_auto:low/v1590595353/29.09.2019/IMG_20190929_152453_d7p67b.jpg
    supertitle: "29.09.2019"
    title: Isola - Bregaglia
    subtitle: Bellissima passeggiata panoramica

  - id: Hero_laghDaCavloc
    image: 
      src: https://res.cloudinary.com/dmgymopan/image/upload/q_auto:low/v1590700640/07.09.2019/WhatsApp_Image_2020-05-28_at_21.46.59_spwnze.jpg
    supertitle: "07.09.2019"
    title: Lägh da Cavloc (Svizzera)
    subtitle: Bellissima passeggiata in mezzo ai boschi, alle montagne e con meta un lago alpino



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
        title: Tempo
        text: 2h
      - icon: ToolOutlined
        title: Attezzatura
        text: Passeggino, e altra roba

  - id: InfoPanel_segna
    coordinates: [9.3159086, 46.1524028]
    wrapper: large
    padder: big
    background: #fafafafa
    items: 
      - icon: StepForwardOutlined
        title: Partenza
        text: Gravedona - 200m
      - icon: StepBackwardOutlined
        title: Tappa 1
        text: Segna - 400m
      - icon: StepBackwardOutlined
        title: Tappa 2
        text: Domaso - 200m
      - icon: FieldTimeOutlined
        title: Tempo
        text: 1.5h
      - icon: ToolOutlined
        title: Attezzatura
        text: Passeggino, vestiti leggeri (esposizione a Sud), giacca a vento (ventoso dopo le 14.00)

  - id: InfoPanel_pianiDiGembro 
    coordinates: [10.1604976, 46.161449]
    wrapper: large
    padder: big
    background: #fafafafa
    items: 
      - icon: StepForwardOutlined
        title: Partenza
        text: Piani di Gembro, al Ristorante Albergo le Betulle - 1350m
      - icon: StepBackwardOutlined
        title: Anello attorno alla riserva
        text: Domaso - 1450m
      - icon: FieldTimeOutlined
        title: Tempo
        text: 3h
      - icon: ToolOutlined
        title: Attezzatura
        text: Scarponi (terreno disconnesso), racchette (sali e scendi scivoloso)


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
        title: Tempo
        text: 1h30min
      - icon: ToolOutlined
        title: Attezzatura
        text: Passeggino, e altra roba

  - id: InfoPanel_isolaBregaglia
    coordinates: [9.7587346, 46.4194763]
    wrapper: large
    padder: big
    background: #fafafafa
    items: 
      - icon: StepForwardOutlined
        title: Partenza
        text: Baselgia - 2000m
      - icon: StepBackwardOutlined
        title: Arrivo
        text: Isola - Bregaglia - 2050m
      - icon: FieldTimeOutlined
        title: Tempo
        text: 4h
      - icon: ToolOutlined
        title: Attezzatura
        text: Passeggino, e altro

  - id: InfoPanel_laghDaCavloc
    coordinates: [9.7072191, 46.3798636]
    wrapper: large
    padder: big
    background: #fafafafa
    items: 
      - icon: StepForwardOutlined
        title: Partenza
        text: Baselgia - 2000m
      - icon: StepBackwardOutlined
        title: Arrivo
        text: InfoPanel_laghDaCavloc - 2200m
      - icon: FieldTimeOutlined
        title: Tempo
        text: 3h
      - icon: ToolOutlined
        title: Attezzatura
        text: Scarponi, impermeabile






  - id: RichText_alpeGranda1
    text: <h2>Immagini della salita</h2><p>La salita è stata piuttosto semplice, anche con la bimba a bordo!</p>
    wrapper: large
    padder: regular

  - id: RichText_segna
    text: <h2>Qualche immagine</h2>
    wrapper: large
    padder: regular

  - id: RichText_pianiDiGembro
    text: <h2>Qualche immagine</h2>
    wrapper: large
    padder: regular

  - id: RichText_crottoDangri
    text: <h2>Qualche immagine</h2>
    wrapper: large
    padder: regular

  - id: RichText_isolaBregaglia
    text: <h2>Immagini</h2> <p>Ecco alcune delle immagini degli scorci che ci hanno affascinato</p>
    wrapper: large
    padder: regular

  - id: RichText_laghDaCavloc
    text: <h2>Immagini</h2> <p>Ecco alcune delle immagini degli scorci che ci hanno affascinato</p>
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
      - image:
          src: https://res.cloudinary.com/dmgymopan/image/upload/q_30/v1590695769/24.05.2020/WhatsApp_Image_2020-05-28_at_21.21.36_ybussn.jpg
          alt: " "
          description: Una vecchia cascina
      - image:
          src: https://res.cloudinary.com/dmgymopan/image/upload/q_30/v1590695769/24.05.2020/WhatsApp_Image_2020-05-28_at_21.21.19_qvyjuo.jpg
          alt: " "
          description: Che indica la via per il rifugio


  - id: ListOfImages_segna
    wrapper: large
    padder: regular
    background: "#fafafafa"
    items:
      - image:
          src: https://res.cloudinary.com/dmgymopan/image/upload/q_30/v1590673836/17.05.2020/WhatsApp_Image_2020-05-28_at_15.47.10_wi2pck.jpg
          alt: " "
          description: Raggungendo Segna, incontriamo un bel bosco
      - image:
          src: https://res.cloudinary.com/dmgymopan/image/upload/q_30/v1590673836/17.05.2020/WhatsApp_Image_2020-05-28_at_15.47.08_gba5nf.jpg
          alt: " "
          description: Qualche scorcio
      - image:
          src: https://res.cloudinary.com/dmgymopan/image/upload/q_30/v1590673836/17.05.2020/WhatsApp_Image_2020-05-28_at_15.47.09_4_o0fxhl.jpg
          alt: " "
          description: Qualche scorcio
      - image:
          src: https://res.cloudinary.com/dmgymopan/image/upload/q_30/v1590673838/17.05.2020/WhatsApp_Image_2020-05-28_at_15.47.09_d1oiq2.jpg
          alt: " "
          description: Qualche scorcio
      - image:
          src: https://res.cloudinary.com/dmgymopan/image/upload/q_30/v1590696156/17.05.2020/WhatsApp_Image_2020-05-28_at_15.47.09_3_cc5osy.jpg
          alt: " "
          description: Con qualche cascata
      - image:
          src: https://res.cloudinary.com/dmgymopan/image/upload/q_30/v1590696156/17.05.2020/WhatsApp_Image_2020-05-28_at_15.47.09_5_onpxqy.jpg
          alt: " "
          description: Salendo, usciamo dal bosco
      - image:
          src: https://res.cloudinary.com/dmgymopan/image/upload/q_30/v1590673840/17.05.2020/WhatsApp_Image_2020-05-28_at_15.47.09_1_qp8pth.jpg
          alt: " "
          description: Sulla via del ritorno, raggiungiamo Domaso
  
  - id: ListOfImages_pianiDiGembro
    wrapper: large
    padder: regular
    background: "#fafafafa"
    items:
      - image:
          src: https://res.cloudinary.com/dmgymopan/image/upload/q_30/v1590698935/09.05.2020/WhatsApp_Image_2020-05-28_at_21.26.47_gd8avg.jpg
          alt: " "
          description: Entrando nel bosco
      - image:
          src: https://res.cloudinary.com/dmgymopan/image/upload/v1590698939/09.05.2020/WhatsApp_Image_2020-05-28_at_21.27.22_lapp8a.jpg
          alt: " "
          description: Qualche scorcio
      - image:
          src: https://res.cloudinary.com/dmgymopan/image/upload/q_30/v1590698935/09.05.2020/WhatsApp_Image_2020-05-28_at_21.24.57_d5wzfl.jpg
          alt: " "
          description: Qualche scorcio
      - image:
          src: https://res.cloudinary.com/dmgymopan/image/upload/q_30/v1590698939/09.05.2020/WhatsApp_Image_2020-05-28_at_21.24.26_qpu6qi.jpg
          alt: " "
          description: Qualche scorcio

      - image:
          src: https://res.cloudinary.com/dmgymopan/image/upload/q_30/v1590698934/09.05.2020/WhatsApp_Image_2020-05-28_at_21.26.27_i5ar4c.jpg
          alt: " "
          description: Ecco il prato finale
      - image:
          src: https://res.cloudinary.com/dmgymopan/image/upload/q_30/v1590698960/09.05.2020/WhatsApp_Image_2020-05-28_at_21.46.44_iqayp4.jpg
          alt: " "
          description: Con qualche fiorellino
      - image:
          src: https://res.cloudinary.com/dmgymopan/image/upload/q_30/v1590698943/09.05.2020/WhatsApp_Image_2020-05-28_at_21.25.26_oixs9v.jpg
          alt: " "
          description: Con qualche fiorellino
      - image:
          src: https://res.cloudinary.com/dmgymopan/image/upload/q_30/v1590698934/09.05.2020/WhatsApp_Image_2020-05-28_at_21.25.56_ftjblp.jpg
          alt: " "
          description: Il primo picnic di Asutkin

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

  - id: ListOfImages_isolaBregaglia 
    wrapper: large
    padder: regular
    background: "#fafafafa"
    items:
      - image:
          src: https://res.cloudinary.com/dmgymopan/image/upload/q_30/v1590595340/29.09.2019/IMG_20190929_130846_o6sc75.jpg
          alt: " "
          description: Raggiungendo il passo, ecco una pausa ceffè vista cascate
      - image:
          src: https://res.cloudinary.com/dmgymopan/image/upload/q_30/v1590595353/29.09.2019/IMG_20190929_152453_d7p67b.jpg
          alt: " "
          description: Qualche scorcio
      - image:
          src: https://res.cloudinary.com/dmgymopan/image/upload/q_30/v1590595352/29.09.2019/IMG_20190929_152441_q0ugtd.jpg
          alt: " "
          description: Qualche scorcio
      - image:
          src: https://res.cloudinary.com/dmgymopan/image/upload/q_30/v1590595353/29.09.2019/IMG_20190929_152450_tc0ded.jpg
          alt: " "
          description: Qualche scorcio
      - image:
          src: https://res.cloudinary.com/dmgymopan/image/upload/q_30/v1590595353/29.09.2019/IMG_20190929_153000_azyckz.jpg
          alt: " "
          description: Qualche scorcio

  - id: ListOfImages_laghDaCavloc
    wrapper: large
    padder: regular
    background: "#fafafafa"
    items:
      - image:
          src: https://res.cloudinary.com/dmgymopan/image/upload/q_30/v1590700640/07.09.2019/WhatsApp_Image_2020-05-28_at_21.46.50_w3wmxc.jpg
          alt: " "
          description: Appena lasciata la macchina in zona Passo del Maloja, la vista delle montagne è subito eccezionale
      - image:
          src: https://res.cloudinary.com/dmgymopan/image/upload/q_30/v1590700656/07.09.2019/WhatsApp_Image_2020-05-28_at_21.47.08_xqrvt3.jpg
          alt: " "
          description: Lungo la salita, il versante aldilà della valle è molto di impatto
      - image:
          src: https://res.cloudinary.com/dmgymopan/image/upload/q_30/v1590700649/07.09.2019/WhatsApp_Image_2020-05-28_at_21.47.09_dybodp.jpg
          alt: " "
          description: Si prosegue lungo la valle
      - image:
          src: https://res.cloudinary.com/dmgymopan/image/upload/q_30/v1590700656/07.09.2019/WhatsApp_Image_2020-05-28_at_21.47.03_ut2wdb.jpg
          alt: " "
          description: Immagini del lago
      - image:
          src: https://res.cloudinary.com/dmgymopan/image/upload/q_30/v1590700656/07.09.2019/WhatsApp_Image_2020-05-28_at_21.47.04_lpxjcg.jpg
          alt: " "
          description: C'è molto vento!
      - image:
          src: https://res.cloudinary.com/dmgymopan/image/upload/q_30/v1590700653/07.09.2019/WhatsApp_Image_2020-05-28_at_21.46.53_pfsnmn.jpg
          alt: " "
          description: Immagini del lago

      - image:
          src: https://res.cloudinary.com/dmgymopan/image/upload/q_30/v1590700647/07.09.2019/WhatsApp_Image_2020-05-28_at_21.47.01_ypzggc.jpg
          alt: " "
          description: Immagini del lago
      - image:
          src: https://res.cloudinary.com/dmgymopan/image/upload/q_30/v1590700642/07.09.2019/WhatsApp_Image_2020-05-28_at_21.47.05_lzaah4.jpg
          alt: " "
          description: Immagini del lago
      - image:
          src: https://res.cloudinary.com/dmgymopan/image/upload/q_30/v1590700640/07.09.2019/WhatsApp_Image_2020-05-28_at_21.46.59_spwnze.jpg
          alt: " "
          description: Immagini del lago

      - image:
          src: https://res.cloudinary.com/dmgymopan/image/upload/q_30/v1590700640/07.09.2019/WhatsApp_Image_2020-05-28_at_21.47.00_c09gpx.jpg
          alt: " "
          description: Immagini del lago
      - image:
          src: https://res.cloudinary.com/dmgymopan/image/upload/q_30/v1590700639/07.09.2019/WhatsApp_Image_2020-05-28_at_21.46.54_novhek.jpg
          alt: " "
          description: Immagini del lago
      - image:
          src: https://res.cloudinary.com/dmgymopan/image/upload/q_30/v1590700638/07.09.2019/WhatsApp_Image_2020-05-28_at_21.46.52_ql4bwp.jpg
          alt: " "
          description: Immagini del lago
      - image:
          src: https://res.cloudinary.com/dmgymopan/image/upload/q_30/v1590700633/07.09.2019/WhatsApp_Image_2020-05-28_at_21.46.56_vdt7lz.jpg
          alt: " "
          description: Immagini del lago
      - image:
          src: https://res.cloudinary.com/dmgymopan/image/upload/q_30/v1590700633/07.09.2019/WhatsApp_Image_2020-05-28_at_21.46.55_bs8acv.jpg
          alt: " "
          description: Immagini del lago



  - id: RichText_alpeGranda2
    text: <h2>L'arrivo</h2><p>Ed infine eccola, Asutkin!</p>
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