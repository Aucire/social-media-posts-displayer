console.log("THE JS SCRIPT IS WORKING");
//api url
const baseUrl="https://jsonplaceholder.typicode.com/posts"
//Function to display posts on the page
function displayPosts(posts) {
        // Getting the <ul> element with id=post-list from the HTML
    const container = document.querySelector('.container');

    
    posts.forEach(post=> {             // Looping through each post in the array
    const li =document.createElement('li');
    // Create a paragraph <li> for the post body
    const h1 =document.createElement('h1');
    h1.textContent = post.title; // Sets the text to the post's title
    // Create a paragraph <p> for the post body
    const p =document.createElement('p');
    p.textContent = post.body; // Sets the text to the post's body

    // Appending the heading and paragraph to the list item
    li.appendChild(h1);
    li.appendChild(p);

    container.appendChild(li);   //append child <li> to the parent <ul>
});
}

//Async function to fetch posts from the API
async function fetchPosts() {
    try {
        // Fetch data from the API
        const response = await fetch(baseUrl);
        // Converting the response into JSON format
        const data = await response.json();
        // Calling displayPosts to render the posts on the pag
        displayPosts(data);
        // The catch block runs if something goes wrong in the try block like network failure, invalid JSON, server down
    } catch (error) {
        console.error("error fetching posts:", error);
    }
}


fetchPosts();         // Calls the async function to start the process