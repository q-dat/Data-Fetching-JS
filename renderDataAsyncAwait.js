document.addEventListener("DOMContentLoaded", async () => {
  const url = "https://jsonplaceholder.typicode.com/todos";
  const listTodos = document.getElementById("list-todos-async");

  try {
    const response = await fetch(url);
    const todos = await response.json();

    todos.forEach((item, index) => {
      const li = document.createElement("li");

      {
        item.id === 1
          ? (li.textContent = `${index} ID: ${item.id} - Tiêu đề: ${item.title}`)
          : (li.textContent = `${index} Tiêu đề: ${item.title}`);
      }

      listTodos.appendChild(li);
    });
  } catch (error) {
    console.error("Lỗi khi tải todos:", error);
  }
});
