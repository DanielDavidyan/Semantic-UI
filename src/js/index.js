$(document).ready(function(){
    //in index - for the rating stars
    $('.ui.rating')
        .rating({
            icon: 'star',
            initialRating: 3,
            maxRating: 5
        })
    ;
    //in cart - for the amount of product (dropdown)
    $('.ui.dropdown.selection')
        .dropdown({
            ignoreDiacritics: true,
            sortSelect: true,
            fullTextSearch:'exact'
        })
    ;
    //in index - for the popup menu (account&lists)
    $('.browse.item')
        .popup({
            delay: {
                show: 300,
                hide: 1500
            }
        })
    ;
});
