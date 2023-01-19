const posts = [
    {
        name: "Anthony van Dyck",
        username: "avd1599",
        location: "Antwerp, Belgium",
        avatar: "images/anthony-van-dyck.jpg",
        post: "images/vandyck-self.jpg",
        comment: "check out my ice! I'm styling on all you!",
        likes: 1
    },
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
function renderPage(){
    let html = ''
for(let i = 0; i < posts.length; i++){
    html+= `
        <section class='post'>
        
            <div class='top-part'>
                <img class='avatar' src='${posts[i].avatar}' alt='profile pic'>
                <div class='name-location'>
                    <span class='name info'>${posts[i].name}</span>
                    <span class='location info'>${posts[i].location}</span>
                </div>
            </div>
            
            <img class='profile-post' src='${posts[i].post}' alt='selfie of famous painter'>
            
            <p class='icon-block'>
                <span><img class='icon like-btn' src='images/icon-heart.png' onclick='addLike(${posts[i]})'></span>
                <span><img class='icon' src='images/icon-comment.png'></span>
                <span><img class='icon' src='images/icon-dm.png'></span>
            </p>
            
            <p class='likes'>${posts[i].likes} likes</p>
            
            <p class='comment'><span class='username'>${posts[i].username}</span> ${posts[i].comment}</p>
        
        </section>
           
    `
}
wholeContainer = document.getElementById('whole-container')
wholeContainer.innerHTML += html

}
renderPage()

function addLike(index){
    const likeCount = document.getElementsByClassName('likes')
    return posts.filter(post => post.username === post[index].username ? likeCount[index].innerHTML = `${posts[index].likes++} likes` : "")
}

// function increaseLikes(index) {    
//     const likeCountParaElement = document.getElementsByClassName("like-count")
//     return posts.filter(post => post.username === posts[index].username ? 
//                     likeCountParaElement[index].innerHTML = `${posts[index].likes++} likes` : "")
// }


