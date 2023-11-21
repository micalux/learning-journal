const burger = document.getElementById('burger-menu')
const viewMoreBtn = document.getElementById('view-more-btn')

burger.addEventListener('click', function(){
    const linkOne = document.getElementById('link-one')
    const linkTwo = document.getElementById('link-two')

    linkOne.style.display = 'block'
    linkTwo.style.display = 'block'
    burger.style.display = 'none'
})

viewMoreBtn.addEventListener('click', function(){
    const moreBlogs = document.getElementsByClassName('hide')

    Object.values(moreBlogs).forEach(blog => {
        blog.style.display = 'block'
    })

    viewMoreBtn.style.display = 'none'
})