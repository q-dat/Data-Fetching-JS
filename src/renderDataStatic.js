const users = [
  { id: 1, name: "A", age: 1, address: "HCM" },
  { id: 2, name: "B", age: 2, address: "HN" },
];

document.addEventListener("DOMContentLoaded", () => {
  const listUser = document.getElementById("list-user");

  users.forEach(({ id, name, age, address }) => {
    const userInfo = `
      <li>
        ${id === 1 ? `<b>Tên: ${name}</b><br>` : ""}
        Tuổi: ${age}<br>
        Địa chỉ: ${address}
      </li>
    `;
    listUser.innerHTML += userInfo;
  });
});
