new Vue({
    el: '#app',
    data: {
        // data varibles goes here
        toggleBtn: false
    },
    computed: {
        // computed properties goes here
    },
    methods: {
        // methods goes here

        togglePreview: function () {
            this.toggleBtn ? this.toggleBtn = false : this.toggleBtn = true;

        }

    }
})