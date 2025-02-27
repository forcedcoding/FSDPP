const getData = (e) => {
    const profile = e.target.value.trim();
    
    if (!profile) {
        console.log("Please enter a GitHub username");
        return;
    }

    fetch(`https://api.github.com/users/${profile}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("User not found");
            }
            return response.json();
        })
        .then(data => {
            showUI(data);
        })
        .catch(error => {
            console.error("Error:", error);
        });
};

// Attach event listener to an input field
document.getElementById("usernameInput").addEventListener("input", getData);

function showUI(data) {
    console.log("Data:", data);

    const ul = document.createElement("ul");
    
    // Display relevant user information
    const li1 = document.createElement("li");
    li1.innerText = `Username: ${data.login}`;
    ul.appendChild(li1);

    const li2 = document.createElement("li");
    li2.innerText = `Profile: ${data.html_url}`;
    ul.appendChild(li2);

    const li3 = document.createElement("li");
    li3.innerText = `Public Repos: ${data.public_repos}`;
    ul.appendChild(li3);

    document.body.appendChild(ul);
}
