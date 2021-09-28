const video = {
  title: "TITLE",
  tags: ["a", "b", "c"],
  showTags: function () {
    this.tags.forEach((tag) => {
      console.log(this.title, tag);
    });
  },
};

video.showTags();
// TITLE a
// TITLE b
// TITLE c
