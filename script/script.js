const episodes = [
    {
      img: "../assets/images/episodes/episodio1.jpg",
      title: "1. When You're Lost in the Darkness",
      description:
        "Twenty years after a fungal outbreak ravages the planet, survivors Joel and Tess are tasked with a mission that could change everything.",
    },
  
    {
      img: "../assets/images/episodes/episodio2.jpg",
      title: "2. Infected",
      description:
        "After escaping the QZ, Joel and Tess clash over Ellie’s fate while navigating the ruins of a long-abandoned Boston.",
    },
    {
      img: "../assets/images/episodes/episodio3.jpg",
      title: "3. Long, Long Time",
      description:
        "When a stranger approaches his compound, survivalist Bill forges an unlikely connection. Later, Joel and Ellie seek Bill's guidance.",
    },
    {
      img: "../assets/images/episodes/episodio4.jpg",
      title: "4. Please Hold to My Hand",
      description:
        "After abandoning their truck in Kansas City, Joel and Ellie attempt to escape without drawing the attention of a vindictive rebel leader.",
    },
    {
        img: "../assets/images/episodes/episodio5.jpg",
        title: "5. Endure and Survive",
        description:
          "While attempting to evade the rebels, Joel and Ellie cross paths with the most wanted man in Kansas City. Kathleen continues her hunt.",
      },
    {
        img: "../assets/images/episodes/episodio6.jpg",
        title: "6. Kin",
        description:
          "After ignoring the advice of locals, Joel and Ellie descend deeper into dangerous territory in search of the Fireflies – and Tommy.",
      },
    {
        img: "../assets/images/episodes/episodio7.jpg",
        title: "7. Left Behind",
        description:
          "As Joel fights to survive, Ellie looks back on the night that changed everything.",
      },
    {
        img: "../assets/images/episodes/episodio8.jpg",
        title: "8. When We Are in Need",
        description:
          "Ellie crosses paths with a vengeful group of survivors – and draws the attention of its leader. A weakened Joel faces a new threat.",
      },
    {
        img: "../assets/images/episodes/episodio9.jpg",
        title: "9. Look for the Light",
        description:
          "A pregnant Anna places her trust in a lifelong friend. Later, Joel and Ellie near the end of their journey.",
      },
];
  
//1. acessar a lista de produtos através do DOM
  const list = document.querySelector(".episodes-list");

//2. Criar uma função para percorrer todo os meus episódios que estão listadas na variável episodes
  
function addCard(episodes) {
    for (let i = 0; i < episodes.length; i++) {
      //3. Criar uma função que renderize epidio a episodia

      renderCard(episodes[i]);
    }
}

addCard(episodes);

function renderCard(episodio) {
    const listItem = document.createElement("li");
    listItem.classList.add("card");
  
    listItem.innerHTML = `
        <img
            src=${episodio.img}
            alt=${episodio.title}
        />
        <div class="card-text">
            <h4>${episodio.title}</h4>
            <p>
                ${episodio.description}
            </p>
        </div>
    `;

    list.appendChild(listItem);
}