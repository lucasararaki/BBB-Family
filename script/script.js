$(document).ready(function() {
  var click = false;

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
  $('.cart-option').click(function() {

    if(!click) {
      $('.cart-hover').css({'display': 'block'});
      click = true;
    } else {
      $('.cart-hover').css({'display': 'none'});
      click = false;
    }
  });

  // hover subcategorias
  $('.subcategories ul .cat-opc').hover(function() {
    $(this).addClass('category-selected');
    $('.category-hover').css('display', 'block');
  },
  function() {
    setTimeout(function() {
      $('.subcategories ul .cat-opc').removeClass('category-selected');
      $('.category-hover').css('display', 'none');
    }, 1000);
  });
});
