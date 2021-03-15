export default{
    data: function(){
        return{
             arrayImagesClass: ['sliderImageOne','sliderImageTwo','sliderImageThree','sliderImageFour','sliderImageFive'],
             currentlyImage: 0,
             activeBlock: 0,
             loadMore: false,
             toggleHideMenu: false,
             doCounters: 1,
             recentPostsAct: 0
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
        },

        activeRecentPostsActPrev(){

            if(this.recentPostsAct > 0){
                this.recentPostsAct--;
            }
        },

        activeRecentPostsActNext(){

            if(this.recentPostsAct < 2){
                this.recentPostsAct++;
            }
        }

    },

    computed:{

        sliderHeader(){
            return this.arrayImagesClass[this.currentlyImage];
        }
    }
}