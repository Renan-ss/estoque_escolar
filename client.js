 $(document).ready(() => {
  $('#inicio').click(() => {
    $('#conteudo').load('/inicio');
  });
});  

  $(document).ready(() => {
  $('#dashboard').click(() => {
    $('#conteudo').load('/dashboard.html');
  });
});  


$(document).ready(() => {
  $('#estoque').click(() => {
    $('#conteudo').load('/estoque');
  });
});