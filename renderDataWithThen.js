document.addEventListener("DOMContentLoaded", function () {
  const todoUrl = "https://jsonplaceholder.typicode.com/todos";
  const listTodos = document.getElementById("list-todos-then");

  fetch(todoUrl)
    .then((response) => {
      return response.json();
    })
    .then((todos) => {
      todos.forEach((item) => {
        const li = document.createElement("li");
        {
          item.id === 1
            ? (li.textContent = `ID: ${item.id} - Tiêu đề: ${item.title}`)
            : (li.textContent = `Tiêu đề: ${item.title}`);
        }

        listTodos.appendChild(li);
      });
    })
    .catch((error) => {
      console.error("Lỗi khi tải todos:", error);
    });
});
