const app = document.getElementById("app");
const table = document.createElement("table");

let tr = document.createElement("tr");
let key = document.createElement("td");
key.innerText = "Key";
tr.append(key);
let url = document.createElement("td");
url.innerText = "URL";
tr.append(url);
const th = document.createElement("th");
th.append(tr);
table.append(tr);

for (let i = 0; i < 10; i++) {
  browser.storage.sync.get(i.toString()).then((res) => {
    tr = document.createElement("tr");
    key = document.createElement("td");
    key.innerText = i.toString();
    url = document.createElement("td");
    const input = document.createElement("input");
    input.type = "url";
    input.value = Object.values(res)[0] ?? "";
    input.placeholder = "Paste URL here";
    input.oninput = () => {
      const obj = new Map();
      obj.set(i, input.value);
      browser.storage.sync.set(Object.fromEntries(obj));
    };
    url.append(input);
    tr.append(key);
    tr.append(url);
    table.append(tr);
    app?.append(table);
  });
}

document.querySelector<HTMLButtonElement>("#ver")!.innerText = `v${browser.runtime.getManifest().version
  }`;
