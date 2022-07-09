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