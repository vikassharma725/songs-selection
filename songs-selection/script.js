function addSong() {
  const songName = document.getElementById('songName').value.trim();
  const artistName = document.getElementById('artistName').value.trim();
  const list = document.getElementById('songList');

  if (!songName || !artistName) {
    alert('Please enter both song name and artist.');
    return;
  }

  const li = document.createElement('li');
  li.innerHTML = `
    <span><strong>${songName}</strong> — ${artistName}</span>
    <button class="delete-btn" onclick="removeSong(this)">Delete</button>
  `;

  list.appendChild(li);

  document.getElementById('songName').value = '';
  document.getElementById('artistName').value = '';
}

function removeSong(button) {
  const li = button.parentElement;
  li.remove();
}
