var app = new Vue({
    el: '#app',
    components:{
    },
    data: {
        list: ['直播','电影','4K','VR'],
        type: '直播',
        drawer: false,
        channelUrl: 'http://tv.cctv.com/live/cctv13/',
        channelMarginTop: ''
    },
    methods: {
        channelSelect: function (value) {
            this.channelUrl = value
        }
    },
    created: function () {
        if(window.innerHeight-569>0){
            this.channelMarginTop = (window.innerHeight-569)/2
        }
    }
})
document.onkeypress=function (event) {
    console.log(event)
    if (app.$data.type == '直播') {
        if(event.key=='q'){
            app.$data.drawer=!app.$data.drawer


        }
    }
}
window.onresize=function () {
    if(window.innerHeight-569>0){
        console.log(window.innerHeight)
        app.$data.channelMarginTop = (window.innerHeight-569)/2
    }
}


