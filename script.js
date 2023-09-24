function createPost(name, message, imageURL) {
    return `
        <div class="post">
            <img src="${imageURL}" alt="${name}'s image">
            <p><strong>${name}</strong></p>
            <p>${message}</p>
        </div>
    `;
}

const postsContainer = document.getElementById('posts-container'); 

for (let i = 1; i <= 826; i++) {
    const imageURL = `https://rickandmortyapi.com/api/character/avatar/${i}.jpeg`;
    const name = `Personaje ${i}`;
    const message = 'Texto de relleno para la publicación.';

    const postHTML = createPost(name, message, imageURL);
    postsContainer.innerHTML += postHTML;
}
