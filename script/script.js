$(document).ready(function() {
  // campo de buscas
  $(".search-input").on('focus', function() {
    $("#search").toggleClass("search-active");
    $('#search-suggestion').removeClass('search-hover');
  });
  $(".search-input").focusout(function() {
    $("#search").toggleClass("search-active");
    $('#search-suggestion').addClass('search-hover');
  });

  // hover no carrinho
  $('.cart-option').hover(function() {
    $('.cart-hover').css({'display': 'block'});
  },
  function() {
    $('.cart-hover').css({'display': 'none'});
  });

  // hover subcategorias
  $('.subcategories ul .cat-opc').hover(function() {
    $(this).addClass('category-selected');
    $('.category-hover').css('display', 'block');
  },
  function() {
    $(this).removeClass('category-selected');
    $('.category-hover').css('display', 'none');
  });
});
