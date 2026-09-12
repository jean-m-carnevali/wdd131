const currentyear = document.querySelector("#currentyear");

const today = new Date();

currentyear.innerHTML = `<span class"currentyear">${today.getFullYear()}</span>`;
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const tittle = document.querySelector(`header span`);

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
    tittle.classList.toggle('hide');
});