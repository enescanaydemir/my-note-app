<template>
  <div>
    <form @submit="addNote">
      <input type="text" v-model="title" placeholder="Başlık" />
      <textarea v-model="content" placeholder="İçerik"></textarea>
      <button type="submit">Ekle</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "", //başlık
      content: "" //içerik
    };
  },
  methods: {
    addNote() {
      // Yeni not eklemek için API'yi çağır
      // this.title ve this.content değerlerini kullanarak not nesnesi oluştur ve API'ye gönder
      // Başarılı olduğunda this.title ve this.content'i sıfırla
    }
  }
}
</script>
