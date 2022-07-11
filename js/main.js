//スクロールすると左右それぞれから画像がフェードインするアニメーション
$('.exhibit_imgs_1').waypoint({
    handler: function(direction) {
        if (direction === 'down') {
            $(this.element).addClass('animate__fadeInRight');
            this.destroy();
        }
    },
    offset: '60%',
});

$('.exhibit_imgs_r').waypoint({
    handler: function(direction) {
        if (direction === 'down') {
            $(this.element). addClass('animate__fadeInLeft');
            this.destroy();
        }
    },
    offset: '60%',
});


$('.benefit_point1').waypoint({
    handler: function(direction) {
        if (direction === 'down') {
            $(this.element).addClass('animate__fadeInRight');
            this.destroy();
        }
    },
    offset: '60%',
});

$('.benefit_point_r').waypoint({
    handler: function(direction) {
        if (direction === 'down') {
            $(this.element).addClass('animate__fadeInLeft');
            this.destroy();
        }
    },
    offset: '60%',
});

//スクロールするとしたから出てくる
$('.campaign_img').waypoint({
    handler: function(direction){
        if (direction === 'down') {
            $(this.element).addClass('animate__fadeInUp');
            this.destroy();
            duration:2000;
        }
    },
    offset: '50%',
});

//お客様情報入力
$('#submit_button').on('click',function(e){
    var username = $('#username').val();
    var user_kana = $('#user_kana').val();
    var postal_code = $('#postal_code').val();
    var prefecture = $('#prefecture').val();
    var address_1 = $('#address_1').val();
    var address_2 = $('#address_2').val();
    var tel_no = $('#tel_no').val();
    var email = $('#email').val();
    var password = $('#password').val();
    var payment = $('input[name=payment]:checked').val();

    var error_text = '';

    if (username.trim() === '') {
        error_text = 'お名前を入力してください'
    } 
    else if (!username.match(/[^\x01-\x7E]/)){
        error_text = '全角で入力してください';
    }
    else if (user_kana.trim() === ''){
        error_text = 'フリガナを入力してください';
    }
    else if (!user_kana.match(/[ァ-ヴ]/)){
        error_text = '全角カタカナで入力してください';
    }
    else if (postal_code.trim() === '') {
        error_text = '郵便番号を入力してください';
    }
    else if (!postal_code.match(/^\d{7}$/)) {
        error_text = '郵便番号７桁を入力してください';
    }
    else if (prefecture.trim() === '') {
        error_text = '都道府県名を入力してください';
    }
    else if (address_1.trim() === '') {
        error_text = '市区町村を入力してください';
    }
    else if (address_1.match(/[^\x01-\x7E]/)) {
        error_text = '全角で市区町村を入力してください';
    }
    else if (tel_no.trim() === '') {
        error_text = '電話番号を入力してください';
    }
    else if (!tel_no.match(/^[0-9]{10,11}$/)){
        error_text = '入力内容をご確認頂き、電話番号を再度入力してください';
    }
    else if (email.trim() === '') {
        error_text = 'メールアドレスを入力してください';
    }
    else if (!email.match(/^[\w.\-]+@[\w\-]+\.[\w.\-]+$/)){
        error_text = '入力内容をご確認頂き、メールアドレスを再度入力してください';
    }
    else if (password.trim() === ''){
        error_text = 'パスワードを入力してください';
    }
    else if(!password.match(/[a-zA-Z0-9]{4,}/)) {
        error_text = '入力内容をご確認頂き、パスワードを再度入力してください';
    }
    else if (payment === undefined) {
        error_text = '支払い方法を選択してください';
    }

    //エラー内容を表示する
    $('#form_has_error').text(error_text);
    if (error_text === ''){}

});