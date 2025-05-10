const questions=[
    {
        image: "clothes.jpeg",
        correct:1,
        question:'Which advertisement is about ___?',
        options: [
          "House cleaning with special offer",
          "Opportunity to save on clothes during limited time",
          "Chance to receive socks for free",
          "Celebrating globalized day making good deeds",
          "Renting enormous flat with home managment included",
          "Buying people for your office",
          "Cleaning service, that can take place twice a month",
          "Renting B&B flat"
        ]
    },
    {
        image: "housecleaing.jpg",
        correct:0,
        question:'Which advertisement is about ___?',
        options: [
            "House cleaning with special offer",
            "Opportunity to save on clothes during limited time",
            "Chance to receive socks for free",
            "Celebrating globalized day making good deeds",
            "Renting enormous flat with home managment included",
            "Buying people for your office",
            "Cleaning service, that can take place twice a month",
            "Renting B&B flat"
          ]
    },
    {
        image: "homecleaning.webp",
        correct:6,
        question:'Which advertisement is about ___?',
        options: [
            "House cleaning with special offer",
            "Opportunity to save on clothes during limited time",
            "Chance to receive socks for free",
            "Celebrating globalized day making good deeds",
            "Renting enormous flat with home managment included",
            "Buying people for your office",
            "Cleaning service, that can take place twice a month",
            "Renting B&B flat"
          ]
    },
    {
        image: "clothingdonate.jpg",
        correct:3,
        question:'Which advertisement is about ___?',
        options: [
            "House cleaning with special offer",
            "Opportunity to save on clothes during limited time",
            "Chance to receive socks for free",
            "Celebrating globalized day making good deeds",
            "Renting enormous flat with home managment included",
            "Buying people for your office",
            "Cleaning service, that can take place twice a month",
            "Renting B&B flat"
          ]
    },
    {
        image: "flatforrent.png",
        correct:4,
        question:'Which advertisement is about ___?',
        options: [
            "House cleaning with special offer",
            "Opportunity to save on clothes during limited time",
            "Chance to receive socks for free",
            "Celebrating globalized day making good deeds",
            "Renting enormous flat with home managment included",
            "Buying people for your office",
            "Cleaning service, that can take place twice a month",
            "Renting B&B flat"
          ]
    }
  ]
  
  const questionsTask2 = [
    {
        correct: 1, // Відповідь B є правильною
        question: "6. Why did Magellan leave the service of the king of Portugal?",
        options: [
            "He had a conflict with the Spaniards.",
            "He was involved in political intrigue.",
            "He had incorrect behavior with the maid of honor.",
            "He wanted to explore Africa."
        ]
    },
    {
        correct: 0, // Відповідь A є правильною
        question: "7. What was the purpose of the papal decree of 1493?",
        options: [
            "Divide the lands of the New World between Spain and Portugal.",
            "Set the zero meridian.",
            "Encourage exploration of the Eastern Indies.",
            "Resolve conflicts between Spain and Portugal."
        ]
    },
    {
        correct: 1, // Відповідь B є правильною
        question: "8. When did Magellan sail from Spain?",
        options: [
            "At the beginning of spring 1521.",
            "September 20, 1519.",
            "After the discovery of the Strait of Magellan.",
            "After losing the favor of the king of Portugal."
        ]
    },
    {
        correct: 0, // Відповідь A є правильною
        question: "9. What did Magellan call a passage near 50 degrees south latitude?",
        options: [
            "Strait of All Saints.",
            "Strait of Magellan.",
            "Rio de la Plata.",
            "The Amazon River."
        ]
    },
    {
        correct: 0, // Відповідь A є правильною
        question: "10. How many ships and sailors completed a trip around the world?",
        options: [
            "One ship and 17 sailors.",
            "Four ships and most of the crew.",
            "Three ships and the entire original crew.",
            "Two ships and half crew."
        ]
    }
];
  
  const questionsTask3 = [
    {
      heading: "Hobbiton Movie Set",
      text: "New Zealand's stunning landscapes, shown in 'The Lord of the Rings,' are often linked to Middle-earth. Though Tolkien's Middle-earth is fictional and not a tourist spot, the Hobbiton Movie Set offers a close experience. Originally a sheep farm near Matamata, it was transformed into a film location by director Peter Jackson. Located about two hours south of Auckland, the farm was used for both 'The Lord of the Rings' and 'The Hobbit' films. Since 2002, Hobbiton has been a tourist attraction. Now, visitors can explore Hobbit Holes, which have fully themed rooms including kitchens, bedrooms, and dining areas. Fans can enjoy the detailed settings, though taller guests may need to crouch.",
      questionText: "11. Which houses___?",
      options: [
        "are eco-friendly and use renewable energy sources",
        "adjust increasing water levels using sustainable and contemporary elements",
        "host symphony concerts, choir performances throughout the year",
        "sit close to the peaks and embody the chic, relaxed lifestyle of screen legends",
        "have been a tourist attraction since 2002 because of a famous movie",
        "are reconstructed annually",
        "are designed below the surface to manage high temperatures",
        "provide visitors with unmatched panoramic views of Dubai and beyond"
      ],
      correct: 4 // "have been a tourist attraction since 2002 because of a famous movie" fits Hobbiton's history
    },
    {
      heading: "IceHotel",
      text: "Carved from ice and snow, the IceHotel in Jukkasjärvi, Sweden, is rebuilt and reshaped each year. Staying here feels like stepping into a Nordic saga. Known locally as 'Ishotellet,' this unique hotel is constructed from frozen water from the Torne River. Every year, the hotel surprises visitors with new designs, featuring poetic rooms sculpted from ice blocks and illuminated with blue LED lights. Guests sleep in polar-tested sleeping bags as temperatures inside hover around -5°C. The IceHotel also offers a memorable culinary experience, with traditional dishes like reindeer tartar and moose filet prepared by skilled chefs.",
      questionText: "12. Which houses___?",
      options: [
        "are eco-friendly and use renewable energy sources",
        "adjust increasing water levels using sustainable and contemporary elements",
        "host symphony concerts, choir performances throughout the year",
        "sit close to the peaks and embody the chic, relaxed lifestyle of screen legends",
        "have been a tourist attraction since 2002 because of a famous movie",
        "are reconstructed annually",
        "are designed below the surface to manage high temperatures",
        "provide visitors with unmatched panoramic views of Dubai and beyond"
      ],
      correct: 5 // "are reconstructed annually" fits the IceHotel's yearly rebuild
    },
    {
      heading: "Coober Pedy Underground Homes",
      text: "In the remote Australian town of Coober Pedy, nearly everything is underground - from homes to campsites. As global temperatures rise, this subterranean lifestyle seems increasingly relevant. Located about 848 km north of Adelaide, Coober Pedy is known for its unique underground living, driven by extreme summer heat that can reach 52 °C. This underground approach provides a stable, cooler environment. Similar subterranean adaptations have been used throughout history, like in Cappadocia, Turkey, where ancient cave dwellings offer efficient climate control.",
      questionText: "13. Which houses___?",
      options: [
        "are eco-friendly and use renewable energy sources",
        "adjust increasing water levels using sustainable and contemporary elements",
        "host symphony concerts, choir performances throughout the year",
        "sit close to the peaks and embody the chic, relaxed lifestyle of screen legends",
        "have been a tourist attraction since 2002 because of a famous movie",
        "are reconstructed annually",
        "are designed below the surface to manage high temperatures",
        "provide visitors with unmatched panoramic views of Dubai and beyond"
      ],
      correct: 6 // "are designed below the surface to manage high temperatures" fits Coober Pedy's underground design
    },
    {
      heading: "Floating Houses",
      text: "Floating houses are a new way to live with rising sea levels and flooding. These homes float on water, so they move up and down with the water levels. In Amsterdam, the Schoonschip community shows how these houses can be eco-friendly and modern. They use solar panels and energy-efficient heat pumps. Built from sustainable materials, these homes also have a cozy design. Floating houses are becoming popular in cities like Rotterdam and New York. They offer a creative solution to the challenges of climate change and show how we can adapt our living spaces to rising waters.",
      questionText: "14. Which houses___?",
      options: [
        "are eco-friendly and use renewable energy sources",
        "adjust increasing water levels using sustainable and contemporary elements",
        "host symphony concerts, choir performances throughout the year",
        "sit close to the peaks and embody the chic, relaxed lifestyle of screen legends",
        "have been a tourist attraction since 2002 because of a famous movie",
        "are reconstructed annually",
        "are designed below the surface to manage high temperatures",
        "provide visitors with unmatched panoramic views of Dubai and beyond"
      ],
      correct: 1 // "adjust increasing water levels using sustainable and contemporary elements" fits floating houses
    },
    {
      heading: "Earthship Homes",
      text: "Imagine living in a house that's more than just a shelter — its a complete ecosystem. Earthship homes are eco-friendly and self-sustaining, made from natural and recycled materials. They use old tires, glass bottles, and cans to build strong, insulated walls. These homes capture and recycle rainwater, providing fresh water for all needs. They also have greenhouses for growing fruits and vegetables, promoting self-sufficiency. Earthships manage sewage with on-site treatment systems, reducing environmental impact. They harness solar and wind energy for electricity, and their design optimizes passive solar heating and cooling. Living in an Earthship means enjoying comfort and independence while protecting the planet.",
      questionText: "15. Which houses___?",
      options: [
        "are eco-friendly and use renewable energy sources",
        "adjust increasing water levels using sustainable and contemporary elements",
        "host symphony concerts, choir performances throughout the year",
        "sit close to the peaks and embody the chic, relaxed lifestyle of screen legends",
        "have been a tourist attraction since 2002 because of a famous movie",
        "are reconstructed annually",
        "are designed below the surface to manage high temperatures",
        "provide visitors with unmatched panoramic views of Dubai and beyond"
      ],
      correct: 0 // "are eco-friendly and use renewable energy sources" fits Earthships' sustainable design
    },
    {
      heading: "Palm Springs Mid-Century Homes",
      text: "Palm Springs, California, is renowned for its mid-century modern homes, reflecting a unique blend of style and function. Nestled in the desert near the San Jacinto mountains, the city became a hotspot for architects like Richard Neutra and Albert Frey in the mid-1900s. The hot desert climate favored low-profile, single-story homes with flat roofs and expansive overhangs for cooling. Post-World War II, the city saw a boom in modernist architecture and innovative designs. These homes, characterized by clean lines and large windows, epitomize the glamorous, relaxed lifestyle sought by Hollywood's elite and continue to attract admirers.",
      questionText: "16. Which houses___?",
      options: [
        "are eco-friendly and use renewable energy sources",
        "adjust increasing water levels using sustainable and contemporary elements",
        "host symphony concerts, choir performances throughout the year",
        "sit close to the peaks and embody the chic, relaxed lifestyle of screen legends",
        "have been a tourist attraction since 2002 because of a famous movie",
        "are reconstructed annually",
        "are designed below the surface to manage high temperatures",
        "provide visitors with unmatched panoramic views of Dubai and beyond"
      ],
      correct: 3 // "sit close to the peaks and embody the chic, relaxed lifestyle of screen legends" fits Palm Springs' Hollywood connection
    }
  ];
    
  const questionsTask4 = [
    {
      text: "The common ideas behind the Lifelong learning (LL) concept share three characteristics which transform 'education and training' into the concept of 'lifelong learning'. The first characteristic of LL is that it is post-compulsory education provided for adult learners, <b>(17)___</b>. It is additional to that received at secondary school and is distinct from the education offered in universities. The second common idea is that LL consists typically of short or part-time courses in a variety of subjects, (18)___. Format is the third shared characteristic of continuing education. It encompasses both formal and non-formal types of education and training and varies from basic literacy training (19)___. Since adult and continuing education programmes are aimed at students that are already professional in certain areas, they are usually quite flexible and offer a wide variety of options as to their methods and format of presentation. The methods of delivery of such type of programs include both (20)___. Adult and continuing education providers make heavy use of distance and online learning which can include CD-ROM/podcast material, broadcast programming, (21)___. A combination of traditional, distance, and online study is used (22)___.",
      questionText: "17.",
      options: [
        "and the use of online seminars and workshops",
        "especially those beyond traditional undergraduate university age",
        "most of which are practical, not academic",
        "and informal channels for learning",
        "to facilitate the learning process",
        "to formal college credit courses",
        "traditional and modern type methods",
        "as well as secondary school students"
      ],
      correct: 1 // "especially those beyond traditional undergraduate university age" fits the adult learner focus
    },
    {
      text: "The common ideas behind the Lifelong learning (LL) concept share three characteristics which transform 'education and training' into the concept of 'lifelong learning'. The first characteristic of LL is that it is post-compulsory education provided for adult learners, (17)___. It is additional to that received at secondary school and is distinct from the education offered in universities. The second common idea is that LL consists typically of short or part-time courses in a variety of subjects, <b>(18)___</b>. Format is the third shared characteristic of continuing education. It encompasses both formal and non-formal types of education and training and varies from basic literacy training (19)___. Since adult and continuing education programmes are aimed at students that are already professional in certain areas, they are usually quite flexible and offer a wide variety of options as to their methods and format of presentation. The methods of delivery of such type of programs include both (20)___. Adult and continuing education providers make heavy use of distance and online learning which can include CD-ROM/podcast material, broadcast programming, (21)___. A combination of traditional, distance, and online study is used (22)___.",
      questionText: "18.",
      options: [
        "and the use of online seminars and workshops",
        "especially those beyond traditional undergraduate university age",
        "most of which are practical, not academic",
        "and informal channels for们的learning",
        "to facilitate the learning process",
        "to formal college credit courses",
        "traditional and modern type methods",
        "as well as secondary school students"
      ],
      correct: 2 // "most of which are practical, not academic" fits the short, practical course description
    },
    {
      text: "The common ideas behind the Lifelong learning (LL) concept share three characteristics which transform 'education and training' into the concept of 'lifelong learning'. The first characteristic of LL is that it is post-compulsory education provided for adult learners, (17)___. It is additional to that received at secondary school and is distinct from the education offered in universities. The second common idea is that LL consists typically of short or part-time courses in a variety of subjects, (18)___. Format is the third shared characteristic of continuing education. It encompasses both formal and non-formal types of education and training and varies from basic literacy training <b>(19)___</b>. Since adult and continuing education programmes are aimed at students that are already professional in certain areas, they are usually quite flexible and offer a wide variety of options as to their methods and format of presentation. The methods of delivery of such type of programs include both (20)___. Adult and continuing education providers make heavy use of distance and online learning which can include CD-ROM/podcast material, broadcast programming, (21)___. A combination of traditional, distance, and online study is used (22)___.",
      questionText: "19.",
      options: [
        "and the use of online seminars and workshops",
        "especially those beyond traditional undergraduate university age",
        "most of which are practical, not academic",
        "and informal channels for learning",
        "to facilitate the learning process",
        "to formal college credit courses",
        "traditional and modern type methods",
        "as well as secondary school students"
      ],
      correct: 5 // "to formal college credit courses" fits the range of education types
    },
    {
      text: "The common ideas behind the Lifelong learning (LL) concept share three characteristics which transform 'education and training' into the concept of 'lifelong learning'. The first characteristic of LL is that it is post-compulsory education provided for adult learners, (17)___. It is additional to that received at secondary school and is distinct from the education offered in universities. The second common idea is that LL consists typically of short or part-time courses in a variety of subjects, (18)___. Format is the third shared characteristic of continuing education. It encompasses both formal and non-formal types of education and training and varies from basic literacy training (19)___. Since adult and continuing education programmes are aimed at students that are already professional in certain areas, they are usually quite flexible and offer a wide variety of options as to their methods and format of presentation. The methods of delivery of such type of programs include both <b>(20)___</b>. Adult and continuing education providers make heavy use of distance and online learning which can include CD-ROM/podcast material, broadcast programming, (21)___. A combination of traditional, distance, and online study is used (22)___.",
      questionText: "20.",
      options: [
        "and the use of online seminars and workshops",
        "especially those beyond traditional undergraduate university age",
        "most of which are practical, not academic",
        "and informal channels for learning",
        "to facilitate the learning process",
        "to formal college credit courses",
        "traditional and modern type methods",
        "as well as secondary school students"
      ],
      correct: 6 // "traditional and modern type methods" fits the delivery methods
    },
    {
      text: "The common ideas behind the Lifelong learning (LL) concept share three characteristics which transform 'education and training' into the concept of 'lifelong learning'. The first characteristic of LL is that it is post-compulsory education provided for adult learners, (17)___. It is additional to that received at secondary school and is distinct from the education offered in universities. The second common idea is that LL consists typically of short or part-time courses in a variety of subjects, (18)___. Format is the third shared characteristic of continuing education. It encompasses both formal and non-formal types of education and training and varies from basic literacy training (19)___. Since adult and continuing education programmes are aimed at students that are already professional in certain areas, they are usually quite flexible and offer a wide variety of options as to their methods and format of presentation. The methods of delivery of such type of programs include both (20)___. Adult and continuing education providers make heavy use of distance and online learning which can include CD-ROM/podcast material, broadcast programming, <b>(21)___</b>. A combination of traditional, distance, and online study is used (22)___.",
      questionText: "21.",
      options: [
        "and the use of online seminars and workshops",
        "especially those beyond traditional undergraduate university age",
        "most of which are practical, not academic",
        "and informal channels for learning",
        "to facilitate the learning process",
        "to formal college credit courses",
        "traditional and modern type methods",
        "as well as secondary school students"
      ],
      correct: 0 // "and the use of online seminars and workshops" fits the online learning methods
    },
    {
      text: "The common ideas behind the Lifelong learning (LL) concept share three characteristics which transform 'education and training' into the concept of 'lifelong learning'. The first characteristic of LL is that it is post-compulsory education provided for adult learners, (17)___. It is additional to that received at secondary school and is distinct from the education offered in universities. The second common idea is that LL consists typically of short or part-time courses in a variety of subjects, (18)___. Format is the third shared characteristic of continuing education. It encompasses both formal and non-formal types of education and training and varies from basic literacy training (19)___. Since adult and continuing education programmes are aimed at students that are already professional in certain areas, they are usually quite flexible and offer a wide variety of options as to their methods and format of presentation. The methods of delivery of such type of programs include both (20)___. Adult and continuing education providers make heavy use of distance and online learning which can include CD-ROM/podcast material, broadcast programming, (21)___. A combination of traditional, distance, and online study is used <b>(22)___</b>.",
      questionText: "22.",
      options: [
        "and the use of online seminars and workshops",
        "especially those beyond traditional undergraduate university age",
        "most of which are practical, not academic",
        "and informal channels for learning",
        "to facilitate the learning process",
        "to formal college credit courses",
        "traditional and modern type methods",
        "as well as secondary school students"
      ],
      correct: 4 // "to facilitate the learning process" fits the purpose of the study combination
    }
  ];
    
  const questionsTask5 = [
    {
      text: "The Mandela Effect is a fascinating phenomenon where many people collectively remember events, facts, or details <b>(23)___</b> from how they actually (24)___. (25)___ the widespread but false belief that Nelson Mandela died in prison in the 1980s, despite his passing only in 2013, this effect challenges our understanding of memory and (26)___. Such collective false memories can be intriguing and unsettling, showing how easily our minds can be influenced or (27)___. Whether it's a misquoted movie line or an incorrect memory of a historical event, the Mandela Effect continues to capture the curiosity of many, reminding us of the fallibility of human memory.",
      questionText: "23.",
      options: [
        "differently",
        "similarly",
        "likewise",
        "otherwise"
      ],
      correct: 0 // "differently" fits the context of remembering differently from reality
    },
    {
      text: "The Mandela Effect is a fascinating phenomenon where many people collectively remember events, facts, or details (23)___ from how they actually <b>(24)___</b>. (25)___ the widespread but false belief that Nelson Mandela died in prison in the 1980s, despite his passing only in 2013, this effect challenges our understanding of memory and (26)___. Such collective false memories can be intriguing and unsettling, showing how easily our minds can be influenced or (27)___. Whether it's a misquoted movie line or an incorrect memory of a historical event, the Mandela Effect continues to capture the curiosity of many, reminding us of the fallibility of human memory.",
      questionText: "24.",
      options: [
        "explained",
        "extended",
        "suggested",
        "occurred"
      ],
      correct: 3 // "occurred" fits the context of how events actually happened
    },
    {
      text: "The Mandela Effect is a fascinating phenomenon where many people collectively remember events, facts, or details (23)___ from how they actually (24)___. <b>(25)___</b> the widespread but false belief that Nelson Mandela died in prison in the 1980s, despite his passing only in 2013, this effect challenges our understanding of memory and (26)___. Such collective false memories can be intriguing and unsettling, showing how easily our minds can be influenced or (27)___. Whether it's a misquoted movie line or an incorrect memory of a historical event, the Mandela Effect continues to capture the curiosity of many, reminding us of the fallibility of human memory.",
      questionText: "25.",
      options: [
        "Contrary",
        "Named after",
        "Named by",
        "However"
      ],
      correct: 1 // "Named after" fits the naming of the phenomenon
    },
    {
      text: "The Mandela Effect is a fascinating phenomenon where many people collectively remember events, facts, or details (23)___ from how they actually (24)___. (25)___ the widespread but false belief that Nelson Mandela died in prison in the 1980s, despite his passing only in 2013, this effect challenges our understanding of memory and <b>(26)___</b>. Such collective false memories can be intriguing and unsettling, showing how easily our minds can be influenced or (27)___. Whether it's a misquoted movie line or an incorrect memory of a historical event, the Mandela Effect continues to capture the curiosity of many, reminding us of the fallibility of human memory.",
      questionText: "26.",
      options: [
        "reality",
        "theory",
        "history",
        "behavior"
      ],
      correct: 0 // "reality" fits the context of memory vs. actual events
    },
    {
      text: "The Mandela Effect is a fascinating phenomenon where many people collectively remember events, facts, or details (23)___ from how they actually (24)___. (25)___ the widespread but false belief that Nelson Mandela died in prison in the 1980s, despite his passing only in 2013, this effect challenges our understanding of memory and (26)___. Such collective false memories can be intriguing and unsettling, showing how easily our minds can be influenced or <b>(27)___</b>. Whether it's a misquoted movie line or an incorrect memory of a historical event, the Mandela Effect continues to capture the curiosity of many, reminding us of the fallibility of human memory.",
      questionText: "27.",
      options: [
        "rewarded",
        "ignored",
        "misled",
        "related"
      ],
      correct: 2 // "misled" fits the context of false memories influencing the mind
    }
  ];
    
  const questionsTask6 = [
    {
      text: "Not all artists in the entertainment industry are <b>(28)___</b> recognisable. There are some whose faces would mean nothing to us, but whose voices would. The voice artist does many things, from (29)___ stories to life in audio books to persuading us to buy products in radio adverts. However, having acting ability and a (30)___ voice is not all that is required to become sought after. Many actors (31)___ the assumption that because they can act, they can 'voice' but this is not necessarily the case. It's true that an actor who is 'voicing' because she has some time to kill between engagements will be able to draw on experience, but she will also need to (32)___ her vocal skills. A voice artist cannot use facial expressions or actions, so her voice must convey everything. Some voicework projects, such as narrating a prime-time TV documentary, are fiercely competitive and for the right artist, the job can be extremely lucrative.",
      questionText: "28.",
      options: [
        "directly",
        "widely",
        "fully",
        "instantly"
      ],
      correct: 3 // "instantly" fits the context of immediate recognition
    },
    {
      text: "Not all artists in the entertainment industry are (28)___ recognisable. There are some whose faces would mean nothing to us, but whose voices would. The voice artist does many things, from <b>(29)___</b> stories to life in audio books to persuading us to buy products in radio adverts. However, having acting ability and a (30)___ voice is not all that is required to become sought after. Many actors (31)___ the assumption that because they can act, they can 'voice' but this is not necessarily the case. It's true that an actor who is 'voicing' because she has some time to kill between engagements will be able to draw on experience, but she will also need to (32)___ her vocal skills. A voice artist cannot use facial expressions or actions, so her voice must convey everything. Some voicework projects, such as narrating a prime-time TV documentary, are fiercely competitive and for the right artist, the job can be extremely lucrative.",
      questionText: "29.",
      options: [
        "lending",
        "letting",
        "bringing",
        "making"
      ],
      correct: 2 // "bringing" fits the context of animating stories
    },
    {
      text: "Not all artists in the entertainment industry are (28)___ recognisable. There are some whose faces would mean nothing to us, but whose voices would. The voice artist does many things, from (29)___ stories to life in audio books to persuading us to buy products in radio adverts. However, having acting ability and a <b>(30)___</b> voice is not all that is required to become sought after. Many actors (31)___ the assumption that because they can act, they can 'voice' but this is not necessarily the case. It's true that an actor who is 'voicing' because she has some time to kill between engagements will be able to draw on experience, but she will also need to (32)___ her vocal skills. A voice artist cannot use facial expressions or actions, so her voice must convey everything. Some voicework projects, such as narrating a prime-time TV documentary, are fiercely competitive and for the right artist, the job can be extremely lucrative.",
      questionText: "30.",
      options: [
        "typical",
        "developed",
        "balanced",
        "distinctive"
      ],
      correct: 3 // "distinctive" fits the context of a unique voice
    },
    {
      text: "Not all artists in the entertainment industry are (28)___ recognisable. There are some whose faces would mean nothing to us, but whose voices would. The voice artist does many things, from (29)___ stories to life in audio books to persuading us to buy products in radio adverts. However, having acting ability and a (30)___ voice is not all that is required to become sought after. Many actors <b>(31)___</b> the assumption that because they can act, they can 'voice' but this is not necessarily the case. It's true that an actor who is 'voicing' because she has some time to kill between engagements will be able to draw on experience, but she will also need to (32)___ her vocal skills. A voice artist cannot use facial expressions or actions, so her voice must convey everything. Some voicework projects, such as narrating a prime-time TV documentary, are fiercely competitive and for the right artist, the job can be extremely lucrative.",
      questionText: "31.",
      options: [
        "make",
        "take",
        "face",
        "think"
      ],
      correct: 0 // "make" fits the context of making an assumption
    },
    {
      text: "Not all artists in the entertainment industry are (28)___ recognisable. There are some whose faces would mean nothing to us, but whose voices would. The voice artist does many things, from (29)___ stories to life in audio books to persuading us to buy products in radio adverts. However, having acting ability and a (30)___ voice is not all that is required to become sought after. Many actors (31)___ the assumption that because they can act, they can 'voice' but this is not necessarily the case. It's true that an actor who is 'voicing' because she has some time to kill between engagements will be able to draw on experience, but she will also need to <b>(32)___</b> her vocal skills. A voice artist cannot use facial expressions or actions, so her voice must convey everything. Some voicework projects, such as narrating a prime-time TV documentary, are fiercely competitive and for the right artist, the job can be extremely lucrative.",
      questionText: "32.",
      options: [
        "ply",
        "focus",
        "trigger",
        "hone"
      ],
      correct: 3 // "hone" fits the context of refining vocal skills
    }
  ];
  
    // const allQuestions = [
    //   {correct:2},
    //   {correct:0},
    //   {correct:2},
    //   {correct:1},
    //   {correct:3},
  
    //   {correct:1},
    //   {correct:5},
    //   {correct:6},
    //   {correct:3},
    //   {correct:0},
    //   {correct:7},
  
    //   {correct:7},
    //   {correct:2},
    //   {correct:6},
    //   {correct:0},
    //   {correct:4},
    //   {correct:1},
  
    //   {correct:0},
    //   {correct:1},
    //   {correct:3},
    //   {correct:0},
    //   {correct:1},
  
    //   {correct:1},
    //   {correct:1},
    //   {correct:0},
    //   {correct:2},
    //   {correct:0},
    // ]
    const questionsContainer = document.getElementById("questions");
  
    questions.forEach((q, index) => {
      const qNumber = index + 1;
      const div = document.createElement("div");
  
      div.className = "question" + (index === 0 ? " active" : "");
    
      div.innerHTML = `
        <img src="${q.image}" alt="question image" width="500px" style="margin-bottom: 20px;"><br/>
        <p style="font-weight: bold;">${q.question}</p>
        <div class="space-y-3">
          ${q.options.map((opt, i) => `
            <label for="q${qNumber}a${i+1}" class="block">
              <input type="radio" id="q${qNumber}a${i+1}" name="q${qNumber}" value="${i === q.correct ? 1 : 0}" class="hidden" onchange="markSelected(this);">
              <div class="option-btn border border-gray-300 rounded-xl px-5 py-3 text-gray-800 bg-white cursor-pointer">${opt}</div>
            </label><br>
          `).join("")}
          <div style='display:none' class="CorrectAnswer questionCorrectAnswer">
            <p  >Correct answer:${q.correct+1}</p>
          </div>
        </div>
      `;
    
      questionsContainer.appendChild(div);
    });
  
    questionsTask2.forEach((q, index) => {
      const qNumber = index + questionsTask2.length + 1; // Унікальний номер
      const div = document.createElement("div");
  
      div.className = "question";
  
      div.innerHTML = `
        <h2 style="font-size:40px; font-weight:600">Magellan’s Voyage </h2>
        <p>In the 16th century, an age of great marine and terrestrial exploration, Ferdinand Magellan led the first expedition to sail around the world. As a young Portuguese noble, he served the king of Portugal, but he became involved in the quagmire of political intrigue at court and lost the king’s favor. After he was dismissed from service by the king of Portugal, he offered to serve the future Emperor Charles V of Spain. </p>
          <p>A papal decree of 1493 had assigned all land in the New World west of 50 degrees W longitude to Spain and all the land east of that line to Portugal. Magellan offered to prove that the East Indies fell under Spanish authority. On September 20, 1519, Magellan set sail from Spain with five ships. More than a year later, one of these ships was exploring the topography of South America in search of a water route across the continent. This ship sank, but the remaining four ships searched along the southern peninsula of South America. Finally they found the passage they sought near 50 degrees S latitude. Magellan named this passage the Strait of All Saints, but today it is known as the Strait of Magellan.</p>
        <p>One ship deserted while in this passage and returned to Spain, so fewer sailors were privileged to gaze at that first panorama of the Pacific Ocean. Those who remained crossed the meridian now known as the International Date Line in the early spring of 1521 after 98 days on the Pacific Ocean. During those long days at sea, many of Magellan’s men died of starvation and disease.</p>
        <p>Later, Magellan became involved in an insular conflict in the Philippines and was killed in a tribal battle. Only one ship and 17 sailors under the command of the Basque navigator Elcano survived to complete the westward journey to Spain and thus prove once and for all that the world is round, with no precipice at the edge.</p>
        
          <br>
        <p style="font-weight: bold;">${q.question}</p>
        <div class="space-y-3">
          ${q.options.map((opt, i) => `
            <label for="q${qNumber}a${i+1}" class="block">
              <input type="radio" id="q${qNumber}a${i+1}" name="q${qNumber}" value="${i === q.correct ? 1 : 0}" class="hidden" onchange="markSelected(this);">
              <div class="option-btn border border-gray-300 rounded-xl px-5 py-3 text-gray-800 bg-white cursor-pointer">${opt}</div>
            </label><br>
          `).join("")}
          <div style='display:none' class="CorrectAnswer questionCorrectAnswer">
            <p  >Correct answer:${q.correct+1}</p>
          </div>
        </div>
      `
  
      questionsContainer.appendChild(div);
  });
  
    questionsTask3.forEach((q,index)=>{
      const qNumber = index + questionsTask4.length + 10; // Унікальний номер
        const div = document.createElement("div");
    
        div.className = "question";
    
        div.innerHTML=`
        <h2><b>${q.heading}</b></h2>
        <br>
        <p>${q.text}</p>
        <p style="font-weight: bold;">${q.questionText}</p>
        <div class="space-y-3">
            ${q.options.map((opt, i) => `
              <label for="q${qNumber}a${i+1}" class="block">
                <input type="radio" id="q${qNumber}a${i+1}" name="q${qNumber}" value="${i === q.correct ? 1 : 0}" class="hidden" onchange="markSelected(this);">
                <div class="option-btn border border-gray-300 rounded-xl px-5 py-3 text-gray-800 bg-white cursor-pointer">${opt}</div>
              </label><br>
            `).join("")}
            <div style='display:none' class="CorrectAnswer questionCorrectAnswer">
            <p  >Correct answer:${q.correct+1}</p>
          </div>
          </div>
        `
        questionsContainer.appendChild(div);
    })
    
    questionsTask4.forEach((q,index)=>{
      const qNumber = index + questionsTask3.length + 20; // Унікальний номер
        const div = document.createElement("div");
    
        div.className = "question";
    
        div.innerHTML=`
        <h2 style="text-align: center; font-size:40px; font-weight:600">Lifelong Learning</h2>
        <p>${q.text}</p>
        <p style="font-weight: bold;">${q.questionText}</p>
        <div class="space-y-3">
            ${q.options.map((opt, i) => `
              <label for="q${qNumber}a${i+1}" class="block">
                <input type="radio" id="q${qNumber}a${i+1}" name="q${qNumber}" value="${i === q.correct ? 1 : 0}" class="hidden" onchange="markSelected(this);">
                <div class="option-btn border border-gray-300 rounded-xl px-5 py-3 text-gray-800 bg-white cursor-pointer">${opt}</div>
              </label><br>
            `).join("")}
            <div style='display:none' class="CorrectAnswer questionCorrectAnswer">
            <p  >Correct answer:${q.correct+1}</p>
          </div>
          </div>
        `
        questionsContainer.appendChild(div);
    })
    
    questionsTask5.forEach((q,index)=>{
      const qNumber = index + questionsTask4.length + 30; // Унікальний номер
        const div = document.createElement("div");
    
        div.className = "question";
    
        div.innerHTML=`
        <h3 style="text-align: center;font-size:30px; font-weight:600">USE OF ENGLISH</h3>
        <h2 style="text-align: center; font-size:40px; font-weight:600">The Mandela Effect</h2>
        <p>${q.text}</p>
        <p style="font-weight: bold;">${q.questionText}</p>
        <div class="space-y-3">
            ${q.options.map((opt, i) => `
              <label for="q${qNumber}a${i+1}" class="block">
                <input type="radio" id="q${qNumber}a${i+1}" name="q${qNumber}" value="${i === q.correct ? 1 : 0}" class="hidden" onchange="markSelected(this);">
                <div class="option-btn border border-gray-300 rounded-xl px-5 py-3 text-gray-800 bg-white cursor-pointer">${opt}</div>
              </label><br>
            `).join("")}
            <div style='display:none' class="CorrectAnswer questionCorrectAnswer">
            <p  >Correct answer:${q.correct+1}</p>
          </div>
          </div>
        `
        questionsContainer.appendChild(div);
    })
    questionsTask6.forEach((q,index)=>{
      const qNumber = index + questionsTask5.length + 40; // Унікальний номер
        const div = document.createElement("div");
    
        div.className = "question";
    
        div.innerHTML=`
        <h2 style="text-align: center;font-size:30px; font-weight:600">USE OF ENGLISH</h2>
        <h2 style="text-align: center; font-size:40px; font-weight:600"></h2>
        <p>${q.text}</p>
        <p style="font-weight: bold;">${q.questionText}</p>
        <div class="space-y-3">
            ${q.options.map((opt, i) => `
              <label for="q${qNumber}a${i+1}" class="block">
                <input type="radio" id="q${qNumber}a${i+1}" name="q${qNumber}" value="${i === q.correct ? 1 : 0}" class="hidden" onchange="markSelected(this);">
                <div class="option-btn border border-gray-300 rounded-xl px-5 py-3 text-gray-800 bg-white cursor-pointer">${opt}</div>
              </label><br>
            `).join("")}
            <div style='display:none' class="CorrectAnswer questionCorrectAnswer">
            <p  >Correct answer:${q.correct+1}</p>
          </div>
          </div>
        `
        questionsContainer.appendChild(div);
    })
  
    function markSelected(radio) {
      const allOptions = radio.closest(".space-y-3").querySelectorAll(".option-btn");
      allOptions.forEach(opt => opt.classList.remove("selected"));
      radio.nextElementSibling.classList.add("selected");
    }
  
    const Questions = document.querySelectorAll('.question'); 
  const nav = document.getElementById('taskNav');
  const buttons = [];
  let currentQuestion=0
      Questions.forEach((q, i) => {
        const btn = document.createElement('button');
        btn.textContent = i + 1;
        btn.onclick = () => showQuestion(i);
        if (i === 0) btn.classList.add('active');
        nav.appendChild(btn);
        buttons.push(btn);
      });
  
      function showQuestion(index) {
        Questions.forEach(q => {q.classList.remove('active');
        });
        Questions[index].classList.add('active');
  
        buttons.forEach(btn => btn.classList.remove('active'));
        buttons[index].classList.add('active');
        currentQuestion = index;
      }
  
      function checkAnswers() {
        const allQuestions = [...questions, ...questionsTask2, ...questionsTask3, ...questionsTask4, ...questionsTask5, ...questionsTask6];
        let score = 0;
        const tryAgainButton = document.getElementById('again');
        tryAgainButton.style.display = 'block';
        
        // Fix: Use document.getElementsByClassName to get elements with class 'CorrectAnswer'
        const correctAnswers = document.getElementsByClassName('CorrectAnswer');
        Array.from(correctAnswers).forEach((el) => {
          el.style.display = 'block';
        });
        
        Questions.forEach((qElement, i) => {
          const selected = qElement.querySelector('input[type="radio"]:checked');
          const selectedIndex = selected ? Array.from(qElement.querySelectorAll('input[type="radio"]')).indexOf(selected) : -1;
          const isCorrect = selectedIndex === allQuestions[i].correct;
      
          qElement.querySelectorAll('label').forEach(label => {
            label.classList.remove('correct-answer', 'incorrect-answer');
          });
      
          const correctRadio = qElement.querySelectorAll('input[type="radio"]')[allQuestions[i].correct];
          if (correctRadio && correctRadio.nextElementSibling) {
            correctRadio.nextElementSibling.classList.add('correct-answer');
          }
      
          if (selected && !isCorrect && selected.nextElementSibling) {
            selected.nextElementSibling.classList.add('incorrect-answer');
          }
      
          buttons[i].classList.remove('correct-answer', 'incorrect-answer');
          if (isCorrect) {
            score++;
            buttons[i].classList.add('correct-answer');
          } else {
            buttons[i].classList.add('incorrect-answer');
          }
      
          qElement.querySelectorAll('input[type="radio"]').forEach(radio => {
            radio.disabled = true;
          });
        });
      
        document.getElementById('result').textContent = `Ваш результат: ${score} з ${allQuestions.length}`;
      }
        
      
  
      function nextQuestion() {
        // Hide current question
        Questions[currentQuestion].classList.remove('active');
        buttons[currentQuestion].classList.remove('active');
  
        // Move to next question
        currentQuestion = (currentQuestion + 1) % Questions.length;
  
        // Show the next question
        Questions[currentQuestion].classList.add('active');
        buttons[currentQuestion].classList.add('active');
      }
      function tryAgain() {
        buttons.length = 0;
        nav.innerHTML = '';
        const correctAnswers = document.getElementsByClassName('CorrectAnswer');
        Array.from(correctAnswers).forEach((el) => {
          el.style.display = 'none';
        });
      
        Questions.forEach((q, i) => {
          const btn = document.createElement('button');
          btn.textContent = i + 1;
          btn.onclick = () => showQuestion(i);
          if (i === 0) btn.classList.add('active');
          nav.appendChild(btn);
          buttons.push(btn);
      
          // Reset all radio buttons and styling
          q.querySelectorAll('input[type="radio"]').forEach(radio => {
            radio.disabled = false;
            radio.checked = false;
          });
      
          // Remove correct-answer, incorrect-answer, and selected classes from option-btn divs
          q.querySelectorAll('.option-btn').forEach(option => {
            option.classList.remove('correct-answer', 'incorrect-answer', 'selected');
          });
        });
      
        showQuestion(0);
        document.getElementById('result').textContent = '';
        document.getElementById('again').style.display = 'none';
      }
  