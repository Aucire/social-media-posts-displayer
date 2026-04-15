# Media Posts Viewer

A simple web application that fetches and displays posts from an external API.

## Files

- `media.html` — The main HTML structure and layout
- `media.js` — Handles API fetching and DOM manipulation

## Features

- Fetches posts from an external API
- Dynamically displays posts on the page
- Error handling for failed requests

## How to Run

1. Clone or download the repository
2. Open `media.html` in your browser
3. Posts will load automatically on page open

## API Used

This project fetches data from:"https://jsonplaceholder.typicode.com/posts"

## How It Works

1. `media.js` fetches post data from the API using `fetch()`
2. Each post is dynamically created as a DOM element
3. Posts are appended to the container in `media.html`
4. Errors are caught and logged to the console

## Technologies Used

- HTML
- JavaScript (Vanilla)
- Fetch API

## Example Code

```javascript
async function getPosts() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        data.forEach(post => {
            const div = document.createElement("div");
            div.textContent = post.title;
            document.querySelector(".container").appendChild(div);
        });
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
}
```

## Author
Your Name