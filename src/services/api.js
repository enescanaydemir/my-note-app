import axios from "axios";

const API_URL = "http://myNote.app.com"; // API'mim URL'si

// Notları almak için API çağrısı
export function fetchNotes() {
  return axios.get(`${API_URL}/notes`);
}

// Yeni bir not eklemek için API çağrısı
export function addNote(note) {
  return axios.post(`${API_URL}/notes`, note);
}

// Bir notu düzenlemek için API çağrısı
export function editNote(noteId, note) {
  return axios.put(`${API_URL}/notes/${noteId}`, note);
}
