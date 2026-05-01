const mediators = [
    { name: "Abdallah Bendal", img: "image_2cc343.png", id: "", phone: "", fb: "#" },
    { name: "Fahd L-y", img: "487330059_647294354900439_6909264478665023175_n.jpg", id: "", phone: "0556397678", fb: "#" },
    { name: "Seif Din Blkhal", img: "667807743_1988536058539268_8007520388332275956_n.jpg", id: "1232493977", phone: "", fb: "#" },
    { name: "Omar Houni", img: "669885852_122132688795034284_3950083065487782380_n.jpg", id: "", phone: "", fb: "#" },
    { name: "Ahmed Berk", img: "8baeb0fb-0319-49d6-86bf-ab9544ea5c54.jpg", id: "", phone: "0667038305", fb: "#" },
    { name: "Aissa Ziat", img: "90ce1764-bb65-4ed8-a418-2d5b9961f2b3.jpg", id: "", phone: "0666545521", fb: "#" },
    { name: "Lounes Chem's", img: "686509516_122161472120640020_7698140914024962050_n.jpg", id: "", phone: "", fb: "#" },
    { name: "Abdel Wahab", img: "623491934_1210768831180066_7832624202027542150_n.jpg", id: "", phone: "", fb: "#" },
    { name: "Benbadra Ahmed Ilyes", img: "682434788_1292941326314113_6149430041564653157_n.jpg", id: "", phone: "", fb: "#" }
];

function render() {
    const container = document.getElementById('mediatorGrid');
    container.innerHTML = mediators.map(m => `
        <div class="card">
            <img src="${m.img}" alt="${m.name}">
            <h3>${m.name}</h3>
            ${m.phone ? `<p><i class="fas fa-phone"></i> ${m.phone}</p>` : ''}
            ${m.id ? `
                <div class="id-box">
                    <span>ID: ${m.id}</span>
                    <i class="fas fa-copy copy-icon" onclick="copyId('${m.id}')"></i>
                </div>` : ''}
            <a href="${m.fb}" class="fb-link" target="_blank"><i class="fab fa-facebook"></i> Facebook</a>
        </div>
    `).join('');
}

function copyId(id) {
    navigator.clipboard.writeText(id);
    alert("تم نسخ معرف Binance: " + id);
}

// تشغيل عند التحميل
window.onload = render;
