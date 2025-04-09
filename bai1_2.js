function showMessage() {
    alert("Hello World");
}

document.addEventListener("DOMContentLoaded", function() {
    document.body.innerHTML += '<h1>Hello World</h1>';
    showMessage();
});
