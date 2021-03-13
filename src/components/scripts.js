export default{
    data: function(){
        return{
             arrayImagesClass: ['sliderImageOne','sliderImageTwo','sliderImageThree','sliderImageFour','sliderImageFive'],
             currentlyImage: 0,
             activeBlock: 0,
             loadMore: false,
             toggleHideMenu: false,
             doCounters: 1
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
        },

        changesCountersPrev(){
            if(this.doCounters > 0){
                this.doCounters--;
            }
        },

        changesCountersNext(){
            if(this.doCounters < 3){
                this.doCounters++;
            }
        }

    },

    computed:{

        sliderHeader(){
            return this.arrayImagesClass[this.currentlyImage];
        }
    }
}