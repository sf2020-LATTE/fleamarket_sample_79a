// エラーハンドリング
$(document).on('click', function(){
  let imageLength = $('#image-box').children('li').length;
  if(imageLength ==''){
    $('#error-image').text('*画像がありません');
  }else if(imageLength >10){
    $('#error-image').text('*画像を10枚以下にして下さい');
  }else{
    $('#error-image').text('');
  }
});
$(document).on('click', function(){
  //商品名
  $('.sell-container__content__name').on('blur',function(){
    let value = $(this).val();
    if(value == ""){
      $('#error-name').text('*入力してください');
      $(this).css('border-color','red');
    }else{
      $('#error-name').text('');
      $(this).css('border-color','rgb(204, 204, 204)');
    }
  });
});
$(document).on('click', function(){
  // カテゴリー
  $('#parent_category').on('blur',function(){
    let value = $(this).val();
    if(value == ""){
      $('#error-category').text('*選択してください');
      $(this).css('border-color','red');
    }else{
      $('#error-category').text('');
      $(this).css('border-color','rgb(204, 204, 204)');
    }
  });
});
$(document).on('click', function(){
  //商品説明
  $('.sell-container__content__description').on('blur',function(){
    let value = $(this).val();
    if(value == ""){
      $('#error-text').text('*入力してください');
      $(this).css('border-color','red');
    }else{
      $('#error-text').text('');
      $(this).css('border-color','rgb(204, 204, 204)');
    }
  });
});
$(document).on('click', function(){
  //状態
  $('#condition-select').on('blur',function(){
    let value = $(this).val();
    if(value == ""){
      $('#error-status').text('*選択して下さい');
      $(this).css('border-color','red');
    }else{
      $('#error-status').text('');
      $(this).css('border-color','rgb(204, 204, 204)');
    }
  });
});
$(document).on('click', function(){
//送料負担
  $('#deliverycost-select').on('blur',function(){
    let value = $(this).val();
    if(value == ""){
      $('#error-postage').text('*選択して下さい');
      $(this).css('border-color','red');
    }else{
      $('#error-postage').text('');
      $(this).css('border-color','rgb(204, 204, 204)');
    }
  });
});
$(document).on('click', function(){
  //発送元
  $('#prefecture-select').on('blur',function(){
    let value = $(this).val();
    if(value == ""){
      $('#error-prefecture').text('*選択して下さい');
      $(this).css('border-color','red');
    }else{
      $('#error-prefecture').text('');
      $(this).css('border-color','rgb(204, 204, 204)');
    }
  });
});
$(document).on('click', function(){
  //発送までの日数
  $('#delivery_days-select').on('blur',function(){
    let value = $(this).val();
    if(value == ""){
      $('#error-days').text('*選択して下さい');
      $(this).css('border-color','red');
    }else{
      $('#error-days').text('');
      $(this).css('border-color','rgb(204, 204, 204)');
    }
  });
});
$(document).on('click', function(){
  //価格
  $('.sell-container__content__price__form__box').on('blur',function(){
    let value = $(this).val();
    if(value < 300 || value > 9999999){
      $('#error-price').text('*300以上9999999以下で入力してください');
      $(this).css('border-color','red');
    }else{
      $('#error-price').text('');
      $(this).css('border-color','rgb(204, 204, 204)');
    }
  });
});