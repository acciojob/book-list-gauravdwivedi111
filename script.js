//your JS code here. If required.
document.getElementById("submit").addEventListener("click", function (e) {

    e.preventDefault();

    // Get input values
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let isbn = document.getElementById("isbn").value;

    // Validation
    if (title === "" || author === "" || isbn === "") {
        alert("Please fill all fields");
        return;
    }

	let booklist = document.getElementById("book-list");

	let row = document.createElement("tr");

	row.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td><button class="delete">X</button></td>
    `;

	booklist.appendChild(row);

	 document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
});


// Delete functionality using Event Delegation
document.getElementById("book-list").addEventListener("click", function (e) {

    if (e.target.classList.contains("delete")) {
        e.target.parentElement.parentElement.remove();
    }

});
	




	