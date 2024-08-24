let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.getElementById("dark-mode-toggle");
const transferData = document.querySelectorAll("#dark-mode-data");

const enableDarkMode = () => {
    document.body.classList.add("dark");
    document.body.classList.remove("light");

    localStorage.setItem("darkMode", "enabled");

    for (var i = 0; i < transferData.length; i++) {
        transferData[i].classList.add("dark");
        transferData[i].classList.remove("light");
    }
};

const disableDarkMode = () => {
    document.body.classList.add("light");
    document.body.classList.remove("dark");

    localStorage.setItem("darkMode", "disabled");

    for (var i = 0; i < transferData.length; i++) {
        transferData[i].classList.add("light");
        transferData[i].classList.remove("dark");
    }
};

// darkModeToggle.addEventListener("mousedown", () => {
//     darkMode = localStorage.getItem("darkMode");

//     if (darkMode != "enabled") {
//         enableDarkMode();
//     } else {
//         disableDarkMode();
//     }
// });

darkModeToggle.addEventListener("pointerdown", () => {
    darkMode = localStorage.getItem("darkMode");

    if (darkMode != "enabled") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});

if (localStorage.getItem("darkMode") == "enabled") {
    enableDarkMode();
} else {
    disableDarkMode();
}
