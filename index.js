const mainSection = document.getElementById("main");

const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

function renderPosts() {
  for (let i = 0; i < posts.length; i++) {
    main.innerHTML += `
      <section>
        <div class="container padding overline">
          <img
            class="avatar padding-left"
            src=${posts[i].avatar}
            alt="avatar image"
          />
          <div>
            <p class="name">${posts[i].name}</p>
            <p class="city">${posts[i].location}</p>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <img class="image-artist" src=${posts[i].post} alt="artist selfie" />
        </div>
      </section>
      <section>
        <div class="container padding">
          <img class="icon padding-left" id="heart" src="images/icon-heart.png" alt="heart icon" />
          <img class="icon " src="images/icon-comment.png" alt="comment icon" />
          <img class="icon " src="images/icon-dm.png" alt="dm icon" />
          <div>
        </div>
      </section>
      <section>
        <div class="container">
          <p class="likes padding-left">${posts[i].likes}</p>
      </section>
      <section>
        <div class="container padding-bottom">
          <p class="comment padding-left">
            <span>${posts[i].username}</span>
            ${posts[i].comment}</p>
        </div>
      </section>
        `;
  }
}

renderPosts();
