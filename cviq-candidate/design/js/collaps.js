$(function() {
    var collapsedSize = '100px';
$('.collapsmore').each(function() {
    var pT = parseInt($(this).css('padding-top').replace(/px/,''));
    var lH = parseInt($(this).css('line-height').replace(/px/,''));
    
    collapsedSize = ((lH*.0)+pT)+'px';
    var h = this.scrollHeight;
    var div = $(this);
    if (h > 60) {
        div.css('height', collapsedSize);
        div.after('<a id="collapsmore" class="advance-search-btn" href="#">Adance Search</a><br/>');
        var link = div.next();
        link.click(function(e) {
            e.stopPropagation();

            if (link.text() != 'Quick Search') {
                link.text('Quick Search');
                div.animate({
                    'height': h
                });

            } else {
                div.animate({
                    'height': collapsedSize
                });
                link.text('Advance Search');
            }

        });
    }

});
});