document.addEventListener("DOMContentLoaded", function () {
  const quotesContainer = document.getElementById("quotes-container");
  const quotes = [
    {
      quote:
        "To go wrong in one's own way is better than to go right in someone else's.",
      book: "Crime and Punishment",
      character: "Raskolnikov",
    },
    {
      quote:
        "Man is sometimes extraordinarily, passionately, in love with suffering.",
      book: "Notes from Underground",
      character: "Underground Man",
    },
    {
      quote:
        "What is hell? I maintain that it is the suffering of being unable to love.",
      book: "The Brothers Karamazov",
      character: "zosima",
    },
    {
      quote: "The soul is healed by being with children.",
      book: "The Idiot",
      character: "Prince Myshkin",
    },
    {
      quote:
        "The mystery of human existence lies not in just staying alive, but in finding something to live for.",
      book: "The Brothers Karamazov",
      character: "Ivan Karamazov",
    },
    {
      quote: "It takes something more than intelligence to act intelligently.",
      book: "Crime and Punishment",
      character: "Raskolnikov",
    },
    {
      quote:
        "Pain and suffering are always inevitable for a large intelligence and a deep heart.",
      book: "Crime and Punishment",
      character: "Raskolnikov",
    },
    {
      quote:
        "The best way to keep a prisoner from escaping is to make sure he never knows he's in prison.",
      book: "Notes from Underground",
      character: "Underground Man",
    },
    {
      quote:
        "Talking nonsense is the sole privilege mankind possesses over the other organisms.",
      book: "Notes from Underground",
      character: "Underground Man",
    },
    {
      quote:
        "If you want to be respected by others, the great thing is to respect yourself.",
      book: "The Insulted and Humiliated",
      character: "Narrator",
    },
    {
      quote:
        "It is not the brains that matter most, but that which guides them — the character, the heart, generous qualities, progressive ideas.",
      book: "The Insulted and Humiliated",
      character: "Narrator",
    },
    {
      quote: "Man grows used to everything, the scoundrel!",
      book: "Crime and Punishment",
      character: "Raskolnikov",
    },
    {
      quote:
        "The awful thing is that beauty is mysterious as well as terrible. God and the devil are fighting there and the battlefield is the heart of man.",
      book: "The Brothers Karamazov",
      character: "Dmitri Karamazov",
    },
    {
      quote:
        "Power is given only to those who dare to lower themselves and pick it up. Only one thing matters, one thing; to be able to dare!",
      book: "Crime and Punishment",
      character: "Raskolnikov",
    },
    {
      quote:
        "A man who lies to himself, and believes his own lies, becomes unable to recognize truth, either in himself or in anyone else, and he ends up losing respect for himself and for others.",
      book: "The Brothers Karamazov",
      character: "Zosima",
    },
    {
      quote:
        "Nothing in this world is harder than speaking the truth, nothing easier than flattery.",
      book: "Crime and Punishment",
      character: " Svidrigailov",
    },
    {
      quote: "If there is no God, everything is permitted.",
      book: "The Brothers Karamazov",
      character: "Ivan Karamazov",
    },
    {
      quote:
        "Man only likes to count his troubles; he doesn't calculate his happiness.",
      book: "Notes from Underground",
      character: "Underground Man",
    },
    {
      quote:
        "Lying to ourselves is more deeply ingrained than lying to others.",
      book: "The Brothers Karamazov",
      character: "Ivan Karamazov",
    },
    {
      quote:
        "The second half of a man's life is made up of nothing but the habits he has acquired during the first half.",
      book: "Demons",
      character: "Shatov",
    },
    {
      quote:
        "What is most mortifying of all is that I am precisely what I am, and not otherwise!",
      book: "Notes from Underground",
      character: "Underground Man",
    },
    {
      quote: "Beauty will save the world.",
      book: "The Idiot",
      character: "Prince Myshkin",
    },
    {
      quote:
        "Much unhappiness has come into the world because of bewilderment and things left unsaid.",
      book: "The Brothers Karamazov",
      character: "Ivan Karamazov",
    },
    {
      quote:
        "Sarcasm: the last refuge of modest and chaste-souled people when the privacy of their soul is coarsely and intrusively invaded.",
      book: "Notes from Underground",
      character: "Underground Man",
    },
    {
      quote: "You can be sincere and still be stupid.",
      book: "The Idiot",
      character: "Prince Myshkin",
    },
    {
      quote: "A hundred suspicions don't make a proof.",
      book: "Crime and Punishment",
      character: "Porfiry Petrovitch",
    },
    {
      quote:
        "Taking a new step, uttering a new word, is what people fear most.",
      book: "Crime and Punishment",
      character: "Raskolnikov",
    },
    {
      quote:
        "The more I love humanity in general, the less I love man in particular.",
      book: "The Brothers Karamazov",
      character: "zosima",
    },
    {
      quote: "To love someone means to see them as God intended them.",
      book: "The Brothers Karamazov",
      character: "Ivan Karamazov",
    },
    {
      quote:
        "Right or wrong, it's very pleasant to break something from time to time.",
      book: "The Gambler",
      character: "Alexei Ivanovich",
    },
    {
      quote:
        "It is better to be unhappy and know the worst, than to be happy in a fool's paradise.",
      book: "The Idiot",
      character: "Prince Myshkin",
    },
    {
      quote: "I say let the world go to hell, but I should always have my tea.",
      book: "Notes from Underground",
      character: "Underground Man",
    },
    {
      quote:
        "We sometimes encounter people, even perfect strangers, who begin to interest us at first sight, somehow suddenly, all at once, before a word has been spoken.",
      book: "Crime and Punishment",
      character: "Narrator",
    },
    {
      quote: "The greatest happiness is to know the source of unhappiness.",
      book: "Notes from Underground",
      character: "Underground Man",
    },
    {
      quote:
        "The man who has a conscience suffers whilst acknowledging his sin. That is his punishment -- as well as prison.",
      book: "Crime and Punishment",
      character: "Raskolnikov",
    },
    {
      quote: "Man is broad, too broad, indeed. I'd have him narrower.",
      book: "Crime and Punishment",
      character: "Raskolnikov",
    },
    {
      quote: "Reason is the slave of passion.",
      book: "The Brothers Karamazov",
      character: "Ivan Karamazov",
    },
    {
      quote:
        "Love in action is a harsh and dreadful thing compared to love in dreams.",
      book: "The Brothers Karamazov",
      character: "Zosima",
    },
    {
      quote:
        "There is no subject so old that something new cannot be said about it.",
      book: "The Idiot",
      character: "Prince Myshkin",
    },
    {
      quote:
        "Man is unhappy because he doesn't know he's happy. It's only that.",
      book: "Demons",
      character: "Shatov",
    },
    {
      quote:
        "The degree of civilization in a society can be judged by entering its prisons.",
      book: "The House of the Dead",
      character: "Narrator",
    },
    {
      quote:
        "Life is paradise, and we are all in paradise, but we refuse to see it.",
      book: "The Brothers Karamazov",
      character: "Zosima",
    },
    {
      quote:
        "It is better to be unhappy and know the worst, than to be happy in a fool's paradise.",
      book: "The Idiot",
      character: "Prince Myshkin",
    },
    {
      quote:
        "Every man has some reminiscences which he would not tell to everyone, but only to his friends.",
      book: "The Brothers Karamazov",
      character: "Alyosha Karamazov",
    },
    {
      quote:
        "Much unhappiness has come into the world because of bewilderment and things left unsaid.",
      book: "The Brothers Karamazov",
      character: "Ivan Karamazov",
    },
    {
      quote: "To love someone means to see them as God intended them.",
      book: "The Brothers Karamazov",
      character: "Alyosha Karamazov",
    },
    {
      quote:
        "There is no subject so old that something new cannot be said about it.",
      book: "The Idiot",
      character: "Prince Myshkin",
    },
    {
      quote:
        "We sometimes encounter people, even perfect strangers, who begin to interest us at first sight, somehow suddenly, all at once, before a word has been spoken.",
      book: "Crime and Punishment",
      character: "Raskolnikov",
    },
    {
      quote: "The greatest happiness is to know the source of unhappiness.",
      book: "Notes from Underground",
      character: "Underground Man",
    },
    {
      quote:
        "Happiness does not lie in happiness, but in the achievement of it.",
      book: "Demons",
      character: "Stavrogin",
    },
    {
      quote:
        "A fool with a heart and no sense is just as unhappy as a fool with sense and no heart.",
      book: "The Idiot",
      character: "Prince Myshkin",
    },
    {
      quote:
        "It is man's unique privilege, among all other organisms. By pursuing falsehood you arrive at the truth!",
      book: "The Brothers Karamazov",
      character: "Ivan Karamazov",
    },
    {
      quote:
        "It is not possible to eat me without insisting that I sing praises of my devourer?",
      book: "Notes from Underground",
      character: "Underground Man",
    },
    {
      quote:
        "There is something at the bottom of every new human thought, every thought of genius, or even every earnest thought that springs up in any brain which can never be communicated to others.",
      book: "The Idiot",
      character: "Prince Myshkin",
    },
    {
      quote:
        "Nothing is easier than to denounce the evildoer; nothing is more difficult than to understand him.",
      book: "Demons",
      character: "Shatov",
    },
    {
      quote:
        "He who desires nothing, hopes for nothing, and is afraid of nothing, cannot be an artist.",
      book: "Demons",
      character: "Shatov",
    },
    {
      quote:
        "Men do not accept their prophets and slay them, but they love their martyrs and worship those whom they have tortured to death.",
      book: "The Brothers Karamazov",
      character: "Ivan Karamazov",
    },
    {
      quote: "All the best of us are dreamers.",
      book: "Crime and Punishment",
      character: "Raskolnikov",
    },
    {
      quote:
        "I think the devil doesn't exist, but man has created him, he has created him in his own image and likeness.",
      book: "The Brothers Karamazov",
      character: "Ivan Karamazov",
    },
    {
      quote:
        "The secret of man's being is not only to live but to have something to live for.",
      book: "The Brothers Karamazov",
      character: "Zosima",
    },
    {
      quote: "When reason fails, the devil helps!",
      book: "The Brothers Karamazov",
      character: "Ivan Karamazov",
    },
    {
      quote:
        "There is no sin, and hence no guilt; it is all a matter of habit!",
      book: "Demons",
      character: "Stavrogin",
    },
    {
      quote:
        "Man has it all in his hands, and it all slips through his fingers from sheer cowardice.",
      book: "Crime and Punishment",
      character: "Raskolnikov",
    },
    {
      quote:
        "Man is a creature that can get accustomed to anything, and I think that is the best definition of him.",
      book: "The House of the Dead",
      character: "Narrator",
    },
    {
      quote:
        "The more stupid one is, the closer one is to reality. The more stupid one is, the clearer one is.",
      book: "The Brothers Karamazov",
      character: "Fyodor Karamazov",
    },
    {
      quote:
        "By interpreting freedom as the propagation and immediate gratification of the appetites, men distort their souls and pervert human freedom.",
      book: "Demons",
      character: "Shatov",
    },
    {
      quote:
        "Man is tormented by no greater anxiety than to find someone quickly to whom he can hand over that gift of freedom with which the ill-fated creature is born.",
      book: "The Brothers Karamazov",
      character: "Grand Inquisitor",
    },
    {
      quote: "Wealth is the number of things one can do without.",
      book: "The Brothers Karamazov",
      character: "Zosima",
    },
    {
      quote: "If you want to overcome the whole world, overcome yourself.",
      book: "Demons",
      character: "Shatov",
    },
    {
      quote:
        "There is immeasurably more left inside than what comes out in words.",
      book: "The Brothers Karamazov",
      character: "Ivan Karamazov",
    },
    {
      quote:
        "I did not bow down to you, I bowed down to all the suffering of humanity.",
      book: "The Brothers Karamazov",
      character: "Alyosha Karamazov",
    },
    {
      quote:
        "The cleverest of all, in my opinion, is the man who calls himself a fool at least once a month.",
      book: "Notes from Underground",
      character: "Underground Man",
    },
    {
      quote: "To love is to suffer and there can be no love otherwise.",
      book: "Notes from Underground",
      character: "Underground Man",
    },
    {
      quote: "My devil had been long caged, he came out roaring.",
      book: "The Brothers Karamazov",
      character: "Dmitri Karamazov",
    },
    {
      quote:
        "There are things which a man is afraid to tell even to himself, and every decent man has a number of such things stored away in his mind.",
      book: "Notes from Underground",
      character: "Underground Man",
    },
    {
      quote: "To love someone means to see them as God intended them.",
      book: "The Brothers Karamazov",
      character: "Alyosha Karamazov",
    },
    {
      quote:
        "Men reject their prophets and slay them, but they love their martyrs and honor those they have slain.",
      book: "The Brothers Karamazov",
      character: "Ivan Karamazov",
    },
    {
      quote:
        "Love all God's creation, the whole and every grain of sand in it. Love every leaf, every ray of God's light.",
      book: "The Brothers Karamazov",
      character: "Zosima",
    },
    {
      quote:
        "For broad understanding and deep feeling, you need pain and suffering.",
      book: "Crime and Punishment",
      character: "Raskolnikov",
    },
    {
      quote:
        "If you wish to glimpse inside a human soul and get to know a man, just watch him laugh.",
      book: "The Adolescent",
      character: "Arkady Dolgoruky",
    },
    {
      quote:
        "It's the great mystery of human life that old grief passes gradually into quiet tender joy.",
      book: "The Brothers Karamazov",
      character: "Zosima",
    },
    {
      quote: "It is amazing what one ray of sunshine can do for a man!",
      book: "Crime and Punishment",
      character: "Raskolnikov",
    },
    {
      quote: "Lamenting a lost time is vainly frustrating.",
      book: "Demons",
      character: "Stavrogin",
    },
    {
      quote:
        "Right or wrong, it's very pleasant to break something from time to time.",
      book: "Notes from Underground",
      character: "Underground Man",
    },
    {
      quote:
        "Much unhappiness has come into the world because of things left unsaid.",
      book: "The Brothers Karamazov",
      character: "Ivan Karamazov",
    },
    {
      quote: "The greatest happiness is to know the source of unhappiness.",
      book: "Notes from Underground",
      character: "Underground Man",
    },
    {
      quote:
        "Sarcasm: the last refuge of modest and chaste-souled people when the privacy of                  	their soul is coarsely and intrusively invaded.",
      book: "Notes from Underground",
      character: "Underground Man",
    },
    {
      quote: "You can be sincere and still be stupid.",
      book: "The Idiot",
      character: "Prince Myshkin",
    },
    {
      quote: "A hundred suspicions don't make a proof.",
      book: "The Brothers Karamazov",
      character: "Dmitri Karamazov",
    },
    {
      quote:
        "Taking a new step, uttering a new word, is what people fear most.",
      book: "Crime and Punishment",
      character: "Raskolnikov",
    },
  ];

  quotes.forEach((quoteObj) => {
    const quoteCard = document.createElement("div");
    quoteCard.classList.add("quote-card");

    const quoteText = document.createElement("p");
    quoteText.classList.add("quote");
    quoteText.textContent = `"${quoteObj.quote}"`;

    const characterText = document.createElement("p");
    characterText.classList.add("character");
    characterText.textContent = quoteObj.character;

    const bookText = document.createElement("p");
    bookText.classList.add("book");
    bookText.textContent = quoteObj.book;

    const tooltip = document.createElement("span");
    tooltip.classList.add("tooltip");
    tooltip.textContent = "Copied";

    quoteCard.appendChild(quoteText);
    quoteCard.appendChild(characterText);
    quoteCard.appendChild(bookText);
    quoteCard.appendChild(tooltip);

    quoteCard.addEventListener("click", () => {
      navigator.clipboard
        .writeText(quoteText.textContent)
        .then(() => {
          tooltip.style.visibility = "visible";
          tooltip.style.opacity = "1";
          setTimeout(() => {
            tooltip.style.visibility = "hidden";
            tooltip.style.opacity = "0";
          }, 1500);
        })
        .catch((err) => {
          console.error("Failed to copy: ", err);
        });
    });

    quotesContainer.appendChild(quoteCard);
  });
});
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const searchBar = document.getElementById("searchInput");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links li").forEach((item) => {
  item.addEventListener("click", (event) => {
    navLinks.classList.remove("active");
    hamburger.classList.remove("active");
  });
});
