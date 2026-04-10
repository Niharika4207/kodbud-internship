const input = document.getElementById("searchInput");
const suggestions = document.getElementById("suggestions");

// 🔹 Suggestions Data
const data = [
    "HTML tutorial",
    "CSS design",
    "JavaScript basics",
    "Frontend development",
    "Google clone project",
    "React JS tutorial"
];

// 🔹 Suggestions Logic
input.addEventListener("input", () => {
    let value = input.value.toLowerCase();
    suggestions.innerHTML = "";

    if (value) {
        let filtered = data.filter(item =>
            item.toLowerCase().includes(value)
        );

        filtered.forEach(item => {
            let li = document.createElement("li");
            li.textContent = item;

            li.onclick = () => {
                input.value = item;
                suggestions.innerHTML = "";
            };

            suggestions.appendChild(li);
        });
    }
});

// 🔹 Enter Key Search
input.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        search();
    }
});

// 🔹 Search Function
function search() {
    let query = input.value;
    if (query) {
        window.location.href = "https://www.google.com/search?q=" + query;
    }
}

// 🔹 Mic Voice Search
const mic = document.getElementById("mic");

mic.addEventListener("click", () => {
    if (!('webkitSpeechRecognition' in window)) {
        alert("Voice search not supported");
        return;
    }

    const recognition = new webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.start();

    recognition.onresult = function(event) {
        input.value = event.results[0][0].transcript;
    };
});

// 🔹 Navbar Clicks
function navClick(type) {
    switch(type) {
        case 'about':
            alert("About Page");
            break;
        case 'store':
            alert("Store Page");
            break;
        case 'gmail':
            window.location.href = "https://mail.google.com";
            break;
        case 'images':
            window.location.href = "https://images.google.com";
            break;
        case 'signin':
            window.location.href = "https://accounts.google.com";
            break;
    }
}
