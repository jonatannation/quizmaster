const questions = {
    Sport: [
      {
        questionEn: "Which country won the FIFA World Cup in 2018?",
        questionNo: "Hvilket land vant FIFA World Cup i 2018?",
        answersEn: ["Brazil", "Germany", "France", "Argentina"],
        answersNo: ["Brasil", "Tyskland", "Frankrike", "Argentina"],
        correctAnswerEn: "France",
        correctAnswerNo: "Frankrike"
      },
      {
        questionEn: "In which sport is the term 'love' used to indicate zero points?",
        questionNo: "I hvilken sport bruker man uttrykket 'love' for å indikere null poeng?",
        answersEn: ["Badminton", "Tennis", "Volleyball", "Table Tennis"],
        answersNo: ["Badminton", "Tennis", "Volleyball", "Bordtennis"],
        correctAnswerEn: "Tennis",
        correctAnswerNo: "Tennis"
      },
      {
        questionEn: "How many players are there on a standard soccer team?",
        questionNo: "Hvor mange spillere er det på et standard fotballag?",
        answersEn: ["9", "10", "11", "12"],
        answersNo: ["9", "10", "11", "12"],
        correctAnswerEn: "11",
        correctAnswerNo: "11"
      },
      {
        questionEn: "Which sport is associated with Wimbledon?",
        questionNo: "Hvilken sport assosieres med Wimbledon?",
        answersEn: ["Golf", "Tennis", "Cricket", "Polo"],
        answersNo: ["Golf", "Tennis", "Cricket", "Polo"],
        correctAnswerEn: "Tennis",
        correctAnswerNo: "Tennis"
      },
      {
        questionEn: "In which Olympics did Usain Bolt first compete?",
        questionNo: "I hvilken OL deltok Usain Bolt for første gang?",
        answersEn: ["Athens 2004", "Beijing 2008", "London 2012", "Rio 2016"],
        answersNo: ["Athen 2004", "Beijing 2008", "London 2012", "Rio 2016"],
        correctAnswerEn: "Athens 2004",
        correctAnswerNo: "Athen 2004"
      },
      {
        questionEn: "Which country has won the most Olympic medals in total?",
        questionNo: "Hvilket land har vunnet flest OL-medaljer totalt?",
        answersEn: ["USA", "Soviet Union", "Germany", "China"],
        answersNo: ["USA", "Sovjetunionen", "Tyskland", "Kina"],
        correctAnswerEn: "USA",
        correctAnswerNo: "USA"
      },
      {
        questionEn: "In which sport would you perform a slam dunk?",
        questionNo: "I hvilken sport utfører man en slam dunk?",
        answersEn: ["Volleyball", "Basketball", "Tennis", "Hockey"],
        answersNo: ["Volleyball", "Basketball", "Tennis", "Hockey"],
        correctAnswerEn: "Basketball",
        correctAnswerNo: "Basketball"
      },
      {
        questionEn: "What is the national sport of Japan?",
        questionNo: "Hva er Japans nasjonalsport?",
        answersEn: ["Judo", "Karate", "Sumo", "Kendo"],
        answersNo: ["Judo", "Karate", "Sumo", "Kendo"],
        correctAnswerEn: "Sumo",
        correctAnswerNo: "Sumo"
      },
      {
        questionEn: "Which country invented table tennis?",
        questionNo: "Hvilket land oppfant bordtennis?",
        answersEn: ["China", "Japan", "England", "USA"],
        answersNo: ["Kina", "Japan", "England", "USA"],
        correctAnswerEn: "England",
        correctAnswerNo: "England"
      },
      {
        questionEn: "How long is an Olympic swimming pool?",
        questionNo: "Hvor lang er et olympisk svømmebasseng?",
        answersEn: ["25 meters", "50 meters", "75 meters", "100 meters"],
        answersNo: ["25 meter", "50 meter", "75 meter", "100 meter"],
        correctAnswerEn: "50 meters",
        correctAnswerNo: "50 meter"
      }
    ],
    Geography: [
      {
        questionEn: "What is the capital of Australia?",
        questionNo: "Hva er hovedstaden i Australia?",
        answersEn: ["Sydney", "Melbourne", "Canberra", "Perth"],
        answersNo: ["Sydney", "Melbourne", "Canberra", "Perth"],
        correctAnswerEn: "Canberra",
        correctAnswerNo: "Canberra"
      },
      {
        questionEn: "Which country has the largest land area?",
        questionNo: "Hvilket land har det største landarealet?",
        answersEn: ["China", "USA", "Canada", "Russia"],
        answersNo: ["Kina", "USA", "Canada", "Russland"],
        correctAnswerEn: "Russia",
        correctAnswerNo: "Russland"
      },
      {
        questionEn: "Which river is the longest in the world?",
        questionNo: "Hvilken elv er den lengste i verden?",
        answersEn: ["Amazon", "Nile", "Yangtze", "Mississippi"],
        answersNo: ["Amazonas", "Nilen", "Yangtze", "Mississippi"],
        correctAnswerEn: "Nile",
        correctAnswerNo: "Nilen"
      },
      {
        questionEn: "What is the smallest country in the world?",
        questionNo: "Hva er verdens minste land?",
        answersEn: ["Monaco", "San Marino", "Liechtenstein", "Vatican City"],
        answersNo: ["Monaco", "San Marino", "Liechtenstein", "Vatikanstaten"],
        correctAnswerEn: "Vatican City",
        correctAnswerNo: "Vatikanstaten"
      },
      {
        questionEn: "Which African country has the largest population?",
        questionNo: "Hvilket afrikansk land har størst befolkning?",
        answersEn: ["Egypt", "Ethiopia", "Nigeria", "South Africa"],
        answersNo: ["Egypt", "Etiopia", "Nigeria", "Sør-Afrika"],
        correctAnswerEn: "Nigeria",
        correctAnswerNo: "Nigeria"
      },
      {
        questionEn: "Which mountain range runs along South America's western coast?",
        questionNo: "Hvilken fjellkjede strekker seg langs Sør-Amerikas vestkyst?",
        answersEn: ["Rocky Mountains", "Andes", "Alps", "Himalayas"],
        answersNo: ["Rocky Mountains", "Andesfjellene", "Alpene", "Himalaya"],
        correctAnswerEn: "Andes",
        correctAnswerNo: "Andesfjellene"
      },
      {
        questionEn: "What is the capital of Canada?",
        questionNo: "Hva er hovedstaden i Canada?",
        answersEn: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
        answersNo: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
        correctAnswerEn: "Ottawa",
        correctAnswerNo: "Ottawa"
      },
      {
        questionEn: "Which country is home to the Great Barrier Reef?",
        questionNo: "Hvilket land er hjemmet til Great Barrier Reef?",
        answersEn: ["Indonesia", "Philippines", "Australia", "Thailand"],
        answersNo: ["Indonesia", "Filippinene", "Australia", "Thailand"],
        correctAnswerEn: "Australia",
        correctAnswerNo: "Australia"
      },
      {
        questionEn: "What is the largest desert in the world?",
        questionNo: "Hva er verdens største ørken?",
        answersEn: ["Gobi", "Kalahari", "Sahara", "Antarctic"],
        answersNo: ["Gobi", "Kalahari", "Sahara", "Antarktis"],
        correctAnswerEn: "Antarctic",
        correctAnswerNo: "Antarktis"
      },
      {
        questionEn: "Which European city is divided by the Danube River?",
        questionNo: "Hvilken europeisk by er delt av Donau?",
        answersEn: ["Vienna", "Budapest", "Belgrade", "Bratislava"],
        answersNo: ["Wien", "Budapest", "Beograd", "Bratislava"],
        correctAnswerEn: "Budapest",
        correctAnswerNo: "Budapest"
      }
    ],
    History: [
      {
        questionEn: "In which year did World War II end?",
        questionNo: "I hvilket år sluttet andre verdenskrig?",
        answersEn: ["1943", "1944", "1945", "1946"],
        answersNo: ["1943", "1944", "1945", "1946"],
        correctAnswerEn: "1945",
        correctAnswerNo: "1945"
      },
      {
        questionEn: "Who was the first President of the United States?",
        questionNo: "Hvem var USAs første president?",
        answersEn: ["Thomas Jefferson", "John Adams", "George Washington", "Benjamin Franklin"],
        answersNo: ["Thomas Jefferson", "John Adams", "George Washington", "Benjamin Franklin"],
        correctAnswerEn: "George Washington",
        correctAnswerNo: "George Washington"
      },
      {
        questionEn: "In which year did the Berlin Wall fall?",
        questionNo: "I hvilket år falt Berlinmuren?",
        answersEn: ["1987", "1989", "1991", "1993"],
        answersNo: ["1987", "1989", "1991", "1993"],
        correctAnswerEn: "1989",
        correctAnswerNo: "1989"
      },
      {
        questionEn: "Who was the first human to journey into space?",
        questionNo: "Hvem var det første mennesket som reiste ut i verdensrommet?",
        answersEn: ["Neil Armstrong", "Yuri Gagarin", "John Glenn", "Alan Shepard"],
        answersNo: ["Neil Armstrong", "Yuri Gagarin", "John Glenn", "Alan Shepard"],
        correctAnswerEn: "Yuri Gagarin",
        correctAnswerNo: "Yuri Gagarin"
      },
      {
        questionEn: "In which year was the Magna Carta signed?",
        questionNo: "I hvilket år ble Magna Carta signert?",
        answersEn: ["1215", "1315", "1415", "1515"],
        answersNo: ["1215", "1315", "1415", "1515"],
        correctAnswerEn: "1215",
        correctAnswerNo: "1215"
      },
      {
        questionEn: "Who was the first woman to win a Nobel Prize?",
        questionNo: "Hvem var den første kvinnen som vant en Nobelpris?",
        answersEn: ["Marie Curie", "Mother Teresa", "Jane Addams", "Bertha von Suttner"],
        answersNo: ["Marie Curie", "Mor Teresa", "Jane Addams", "Bertha von Suttner"],
        correctAnswerEn: "Marie Curie",
        correctAnswerNo: "Marie Curie"
      },
      {
        questionEn: "In which year did Christopher Columbus first reach the Americas?",
        questionNo: "I hvilket år nådde Christofer Columbus Amerika for første gang?",
        answersEn: ["1492", "1498", "1502", "1506"],
        answersNo: ["1492", "1498", "1502", "1506"],
        correctAnswerEn: "1492",
        correctAnswerNo: "1492"
      },
      {
        questionEn: "Who was the leader of the Soviet Union during the Cuban Missile Crisis?",
        questionNo: "Hvem var leder for Sovjetunionen under Cuba-krisen?",
        answersEn: ["Joseph Stalin", "Nikita Khrushchev", "Leonid Brezhnev", "Mikhail Gorbachev"],
        answersNo: ["Joseph Stalin", "Nikita Khrushchev", "Leonid Brezhnev", "Mikhail Gorbachev"],
        correctAnswerEn: "Nikita Khrushchev",
        correctAnswerNo: "Nikita Khrushchev"
      },
      {
        questionEn: "Which ancient wonder was located in Alexandria, Egypt?",
        questionNo: "Hvilket av oldtidens underverker lå i Alexandria, Egypt?",
        answersEn: ["The Hanging Gardens", "The Lighthouse", "The Colossus", "The Mausoleum"],
        answersNo: ["De hengende hager", "Fyrtårnet", "Kolossen", "Mausoleet"],
        correctAnswerEn: "The Lighthouse",
        correctAnswerNo: "Fyrtårnet"
      },
      {
        questionEn: "Who was the last Pharaoh of Ancient Egypt?",
        questionNo: "Hvem var den siste faraoen i det gamle Egypt?",
        answersEn: ["Ramses II", "Tutankhamun", "Cleopatra VII", "Nefertiti"],
        answersNo: ["Ramses II", "Tutankhamon", "Kleopatra VII", "Nefertiti"],
        correctAnswerEn: "Cleopatra VII",
        correctAnswerNo: "Kleopatra VII"
      }
    ],
    Science: [
      {
        questionEn: "What is the chemical symbol for gold?",
        questionNo: "Hva er det kjemiske symbolet for gull?",
        answersEn: ["Au", "Ag", "Fe", "Cu"],
        answersNo: ["Au", "Ag", "Fe", "Cu"],
        correctAnswerEn: "Au",
        correctAnswerNo: "Au"
      },
      {
        questionEn: "What is the largest planet in our solar system?",
        questionNo: "Hva er den største planeten i vårt solsystem?",
        answersEn: ["Mars", "Jupiter", "Saturn", "Neptune"],
        answersNo: ["Mars", "Jupiter", "Saturn", "Neptun"],
        correctAnswerEn: "Jupiter",
        correctAnswerNo: "Jupiter"
      },
      {
        questionEn: "What is the speed of light?",
        questionNo: "Hva er lysets hastighet?",
        answersEn: ["299,792 km/s", "199,792 km/s", "399,792 km/s", "499,792 km/s"],
        answersNo: ["299 792 km/s", "199 792 km/s", "399 792 km/s", "499 792 km/s"],
        correctAnswerEn: "299,792 km/s",
        correctAnswerNo: "299 792 km/s"
      },
      {
        questionEn: "What is the hardest natural substance on Earth?",
        questionNo: "Hva er det hardeste naturlige stoffet på jorden?",
        answersEn: ["Diamond", "Quartz", "Topaz", "Corundum"],
        answersNo: ["Diamant", "Kvarts", "Topas", "Korund"],
        correctAnswerEn: "Diamond",
        correctAnswerNo: "Diamant"
      },
      {
        questionEn: "What is the name of the process by which plants make their own food?",
        questionNo: "Hva er navnet på prosessen der planter lager sin egen mat?",
        answersEn: ["Photosynthesis", "Respiration", "Fermentation", "Transpiration"],
        answersNo: ["Fotosyntese", "Respirasjon", "Fermentering", "Transpirasjon"],
        correctAnswerEn: "Photosynthesis",
        correctAnswerNo: "Fotosyntese"
      },
      {
        questionEn: "What is the smallest unit of matter?",
        questionNo: "Hva er den minste enheten av materie?",
        answersEn: ["Atom", "Molecule", "Electron", "Quark"],
        answersNo: ["Atom", "Molekyl", "Elektron", "Kvark"],
        correctAnswerEn: "Quark",
        correctAnswerNo: "Kvark"
      },
      {
        questionEn: "What is the chemical formula for water?",
        questionNo: "Hva er den kjemiske formelen for vann?",
        answersEn: ["H2O", "CO2", "NaCl", "CH4"],
        answersNo: ["H2O", "CO2", "NaCl", "CH4"],
        correctAnswerEn: "H2O",
        correctAnswerNo: "H2O"
      },
      {
        questionEn: "Which planet is known as the Red Planet?",
        questionNo: "Hvilken planet er kjent som den røde planeten?",
        answersEn: ["Venus", "Mars", "Jupiter", "Mercury"],
        answersNo: ["Venus", "Mars", "Jupiter", "Merkur"],
        correctAnswerEn: "Mars",
        correctAnswerNo: "Mars"
      },
      {
        questionEn: "What is the largest organ in the human body?",
        questionNo: "Hva er det største organet i menneskekroppen?",
        answersEn: ["Brain", "Liver", "Skin", "Heart"],
        answersNo: ["Hjerne", "Lever", "Hud", "Hjerte"],
        correctAnswerEn: "Skin",
        correctAnswerNo: "Hud"
      },
      {
        questionEn: "What is the boiling point of water in Celsius?",
        questionNo: "Hva er kokepunktet for vann i Celsius?",
        answersEn: ["50°C", "75°C", "100°C", "125°C"],
        answersNo: ["50°C", "75°C", "100°C", "125°C"],
        correctAnswerEn: "100°C",
        correctAnswerNo: "100°C"
      }
    ],
    Music: [
      {
        questionEn: "Who is known as the 'King of Pop'?",
        questionNo: "Hvem er kjent som 'Popkongen'?",
        answersEn: ["Elvis Presley", "Michael Jackson", "Prince", "David Bowie"],
        answersNo: ["Elvis Presley", "Michael Jackson", "Prince", "David Bowie"],
        correctAnswerEn: "Michael Jackson",
        correctAnswerNo: "Michael Jackson"
      },
      {
        questionEn: "Which band performed the song 'Bohemian Rhapsody'?",
        questionNo: "Hvilket band fremførte sangen 'Bohemian Rhapsody'?",
        answersEn: ["The Beatles", "Queen", "Led Zeppelin", "Pink Floyd"],
        answersNo: ["The Beatles", "Queen", "Led Zeppelin", "Pink Floyd"],
        correctAnswerEn: "Queen",
        correctAnswerNo: "Queen"
      },
      {
        questionEn: "What instrument does a pianist play?",
        questionNo: "Hvilket instrument spiller en pianist?",
        answersEn: ["Guitar", "Drums", "Piano", "Violin"],
        answersNo: ["Gitar", "Trommer", "Piano", "Fiolin"],
        correctAnswerEn: "Piano",
        correctAnswerNo: "Piano"
      },
      {
        questionEn: "Who composed the 'Four Seasons'?",
        questionNo: "Hvem komponerte 'De fire årstider'?",
        answersEn: ["Bach", "Mozart", "Beethoven", "Vivaldi"],
        answersNo: ["Bach", "Mozart", "Beethoven", "Vivaldi"],
        correctAnswerEn: "Vivaldi",
        correctAnswerNo: "Vivaldi"
      },
      {
        questionEn: "Which of these is not a type of guitar?",
        questionNo: "Hvilken av disse er ikke en type gitar?",
        answersEn: ["Acoustic", "Electric", "Bass", "Trumpet"],
        answersNo: ["Akustisk", "Elektrisk", "Bass", "Trompet"],
        correctAnswerEn: "Trumpet",
        correctAnswerNo: "Trompet"
      },
      {
        questionEn: "Which Beatles album features the song 'Here Comes the Sun'?",
        questionNo: "Hvilket Beatles-album inneholder sangen 'Here Comes the Sun'?",
        answersEn: ["Let It Be", "Abbey Road", "Sgt. Pepper's Lonely Hearts Club Band", "Revolver"],
        answersNo: ["Let It Be", "Abbey Road", "Sgt. Pepper's Lonely Hearts Club Band", "Revolver"],
        correctAnswerEn: "Abbey Road",
        correctAnswerNo: "Abbey Road"
      },
      {
        questionEn: "Who wrote the opera 'The Magic Flute'?",
        questionNo: "Hvem skrev operaen 'Tryllefløyten'?",
        answersEn: ["Wagner", "Verdi", "Mozart", "Puccini"],
        answersNo: ["Wagner", "Verdi", "Mozart", "Puccini"],
        correctAnswerEn: "Mozart",
        correctAnswerNo: "Mozart"
      },
      {
        questionEn: "Which country did the band ABBA come from?",
        questionNo: "Hvilket land kom bandet ABBA fra?",
        answersEn: ["Norway", "Denmark", "Sweden", "Finland"],
        answersNo: ["Norge", "Danmark", "Sverige", "Finland"],
        correctAnswerEn: "Sweden",
        correctAnswerNo: "Sverige"
      },
      {
        questionEn: "What is the name of Beethoven's 9th symphony?",
        questionNo: "Hva er navnet på Beethovens 9. symfoni?",
        answersEn: ["Pastoral", "Eroica", "Choral", "Jupiter"],
        answersNo: ["Pastorale", "Eroica", "Koral", "Jupiter"],
        correctAnswerEn: "Choral",
        correctAnswerNo: "Koral"
      },
      {
        questionEn: "Which instrument is Yo-Yo Ma famous for playing?",
        questionNo: "Hvilket instrument er Yo-Yo Ma kjent for å spille?",
        answersEn: ["Violin", "Piano", "Cello", "Flute"],
        answersNo: ["Fiolin", "Piano", "Cello", "Fløyte"],
        correctAnswerEn: "Cello",
        correctAnswerNo: "Cello"
      }
    ],
    "Godt og blandet": [
      {
        questionEn: "What is the capital of Japan?",
        questionNo: "Hva er hovedstaden i Japan?",
        answersEn: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
        answersNo: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
        correctAnswerEn: "Tokyo",
        correctAnswerNo: "Tokyo"
      },
      {
        questionEn: "Who painted the Mona Lisa?",
        questionNo: "Hvem malte Mona Lisa?",
        answersEn: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
        answersNo: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
        correctAnswerEn: "Leonardo da Vinci",
        correctAnswerNo: "Leonardo da Vinci"
      },
      {
        questionEn: "Which country is known for its beautiful cherry blossoms?",
        questionNo: "Hvilket land er kjent for sine vakre kirsebærblomster?",
        answersEn: ["Japan", "South Korea", "China", "Thailand"],
        answersNo: ["Japan", "Sør-Korea", "Kina", "Thailand"],
        correctAnswerEn: "Japan",
        correctAnswerNo: "Japan"
      },
      {
        questionEn: "Who is the author of 'To Kill a Mockingbird'?",
        questionNo: "Hvem er forfatteren av 'Drep ikke en sangfugl'?",
        answersEn: ["Mark Twain", "Harper Lee", "J.D. Salinger", "F. Scott Fitzgerald"],
        answersNo: ["Mark Twain", "Harper Lee", "J.D. Salinger", "F. Scott Fitzgerald"],
        correctAnswerEn: "Harper Lee",
        correctAnswerNo: "Harper Lee"
      },
      {
        questionEn: "What is the chemical symbol for oxygen?",
        questionNo: "Hva er det kjemiske symbolet for oksygen?",
        answersEn: ["O", "O2", "O3", "O4"],
        answersNo: ["O", "O2", "O3", "O4"],
        correctAnswerEn: "O",
        correctAnswerNo: "O"
      },
      {
        questionEn: "Who is the lead singer of the band Queen?",
        questionNo: "Hvem er hovedsangeren i bandet Queen?",
        answersEn: ["Freddie Mercury", "Roger Taylor", "Brian May", "John Deacon"],
        answersNo: ["Freddie Mercury", "Roger Taylor", "Brian May", "John Deacon"],
        correctAnswerEn: "Freddie Mercury",
        correctAnswerNo: "Freddie Mercury"
      },
      {
        questionEn: "What is the largest ocean on Earth?",
        questionNo: "Hva er det største havet på jorden?",
        answersEn: ["Atlantic Ocean", "Indian Ocean", "Southern Ocean", "Pacific Ocean"],
        answersNo: ["Atlanterhavet", "Indiahavet", "Sørishavet", "Stillehavet"],
        correctAnswerEn: "Pacific Ocean",
        correctAnswerNo: "Stillehavet"
      },
      {
        questionEn: "Who is the founder of Microsoft?",
        questionNo: "Hvem er grunnleggeren av Microsoft?",
        answersEn: ["Steve Jobs", "Bill Gates", "Mark Zuckerberg", "Elon Musk"],
        answersNo: ["Steve Jobs", "Bill Gates", "Mark Zuckerberg", "Elon Musk"],
        correctAnswerEn: "Bill Gates",
        correctAnswerNo: "Bill Gates"
      },
      {
        questionEn: "What is the national animal of Australia?",
        questionNo: "Hva er det nasjonale dyret i Australia?",
        answersEn: ["Kangaroo", "Koala", "Wombat", "Emu"],
        answersNo: ["Kenguru", "Koala", "Wombat", "Emu"],
        correctAnswerEn: "Kangaroo",
        correctAnswerNo: "Kenguru"
      },
      {
        questionEn: "Who is the current President of the United States?",
        questionNo: "Hvem er den nåværende presidenten i USA?",
        answersEn: ["Joe Biden", "Donald Trump", "Barack Obama", "George W. Bush"],
        answersNo: ["Joe Biden", "Donald Trump", "Barack Obama", "George W. Bush"],
        correctAnswerEn: "Joe Biden",
        correctAnswerNo: "Joe Biden"
      }
    ]
  };
  
  export function getQuestions(category, count, language) {
    const categoryQuestions = questions[category] || Object.values(questions).flat();
    return categoryQuestions.slice(0, count).map(q => ({
      question: language === 'no' ? q.questionNo : q.questionEn,
      answers: language === 'no' ? q.answersNo : q.answersEn,
      correctAnswer: language === 'no' ? q.correctAnswerNo : q.correctAnswerEn
    }));
  }