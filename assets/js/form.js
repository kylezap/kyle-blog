const usernameInput = $('#username-input');
const titleInput = $('#title-input');
const contentInput = $('#content-input');
const submitBlog = $('#submit-blog')

let blogposts = [];

//create read action to pull in local storage that already exists.
function readProjectsFromStorage() {
  
    // TODO: Retrieve projects from localStorage and parse the JSON to an array. If there are no projects in localStorage, initialize an empty array and return it.
    blogposts = JSON.parse(localStorage.getItem('blogposts'));
  
    if (blogposts == null) {
      blogposts = [];
    } return blogposts;
  }

function handleFormSubmit(event) {
    event.preventDefault();
    
    readProjectsFromStorage();

    const blogpost = { 
        userName: usernameInput.val(),
        title: titleInput.val(),
        content: contentInput.val()
    };
   
    blogposts.push(blogpost);

    localStorage.setItem('blogposts', JSON.stringify(blogposts));
    
    window.location.href="blog.html";
    // blogpost.append(`<li>${shoppingItem}</li>`);
}

submitBlog.on('submit', handleFormSubmit);
