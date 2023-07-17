<template>
  <div>
    <ul>
      <li v-for="note in notes" :key="note.id">
        <h2>{{ note.title }}</h2>
        <p>{{ note.content }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notes: [] //notları tutmak için boş dizi
    };
  },

  created() { // API'den notları almak için çağrı
  this.fetchNotes();
  },
  methods: {
    fetchNotes() { // API çağrısı ile notları al
      this.notes = response.data
    }
  }
};
</script>
