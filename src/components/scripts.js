export default{
    data: function(){
        return{
             arrayImagesClass: ['sliderImageOne','sliderImageTwo','sliderImageThree','sliderImageFour','sliderImageFive'],
             currentlyImage: 0,
             activeBlock: 0,
             loadMore: false,
             toggleHideMenu: false
            }
    },

    methods:{

        nextImage(){

            if(this.currentlyImage < 4){
                this.currentlyImage++;   
            }else{
                this.currentlyImage = 0
            }  
        },

        prevImage(){
            if(this.currentlyImage > 0){
                this.currentlyImage--;
            }else{
                this.currentlyImage = 4
            }
        },

        activeBlockFn(x){
            this.activeBlock = x;
        }

    },

    computed:{

        sliderHeader(){
            return this.arrayImagesClass[this.currentlyImage];
        }
    }
}