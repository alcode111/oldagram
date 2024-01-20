const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const postContainer = document.getElementById("post-container")

for (let i = 0; i < posts.length; i++) {
    const oldaPost = document.createElement("div")
    oldaPost.classList.add("post-margin-bottom")

    oldaPost.innerHTML = 
    `
    <header>
    <div class="container header-container">
        <span class="app-name">Oldagram</span>
        <span class="profile-img-container"><img src="images/profile.png" alt="user picture" class="profile-pic"></span>
    </div>
</header>

<main>
    <section class="name-location">
        <div class="container name-location-container">
            <span class="avatar-container"><img src="${posts[i].avatar}" alt="${posts[i].name}'s avatar" class="avatar"></span>
            <div class="name-location-small-container">
                <p class="painter-name">${posts[i].name}</p>
                <p class="painter-location">${posts[i].location}</p>
            </div>
        </div>
    </section>

    <section class="main-image-section">
        <img src="${posts[i].post}" alt="van gogh self-portrait" class="main-image">
    </section>

    <section class="bottom-section">
        <div class="container bottom-section-container">
            <div class="three-icons-container">
                <img src="images/icon-heart.png" alt="heart like icon" class="icon heart">
                <img src="images/icon-comment.png" alt="bubble comment icon" class="icon bubble">
                <img src="images/icon-dm.png" alt="paper plane dm icon" class="icon dm">
            </div>

            <div class="likes-number">${posts[i].likes} likes</div>

            <div class="comments"><span class="name">${posts[i].username}</span> <span class="comment">${posts[i].comment}</span></div>
        </div>
    </section>
</main>
    `
    // Add an event lister on the heart icon to increase the number of likes

    const heartLikeIcon = oldaPost.querySelector('.heart')
    heartLikeIcon.addEventListener('click', function() {
        posts[i].likes++
    const likesNumberDiv = oldaPost.querySelector('.likes-number')
    likesNumberDiv.textContent = `${posts[i].likes} likes`
    }) 

    postContainer.append(oldaPost)
}