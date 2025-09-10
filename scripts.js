const userContaner = document.querySelector(".users")
async function fetchData() {
    const res1 = await fetch("https://jsonplaceholder.typicode.com/users")
    const res2 = await res1.json()

    for (let i = 0; i < res2.length; i++) {
        const userDiv = document.createElement("div")
        userDiv.classList.add("user")
        const spanUsername = document.createElement("span")
        const anchorUser = document.createElement("a")
        spanUsername.textContent = res2[i].username
        anchorUser.href = res2[i].website
        anchorUser.textContent = res2[i].website


        userDiv.appendChild(spanUsername)
        userDiv.appendChild(anchorUser)
        userContaner.appendChild(userDiv)
    }
    const res3 = await fetch("https://jsonplaceholder.typicode.com/posts")
    const res4 = await res3.json()

    for (let i = 0; i < res4.length; i++)
    {
        const postsDiv = document.createElement("div")
        postsDiv.classList.add("posts")
        const spanPost = document.createElement("span")
        const anchorPost = document.createElement("h5")
        anchorPost.href = res4[i].title
        spanPost.textContent = res4[i].body

        anchorPost.textContent = res4[i].body

        postsDiv.appendChild(spanPost)
        postsDiv.appendChild(anchorPost)
        userContaner.appendChild(postsDiv)
    }
}
fetchData()