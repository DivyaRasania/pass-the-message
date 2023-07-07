const input = document.querySelector("#input");
const output = document.querySelector("#output");

input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        submit();
    }
});

const submit = () => {
    output.innerHTML = input.value;
    input.value = "";
}