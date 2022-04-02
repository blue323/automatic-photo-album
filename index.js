let body = document.querySelector('body')
let author = document.getElementById("author")
let porfolio = document.getElementById("portfolio")
let bio = document.getElementById("bio")
let locationn = document.getElementById("location")
let button = document.querySelector(".btn")

function renderContent() {
    fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
        .then(res => res.json())
        .then(data => {
            body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.17),
                        rgba(0, 0, 0, 0.17)), url(${data.urls.regular})`
            author.textContent = `Author: ${data.user.name}`
            if(data.user.portfolio_url === null) {
                porfolio.innerHTML = ''
            } else {
                porfolio.innerHTML = `Portfolio: <a href="${data.user.portfolio_url}">${data.user.portfolio_url}</a>`
            }
            if(data.user.bio === null) {
                bio.innerHTML = ''
            } else {
                bio.textContent = `Bio: ${data.user.bio}`
            }
            if(data.location.title === null) {
                locationn.innerHTML = ''
            } else {
                locationn.textContent = `Location: ${data.location.title}`
            }
    })
    .catch(error => console.log(error))
}

renderContent()

button.addEventListener('click', () => {
    let state = document.querySelector('.container').children[0].style.display;
    let state2 = document.querySelector('.container').children[1].style.display;
    if (state !== 'none' && state2 !== 'none') {
        document.querySelector('.container').children[0].style.display = 'none';
        document.querySelector('.container').children[1].style.display = 'none';
        button.textContent = 'Show!'
        //console.log("none")
    } else if(state === "none" && state2 === "none") {
        document.querySelector('.container').children[0].style.display = 'block';
        document.querySelector('.container').children[1].style.display = 'block';
        button.textContent = 'Hide!'
        //console.log("block")
    }
})

setInterval(renderContent, 10000)
