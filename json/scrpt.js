const namee = document.getElementById("name");
const email = document.getElementById("Email");


async function api() {
  try {
    const api = await fetch("https://jsonplaceholder.typicode.com/users");
    const res = await api.json();

    document.getElementById("data").innerHTML = res
      .map((user) => {
        return `<tr>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.username}</td>
                <td>${user.id}</td>
              </tr>`;
      })
      .join("");


  } catch (error) {
    console.log(error);
   
  }
}

api();
