new Vue({
    el: '#app',
    data: {
        // data varibles goes here
        toggleBtn: false,
        userDetails: {
            category: 'Choose...',
            gender: '',
            sid: ''
        },
    },
    computed: {
        // computed properties goes here
    },
    methods: {
        // methods goes here
        togglePreview: function () {
            this.toggleBtn ? this.toggleBtn = false : this.toggleBtn = true;
        },

        geneeateID: function () {
            let id = parseInt(Math.random() * 1000000);
            id = "919" + id.toString();
            this.userDetails.sid = id;
        }
    }
})
