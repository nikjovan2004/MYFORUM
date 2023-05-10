tinymce.init({
    content_css: "//www.tiny.cloud/css/codepen.min.css",
    height: 300,
    menubar: false,
    selector: "textarea",
    plugins: [
      "advlist autolink lists link image charmap print preview anchor",
      "searchreplace visualblocks code fullscreen",
      "insertdatetime media table contextmenu paste code help"
    ],
    toolbar: "undo redo | formatselect | " +
             "bold italic backcolor | alignleft aligncenter " +
             "alignright alignjustify | bullist numlist outdent indent | " +
             "removeformat | help"

  });
  