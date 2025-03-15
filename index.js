// Chặn việc mở Developer Tools (F12)
document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        // F12
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
        // Ctrl + Shift + I (DevTools)
        return false;
    }
    if (e.ctrlKey && e.keyCode == 85) {
        // Ctrl + U (View Source)
        return false;
    }
};

// Chặn việc click chuột phải
document.addEventListener("contextmenu", function (e) {
    e.preventDefault(); // Ngừng hành động mặc định của chuột phải
});

// Chặn việc mở Developer Tools thông qua sự kiện 'devtoolsopen'
var devtools = /./;
devtools.toString = function () {
    alert("Developer Tools are open!");
};
console.log(devtools);
