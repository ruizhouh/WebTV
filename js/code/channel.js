Vue.component(
    'channel',
    {
        data: function () {
            return {
                list: ['CCTV-1 综合','CCTV-2 财经','CCTV-3 综艺','CCTV-4 中文国际（亚）','CCTV-5 体育','CCTV-5+ 体育赛事','CCTV-6 电影','CCTV-7 国防军事','CCTV-8 电视剧','CCTV-9 记录','CCTV-10 科教','CCTV-11 戏曲','CCTV-12 社会与法','CCTV-13 新闻','CCTV-14 少儿','CCTV-15 音乐','CCTV-17 农业农村','CCTV-4 中文国际（欧）','CCTV-4 中文国际（美）'],
                channelList: ['http://tv.cctv.com/live/cctv1/',
                    'http://tv.cctv.com/live/cctv2/',
                    'http://tv.cctv.com/live/cctv3/',
                    'http://tv.cctv.com/live/cctv4/',
                    'http://tv.cctv.com/live/cctv5/',
                    'http://tv.cctv.com/live/cctv5plus/',
                    'http://tv.cctv.com/live/cctv6/',
                    'http://tv.cctv.com/live/cctv7/',
                    'http://tv.cctv.com/live/cctv8/',
                    'http://tv.cctv.com/live/cctvjilu/',
                    'http://tv.cctv.com/live/cctv10/',
                    'http://tv.cctv.com/live/cctv11/',
                    'http://tv.cctv.com/live/cctv12/',
                    'http://tv.cctv.com/live/cctv13/',
                    'http://tv.cctv.com/live/cctvchild/',
                    'http://tv.cctv.com/live/cctv15/',
                    'http://tv.cctv.com/live/cctv17/',
                    'http://tv.cctv.com/live/cctveurope/index.shtml',
                    'http://tv.cctv.com/live/cctvamerica/'
                ],
                indexFocus: 12
            }
        },
        methods: {
            channelClick: function (index) {
                this.$emit('channel-click',this.channelList[index])
                this.indexFocus = index
            }
        },
        created: function () {
            window.onkeypress=(event)=>{
                var channelItems = document.querySelectorAll('.channel-item')
                switch (event.code) {
                    case 'Numpad8':
                        if (this.indexFocus==0){
                            break
                        } else {
                            this.indexFocus--
                            channelItems[this.indexFocus].focus()
                            break
                        }
                    case "Numpad2":
                        if (this.indexFocus==channelItems.length){
                            break
                        } else {
                            this.indexFocus++
                            channelItems[this.indexFocus].focus()
                            break
                        }
                    case "KeyQ":
                        setTimeout(()=>{document.querySelectorAll('.channel-item')[this.indexFocus].focus()},20)
                        break
                    default:
                        break
                }
            }
        },
        template: '<ul>' +
                    '<li class="channel-item" v-for="(item,index) in list" tabindex="0" @click="channelClick(index)"><a>{{ item }}</a></li>' +
                  '</ul>'
    }
)