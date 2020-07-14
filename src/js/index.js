$(document).ready(function () {
    $('.ui.rating')
        .rating({
            icon: 'star',
            initialRating: 3,
            maxRating: 5
        });
    $('.ui.dropdown.selection')
        .dropdown({
            ignoreDiacritics: true,
            sortSelect: true,
            fullTextSearch: 'exact'
        });
    $('.browse.item')
        .popup({
            delay: {
                show: 300,
                hide: 1500
            }
        });
});
