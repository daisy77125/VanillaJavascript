const video = {
  title: "TITLE",
  tags: ["a", "b", "c"],
  showTags: function () {
    const self = this;
    this.tags.forEach(function (tag) {
      console.log(self.title, tag);
    });
  },
};

video.showTags();
// TITLE a
// TITLE b
// TITLE c
