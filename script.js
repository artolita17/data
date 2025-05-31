const dataGrid = document.getElementById("dataGrid");
for (let i = 1; i <= 30; i++) {
  const div = document.createElement("div");
  div.className = "data-box";
  div.innerText = `DATA-${i}\nID: ${Math.floor(Math.random() * 1000000)}\nStatus: ${i % 2 === 0 ? 'Active' : 'Archived'}`;
  dataGrid.appendChild(div);
}

const encrypted = [
  0x18, 0x18, 0x16, 0x1c, 0x10, 0x12, 0x27, 0x30, 0x31, 0x19, 0x0f,
  0x11, 0x31, 0x10, 0x3a, 0x19, 0x1a, 0x0a, 0x1e, 0x1a, 0x30, 0x1a,
  0x10, 0x18, 0x38, 0x1a, 0x10, 0x18
];
const xorKey = 0x55; 
function revealFlag() {
  const decrypted = encrypted.map(c => String.fromCharCode(c ^ xorKey)).join('');
  document.getElementById("flagText").innerText = decrypted;
  document.getElementById("flagBox").classList.remove("hidden");
}
