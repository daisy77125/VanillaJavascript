function showTag(tag) {
  console.log(this.title, tag);
}

const video = {
  title: "TITLE",
  tags: ["a", "b", "c"],
  showTags: function () {
    for (tag of this.tags) {
      showTag(tag);
    }
  },
};

video.showTags();
// undefined a
// undefined b
// undefined c
