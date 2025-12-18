const calendar = document.getElementById("calendar");
const today = new Date().getDate();


const gifts = [
"🍫 Chocolate",
"☕ Un café calentito",
"🎵 Una canción navideña",
"🎬 Una peli",
"🧦 Calcetines",
"🎮 Tiempo para jugar",
"📖 Un buen libro",
"🍪 Galletas",
"🎁 Regalo sorpresa"
];


for (let day = 1; day <= 24; day++) {
const col = document.createElement("div");
col.className = "col-3 col-md-2";


const card = document.createElement("div");
card.className = "day-card";
card.textContent = day;


card.addEventListener("click", () => handleDayClick(day, card));


col.appendChild(card);
calendar.appendChild(col);
}


function handleDayClick(day, card) {
if (day > today) {
new bootstrap.Modal(document.getElementById('errorModal')).show();
return;
}


if (!card.classList.contains("day-opened")) {
card.classList.add("day-opened");
card.style.animation = "fadeIn 0.4s ease";
}


const gift = gifts[day % gifts.length];
document.getElementById("giftContent").innerHTML = `<h3>${gift}</h3>`;


new bootstrap.Modal(document.getElementById('giftModal')).show();

}



