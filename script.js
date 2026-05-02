const intermediaries = [
    { id: 1, name: "Abdallah Bendal", fb: "https://www.facebook.com/abdallah.dz.104", phone: "0550000000", img: "https://seifblkhal-dev.github.io/wasata-dz/images/abdallah.jpg", rating: 5 },
    { id: 2, name: "Fahd L-y", fb: "https://www.facebook.com/profile.php?id=61556093836113", phone: "0556397678", img: "https://seifblkhal-dev.github.io/wasata-dz/images/fahd.jpg", rating: 5 },
    { id: 3, name: "Seif Din Blkhal", fb: "https://www.facebook.com/seif.blkhal", phone: "ID: 1232493977", img: "https://seifblkhal-dev.github.io/wasata-dz/images/seif.jpg", rating: 5 },
    { id: 4, name: "Omar Houni", fb: "https://www.facebook.com/omar.houni.1", phone: "0660000000", img: "https://seifblkhal-dev.github.io/wasata-dz/images/omar.jpg", rating: 5 },
    { id: 5, name: "Ahmed Berk", fb: "https://www.facebook.com/ahmed.berk.7", phone: "0667038305", img: "https://seifblkhal-dev.github.io/wasata-dz/images/ahmed.jpg", rating: 5 },
    { id: 6, name: "Aissa Ziat", fb: "https://www.facebook.com/aissa.ziat", phone: "0666545521", img: "https://seifblkhal-dev.github.io/wasata-dz/images/aissa.jpg", rating: 5 },
    { id: 7, name: "Lounes Chem's", fb: "https://www.facebook.com/lounes.chems", phone: "0770000000", img: "https://seifblkhal-dev.github.io/wasata-dz/images/lounes.jpg", rating: 5 },
    { id: 8, name: "Abdel Wahab", fb: "https://www.facebook.com/abdel.wahab.dz", phone: "0550000000", img: "https://seifblkhal-dev.github.io/wasata-dz/images/wahab.jpg", rating: 5 },
    { id: 9, name: "Benbadra Ahmed Ilyes", fb: "https://www.facebook.com/ilyes.benbadra", phone: "0660000000", img: "https://seifblkhal-dev.github.io/wasata-dz/images/ilyes.jpg", rating: 5 },
    { id: 10, name: "Larbi Mohamed", fb: "https://www.facebook.com/larbi.mohamed.984", phone: "0791521788", img: "https://seifblkhal-dev.github.io/wasata-dz/images/larbi.jpg", rating: 5 }
];

const container = document.getElementById('wasataContainer');

function displayWasata() {
    if(!container) return; // حماية في حال عدم وجود الحاوية
    container.innerHTML = '';
    
    intermediaries.forEach(person => {
        const card = document.createElement('div');
        card.className = 'card';
        
        let starsHtml = '';
        for (let i = 1; i <= 5; i++) {
            starsHtml += `<span class="star ${i <= person.rating ? 'active' : ''}" onclick="updateRating(${person.id}, ${i})">★</span>`;
        }

        card.innerHTML = `
            <img src="${person.img}" alt="${person.name}" class="user-img">
            <h3 class="name">${person.name}</h3>
            <p class="phone">${person.phone}</p>
            <div class="rating-system">${starsHtml}</div>
            <a href="${person.fb}" target="_blank" rel="noopener noreferrer" class="fb-btn">Facebook</a>
        `;
        container.appendChild(card);
    });
}

function updateRating(id, newRating) {
    const person = intermediaries.find(p => p.id === id);
    if (person) {
        person.rating = newRating;
        displayWasata(); 
    }
}

document.addEventListener('DOMContentLoaded', displayWasata);
