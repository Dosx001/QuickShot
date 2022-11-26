document.addEventListener("keydown", (ev) => {
  if (ev.ctrlKey) {
    switch (ev.key) {
      case "1":
        window.open("https://www.github.com");
        break;
      case "2":
        window.location.assign("https://www.youtube.com");
        break;
    }
  }
});
