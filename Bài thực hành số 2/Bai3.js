const form = document.querySelector("form");
const answersElenment = document.querySelector(".box");

form.addEventListener("submit", (event) => {
    event.preventDefault();
//Lấy dữ liệu từ form
const name = document.querySelector("#name").value;
const idcard = document.querySelector("#idcard").value;
const phone = document.querySelector("#phone").value;
const email = document.querySelector("#email").value;
const type = document.querySelector("#type").value;
const bill = document.querySelector("#bill").value;
const message = document.querySelector("#message").value;
//Hiển thị nội dung câu trả lời
box.querySelector("p").innerHTML = `
${name}<br>${idcard}</br><br>${phone}</br><br>${email}</br>
<br>${type}</br><br>${bill}</br><br>${messageg}</br> `;
//Hiển thị box
box.classList.add("show");
});
box.querySelector(".ok").addEventListener("click", () => {
    box.classList.remove("show");
});
box.querySelector(".cancel").addEventListener("click", () =>{
    box.classList.remove("show");
});

