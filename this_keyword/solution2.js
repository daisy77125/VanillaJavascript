const video = {
  title: "TITLE",
  tags: ["a", "b", "c"],
  showTags: function () {
    this.tags.forEach(
      function (tag) {
        console.log(this.title, tag);
      }.bind(this)
    );
  },
};

video.showTags();
// TITLE a
// TITLE b
// TITLE c
