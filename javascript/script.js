/* Javascript for countdown website */
/* Copyright Aidan Hopkins 2020 */

const toShow = "Vue is working as intended";

Vue.component( "modal", {
    template: '#modal-template'
})

var modal = new Vue({
    el: '#modal',
    data: {
        showModal: true
    }
});

var text = new Vue({
    el: '#app',
    data: {
        message: ''
    }
});

text.message = toShow;