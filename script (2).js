const audio = document.getElementById('bgMusic');
const statusText = document.getElementById('status');

function openAndPlay() {
    // খাম খোলার অ্যানিমেশন
    document.getElementById('envelope').classList.toggle('open');
    
    // গান প্লে করা (ইউজার ক্লিক করার সাথে সাথে ব্রাউজার এটি অ্যালাউ করবে)
    if (audio.paused) {
        audio.play().then(() => {
            statusText.innerText = "🎵 Now Playing: Mubarak Eid Mubarak";
        }).catch(err => {
            console.log("Error playing music: ", err);
            statusText.innerText = "Click again to play music!";
        });
    }
}

function showSalami(e) {
    e.stopPropagation(); // যাতে খাম বন্ধ না হয়
    document.getElementById('salamiModal').style.display = 'flex';
}

function giveSalami(amount) {
    document.getElementById('salamiModal').style.display = 'none';
    const takaModal = document.getElementById('takaModal');
    const takaImg = document.getElementById('takaImg');
    const takaText = document.getElementById('takaText');

    let imgUrl = "";
    if(amount === 1000) imgUrl = "https://upload.wikimedia.org/wikipedia/en/2/29/1000_Taka_Note_Front.jpg";
    if(amount === 500) imgUrl = "https://upload.wikimedia.org/wikipedia/en/4/43/500_Taka_Note_Front.jpg";
    if(amount === 200) imgUrl = "https://upload.wikimedia.org/wikipedia/commons/e/e0/Bangladesh_200_Taka_Note_Front.jpg";

    takaImg.src = imgUrl;
    takaText.innerText = "Eid Salami " + amount + " Taka!";
    takaModal.style.display = 'flex';
}
