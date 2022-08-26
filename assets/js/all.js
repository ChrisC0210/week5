"use strict";

$(function () {
  console.log('Hello Bootstrap5');
  ClassicEditor.create(document.querySelector('#editor')).then(function (editor) {
    console.log(editor);
  })["catch"](function (error) {
    console.error(error);
  });
});
//# sourceMappingURL=all.js.map
