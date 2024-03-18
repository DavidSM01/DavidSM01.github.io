const serviceWorkerPath = "./service-worker.js";
const cacheName = "web-app-cache-db";

let selectFileBtn = document.getElementById("selectFileBtn");
let fileSelector = document.getElementById("fileInput");

selectFileBtn.addEventListener("click", () => fileSelector.click());
fileSelector.addEventListener("change", async function () {
  let zip = this.files[0];
  await registerApp(zip, serviceWorkerPath, cacheName);
  page.reload();
});
