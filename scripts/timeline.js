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

document.addEventListener("DOMContentLoaded", function() {
    const timeline = document.getElementById('timeline');
    const infoContainer = document.getElementById('info-container');
    const info = document.getElementById('info');

    const timelineData = [
        {
          "date": "November 11, 1821",
          "event": "Fyodor Dostoyevsky is born in Moscow, Russia, to Mikhail and Maria Dostoyevsky. His father is a doctor at the Mariinsky Hospital for the Poor, and his mother is a homemaker. Fyodor is the second of seven children. His early life is marked by his father's stern and authoritarian nature and his mother's gentle and nurturing influence."
        },
        {
          "date": "1837",
          "event": "Dostoyevsky's mother, Maria, dies of tuberculosis. Following her death, Fyodor and his brother Mikhail are sent to St. Petersburg to attend the Nikolayev Military Engineering Institute. This marks the beginning of Dostoyevsky's formal education and his exposure to the literary and intellectual currents of the time."
        },
        {
          "date": "June 1839",
          "event": "Dostoyevsky's father, Mikhail, dies under mysterious circumstances. It is rumored that he was murdered by his own serfs, who resented his tyrannical behavior. This traumatic event has a profound impact on Dostoyevsky and is thought to influence the themes of suffering, injustice, and redemption in his later works."
        },
        {
          "date": "1843",
          "event": "Dostoyevsky graduates from the Military Engineering Institute and begins working as a lieutenant engineer in St. Petersburg. However, his passion for literature soon leads him to resign from his post and pursue a career as a writer. He translates Balzac's 'Eugénie Grandet' and begins working on his first novel, 'Poor Folk'."
        },
        {
          "date": "January 1846",
          "event": "Dostoyevsky's first novel, 'Poor Folk', is published. It receives critical acclaim and brings him immediate recognition. The novel, written in the form of letters between two impoverished characters, explores themes of poverty, love, and social injustice. This success marks the beginning of Dostoyevsky's literary career."
        },
        {
          "date": "April 23, 1849",
          "event": "Dostoyevsky is arrested for his involvement with the Petrashevsky Circle, a group of intellectuals advocating for political and social reforms in Russia. He is sentenced to death, but at the last moment, his sentence is commuted to four years of hard labor in a Siberian penal colony, followed by compulsory military service. This harrowing experience deeply influences his worldview and future writings."
        },
        {
          "date": "1854",
          "event": "Dostoyevsky is released from the penal colony and assigned to compulsory military service in the Siberian town of Semipalatinsk. During this time, he meets and marries Maria Dmitrievna Isaeva, a widow. His experiences in Siberia and his exposure to the lives of convicts and exiles significantly shape his later works."
        },
        {
          "date": "1859",
          "event": "Dostoyevsky is finally allowed to return to European Russia. He settles in St. Petersburg and resumes his literary career. Over the next few years, he publishes several works, including 'The House of the Dead', a novel based on his experiences in the Siberian penal colony, which garners significant attention and praise."
        },
        {
          "date": "1864",
          "event": "Dostoyevsky's wife, Maria, dies after a long illness. The same year, his brother Mikhail also passes away, leaving Dostoyevsky with significant financial responsibilities, including the care of Mikhail's family. This period of intense personal grief and financial hardship leads to a creative outpouring, including the writing of 'Notes from Underground'."
        },
        {
          "date": "1866",
          "event": "Dostoyevsky publishes 'Crime and Punishment', one of his most famous novels. The book explores themes of guilt, redemption, and the morality of crime through the story of Raskolnikov, a young man who commits murder. The novel's psychological depth and exploration of existential themes establish Dostoyevsky as a master of Russian literature."
        },
        {
          "date": "February 15, 1867",
          "event": "Dostoyevsky marries Anna Snitkina, his stenographer, who had helped him complete 'The Gambler' to meet a tight deadline. Anna becomes a stabilizing influence in his life, assisting him with his writing and managing his finances. The couple embarks on a journey through Europe, during which Dostoyevsky writes several major works."
        },
        {
          "date": "1871",
          "event": "Dostoyevsky completes and publishes 'The Devils' (also known as 'The Possessed'), a political novel that examines the destructive effects of radical ideologies on Russian society. The book reflects Dostoyevsky's growing conservatism and his concerns about the nihilistic movements gaining traction in Russia."
        },
        {
          "date": "1875",
          "event": "Dostoyevsky publishes 'The Adolescent', a novel exploring the psychological development of a young man named Arkady Dolgoruky. The book delves into themes of identity, ambition, and the search for meaning, continuing Dostoyevsky's exploration of the human condition."
        },
        {
          "date": "1880",
          "event": "Dostoyevsky delivers a famous speech at the unveiling of the Pushkin Monument in Moscow, where he speaks about the role of Russian literature and the Russian people. The speech is well-received and cements his status as one of Russia's leading literary figures. The same year, he completes his final novel, 'The Brothers Karamazov', which is hailed as one of his greatest achievements."
        },
        {
          "date": "February 9, 1881",
          "event": "Fyodor Dostoyevsky dies in St. Petersburg from a pulmonary hemorrhage. His death marks the end of a tumultuous and prolific literary career that left a profound impact on Russian literature and world literature. He is buried in the Tikhvin Cemetery at the Alexander Nevsky Monastery in St. Petersburg, where his grave becomes a site of pilgrimage for admirers."
        }
      ]
      ;

    let selectedCircle = null;

    timelineData.forEach(data => {
        const circle = document.createElement('div');
        circle.classList.add('circle');

        const tooltip = document.createElement('span');
        tooltip.classList.add('tooltip');
        // make tooltip always visible
        
        tooltip.textContent = data.date;

        circle.appendChild(tooltip);

        circle.addEventListener('click', () => {
            // Remove the 'selected' class from the previously selected circle
            if (selectedCircle) {
                selectedCircle.classList.remove('selected');
            }
            // Add the 'selected' class to the clicked circle
            circle.classList.add('selected');
            // Update the selected circle reference
            selectedCircle = circle;

            // Update the information display
            info.textContent = data.event;
        });

        timeline.appendChild(circle);
    });
});
