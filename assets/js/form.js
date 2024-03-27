const usernameInput = $('#username-input');
const titleInput = $('#title-input');
const contentInput = $('#content-input');
const submitBlog = $('#submit-blog')

let blogposts = [];

function handleFormSubmit(event) {
    event.preventDefault();
    

    const blogpost = { 
        userName: usernameInput.val(),
        title: titleInput.val(),
        content: contentInput.val()
    };
   
    blogposts.push(blogpost);

    localStorage.setItem('blogpostData', JSON.stringify(blogposts));
    
    window.location.href="blog.html";
    // blogpost.append(`<li>${shoppingItem}</li>`);
}

submitBlog.on('submit', handleFormSubmit);
