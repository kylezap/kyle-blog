const rootEl = $('#root');
let blogposts = [];

blogposts = JSON.parse(localStorage.getItem('blogposts'));

for (let i = 0; i < blogposts.length; i++) {
    const cardEl = $('<div>').addClass('card d-grid gap-2 m-2');
    const cardBodyEl = $('<div>').addClass('card-body');
    const cardTitleEl = $('<h5>').text(blogposts[i].title).addClass('card-title');
    const cardUserEl = $('<h6>').text(blogposts[i].userName).addClass('card-subtitle mb-2 text-muted');
    const cardContentEl = $('<p>').text(blogposts[i].content).addClass('card-text');
    
    rootEl.append(cardEl);
    cardEl.append(cardBodyEl);
    cardBodyEl.append(cardTitleEl, cardUserEl, cardContentEl);
}