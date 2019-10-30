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
        outputText: 'Preview Your ID card below...',
        hasPreview: true
    },
    computed: {
        // computed properties goes here

    },
    methods: {
        // methods goes here
        togglePreview: function () {
            this.hasPreview = true;
            this.outputText = 'Preview Your ID card below...';
            this.toggleBtn ? this.toggleBtn = false : this.toggleBtn = true;
        },

        submitForm: function () {
            this.outputText = 'ID request has submitted..';
            this.hasPreview = false;
            this.toggleBtn = true;
        },

        getImgIcon: function (gender) {
            if (gender === 'male')
                this.userDetails.imagePath = menImgPath;
            else if (gender === 'female')
                this.userDetails.imagePath = womenImgPath;
            else
                this.userDetails.imagePath = '';
        },

        generateID: function(){
            let id = "919" + parseInt(Math.random()*1000000);
            this.userDetails.sid = id;
        }
    }
})
