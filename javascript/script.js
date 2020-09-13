/* Javascript for countdown website */
/* Copyright Aidan Hopkins 2020 */

const message = 'Hello';

var app = new Vue({
    data: {
        // declare message with an empty value
        message: ''
    },
    template: '<div>{{ message }}</div>'
})
// set `message` later
vm.message = 'Hello!'