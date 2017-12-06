let process = {
  menu:function(){
    let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">Tourist Spots</div>
              </div>
            </div>

    <div className="list-group">
      <ul>
        <li><a href='#' onClick={process.Luzon}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">Luzon</div>
                  <div className="item-after">Details</div>
            </div>
          </div></a>
        </li>
        <li><a href='#' onClick={process.Visayas}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">Visayas</div>
                  <div className="item-after">Details</div>
            </div>
          </div></a>
        </li>
        <li><a href='#' onClick={process.Mindanao}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">Mindanao</div>
                  <div className="item-after">Details</div>
            </div>
          </div></a>
        </li>
      </ul>
    </div>
</div>
</div>
</div>
</div>
</div>;
    ReactDOM.render(content,document.getElementById('root'));
  },
  Luzon:function(){
    let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">Luzon</div>
              </div>
            </div>

<div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">World of Myth</div>
              </div>
            </div>

    <div className="list-group">
      <ul>
        <li><a href='#' onClick={process.mayon}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">Mount Mayon</div>
                  <div className="item-after">Details</div>
            </div>
          </div></a>
        </li>
        <li><a href='#' onClick={process.banaue}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">Banaue Rice Terraces</div>
                  <div className="item-after">Details</div>
            </div>
          </div></a>
        </li>
      <li><a href='#' onClick={process.Apo}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">Apo Reef</div>
                  <div className="item-after">Details</div>
            </div>
          </div></a>
        </li>
                <li><a href='#' onClick={process.Bulusan}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">Bulusan Lake</div>
                  <div className="item-after">Details</div>
            </div>
          </div></a>
        </li>
                <li><a href='#' onClick={process.Puerto}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">Puerto Prinsesa River</div>
                  <div className="item-after">Details</div>
            </div>
          </div></a>
        </li>
                <li><a href='#' onClick={process.Pandin}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">Lake Pandin</div>
                  <div className="item-after">Details</div>
            </div>
          </div></a>
        </li>
                <li><a href='#' onClick={process.Anguib}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">ANguib Beach</div>
                  <div className="item-after">Details</div>
            </div>
          </div></a>
        </li>
                <li><a href='#' onClick={process.Calaguas}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">Calaguas Beach</div>
                  <div className="item-after">Details</div>
            </div>
          </div></a>
        </li>
                <li><a href='#' onClick={process.Coron}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">Coron Island</div>
                  <div className="item-after">Details</div>
            </div>
          </div></a>
        </li>
                        <li><a href='#' onClick={process.menu}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">Back</div>
                  
            </div>
          </div></a>
        </li>
      </ul>
    </div>
</div>
</div>
</div>
</div>
</div>;
</div>
</div>
</div>
</div>
</div>;
      ReactDOM.render(content,document.getElementById('root'));
  },
    mayon:function(){
     let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">Mayon</div>
              </div>
            </div>
            <center><img src={"img/mount-mayon-featured-image.jpg"} width={"100%"}/>
            <p> Mount Mayon is one of the majestic tourist spots in Luzon. This mountain is the most photogenic mountain in the Phils. known for its perfect cone shape. Mount Mayon is located in
            Albay Luzon, Phils. </p></center>
            <br/><a href='#' onClick={process.Luzon}>back</a>
</div>
</div>
</div>
</div>
</div>;

      ReactDOM.render(content,document.getElementById('root'));

  },
   banaue:function(){
     let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">Banaue</div>
              </div>
            </div>
            <center><img src={"img/banaue-rice-terraces-3.jpg"} width={"100%"}/>
            <p>Banaue Rice Terraces is a beautiful creation of Ifugaos which became one of the tourist spot in Luzon. With a careful manipilation
            of mud and stones,they have made glant steps carved in the mountains where they artistically plant rice. Considered as the 8th Wonder of the World
            ,This magnificent work of art in ancient engineering and tools can be found in Ifugao, Luzon, Phils. 
             </p></center>
            <br/><a href='#' onClick={process.Luzon}>back</a>
</div>
</div>
</div>
</div>
</div>;

      ReactDOM.render(content,document.getElementById('root'));
  },
     Apo:function(){
     let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">Apo</div>
              </div>
            </div>
            <center><img src={"img/apo-reef-featured-image.jpg"} width={"100%"}/>
            <p>Apo Reef is a famous diving site in the Phils which is the second largest coral reef system in the world.
            Sharks, Manta Rays Turtles and more marine lives can be found in the reef. Apo Reef is located in Sablayan
            Occidental Mindoro, Luzon, Phils.
             </p></center>
            <br/><a href='#' onClick={process.Luzon}>back</a>
</div>
</div>
</div>
</div>
</div>;

      ReactDOM.render(content,document.getElementById('root'));
},
Bulusan:function(){
     let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">Bulusan</div>
              </div>
            </div>
            <center><img src={"img/Bulusan-Lake.jpg"} width={"100%"}/>
            <p> Bulusan Lake is a beautiful lake sorrounded by forest. This one of the attractions in Bulusab Volcano Natural
            Park. Kayaking is the most suggested activity in the lake where you will enjoy great views. Bulusan Lake which is also
            called as the Switzerland Of the Orient Can be found in Sorsogon Luzon. 
            </p></center>
            <br/><a href='#' onClick={process.Luzon}>back</a>
</div>
</div>
</div>
</div>
</div>;

      ReactDOM.render(content,document.getElementById('root'));
},
Puerto:function(){
     let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">Puerto</div>
              </div>
            </div>
            <center><img src={"img/Puerto-Prinsesa.jpg"} width={"100%"}/>
            <p> Puerto Prinsesa Subterrarean River is one of the new 7 Wonders of Nature. It is an underground River famous for its
            karst, stalactites and stalagmites formation. This is one of the magnificent tourist spot in Luzon that gained the attention of the world even the 
            popular travel magazines. puerto Prinsesa River is located in palawan Luzon Phils. 
            </p></center>
            <br/><a href='#' onClick={process.Luzon}>back</a>
</div>
</div>
</div>
</div>
</div>;

      ReactDOM.render(content,document.getElementById('root'));
  },
  Pandin:function(){
     let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">Pandin</div>
              </div>
            </div>
            <center><img src={"img/Lake-Pandin.jpg"} width={"100%"}/>
            <p> Lake Pandin is a calm and clean where you can enjoy with your family some lunch in the center f the lake
            rideing a raft with a roof. Lake Pandin is situated in San Pablo Laguna Luzon Phils.
            </p></center>
            <br/><a href='#' onClick={process.Luzon}>back</a>
</div>
</div>
</div>
</div>
</div>;

      ReactDOM.render(content,document.getElementById('root'));
  },
  Anguib:function(){
     let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">Anguib</div>
              </div>
            </div>
            <center><img src={"img/Anguib-Beach.jpg"} width={"100%"}/>
            <p> Anguib Beach is also known as Boracay of the North. It is beautiful white sand beach with clear blue waters.
            Anguib Beach is located in Sta. Ana, Cagayan, Luzon, Phils.
            </p></center>
            <br/><a href='#' onClick={process.Luzon}>back</a>
</div>
</div>
</div>
</div>
</div>;

      ReactDOM.render(content,document.getElementById('root'));
  },
  Calaguas:function(){
     let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">Calaguas</div>
              </div>
            </div>
            <center><img src={"img/calaguas-beach.jpg"} width={"100%"}/>
            <p>Calaguas Beach also called as Mahabang Buhangin(Long stretch Beach) which is famous for it,s powdery white
             sand beach and clear blue waters. Calaguas Beach is located in Calaguas Camarines Norte Luzon Phils.
            </p></center>
            <br/><a href='#' onClick={process.Luzon}>back</a>
</div>
</div>
</div>
</div>
</div>;

      ReactDOM.render(content,document.getElementById('root'));
  },
  Coron:function(){
     let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">Coron</div>
              </div>
            </div>
            <center><img src={"img/coron-island-featured-image.jpg"} width={"100%"}/>
            <p> Coron Island is one of the frequently visited island in Luzon. It is a limestone island has mangrove forest.
            Coron Island is located in Palawan.
            </p></center>
            <br/><a href='#' onClick={process.Luzon}>back</a>
</div>
</div>
</div>
</div>
</div>;

      ReactDOM.render(content,document.getElementById('root'));
  },
  Visayas:function(){
    let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">Visayas</div>
              </div>
            </div>

<div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">Tourist Spot</div>
              </div>
            </div>

    <div className="list-group">
      <ul>
        <li><a href='#' onClick={process.Boracay}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">Boracay</div>
                  <div className="item-after">Details</div>
            </div>
          </div></a>
        </li>
        <li><a href='#' onClick={process.Balanan}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">Lake Balanan</div>
                  <div className="item-after">Details</div>
            </div>
          </div></a>
        </li>
      <li><a href='#' onClick={process.Pescador}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">Pescador Island</div>
                  <div className="item-after">Details</div>
            </div>
          </div></a>
        </li>
                <li><a href='#' onClick={process.Hills}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">Chocolate Hills</div>
                  <div className="item-after">Details</div>
            </div>
          </div></a>
        </li>
                <li><a href='#' onClick={process.Bantayan}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">Bantayan Island</div>
                  <div className="item-after">Details</div>
            </div>
          </div></a>
        </li>
                <li><a href='#' onClick={process.Balinsasayao}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">Balinsasayao</div>
                  <div className="item-after">Details</div>
            </div>
          </div></a>
        </li>
                <li><a href='#' onClick={process.Camotes}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">Camotes Island</div>
                  <div className="item-after">Details</div>
            </div>
          </div></a>
        </li>
                <li><a href='#' onClick={process.Panglao}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">Panglao Island</div>
                  <div className="item-after">Details</div>
            </div>
          </div></a>

        </li>
                        <li><a href='#' onClick={process.menu}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">Back</div>
                 
            </div>
          </div></a>
        </li>
      </ul>
    </div>
</div>
</div>
</div>
</div>
</div>;
</div>
</div>
</div>
</div>
</div>;
      ReactDOM.render(content,document.getElementById('root'));
  },
  Boracay:function(){
     let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">Boracay</div>
              </div>
            </div>
            <center><img src={"img/boracay.jpg"} width={"100%"}/>
            <p> Boracay is undoutedly the most visited among the tourist spots in Visayas. This is the favourite hangout of famous celebrities and tourists. <br/>
            BOasting it's white sand and extraordinary night life, Boracay really got the attention of many. Boracay is located in Malay, Aklan, Visayas, Philippines. </p></center>
            <br/><a href='#' onClick={process.Visayas}>back</a>
</div>
</div>
</div>
</div>
</div>;

      ReactDOM.render(content,document.getElementById('root'));

  },
  Balanan:function(){
     let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">Mayon</div>
              </div>
            </div>
            <center><img src={"img/Lake-Balanan.jpg"} width={"100%"}/>
            <p> Lake Balanan is a mysterious lake existed because of a 6.8 magnitude earthquake on 1925. The lake is surrounded by forest which is a perfect place <br/>
            to relax and have some fresh air. Swimming in the pool, kayaking in the lake, riding boats, zipline adventure are some of the things to do in Lake Balanan.<br/>
            The lake is situated in Siaton, Negros Oriental, Visayas, Philippines. </p></center>
            <br/><a href='#' onClick={process.Visayas}>back</a>
</div>
</div>
</div>
</div>
</div>;

      ReactDOM.render(content,document.getElementById('root'));

  },
  Pescador:function(){
     let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">Mayon</div>
              </div>
            </div>
            <center><img src={"img/Pescador-Island.jpg"} width={"100%"}/>
            <p>Pescador Island is a beautiful island that looks like disk from afar. This is a popular diving site in Visayas which is a home of thousands of sardines famous by the name <b>The Sardine Run of Pescador Island</b></p><br/>
            Dives are from 50 - 200 meters drop. The island has Cathedral underneath. It iis huge hole with caves inside enough for a person to explore. This amazing dive site is located in Moalboan, Cebu, Visayas, Philippines.</center>
            <br/><a href='#' onClick={process.Visayas}>back</a>
</div>
</div>
</div>
</div>
</div>;

      ReactDOM.render(content,document.getElementById('root'));

  },
  Hills:function(){
     let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">Mayon</div>
              </div>
            </div>
            <center><img src={"img/chocolate-hills-featured-image.jpg"} width={"100%"}/>
            <p>Chocolate Hill, as per the name implies, it is composed of hundred of cute chocolate-like hills. The look like chocolate because the hills are covered with grasses and during summer, grasses dries and make the hills look brown.<br/>
            This is one of the attraction major attractions in Visayas where you can gaze one of the wonders of the Earth. Chocolate Hills are located in Bohol, Visayas, Philippines.</p></center>
            <br/><a href='#' onClick={process.Visayas}>back</a>
</div>
</div>
</div>
</div>
</div>;

      ReactDOM.render(content,document.getElementById('root'));

  },
  Bantayan:function(){
     let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">Mayon</div>
              </div>
            </div>
            <center><img src={"img/Bantayan-Island.jpg"} width={"100%"}/>
            <p>Bantayan Island is famous tourist destination in Visayas for its powdery white sand beach. Walking barefoot into the shallow waters or in the shore, you can feel the soft sand underneath. This beautifule beach is located in Cebu, Visayas, Philippines.</p></center>
            <br/><a href='#' onClick={process.Visayas}>back</a>
</div>
</div>
</div>
</div>
</div>;

      ReactDOM.render(content,document.getElementById('root'));

  },
  Balinsasayao:function(){
     let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">Balinsasayao</div>
              </div>
            </div>
            <center><img src={"img/Lake-Balinsasayaw.jpg"} width={"100%"}/>
            <p> Lake Balinsasayao is a 1,000 feet deep lake. The lake is surrounded by forest which is a home of many wild plants and animals. Kayaking in the lake will be a great experience. There is a viewing deck uphill where you can have a wide view of the lake. </p></center>
            <br/><a href='#' onClick={process.Visayas}>back</a>
</div>
</div>
</div>
</div>
</div>;

      ReactDOM.render(content,document.getElementById('root'));

  },
    Camotes:function(){
     let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">Camotes Island</div>
              </div>
            </div>
            <center><img src={"img/Camotes-Island.jpg"} width={"100%"}/>
            <p> Camotes Island is one of the best destination in Visayas especially when you have some beach adventures. Camotes Island is actually a group of islands in Camotes Sea. <br/>
            BEaches in Camotes Islands are clean and unspoiled. There are also major attractions in the islands like Holy Crystal Cave, Lake Danao, Buho Cave, and more. </p></center>
            <br/><a href='#' onClick={process.Visayas}>back</a>
</div>
</div>
</div>
</div>
</div>;

      ReactDOM.render(content,document.getElementById('root'));

  },
    Panglao:function(){
     let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">Mayon</div>
              </div>
            </div>
            <center><img src={"img/Panglao-Island3.jpg"} width={"100%"}/>
            <p>Panglao Island is considered to be the best summer destination in Bohol. Panglao Island is where you can enjoy white sand beaches, great dive sites and cheap to the world class accomodations and awesome nightlife. </p></center>
            <br/><a href='#' onClick={process.Visayas}>back</a>
</div>
</div>
</div>
</div>
</div>;

      ReactDOM.render(content,document.getElementById('root'));

  },
    Mindanao:function(){
    let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">Mindanao</div>
              </div>
            </div>

<div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">Tourist Spot</div>
              </div>
            </div>

    <div className="list-group">
      <ul>
                <li><a href='#' onClick={process.Cristina}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">Maria Cristina Falls</div>
                  <div className="item-after">Details</div>
            </div>
          </div></a>
        </li>
        <li><a href='#' onClick={process.Matutum}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">Mount Matutum</div>
                  <div className="item-after">Details</div>
            </div>
          </div></a>
        </li>
      <li><a href='#' onClick={process.Naked}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">Naked Island</div>
                  <div className="item-after">Details</div>
            </div>
          </div></a>
        </li>
                <li><a href='#' onClick={process.Bababu}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">Lake Bababu</div>
                  <div className="item-after">Details</div>
            </div>
          </div></a>
        </li>
                <li><a href='#' onClick={process.Sebu}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">Lake Sebu</div>
                  <div className="item-after">Details</div>
            </div>
          </div></a>
        </li>
        <li><a href='#' onClick={process.Holon}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">Lake Holon</div>
                  <div className="item-after">Details</div>
            </div>
          </div></a>
        </li>

                <li><a href='#' onClick={process.MountApo}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">Mount Apo</div>
                  <div className="item-after">Details</div>
            </div>
          </div></a>
        </li>

                <li><a href='#' onClick={process.menu}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">Back</div>
            </div>
          </div></a>
        </li>
      </ul>
    </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>;
      ReactDOM.render(content,document.getElementById('root'));
  },
    Cristina:function(){
     let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">Mayon</div>
              </div>
            </div>
            <center><img src={"img/Maria-Cristina-Falls.jpg"} width={"100%"}/>
            <p>MAria Cristina Falls is a majestic and most beautiful among waterfalls in Mindanao and in the country. This is also called Twin Falls since a rock at the top divides the falls in two. 
            </p></center>
            <br/><a href='#' onClick={process.Mindanao}>back</a>
</div>
</div>
</div>
</div>
</div>;

      ReactDOM.render(content,document.getElementById('root'));

  },
      Cristina:function(){
     let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">Maria Cristina Falls</div>
              </div>
            </div>
            <center><img src={"img/Maria-Cristina-Falls.jpg"} width={"100%"}/>
            <p>MAria Cristina Falls is a majestic and most beautiful among waterfalls in Mindanao and in the country. This is also called Twin Falls since a rock at the top divides the falls in two. 
            </p></center>
            <br/><a href='#' onClick={process.Mindanao}>back</a>
</div>
</div>
</div>
</div>
</div>;

      ReactDOM.render(content,document.getElementById('root'));

  },
      Matutum:function(){
     let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">Mount Matutum</div>
              </div>
            </div>
            <center><img src={"img/Mount-Matutum.jpg"} width={"100%"}/>
            <p>Mount Matutum is one of the luring mountains in Mindanao to Mountain climbers. The mountain is a cone shape volcano not as perfect as Mount Mayon 
            but it has something to boast. It is clothed with forest where different kinds of plants and animal are living. The soil at the foot of the mountain is fertile
             where you can find the Dole Pinaeapple Plantation. It is required the before you clim the mountain, you have to plant tree first.
            </p></center>
            <br/><a href='#' onClick={process.Mindanao}>back</a>
</div>
</div>
</div>
</div>
</div>;

      ReactDOM.render(content,document.getElementById('root'));

  },
      Naked:function(){
     let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">Naked Island</div>
              </div>
            </div>
            <center><img src={"img/Naked-Island.jpg"} width={"100%"}/>
            <p>Naked Island is really naked. It is an island without trees or something really visible afar but just white sand and clear waters. This is a perfect 
            place for swimming but it's gonna be hot since you got nowhere to hide. Do not forget to bring sunblock.  This beautiful and naked island is located in the Surfing
             Capital of the Philippines, Siargao, Surigao del Norte, Mindanao.
            </p></center>
            <br/><a href='#' onClick={process.Mindanao}>back</a>
</div>
</div>
</div>
</div>
</div>;

      ReactDOM.render(content,document.getElementById('root'));

  },
      Holon:function(){
     let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">Lake Holon</div>
              </div>
            </div>
            <center><img src={"img/Lake-Holon-South-Cotabato.jpg"} width={"100%"}/>
            <p>Lake Holon is a beautiful crater lake of Mount Parker. Though trekking is challenging one, many trekkers are going to the lake setting up a tent and bonfire and doing their things.
             Kayaking and swimming activities ae also a popular activity in the lake. This beautiful lake is hidden in South Cotabato, Mindanao, Philippines.
            </p></center>
            <br/><a href='#' onClick={process.Mindanao}>back</a>
</div>
</div>
</div>
</div>
</div>;

      ReactDOM.render(content,document.getElementById('root'));

  },
      Bababu:function(){
     let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">Lake Bababu</div>
              </div>
            </div>
            <center><img src={"img/Lake-Bababu.jpg"} width={"100%"}/>
            <p>Lake Bababu is believe to be a secret place of healing natives living near the lake. It is surrounded by walls of granite and forest. There are 2 ways 
            to et to the lake whether to trek or to dive. There is an underwater cave that connects the lake to the sea and most technical divers love this adventure. Lake Bababu is Located in Surigao, Mindanao, Philippines.
            </p></center>
            <br/><a href='#' onClick={process.Mindanao}>back</a>
</div>
</div>
</div>
</div>
</div>;

      ReactDOM.render(content,document.getElementById('root'));

  },
      Sebu:function(){
     let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">Lake Sebu</div>
              </div>
            </div>
            <center><img src={"img/Lake-Sebu.jpg"} width={"100%"}/>
            <p>Lake Sebu is one of the frequently visited among the tourist spots in the Mindanao. Lake Sebu provides quite beautiful scenes: the lake, the birds,
             misty leaves, the mountains and more. ONe of the main attraction in Lake Sebu is the Seven Falls Zipline that will give you a top view of 3 out of 7 waterfalls. Lake Sebu also supplies irrigation to Cotabato, Mindanao, Philippines.
            </p></center>
            <br/><a href='#' onClick={process.Mindanao}>back</a>
</div>
</div>
</div>
</div>
</div>;

      ReactDOM.render(content,document.getElementById('root'));

  },
  MountApo:function(){
     let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">Mount Apo</div>
              </div>
            </div>
            <center><img src={"img/Mount-Apo.jpg"} width={"100%"}/>
            <p>Mount Apo is considered as the highest mountain in the Philippines. This is the most popular destination in the Mindanao for Mountain Climbers. It is standing
             in the magnificent height of 2,954 meters above sea level. "Apo" means Grandfather of Philippines Mountains. It is situated in between Davao City, Davai del Sur and Cotabato Provinces 
             in the island of Mindanao.
            </p></center>
            <br/><a href='#' onClick={process.Mindanao}>back</a>
</div>
</div>
</div>
</div>
</div>;

      ReactDOM.render(content,document.getElementById('root'));

  },
  
  loading:function(){
    let content = <div>
          Loading...
        </div>;
    ReactDOM.render(content,document.getElementById('root'));
  }


}

process.loading();
setTimeout(function(){
  process.menu();
},3000);