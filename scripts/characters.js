// Assuming you have an array of characters like this:
const charactersArray = [
  
  {
    character: "Dmitri Fyodorovich Karamazov",
    book: "The Brothers Karamazov",
    description:
      "Dmitri Fyodorovich Karamazov is the passionate and impulsive eldest son of Fyodor Pavlovich Karamazov. He is torn between his sensual desires and a quest for spiritual truth, often finding himself in financial and romantic troubles as he competes with his father for the love of Grushenka.",
    symbolism:
      "Dmitri's character explores the theme of redemption through suffering and the duality of human nature, embodying the conflict between earthly desires and higher spiritual aspirations.",
  },
  {
    character: "Ivan Fyodorovich Karamazov",
    book: "The Brothers Karamazov",
    description:
      "Ivan Fyodorovich Karamazov is the intellectual middle son, who struggles with philosophical dilemmas about God, free will, and morality. His internal debates and existential crises lead to a mental breakdown, symbolizing the torment that can accompany a life of intense intellectual inquiry without faith.",
    symbolism:
      "Ivan represents the struggle with doubt and the search for moral absolutes in a world that often seems devoid of divine justice.",
  },
  {
    character: "Alyosha Fyodorovich Karamazov",
    book: "The Brothers Karamazov",
    description:
      "Alyosha Fyodorovich Karamazov is the youngest son, known for his saintly, compassionate nature. He is a novice monk who seeks to live out his Christian faith by loving others unconditionally. Alyosha's spiritual journey and innate goodness serve as a beacon of hope amidst the moral chaos that surrounds his family.",
    symbolism:
      "Alyosha embodies the ideal of Christian love and forgiveness, representing Dostoevsky's belief in the transformative power of faith and goodness.",
  },
  {
    character: "Fyodor Pavlovich Karamazov",
    book: "The Brothers Karamazov",
    description:
      "Fyodor Pavlovich Karamazov is the father of the Karamazov brothers, depicted as a selfish, lustful, and neglectful parent. His morally corrupt nature and lack of paternal affection set the stage for the familial and ideological conflicts that drive the novel's plot.",
    symbolism:
      "Fyodor Pavlovich represents the basest aspects of humanity, serving as a foil to his sons' varied responses to life's moral questions.",
  },
  {
    character: "Grigory Vasilievich Kutuzov",
    book: "The Brothers Karamazov",
    description:
      "Grigory Vasilievich Kutuzov is the loyal servant of Fyodor Pavlovich Karamazov. His steadfastness and traditional beliefs contrast sharply with his master's debauchery. Grigory's role in the household and his actions during key events of the novel highlight themes of duty and conscience.",
    symbolism:
      "Grigory embodies the old Russian values of faithfulness and integrity, often acting as the moral compass for the Karamazov household.",
  },
  {
    character: "Smerdyakov",
    book: "The Brothers Karamazov",
    description:
      "Pavel Smerdyakov is the illegitimate son of Fyodor Pavlovich Karamazov and a silent, cunning character who works as a cook in his father's household. His intelligence and resentment towards his status lead him to play a pivotal role in the novel's central crime.",
    symbolism:
      "Smerdyakov represents the dark side of ambition and the destructive nature of envy and bitterness.",
  },
  {
    character: "Rodion Romanovich Raskolnikov",
    book: "Crime and Punishment",
    description:
      "Rodion Romanovich Raskolnikov is a destitute former law student in St. Petersburg who formulates and executes a plan to kill an unscrupulous pawnbroker for her money. His subsequent guilt and paranoia lead him on a journey of self-examination and redemption, making him one of literature's most intriguing studies of the moral consciousness.",
    symbolism:
      "Raskolnikov embodies the conflict between good and evil, serving as a vehicle for Dostoevsky's critique of utilitarianism and the idea that some individuals can operate outside moral law for the greater good.",
  },
  {
    character: "Sofya Semyonovna Marmeladova",
    book: "Crime and Punishment",
    description:
      "Sofya, often called Sonya, is the meek yet resilient daughter of a drunkard. She turns to prostitution to support her family, embodying self-sacrifice. Sonya is Raskolnikov's confidant and represents his possibility for redemption through her unwavering faith and compassion.",
    symbolism:
      "Sonya symbolizes the power of spiritual purity and moral fortitude, even in the face of degradation and suffering. Her character challenges the notion of societal morality versus individual virtue.",
  },
  {
    character: "Lizaveta Ivanovna",
    book: "Crime and Punishment",
    description:
      "Lizaveta Ivanovna is a mild and submissive woman, known in the community for her kindness. She is the half-sister of the pawnbroker Alyona Ivanovna and becomes an unwitting victim in Raskolnikov's double murder. Her character highlights themes of innocence and victimization.",
    symbolism:
      "Lizaveta's tragic fate underscores the collateral damage of Raskolnikov's utilitarian justification for murder, challenging the notion that some lives are expendable for the greater good.",
  },
  {
    character: "Porfiry Petrovich",
    book: "Crime and Punishment",
    description:
      "Porfiry Petrovich is the astute and psychologically insightful detective investigating the murders committed by Raskolnikov. His cat-and-mouse tactics with Raskolnikov and his philosophical conversations about crime and conscience add depth to the novel's exploration of guilt and justice.",
    symbolism:
      "Porfiry represents the law and societal order, serving as a foil to Raskolnikov's anarchic tendencies and challenging his theories with practical wisdom.",
  },
  {
    character: "Arkady Ivanovich Svidrigailov",
    book: "Crime and Punishment",
    description:
      "Arkady Ivanovich Svidrigailov is a former employer and pursuer of Raskolnikov's sister, Dunya. His mysterious past and morally ambiguous actions make him a complex figure in the novel. He embodies themes of hedonism, manipulation, and the search for redemption.",
    symbolism:
      "Svidrigailov serves as a dark mirror to Raskolnikov, illustrating the destructive potential of living without moral restraint or conscience.",
  },
  {
    character: "Katerina Ivanovna Marmeladova",
    book: "Crime and Punishment",
    description:
      "Katerina Ivanovna Marmeladova is the proud and tragic widow of a government clerk who later marries the alcoholic Semyon Zakharovich Marmeladov. Her struggles with poverty and her fierce determination to maintain dignity in the face of adversity make her a memorable character.",
    symbolism:
      "Katerina Ivanovna's character represents the nobility of the human spirit enduring against insurmountable odds, as well as the societal pressures that can drive individuals to desperation.",
  },
  {
    character: "Avdotya Romanovna Raskolnikova",
    book: "Crime and Punishment",
    description:
      "Avdotya Romanovna Raskolnikova, known as Dunya, is Raskolnikov's sister. She is a strong-willed and virtuous woman who faces her own set of moral dilemmas when dealing with suitors like Luzhin and Svidrigailov. Her loyalty to her brother and her own moral compass guide her actions throughout the novel.",
    symbolism:
      "Dunya represents the ideal of feminine strength and moral clarity, often serving as a contrast to her brother's conflicted nature.",
  },
  {
    character: "Pyotr Petrovich Luzhin",
    book: "Crime and Punishment",
    description:
      "Pyotr Petrovich Luzhin is a self-important lawyer engaged to Dunya. His utilitarian views on marriage and his manipulative behavior reveal his true character as a petty and controlling individual.",
    symbolism:
      "Luzhin embodies the dangers of self-serving rationality and the societal tendency to commodify relationships, serving as an antagonist to the more altruistic characters.",
  },
  {
    character: "Prince Myshkin",
    book: "The Idiot",
    description:
      "Prince Lev Nikolayevich Myshkin, often referred to as 'the idiot', is a young man whose goodness, open-hearted simplicity, and guilelessness lead many of the more worldly characters he encounters to mistakenly assume he lacks intelligence. His return to Russia from a Swiss sanatorium sets off a complex chain of events that explore themes of innocence and the clash between materialistic values and spiritual purity.",
    symbolism:
      "Prince Myshkin embodies the ideal of Christian love and the inherent goodness of man, challenging the corrupt society around him.",
  },
  {
    character: "Nastasya Filippovna Barashkova",
    book: "The Idiot",
    description:
      "Nastasya Filippovna Barashkova is a beautiful but deeply troubled woman who becomes the object of Prince Myshkin's compassion. Her tumultuous life and relationships reflect her internal struggle between self-destruction and the desire for redemption.",
    symbolism:
      "Nastasya Filippovna represents the duality of human nature, torn between salvation and ruin, and serves as a catalyst for the moral choices of other characters.",
  },
  {
    character: "Parfyon Semyonovich Rogozhin",
    book: "The Idiot",
    description:
      "Parfyon Semyonovich Rogozhin is a passionate and impulsive merchant who becomes infatuated with Nastasya Filippovna. His intense emotions and actions provide a stark contrast to Prince Myshkin's gentle demeanor.",
    symbolism:
      "Rogozhin represents the destructive power of obsession and unbridled passion, serving as a foil to Myshkin's innocence and purity.",
  },
  {
    character: "Aglaya Ivanovna Yepanchina",
    book: "The Idiot",
    description:
      "Aglaya Ivanovna Yepanchina is the youngest daughter of General Yepanchin and is considered to be one of the most beautiful young women in society. She is intelligent, capricious, and proud, yet also drawn to Prince Myshkin's purity and goodness.",
    symbolism:
      "Aglaya represents the conflict between societal expectations and personal desires, as well as the allure of innocence and genuine character in a superficial society.",
  },
  {
    character: "Gavril Ardalionovich Ivolgin",
    book: "The Idiot",
    description:
      "Gavril Ardalionovich Ivolgin, known as Ganya, is an ambitious young man who works for General Yepanchin. He is initially engaged to Nastasya Filippovna for her dowry, despite his feelings for Aglaya, showcasing the moral compromises individuals make for social advancement.",
    symbolism:
      "Ganya embodies the struggle between ambition and integrity, and the societal pressures that lead to moral compromise.",
  },
  {
    character: "General Ivan Fyodorovich Yepanchin",
    book: "The Idiot",
    description:
      "General Ivan Fyodorovich Yepanchin is a wealthy and respected man in society, father to Aglaya and her sisters. He is initially intrigued by Prince Myshkin but becomes wary of the prince's influence on his family.",
    symbolism:
      "The general represents the established social order and the skepticism of high society towards individuals who do not conform to its norms.",
  },
  {
    character: "Ippolit Terentyev",
    book: "The Idiot",
    description:
      "Ippolit Terentyev is a young man suffering from tuberculosis who becomes associated with Prince Myshkin. His reflections on death and his existential crisis provide a poignant counterpoint to Myshkin's optimism and compassion.",
    symbolism:
      "Ippolit represents the existential angst of youth and the search for meaning in the face of mortality.",
  },
  {
    character: "Lebedev",
    book: "The Idiot",
    description:
      "Lebedev is a sycophantic civil servant and acquaintance of Prince Myshkin. His opportunistic nature and penchant for gossip serve as a source of comic relief, as well as commentary on the pettiness of society.",
    symbolism:
      "Lebedev illustrates the moral weakness and duplicity that can thrive in a society obsessed with status and material gain.",
  },
  {
    character: "Lukian Timofeevich Lebedev",
    book: "The Idiot",
    description:
      "Lukian Timofeevich Lebedev is a relative of Lebedev who becomes involved in the intrigues surrounding Nastasya Filippovna's fate. His actions reflect the complex interplay of self-interest and moral choices faced by individuals in the novel.",
    symbolism:
      "Lukian serves as an example of how personal interests can influence one's moral decisions, often leading to ethical compromises.",
  },
  {
    character: "Varya Ardalionovna",
    book: "The Idiot",
    description:
      "Varya Ardalionovna is Ganya's sister and a governess in the Yepanchin household. Her selfless devotion to her family and her unrequited love for Ganya highlight the theme of sacrifice and unfulfilled desires.",
    symbolism:
      "Varya embodies the virtues of loyalty and selflessness, often sacrificing her own happiness for the well-being of others.",
  },
  {
    character: "Nikolai Stavrogin",
    book: "The Possessed",
    description:
      "Nikolai Vsevolodovich Stavrogin is the central character of the novel, a charismatic and enigmatic nobleman whose magnetic personality captivates other characters. His actions and relationships are pivotal to the novel's exploration of nihilism and moral anarchy.",
    symbolism:
      "Stavrogin represents the allure and danger of charismatic leadership, as well as the existential void that can result from a lack of moral direction.",
  },
  {
    character: "Pyotr Verkhovensky",
    book: "The Possessed",
    description:
      "Pyotr Stepanovich Verkhovensky is a revolutionary agitator who manipulates others to further his own nihilistic goals. His scheming drives much of the novel's plot and highlights the destructive potential of ideology when divorced from morality.",
    symbolism:
      "Pyotr embodies the destructive force of radical ideas and the consequences of manipulating others for one's own ends.",
  },
  {
    character: "Shatov",
    book: "The Possessed",
    description:
      "Ivan Shatov is a former follower of Verkhovensky who becomes disillusioned with revolutionary ideas. His internal struggle reflects the broader conflict between Western influences and Russian nationalism.",
    symbolism:
      "Shatov represents the search for national identity and the tension between Western rationalism and Russian spiritualism.",
  },
  {
    character: "Kirillov",
    book: "The Possessed",
    description:
      "Alexei Kirillov is an engineer and a philosophical ally of Verkhovensky. He is obsessed with the idea of suicide as an assertion of free will, which becomes a central theme in his interactions with other characters.",
    symbolism:
      "Kirillov's character delves into the concept of ultimate freedom and the existential significance of choice.",
  },
  {
    character: "Lizaveta Tushina",
    book: "The Possessed",
    description:
      "Lizaveta Nikolaevna Tushina, often called Liza, is a young woman of noble birth who becomes entangled in the lives of Stavrogin and other characters. Her fate reflects the impact of the chaotic forces unleashed within the society depicted in the novel.",
    symbolism:
      "Liza represents the innocence and vulnerability of those caught in the crossfire of ideological battles and personal vendettas.",
  },
  {
    character: "Marya Lebyadkina",
    book: "The Possessed",
    description:
      "Marya Timofeevna Lebyadkina is Stavrogin's wife, whose mental instability and tragic circumstances underscore the themes of exploitation and moral decay present in the novel.",
    symbolism:
      "Marya's character highlights the human cost of selfishness and the neglect of moral responsibility.",
  },
  {
    character: "Alexei Ivanovich",
    book: "The Gambler",
    description:
      "Alexei Ivanovich is the protagonist and narrator of the novel. He is a tutor in the household of a Russian general and becomes consumed by the addiction to gambling, reflecting the irrational forces that can drive human behavior.",
    symbolism:
      "Alexei represents the intellectual's susceptibility to passion and the destructive nature of obsession.",
  },
  {
    character: "Polina Alexandrovna",
    book: "The Gambler",
    description:
      "Polina Alexandrovna is the stepdaughter of the general and the object of Alexei's affections. Her complex relationship with him and her own gambling highlight the interplay of power, desire, and chance.",
    symbolism:
      "Polina embodies the enigmatic nature of human motivation and the capriciousness of fate.",
  },
  {
    character: "The General",
    book: "The Gambler",
    description:
      "The General is Polina's stepfather and Alexei's employer. He is waiting for a wealthy aunt to die so that he can inherit her fortune, a situation that mirrors the theme of gambling and waiting for chance to dictate one's fate.",
    symbolism:
      "The General represents the moral decay and desperation hidden beneath a veneer of respectability.",
  },
  {
    character: "Mademoiselle Blanche",
    book: "The Gambler",
    description:
      "Mademoiselle Blanche is a cunning and manipulative Frenchwoman who becomes involved with the General and Alexei. Her pursuit of wealth and social advancement exemplifies the novel's critique of materialism and opportunism.",
    symbolism:
      "Blanche represents the predatory nature of those who exploit the weaknesses of others for personal gain.",
  },
  {
    character: "Mr. Astley",
    book: "The Gambler",
    description:
      "Mr. Astley is an Englishman and a friend of Alexei. He is portrayed as rational and reserved, contrasting with the impulsive gamblers around him. His character offers a perspective on the events that unfold in the narrative.",
    symbolism:
      "Astley embodies the outsider's view of the gambling world, providing a foil to the irrationality displayed by other characters.",
  },
  {
    character: "De Grieux",
    book: "The Gambler",
    description:
      "De Grieux is a French gambler and one of Polina's suitors. He represents the sophisticated but morally bankrupt elements of European society that the novel often critiques.",
    symbolism:
      "De Grieux's character highlights the theme of corruption masked by outward charm and refinement.",
  },
  {
    character: "Arkady Dolgoruky",
    book: "The Adolescent",
    description:
      "Arkady Makarovich Dolgoruky, the narrator and protagonist, is a 19-year-old who is eager to assert his independence and identity. His journey of self-discovery and interaction with various figures in society forms the crux of the novel.",
    symbolism:
      "Arkady represents the tumultuous transition from youth to adulthood and the search for a coherent identity in a complex world.",
  },
  {
    character: "Versilov",
    book: "The Adolescent",
    description:
      "Andrei Petrovich Versilov is Arkady's intellectual and estranged father. His complex personality and philosophical outlook influence Arkady's development and worldview.",
    symbolism:
      "Versilov embodies the conflict between idealism and pragmatism, as well as the generational divide in perspectives.",
  },
  {
    character: "Katerina Nikolaevna",
    book: "The Adolescent",
    description:
      "Katerina Nikolaevna Ahmakova is a beautiful widow who becomes an object of fascination for Arkady. Her interactions with him and other characters reveal the intricate social dynamics of the time.",
    symbolism:
      "Katerina represents the allure of unattainable love and the complexities of social status and relationships.",
  },
  {
    character: "Lambert",
    book: "The Adolescent",
    description:
      "Semyon Yakovlevich Lambert is a mysterious figure from Versilov's past who becomes involved in Arkady's life. His dubious motives and actions contribute to the novel's exploration of moral ambiguity.",
    symbolism:
      "Lambert represents the darker aspects of society and the influence of questionable moral figures on youth.",
  },
  {
    character: "Makar Dolgoruky",
    book: "The Adolescent",
    description:
      "Makar Ivanovich Dolgoruky is Arkady's kind-hearted but simple-minded peasant foster father. His relationship with Arkady provides a contrast to the more complex and strained relationship with Versilov.",
    symbolism:
      "Makar embodies the virtues of simplicity, honesty, and unconditional love.",
  },
  {
    character: "Sofya Andreyevna",
    book: "The Adolescent",
    description:
      "Sofya Andreyevna is Versilov's lawful wife and Arkady's stepmother. Her character and her interactions with Arkady and Versilov add depth to the family dynamics explored in the novel.",
    symbolism:
      "Sofya Andreyevna represents the challenges of familial loyalty and the impact of personal suffering on character.",
  },
  {
    character: "Alexander Petrovich Goryanchikov",
    book: "The House of the Dead",
    description:
      "Alexander Petrovich Goryanchikov is the protagonist and a nobleman who is sentenced to penal servitude in Siberia. His experiences and observations of prison life provide a profound commentary on human nature and society.",
    symbolism:
      "Goryanchikov represents the resilience of the human spirit and the capacity for empathy amidst suffering.",
  },
  {
    character: "Sirotkin",
    book: "The House of the Dead",
    description:
      "Sirotkin is one of the prisoners who stands out for his intelligence and education. His interactions with Goryanchikov and other inmates reveal the diverse backgrounds of those in the penal colony.",
    symbolism:
      "Sirotkin highlights the theme of wasted potential and the impact of the penal system on individuals.",
  },
  {
    character: "Mikheev",
    book: "The House of the Dead",
    description:
      "Mikheev is a fellow prisoner known for his strength and endurance. His character exemplifies the harsh realities of prison life and the different ways inmates cope with their circumstances.",
    symbolism:
      "Mikheev embodies the struggle for survival and the physical toll of incarceration.",
  },
  {
    character: "Ivan Petrovich",
    book: "The Insulted and Injured",
    description:
      "Ivan Petrovich is the narrator of the story, a young writer who becomes involved in the lives of several troubled individuals, including a destitute girl, an abused woman, and a man driven to desperation.",
    symbolism:
      "Ivan represents the compassionate observer who is drawn into the suffering of others, reflecting on the nature of injustice and the human condition.",
  },
  {
    character: "Nellie",
    book: "The Insulted and Injured",
    description:
      "Nellie, an orphaned girl, becomes central to the narrative as Ivan takes her under his care. Her innocence and tragic past underscore the themes of exploitation and the search for belonging.",
    symbolism:
      "Nellie embodies the vulnerability of the neglected and the capacity for resilience in the face of adversity.",
  },
  {
    character: "Natasha",
    book: "The Insulted and Injured",
    description:
      "Natasha, a young woman from a noble family, suffers abuse and rejection due to her love affair with a man beneath her social standing. Her plight illustrates the destructive power of societal norms and personal pride.",
    symbolism:
      "Natasha's character explores the conflict between love and social expectations, as well as the pain of unrequited affection.",
  },
  {
    character: "Alyosha",
    book: "The Insulted and Injured",
    description:
      "Alyosha is a young man whose romantic and naive worldview is tested by the harsh realities he encounters. His relationship with Natasha and his family's opposition to it drive much of the plot.",
    symbolism:
      "Alyosha represents the idealistic youth confronted with the complexities of adult emotions and societal constraints.",
  },
  {
    character: "Prince Valkovsky",
    book: "The Insulted and Injured",
    description:
      "Prince Valkovsky is a manipulative and unscrupulous nobleman who seeks to control the lives of his son Alyosha and Natasha for his own gain. His machinations reveal the darker aspects of human nature.",
    symbolism:
      "Valkovsky embodies the corrupting influence of power and the willingness to sacrifice others for personal advancement.",
  },
  {
    character: "Katerina",
    book: "The Insulted and Injured",
    description:
      "Katerina is a woman caught in a loveless marriage who becomes involved in a complex relationship with Ivan, Natasha, and Alyosha. Her struggles highlight the theme of personal freedom versus societal expectation.",
    symbolism:
      "Katerina's character delves into the emotional turmoil caused by unfulfilled desires and societal pressures.",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".characters-container");

  charactersArray.forEach((character) => {
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card-container");

    const card = document.createElement("div");
    card.classList.add("card");

    const cardFront = document.createElement("div");
    cardFront.classList.add("card-front");
    cardFront.innerHTML = `
            <h2>${character.character}</h2>
            <p><em>${character.book}</em></p>
        `;

    const cardBack = document.createElement("div");
    cardBack.classList.add("card-back");
    cardBack.innerHTML = `
            <p>${character.description}</p>
            <p><strong>Symbolism:</strong> ${character.symbolism}</p>
        `;

    card.appendChild(cardFront);
    card.appendChild(cardBack);
    cardContainer.appendChild(card);
    container.appendChild(cardContainer);

    cardContainer.addEventListener("click", () => {
      card.classList.toggle("is-flipped");
    });
  });
});
