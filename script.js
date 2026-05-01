const mediators = [
    {
        name: "Abdallah Bendal",
        photo: "mediators/abdallah.jpg",
        fb: "https://www.facebook.com/profile.php?id=100069502902340", // مثال: ستحتاج لوضع الروابط الحقيقية لاحقاً
        phone: "",
        binanceId: ""
    },
    {
        name: "Fahd L-y",
        photo: "mediators/fahd.jpg",
        fb: "#", 
        phone: "0556397678",
        binanceId: ""
    },
    {
        name: "Seif Din Blkhal",
        photo: "mediators/seif.jpg",
        fb: "#",
        phone: "",
        binanceId: "1232493977"
    },
    {
        name: "Omar Houni",
        photo: "mediators/omar.jpg",
        fb: "#",
        phone: "",
        binanceId: ""
    },
    {
        name: "Ahmed Berk",
        photo: "mediators/ahmed_berk.jpg",
        fb: "#",
        phone: "0667038305",
        binanceId: ""
    },
    {
        name: "Aissa Ziat",
        photo: "mediators/aissa.jpg",
        fb: "#",
        phone: "0666545521",
        binanceId: ""
    },
    {
        name: "Lounes Chem's",
        photo: "mediators/lounes.jpg",
        fb: "#",
        phone: "",
        binanceId: ""
    },
    {
        name: "Abdel Wahab",
        photo: "mediators/abdelwahab.jpg",
        fb: "#",
        phone: "",
        binanceId: ""
    },
    {
        name: "Benbadra Ahmed Ilyes",
        photo: "mediators/benbadra.jpg",
        fb: "#",
        phone: "",
        binanceId: ""
    }
];

function renderMediators() {
    const container = document.getElementById('mediatorGrid');
    container.innerHTML = mediators.map(m => `
        <div class="card">
            <img src="${m.photo}" alt="${m.name}" oncontextmenu="return false;">
            <h3>${m.name}</h3>
            
            ${m.phone ? `
                <div class="info-item">
                    <i class="fas fa-phone-alt"></i> <span>${m.phone}</span>
                </div>
            ` : ''}
            
            ${m.binanceId ? `
                <div class="id-box">
                    <span>ID: <strong>${m.binanceId}</strong></span>
                    <i class="fas fa-copy copy-btn" onclick="copyId('${m.binanceId}')" title="نسخ المعرف"></i>
                </div>
            ` : ''}

            <a href="${m.fb}" target="_blank" class="fb-link">
                <i class="fab fa-facebook"></i> فيسبوك
            </a>
        </div>
    `).join('');
}

// دالة النسخ
function copyId(id) {
    navigator.clipboard.writeText(id);
    alert("تم نسخ Binance ID بنجاح: " + id);
}

document.addEventListener('contextmenu', event => event.preventDefault());
renderMediators();
