const currentyear = document.querySelector("#currentyear");

const today = new Date();

currentyear.innerHTML = `<span class"currentyear">${today.getFullYear()}</span>`;
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const title = document.querySelector(`header span`);

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
    title.classList.toggle('hide');
});