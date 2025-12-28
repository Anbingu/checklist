// tạo ID riêng cho mỗi người
const params = new URLSearchParams(window.location.search);
let userId = params.get("id");

if (!userId) {
  userId = Math.random().toString(36).substring(2, 8);
  window.history.replaceState(null, "", "?id=" + userId);
}

const STORAGE_KEY = "checklist_2025_" + userId;
const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

const checkboxes = document.querySelectorAll("input[type=checkbox]");

// load dữ liệu cũ
checkboxes.forEach(cb => {
  const key = cb.dataset.key;
  if (savedData[key]) cb.checked = true;

  cb.addEventListener("change", () => {
    savedData[key] = cb.checked;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedData));
  });
});
