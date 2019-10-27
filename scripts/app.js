let menImgPath = "./asserts/men.png";
let womenImgPath = "./asserts/women.png";

new Vue({
    el: '#app',
    data: {
        // data varibles goes here
        toggleBtn: false,
        userDetails: {
            category: 'Choose...',
            gender: '',
            sid: '',
            inputCity: 'Maryville',
            inputState: 'Missouri',
            inputZip: '64468',
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
        },

        getImgIcon: function (gender) {
            if (gender === 'male')
                this.userDetails.imagePath = menImgPath;
            else if (gender === 'female')
                this.userDetails.imagePath = womenImgPath;
            else
                this.userDetails.imagePath = '';
        }
    }
})
