$(function() {
  console.log('Hello Bootstrap5');
  ClassicEditor
  .create( document.querySelector( '#editor' ) )
  .then( editor => {
  console.log( editor );
} )
  .catch( error => {
  console.error( error );
} );
//collapse show
$('#btnReplyInfo').on( 'click', function(e) {
  e.preventDefault();
  if ($("#btnReplyInfo").hasClass("collapsed")) {
    $("#userInfo").removeClass("d-flex");
      $("#userInfo").addClass("d-none");
      $("#btnGroup").removeClass("d-flex");
      $("#btnGroup").addClass("d-none");

  }
})

});