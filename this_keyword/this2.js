const video = {
  title: "TITLE",
  tags: ["a", "b", "c"],
  showTags: function () {
    this.tags.forEach(function (tag) {
      console.log(this.title, tag);
    });
  },
};

video.showTags();
// undefined a
// undefined b
// undefined c

// see this3.js
