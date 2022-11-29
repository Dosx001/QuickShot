const openUrl = (key: string, tab: boolean) => {
  browser.storage.sync.get(key).then((res) => {
    const url = Object.values(res)[0];
    if (url) {
      tab ? window.open(url) : window.location.assign(url);
    }
  });
};

document.addEventListener("keydown", (ev) => {
  if (ev.ctrlKey) {
    switch (ev.code) {
      case "Digit1":
      case "Digit2":
      case "Digit3":
      case "Digit4":
      case "Digit5":
      case "Digit6":
      case "Digit7":
      case "Digit8":
      case "Digit9":
      case "Digit0":
        if (ev.altKey) {
          const obj = new Map();
          obj.set(ev.code.charAt(5), window.location.href);
          browser.storage.sync.set(Object.fromEntries(obj));
        } else {
          openUrl(ev.code.charAt(5), ev.shiftKey);
        }
    }
  }
});
