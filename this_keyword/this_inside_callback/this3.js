function showTag(tag) {
  console.log(this.title, tag);
}

const video = {
  title: "TITLE",
  tags: ["a", "b", "c"],
  showTags: function () {
    this.tags.forEach(showTag);
  },
};

video.showTags();
// undefined a
// undefined b
// undefined c

// see this4.js
