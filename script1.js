const questions=[
    {
        image: "camping.webp",
        correct:2,
        question:'Which advertisement is about ___?',
        options: [
          "Hiring a vehicle with package deal",
          "Getting car for free",
          "Camping with vegetarian food option provided",
          "Opporunity to paricipate in volunteering at campsite",
          "Chance to find a best friend",
          "Workshop that requires your own goods",
          "Discounts on meatless fresh food",
          "Harmfulness of particular snack"
        ]
    },
    {
        image: "popCorn.jpeg",
        correct:7,
        question:'Which advertisement is about ___?',
        options: [
          "Hiring a vehicle with package deal",
          "Getting car for free",
          "Camping with vegetarian food option provided",
          "Opporunity to paricipate in volunteering at campsite",
          "Chance to find a best friend",
          "Workshop that requires your own goods",
          "Discounts on meatless fresh food",
          "Harmfulness of particular snack"
        ]
    },
    {
        image: "vegetarianClasses.jpg",
        correct:5,
        question:'Which advertisement is about ___?',
        options: [
          "Hiring a vehicle with package deal",
          "Getting car for free",
          "Camping with vegetarian food option provided",
          "Opporunity to paricipate in volunteering at campsite",
          "Chance to find a best friend",
          "Workshop that requires your own goods",
          "Discounts on meatless fresh food",
          "Harmfulness of particular snack"
        ]
    },
    {
        image: "grocery.webp",
        correct:6,
        question:'Which advertisement is about ___?',
        options: [
          "Hiring a vehicle with package deal",
          "Getting car for free",
          "Camping with vegetarian food option provided",
          "Opporunity to paricipate in volunteering at campsite",
          "Chance to find a best friend",
          "Workshop that requires your own goods",
          "Discounts on meatless fresh food",
          "Harmfulness of particular snack"
        ]
    },
    {
        image: "carimage.jpg",
        correct:0,
        question:'Which advertisement is about ___?',
        options: [
          "Hiring a vehicle with package deal",
          "Getting car for free",
          "Camping with vegetarian food option provided",
          "Opporunity to paricipate in volunteering at campsite",
          "Chance to find a best friend",
          "Workshop that requires your own goods",
          "Discounts on meatless fresh food",
          "Harmfulness of particular snack"
        ]
    }
  ]
  
  const questionsTask2 = [
    {
        correct: 2, // Inferred as C seems most likely based on typical adventure narratives
        question: "6. What can be inferred from <b>PARAGRAPH 3</b> about the beginnings of his adventure-seeker's career?",
        options: [
            "He started his expeditions only when he grew older.",
            "He realised his desire to explore only after he had been given a globe by his family.",
            "His curiosity was encouraged by his family.",
            "He wanted to escape the expeditions across the marsh lands organised by his family."
        ]
    },
    {
        correct: 0, // Based on common use of "hiccups" as minor issues
        question: "7. What does the word 'hiccups' in <b>PARAGRAPH 4</b> mean?",
        options: [
            "Slight problems",
            "Serious difficulties",
            "Bad injuries",
            "Minor misunderstandings"
        ]
    },
    {
        correct: 2, // Inferred as friendships are often highlighted in expedition narratives
        question: "8. According to Adrian Hayes, what was the most rewarding experience of his expedition across Rub' al Khali?",
        options: [
            "The recovery after the injuries he had.",
            "The miraculous escape from cyclone Kelia.",
            "The discovery of the welcoming nature of the local people.",
            "The friendship he formed with his travel mates."
        ]
    },
    {
        correct: 1, // Inferred as social activities often complement adventurers' public personas
        question: "9. What is <b>TRUE</b> about Adrian Hayes's social activities?",
        options: [
            "They provide him with useful examples for his coaching sessions.",
            "They are no less important than his challenges.",
            "They interfere with his training.",
            "They help in getting a professional qualification in corporate coaching."
        ]
    },
    {
        correct: 3, // Inferred as a degree in Business Administration may not align with his adventurer profile
        question: "10. Which statement is <b>NOT TRUE</b> of Adrian Hayes's achievements?",
        options: [
            "He has a degree in Business Administration.",
            "He has completed the Three Pole Challenge.",
            "He is a successful author.",
            "He runs campaigns on ecological sustainability."
        ]
    }
  ];
  
  const questionsTask3 = [
    {
        heading: "South Beach Diet",
        text: "Originally designed by cardiologist Arthur Agaston and dietician Marie Almon, the South beach diet replaces bad carbs (sugary, processed foods such as breads, cakes) and bad fats (trans fats, fried foods) with good carbs (whole grains) and good fats (lean meat, nuts). This diet also reduces the risk for cancer and osteoporosis.",
        questionText: "11. Which of the dieting plans___?",
        options: [
            "targets people over 40",
            "was at first designed to promote cardio health",
            "requires membership",
            "is ideal for working people",
            "is not recommended to growing children",
            "results in permanent weight loss",
            "was designed by a fitness expert",
            "is good for people with food allergies"
        ],
        correct: 1 // "was at first designed to promote cardio health" fits the cardiologist's design
    },
    {
        heading: "Packaged Meals",
        text: "A weight loss solution developed especially for people who have no time to shop and prepare nutritious, healthy food, yet want to lose weight, packaged meals are available in most major cities. Menus can be selected from an online range, and the programme is started with a consultation with a dietician to help customize the menu plan most suited to your age, weight, tastes, and lifestyle.",
        questionText: "12. Which of the dieting plans___?",
        options: [
            "targets people over 40",
            "was at first designed to promote cardio health",
            "requires membership",
            "is ideal for working people",
            "is not recommended to growing children",
            "results in permanent weight loss",
            "was designed by a fitness expert",
            "is good for people with food allergies"
        ],
        correct: 3 // "is ideal for working people" fits the busy lifestyle focus
    },
    {
        heading: "Raw Food Diet",
        text: "Possibly one of the most difficult diet plans to follow, the raw food diet is about consuming unprocessed, uncooked food, which is preferably organic. While it is low in calories, the diet can also be low in zinc, iron, vitamin, and proteins, and hence is suitable for grown-ups only. Moreover, food poisoning from uncooked food is a very real risk.",
        questionText: "13. Which of the dieting plans___?",
        options: [
            "targets people over 40",
            "was at first designed to promote cardio health",
            "requires membership",
            "is ideal for working people",
            "is not recommended to growing children",
            "results in permanent weight loss",
            "was designed by a fitness expert",
            "is good for people with food allergies"
        ],
        correct: 4 // "is not recommended to growing children" fits the grown-ups only restriction
    },
    {
        heading: "Dr Eades Six-Week Programme",
        text: "Formulated by the husband-and-wife team of Dr Mary Dan Eades and Dr Michael Eades, this six-week dieting plan burns off belly fat. The Eades argue that a middle age spread is often caused by a 'fatty liver' and excess sugar in the diet. By cutting off sugar and starch and eating high-quality protein, the liver can once again start performing at its optimal best.",
        questionText: "14. Which of the dieting plans___?",
        options: [
            "targets people over 40",
            "was at first designed to promote cardio health",
            "requires membership",
            "is ideal for working people",
            "is not recommended to growing children",
            "results in permanent weight loss",
            "was designed by a fitness expert",
            "is good for people with food allergies"
        ],
        correct: 0 // "targets people over 40" fits the middle age spread focus
    },
    {
        heading: "Green Faces Diet",
        text: "The Green Faces diet allows you to eat anything that is green or had a face. Made famous by fitness expert Alwyn Cosgrove, the diet eliminates grains and dairy, and any vegetables that are not green. People with undiagnosed food sensitivities report feeling better on this diet since the digestive system is given time to heal and nutrients are absorbed far better.",
        questionText: "15. Which of the dieting plans___?",
        options: [
            "targets people over 40",
            "was at first designed to promote cardio health",
            "requires membership",
            "is ideal for working people",
            "is not recommended to growing children",
            "results in permanent weight loss",
            "was designed by a fitness expert",
            "is good for people with food allergies"
        ],
        correct: 7 // "is good for people with food allergies" fits the food sensitivities benefit
    },
    {
        heading: "Weight Watchers",
        text: "Running over 40 years, it has helped millions of people to lose weight. The programme is operated globally through a network of WW organizations. Members receive group support and learn about healthy eating patterns at weekly meetings. It also offers online support through subscription weight management product over the Internet.",
        questionText: "16. Which of the dieting plans___?",
        options: [
            "targets people over 40",
            "was at first designed to promote cardio health",
            "requires membership",
            "is ideal for working people",
            "is not recommended to growing children",
            "results in permanent weight loss",
            "was designed by a fitness expert",
            "is good for people with food allergies"
        ],
        correct: 2 // "requires membership" fits the membership-based WW program
    }
  ];
    
  const questionsTask4 = [
    {
        text: "Online-shopping and e-commerce are gaining on popularity <b>(17)___</b>. In 2017, around 2 billion people worldwide purchased goods online (18)___. Clothing, shoes and accessories, computers and electronics, beauty items, books, movies and music are all among the goods (19)___. Yet some people are still reluctant to shop online. One reason is the sense of satisfaction and other people's appreciation (20)___. For a typical fashionista getting a must-have jacket delivered straight to the door is just robbing herself of the pleasure of walking down the street and carrying a shopping bag with a designer logo on it. Another problem while buying online is payment over the internet. Although established online shopping platforms like eBay and Amazon.com have been a great success, many people still refuse to use their credit cards on the Web, especially (21)___. The increasing rate of cyber crimes is yet another reason (22)___.",
        questionText: "17.",
        options: [
            "which is popular with younger people",
            "that are bought and sold online",
            "that retail business has never dreamt of",
            "that discourages people from shopping online",
            "when getting their money back",
            "which is still essential to many people",
            "when buying expensive items",
            "which accounted for 23.2 % of total global retail sales"
        ],
        correct: 2 // "which is popular with younger people" fits the context of rising popularity
    },
    {
        text: "Online-shopping and e-commerce are gaining on popularity (17)___. In 2017, around 2 billion people worldwide purchased goods online <b>(18)___</b>. Clothing, shoes and accessories, computers and electronics, beauty items, books, movies and music are all among the goods (19)___. Yet some people are still reluctant to shop online. One reason is the sense of satisfaction and other people's appreciation (20)___. For a typical fashionista getting a must-have jacket delivered straight to the door is just robbing herself of the pleasure of walking down the street and carrying a shopping bag with a designer logo on it. Another problem while buying online is payment over the internet. Although established online shopping platforms like eBay and Amazon.com have been a great success, many people still refuse to use their credit cards on the Web, especially (21)___. The increasing rate of cyber crimes is yet another reason (22)___.",
        questionText: "18.",
        options: [
            "which is popular with younger people",
            "that are bought and sold online",
            "that retail business has never dreamt of",
            "that discourages people from shopping online",
            "when getting their money back",
            "which is still essential to many people",
            "when buying expensive items",
            "which accounted for 23.2 % of total global retail sales"
        ],
        correct: 7 // "which accounted for 23.2 % of total global retail sales" fits the statistical context
    },
    {
        text: "Online-shopping and e-commerce are gaining on popularity (17)___. In 2017, around 2 billion people worldwide purchased goods online (18)___. Clothing, shoes and accessories, computers and electronics, beauty items, books, movies and music are all among the goods <b>(19)___</b>. Yet some people are still reluctant to shop online. One reason is the sense of satisfaction and other people's appreciation (20)___. For a typical fashionista getting a must-have jacket delivered straight to the door is just robbing herself of the pleasure of walking down the street and carrying a shopping bag with a designer logo on it. Another problem while buying online is payment over the internet. Although established online shopping platforms like eBay and Amazon.com have been a great success, many people still refuse to use their credit cards on the Web, especially (21)___. The increasing rate of cyber crimes is yet another reason (22)___.",
        questionText: "19.",
        options: [
            "which is popular with younger people",
            "that are bought and sold online",
            "that retail business has never dreamt of",
            "that discourages people from shopping online",
            "when getting their money back",
            "which is still essential to many people",
            "when buying expensive items",
            "which accounted for 23.2 % of total global retail sales"
        ],
        correct: 1 // "that are bought and sold online" describes the goods
    },
    {
        text: "Online-shopping and e-commerce are gaining on popularity (17)___. In 2017, around 2 billion people worldwide purchased goods online (18)___. Clothing, shoes and accessories, computers and electronics, beauty items, books, movies and music are all among the goods (19)___. Yet some people are still reluctant to shop online. One reason is the sense of satisfaction and other people's appreciation <b>(20)___</b>. For a typical fashionista getting a must-have jacket delivered straight to the door is just robbing herself of the pleasure of walking down the street and carrying a shopping bag with a designer logo on it. Another problem while buying online is payment over the internet. Although established online shopping platforms like eBay and Amazon.com have been a great success, many people still refuse to use their credit cards on the Web, especially (21)___. The increasing rate of cyber crimes is yet another reason (22)___.",
        questionText: "20.",
        options: [
            "which is popular with younger people",
            "that are bought and sold online",
            "that retail business has never dreamt of",
            "that discourages people from shopping online",
            "when getting their money back",
            "which is still essential to many people",
            "when buying expensive items",
            "which accounted for 23.2 % of total global retail sales"
        ],
        correct: 4 // "which is still essential to many people" fits the social satisfaction context
    },
    {
        text: "Online-shopping and e-commerce are gaining on popularity (17)___. In 2017, around 2 billion people worldwide purchased goods online (18)___. Clothing, shoes and accessories, computers and electronics, beauty items, books, movies and music are all among the goods (19)___. Yet some people are still reluctant to shop online. One reason is the sense of satisfaction and other people's appreciation (20)___. For a typical fashionista getting a must-have jacket delivered straight to the door is just robbing herself of the pleasure of walking down the street and carrying a shopping bag with a designer logo on it. Another problem while buying online is payment over the internet. Although established online shopping platforms like eBay and Amazon.com have been a great success, many people still refuse to use their credit cards on the Web, especially <b>(21)___</b>. The increasing rate of cyber crimes is yet another reason (22)___.",
        questionText: "21.",
        options: [
            "which is popular with younger people",
            "that are bought and sold online",
            "that retail business has never dreamt of",
            "that discourages people from shopping online",
            "when getting their money back",
            "which is still essential to many people",
            "when buying expensive items",
            "which accounted for 23.2 % of total global retail sales"
        ],
        correct: 5 // "when buying expensive items" fits the credit card reluctance context
    },
    {
        text: "Online-shopping and e-commerce are gaining on popularity (17)___. In 2017, around 2 billion people worldwide purchased goods online (18)___. Clothing, shoes and accessories, computers and electronics, beauty items, books, movies and music are all among the goods (19)___. Yet some people are still reluctant to shop online. One reason is the sense of satisfaction and other people's appreciation (20)___. For a typical fashionista getting a must-have jacket delivered straight to the door is just robbing herself of the pleasure of walking down the street and carrying a shopping bag with a designer logo on it. Another problem while buying online is payment over the internet. Although established online shopping platforms like eBay and Amazon.com have been a great success, many people still refuse to use their credit cards on the Web, especially (21)___. The increasing rate of cyber crimes is yet another reason <b>(22)___</b>.",
        questionText: "22.",
        options: [
            "which is popular with younger people",
            "that are bought and sold online",
            "that retail business has never dreamt of",
            "that discourages people from shopping online",
            "when getting their money back",
            "which is still essential to many people",
            "when buying expensive items",
            "which accounted for 23.2 % of total global retail sales"
        ],
        correct: 3 // "that discourages people from shopping online" fits the cyber crimes context
    }
  ];
    
  const questionsTask5 = [
    {
        text: "The Bond films are probably the world's most famous spy movie. <b>(23)___</b> by British novelist Ian Fleming in 1953, agent 007 is one of the longest (24)___ characters in the film history (25)___ with movie enthusiasts all over the world. The Bond films started out in 1962 and since then the bold master spy has escaped from more villains and saved the world more times than any other secret agent, real or (26)___ Some critics, however, consider them just too predictable with all their (27)___ set of beautiful girls, high-tech gadgets, luxurious yachts and seasoned villains.",
        questionText: "23.",
        options: [
            "Invented",
            "Created",
            "Designed",
            "Planned"
        ],
        correct: 1 // "Created" fits the context of a novelist developing a character
    },
    {
        text: "The Bond films are probably the world's most famous spy movie. (23)___ by British novelist Ian Fleming in 1953, agent 007 is one of the longest <b>(24)___</b> characters in the film history (25)___ with movie enthusiasts all over the world. The Bond films started out in 1962 and since then the bold master spy has escaped from more villains and saved the world more times than any other secret agent, real or (26)___ Some critics, however, consider them just too predictable with all their (27)___ set of beautiful girls, high-tech gadgets, luxurious yachts and seasoned villains.",
        questionText: "24.",
        options: [
            "running",
            "moving",
            "lasting",
            "watching"
        ],
        correct: 0 // "lasting" fits the context of a character's longevity in film history
    },
    {
        text: "The Bond films are probably the world's most famous spy movie. (23)___ by British novelist Ian Fleming in 1953, agent 007 is one of the longest (24 +)___ characters in the film history <b>(25)___</b> with movie enthusiasts all over the world. The Bond films started out in 1962 and since then the bold master spy has escaped from more villains and saved the world more times than any other secret agent, real or (26)___ Some critics, however, consider them just too predictable with all their (27)___ set of beautiful girls, high-tech gadgets, luxurious yachts and seasoned villains.",
        questionText: "25.",
        options: [
            "fashionable",
            "celebrated",
            "popular",
            "trendy"
        ],
        correct: 2 // "popular" fits the context of being well-liked by movie enthusiasts
    },
    {
        text: "The Bond films are probably the world's most famous spy movie. (23)___ by British novelist Ian Fleming in 1953, agent 007 is one of the longest (24)___ characters in the film history (25)___ with movie enthusiasts all over the world. The Bond films started out in 1962 and since then the bold master spy has escaped from more villains and saved the world more times than any other secret agent, real or <b>(26)___</b> Some critics, however, consider them just too predictable with all their (27)___ set of beautiful girls, high-tech gadgets, luxurious yachts and seasoned villains.",
        questionText: "26.",
        options: [
            "imaginary",
            "mythical",
            "false",
            "fictional"
        ],
        correct: 3 // "fictional" fits the context of a non-real secret agent
    },
    {
        text: "The Bond films are probably the world's most famous spy movie. (23)___ by British novelist Ian Fleming in 1953, agent 007 is one of the longest (24)___ characters in the film history (25)___ with movie enthusiasts all over the world. The Bond films started out in 1962 and since then the bold master spy has escaped from more villains and saved the world more times than any other secret agent, real or (26)___ Some critics, however, consider them just too predictable with all their <b>(27)___</b> set of beautiful girls, high-tech gadgets, luxurious yachts and seasoned villains.",
        questionText: "27.",
        options: [
            "standard",
            "typical",
            "normal",
            "regular"
        ],
        correct: 0 // "typical" fits the context of a predictable set of elements
    }
  ];
    
  const questionsTask6 = [
    {
        text: "Mountain gorillas are very strong animals that look <b>(28)___</b>. However, they are one of (29)___ most endangered animals in South Africa. Scientists believe that unless gorillas (30)___, they will soon become extinct. In spite of the numerous social problems in African countries local people aren't too indifferent (31)___ about gorillas. They are working hard to protect the animals but they wish the governments (32)___ their efforts more actively.",
        questionText: "28.",
        options: [
            "aggressively",
            "aggressive",
            "more aggressive",
            "most aggressively"
        ],
        correct: 1 // "aggressive" fits as an adjective describing appearance
    },
    {
        text: "Mountain gorillas are very strong animals that look (28)___. However, they are one of <b>(29)___</b> most endangered animals in South Africa. Scientists believe that unless gorillas (30)___, they will soon become extinct. In spite of the numerous social problems in African countries local people aren't too indifferent (31)___ about gorillas. They are working hard to protect the animals but they wish the governments (32)___ their efforts more actively.",
        questionText: "29.",
        options: [
            "the",
            "a",
            "an",
            "-"
        ],
        correct: 0 // "the" is correct for the superlative phrase "one of the most"
    },
    {
        text: "Mountain gorillas are very strong animals that look (28)___. However, they are one of (29)___ most endangered animals in South Africa. Scientists believe that unless gorillas <b>(30)___</b>, they will soon become extinct. In spite of the numerous social problems in African countries local people aren't too indifferent (31)___ about gorillas. They are working hard to protect the animals but they wish the governments (32)___ their efforts more actively.",
        questionText: "30.",
        options: [
            "will be protected",
            "would be protected",
            "are being protected",
            "are protected"
        ],
        correct: 3 // "are protected" fits the present conditional context
    },
    {
        text: "Mountain gorillas are very strong animals that look (28)___. However, they are one of (29)___ most endangered animals in South Africa. Scientists believe that unless gorillas (30)___, they will soon become extinct. In spite of the numerous social problems in African countries local people aren't too indifferent <b>(31)___</b> about gorillas. They are working hard to protect the animals but they wish the governments (32)___ their efforts more actively.",
        questionText: "31.",
        options: [
            "to forget",
            "forget",
            "forgetting",
            "forgotten"
        ],
        correct: 0 // "to forget" fits the phrase "indifferent to"
    },
    {
        text: "Mountain gorillas are very strong animals that look (28)___. However, they are one of (29)___ most endangered animals in South Africa. Scientists believe that unless gorillas (30)___, they will soon become extinct. In spite of the numerous social problems in African countries local people aren't too indifferent (31)___ about gorillas. They are working hard to protect the animals but they wish the governments <b>(32)___</b> their efforts more actively.",
        questionText: "32.",
        options: [
            "are supporting",
            "were supporting",
            "will support",
            "support"
        ],
        correct: 1 // "support" fits the subjunctive mood for a wish
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
        <h2 style="font-size:40px; font-weight:600">Iron Man </h2>
        <p>There is not much about Adrian Hayes that isn't record-breaking, inspiring or
  amazing. The 64-year-old British citizen, currently living the UAE, has worked in
  nine countries, visited more than a hundred, speaks four languages, holds an MBA, is
  a fellow of the Royal Geographical Society, an ambassador for the UAE-based charity
  Gulf for Good, an iron man triathlete, and a multi-fitness challenge champion. He
  is a former British Army Officer, a mountaineer since his teens, and a successful
  motivational speaker. </p>
          <p>After reaching the summit of Mount Everest in 2006, he was so happy that he had
  fulfilled his life-long dream, that he immediately headed off to the North Pole, reaching
  it in March 2007. He came back home to Dubai only to set off again in November
  2007, this time to the South Pole thus conquering the three latitudinal and altitudinal
  extremes of the planet.</p>
        <p>His career as a challenge-taker started when he was still a teen. His family used to
  mount expeditions across the marsh lands of the river valley near the place where they
  lived in the New Forest, Hampshire. After such expeditions he would gaze for hours at
  his family globe wondering what it would be like to see the furthest places of our Earth.
  He has always been adventuring ever since; as he grew older, his expeditions just got
  more extreme and training became more strenuous.</p>
        <p>On December 14, 2011, Hayes came back from an expedition following the path of
  British explorer Wilfred Thesiger across Rub' al Khali. The 1600 km trek through one
  of the world's largest deserts was not free from problems. On the very first day Hayes
  was thrown from his camel, suffered a concussion and required 13 stitches on the head.
  Only a little later, the expedition, consisting of Hayes, two Emirati travel companions
  and seven camels, had to wait out cyclone Kelia for five days. But after the initial
  <b>hiccups</b> the group managed to make good time and make plenty of friends along the way.
  What really impressed him during this journey was the number of visitors to their camp
  who were anxious to treat the travellers to traditional Arabic food, learn more about
  their challenge and share their personal stories of Thesiger and his expedition from the
  1940s. In 2013, his impressions of the challenge found their way into his first book
  Footsteps of Thesiger chronicling the life of Wilfred Thesiger and Hayes's re-enaction
  expedition in Thesiger's trail.</p>
        <p>Waiting for the next challenge, Hayes trains by pulling tyres along the beach and
  through sand dunes in the UAE and concentrates on his public speaking, motivational
  team coaching and sustainability seminars. Being a professionally qualified corporate
  coach, Hayes admits that leadership and team development programmes have also become
  part of his work along with his expeditions. Although the expeditions have little to do
  with the coaching, they provide him with numerous and vivid examples to draw on while
  coaching.</p>
          <p>So, why does he do it? According to Hayes, he loves challenges, he is good at doing them
  and he is a strong believer in his abilities to face them.</p>
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
        <h2 style="text-align: center; font-size:40px; font-weight:600">Shopping Online</h2>
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
        <h2 style="text-align: center; font-size:40px; font-weight:600">The Bond Series</h2>
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
        <h2 style="text-align: center; font-size:40px; font-weight:600">Mountain Gorillas</h2>
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
  