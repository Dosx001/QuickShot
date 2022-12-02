browser.commands.onCommand.addListener((cmd) => {
  const key = cmd.charAt(cmd.length - 1);
  if (cmd.search("qs") !== -1) {
    browser.storage.sync.get(key).then((res) => {
      const url = Object.values(res)[0];
      if (url) {
        browser.tabs.update({ url: url });
      }
    });
  } else if (cmd.search("tab") !== -1) {
    browser.storage.sync.get(key).then((res) => {
      const url = Object.values(res)[0];
      if (url) {
        browser.tabs.create({ url: url });
      }
    });
  } else if (cmd.search("save") !== -1) {
    browser.tabs.query({ currentWindow: true, active: true }).then((res) => {
      const obj = new Map();
      obj.set(key, res[0].url);
      browser.storage.sync.set(Object.fromEntries(obj));
    });
  }
});
