const container = document.getElementById("userContainer");

function fetchUsers() {

    container.innerHTML = "Loading...";

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then(data => {

        container.innerHTML = "";

        data.forEach(user => {

            const userCard = `
                <div class="user-card">
                    <h3>${user.name}</h3>
                    <p>Email: ${user.email}</p>
                    <p>Address: ${user.address.city}, ${user.address.street}</p>
                </div>
            `;

            container.innerHTML += userCard;
        });
    })
    .catch(error => {
        container.innerHTML = "Error fetching data!";
        console.error(error);
    });
}

fetchUsers();