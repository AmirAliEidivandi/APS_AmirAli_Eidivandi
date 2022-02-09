const progressBar = document.querySelector(".progress");

const changeProgress = (progress) => {
    progressBar.style.width = `${progress}%`;
};

setTimeout(() => changeProgress(22), 1000);
setTimeout(() => changeProgress(45), 2000);
setTimeout(() => changeProgress(85), 4600);
setTimeout(() => changeProgress(98), 5266);
setTimeout(() => changeProgress(100), 8000);