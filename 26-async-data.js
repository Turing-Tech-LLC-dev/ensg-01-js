async function getAllUsers() {
    console.log("Fetching data...");
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        // console.log(response);
        if (!response.ok) {
            throw new Error("Unable to fetch users data");
        }
        const data = await response.json();
        console.log(data);
    } catch(error) {
        console.log(error.message);
    } finally {
        console.log("Users data fetched successfully.")
    }
}

getAllUsers();