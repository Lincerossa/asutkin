const data = {
  routes: [
    {
      slug: "/",
      label: "Home",
      metaTitle: "Home",
      metaDescription: "Home description",
      metaImage: null,
      hidden: true,
      componentIds: ["Hero_homepage"]
    },
    {
      slug: "/escursioni",
      label: "Escursioni",
      metaTitle: "Escursioni",
      metaDescription: "Escursioni description",
      metaImage: null,
      inverted: true,
      componentIds: ["Hero_escursioni", "RichText_escursioni", "ListOfCards_escursioni"],
      routes: [
        {
          slug: "/pescedo",
          label: "Pescedo",
          metaTitle: "Pescedo",
          metaDescription: "Pescedo description",
          metaImage: null,
          hidden: true,
          componentIds: ["Hero_pescedo", "InfoPanel_pescedo", "RichText_pescedo", "ListOfImages_pescedo" ]
        }
      ]
    }
  ],
  components: [
    {
      id: "Hero_homepage",
      maintitle: "Asutkin",
      image: {
        src: "https://res.cloudinary.com/dmgymopan/image/upload/v1591178104/Assets/Group_31_j9tc6r.png"
      }
    },
    {
      id: "Hero_escursioni",
      title: "Escursioni",
      image: {
        src: "https://res.cloudinary.com/dmgymopan/image/upload/q_auto:low/v1590504923/24.05.2020/WhatsApp_Image_2020-05-24_at_18.55.00_thik3t.jpg"
      }
    },
    {
      id: "Hero_pescedo",
      supertitle: "30.05.2020",
      title: "Alpe Pescedo",
      subtitle: "Escursione molto leggera sui monti lariani",
      image: {
        src: "https://res.cloudinary.com/dmgymopan/image/upload/q_auto:low/v1590867370/30.05.2020/WhatsApp_Image_2020-05-30_at_21.05.45_vbgxip.jpg",
        supertitle: "30.05.2020"
      }
    },
    {
      id: "RichText_escursioni",
      text: "<h2>Di seguito le nostre escursioni</h2><p>Il Lago di Como e la Valtellina sono le nostre mete preferite!</p>",
      wrapper: "large",
      padder: "regular",
    },
    {
      id: "ListOfCards_escursioni",
      wrapper: "large",
      padder: "regular",
      background: "#fafafafa",
      items: [
        {
          slug: "/escursioni/pian-di-spagna",
          supertitle: "06.06.2020",
          title: "Pian di Spagna",
          tags: [ "🏔Lago di Como", "⌛︎1h30min", "⇡ 0m" ],
          content: "Escursione all'interno del Pian di Spagna",
          image: {
            src: "https://res.cloudinary.com/dmgymopan/image/upload/q_20/v1605912646/06.06.2020/IMG_20200606_153109_iwjko3.jpg"
          }
        },
        {
          slug: "/escursioni/pescedo",
          supertitle: "30.05.2020",
          title: "Alpe Pescedo",
          tags: [ "🏔Lago di Como", "⌛︎1h", "⇡ 300m" ],
          content: "Escursione molto leggera sui monti lariani",
          image: {
            src: "https://res.cloudinary.com/dmgymopan/image/upload/q_20/v1590867370/30.05.2020/WhatsApp_Image_2020-05-30_at_21.05.45_vbgxip.jpg"
          }
        },
        {
          slug: "/escursioni/alpe-granda",
          supertitle:"24.05.2020",
          title: "Rifugio Alpe Granda",
          tags: [ "🏔Valtellina", "⌛︎2h", "⇡ 450m" ],
          content: "Gita durante una bella giornata di domenica soleggiata",
          image: {
            src: "https://res.cloudinary.com/dmgymopan/image/upload/q_20/v1590504923/24.05.2020/WhatsApp_Image_2020-05-24_at_18.55.00_thik3t.jpg"
          }
        },
        {
          slug: "/escursioni/segna",
          supertitle:"17.05.2020",
          title: "Segna",
          tags: [ "🏔Lago di Como", "⌛︎2h", "⇡ 400m" ],
          content: "Anello Gravedona - Segna - Domaso",
          image: {
            src: "https://res.cloudinary.com/dmgymopan/image/upload/q_20/v1590673836/17.05.2020/WhatsApp_Image_2020-05-28_at_15.47.09_4_o0fxhl.jpg"
          }
        },
        {
          slug: "/escursioni/piani-di-gembro",
          supertitle:"09.05.2020",
          title: "Piani di Gembro (Aprica)",
          tags: [ "🏔Valtellina", "⌛︎3h", "⇡ 100m" ],
          content: "Anello nella Riserva naturale dei Piani di Gembro",
          image: {
            src: "https://res.cloudinary.com/dmgymopan/image/upload/q_20/v1590698934/09.05.2020/WhatsApp_Image_2020-05-28_at_21.26.27_i5ar4c.jpg"
          }
        },
        {
          slug: "/escursioni/crotto-dangri",
          supertitle: "08.03.2020",
          title: "Crotto Dangri",
          tags: [ "🏔Lago di Como", "⌛︎1h", "⇡ 100m" ],
          content: "Passeggiata tranquilla per sgranchirsi le gambe",
          image: {
            src: "https://res.cloudinary.com/dmgymopan/image/upload/q_10/v1590593962/08.03.2020/IMG_20200308_161922_b19byh.jpg"
          }
        },
        {
          slug: "/escursioni/isola-bregaglia",
          supertitle: "29.09.2019",
          title: "Isola - Bregaglia (Svizzera)",
          tags: [ "🏔Passo Maloja", "⌛︎4h", "⇡ 50m" ],
          content: "Bellissima passeggiata panoramica, con scorci",
          image: {
            src: "https://res.cloudinary.com/dmgymopan/image/upload/q_10/v1590595353/29.09.2019/IMG_20190929_152453_d7p67b.jpg"
          }
        },
        {
          slug: "/escursioni/lagh-da-cavloc",
          supertitle: "07.09.2019",
          title: "Lägh da Cavloc (Svizzera)",
          tags: [ "🏔Passo Maloja", "⌛︎3h", "⇡ 200m" ],
          content: "Bellissima passeggiata in mezzo ai boschi, alle montagne e con meta un lago alpino",
          image: {
            src: "https://res.cloudinary.com/dmgymopan/image/upload/q_20/v1590700640/07.09.2019/WhatsApp_Image_2020-05-28_at_21.46.59_spwnze.jpg"
          }
        },
      ]
    },
    {
      id: "InfoPanel_pescedo",
      listOfPoints: [
        {
          coordinates: [9.3858402, 46.1934241],
          label: "partenza"
        },
        {
          coordinates: [9.3805081, 46.2100569],
          label: "arrivo"
        },
      ],
      wrapper: "large",
      padder: "big",
      background: "#fafafafa",
      items: [
        {
          icon: "StepForwardOutlined",
          title: "Partenza",
          text: "San Bartolomeo - 1204m"
        },
        {
          icon: "StepBackwardOutlined",
          title: "Arrivo",
          text: "Alpe Pescedo - 1550m"
        },
        {
          icon: "FieldTimeOutlined",
          title: "Tempo",
          text: "1h"
        },
        {
          icon: "ToolOutlined",
          title: "Attezzatura",
          text: "Scarponi, giacca a vento (molto ventoso), vestiti di ricambio (pioggia facile qui)"
        },
      ]
    },
    {
      id: "RichText_pescedo",
      text: "<h2>Immagini</h2><p>Si sale quasi sempre protetti dal bosco, ma a tratti la vista si apre sulla sinistra verso il Lago</p>",
      wrapper: "large",
      padder: "regular",
    },
    {
      id: "ListOfImages_pescedo",
      wrapper: "large",
      padder: "regular",
      background: "#fafafafa",
      items:  [
        { 
          image: {
            src: "https://res.cloudinary.com/dmgymopan/image/upload/q_30/v1590867367/30.05.2020/WhatsApp_Image_2020-05-30_at_21.05.44_2_n2mcrk.jpg",
            alt: " ",
            description:" La vista dal parcheggio. Dal piazzale della partenza, si lanciano con il parapendio"
          }
        },
        {
         image: {
            src: "https://res.cloudinary.com/dmgymopan/image/upload/q_20/v1590867371/30.05.2020/WhatsApp_Image_2020-05-30_at_21.05.45_1_wi4zzg.jpg",
            alt: " ",
            description:" Salendo nel bosco"
          }
        },
        {
         image: {
            src: "https://res.cloudinary.com/dmgymopan/image/upload/q_20/v1590867370/30.05.2020/WhatsApp_Image_2020-05-30_at_21.05.45_3_kqucfn.jpg",
            alt: " ",
            description:" Salendo nel bosco"
          }
        },
        {
         image: {
            src: "https://res.cloudinary.com/dmgymopan/image/upload/q_30/v1590867370/30.05.2020/WhatsApp_Image_2020-05-30_at_21.05.45_vbgxip.jpg",
            alt: " ",
            description:" Salendo nel bosco"
          }
        },
        {
         image: {
            src: "https://res.cloudinary.com/dmgymopan/image/upload/q_30/v1590867368/30.05.2020/WhatsApp_Image_2020-05-30_at_21.05.45_2_kktrso.jpg",
            alt: " ",
            description:" Salendo nel bosco"
          }
        },
        {
        image: {
            src: "https://res.cloudinary.com/dmgymopan/image/upload/q_30/v1590867367/30.05.2020/WhatsApp_Image_2020-05-30_at_21.05.44_4_ih48rh.jpg",
            alt: " ",
            description:" Ecco Pescedo"
          }
        },
        {
         image: {
            src: "https://res.cloudinary.com/dmgymopan/image/upload/q_30/v1590867370/30.05.2020/WhatsApp_Image_2020-05-30_at_21.05.44_3_dun0ny.jpg",
            alt: " ",
            description:" Ecco Pescedo, siamo quasi arrivati all'Alpe, ma si è messo a piovere e siamo dovuti rientrare"
          }
        },
        {
          image: {
            src: "https://res.cloudinary.com/dmgymopan/image/upload/q_30/v1590867368/30.05.2020/WhatsApp_Image_2020-05-30_at_21.05.44_1_klmb3s.jpg",
            alt: " ",
            description:" Al rientro, una piccola pausa "
          }
        }
      ]
    }
  ]
}

module.exports = data