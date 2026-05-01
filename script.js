const mediators = [
    { name: "Abdallah Bendal", img: "abdallah.png", id: "", phone: "", fb: "#" },
    { name: "Fahd L-y", img: "fahd.png", id: "", phone: "0556397678", fb: "#" },
    { name: "Seif Din Blkhal", img: "seif.png", id: "1232493977", phone: "", fb: "#" },
    { name: "Omar Houni", img: "omar.png", id: "", phone: "", fb: "#" },
    { name: "Ahmed Berk", img: "berk.png", id: "", phone: "0667038305", fb: "#" },
    { name: "Aissa Ziat", img: "aissa.png", id: "", phone: "0666545521", fb: "#" },
    { name: "Lounes Chem's", img: "lounes.png", id: "", phone: "", fb: "#" },
    { name: "Abdel Wahab", img: "wahab.png", id: "", phone: "", fb: "#" },
    { name: "Benbadra Ahmed Ilyes", img: "badra.png", id: "", phone: "", fb: "#" },
    { name: "Larbi Mohamed", img: "larbi.png", id: "", phone: "0791521788", fb: "#" }
];

function render() {
    const grid = document.getElementById('mediatorGrid');
    if(!grid) return;
    grid.innerHTML = mediators.map(m => `
        <div class="card">
            <img src="${m.img}" alt="${m.name}" loading="lazy" onerror="this.src='logo.png'">
            <h3>${m.name}</h3>
            ${m.phone ? `<p><i class="fas fa-phone"></i> ${m.phone}</p>` : ''}
            ${m.id ? `
                <div class="id-box">
                    <span>ID: <strong>${m.id}</strong></span>
                    <i class="fas fa-copy copy-icon" onclick="copyId('${m.id}')" title="نسخ"></i>
                </div>` : ''}
            <a href="${m.fb}" class="fb-link" target="_blank"><i class="fab fa-facebook-f"></i> Facebook</a>
        </div>
    `).join('');
}

function copyId(id) {
    navigator.clipboard.writeText(id).then(() => {
        alert("تم نسخ المعرف بنجاح: " + id);
    });
}

window.onload = render;
