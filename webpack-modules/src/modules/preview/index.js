var $ = require('jquery');
require('./index.less');

$('<div/>', {
    'class': 'product-preview',
    'html': 'This is product prevew.'
}).appendTo('body');


function showProduct(id) {
    console.log('Here\'s product with id ' + id);
}

module.exports = showProduct;
