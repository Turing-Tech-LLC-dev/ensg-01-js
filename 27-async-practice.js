// GET REQUEST
async function getAllPosts() {
    try {
        const response = await fetch("https://dummyjson.com/posts");
        const data = await response.json();
        console.log(data);
    } catch(error) {
        console.log(error);
    }
}

// getAllPosts();


// POST REQUEST
const createNewPost = async (newPost) => {
    try {
        const response = await fetch("https://dummyjson.com/posts/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPost)
        });

        if (!response.ok) {
            throw new Error("HTTP Error: ", response.status);
        }

        const data = await response.json();
        console.log("Post request was successful");
        console.log(data);

    } catch(error) {
        console.log(error.message);
    }
}

createNewPost({
    title: "POST REQUEST", 
    content: "Making a HTTP POST REQUEST", 
    userId: 101
});


// PUT REQUEST
const updatePost = async (value) => {
    try {
        const response = await fetch("https://dummyjson.com/posts/12", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(value)
        });

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error)
    }
}

updatePost({
    title: "This is the updated title for post with an ID of 12",
});


// Structure
// API Layer
// Using the data
// GET REQUEST
async function getQuotes(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch(error) {
        console.error(error);
    }
}

// Using the data
const readQuotes = async () => {
    const allQuotes = await getQuotes("https://dummyjson.com/quotes");
    const {quotes} = allQuotes;
    // console.log(quotes);
    quotes.forEach(quote => console.log(quote.author));
}

readQuotes();



// Example with a POST Request (API Layer)
const createNewQuote = async (url, newPost) => {
    try {
         const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPost)
         });

         const data = await response.json();
         return data;
    } catch(error) {
        console.error(error);
    }
}