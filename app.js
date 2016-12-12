App({
    systemInfo: null,
    onLaunch:function(){
        const self = this;
        wx.getSystemInfo({
        success(res) {
            self.systemInfo = res;
        },
        });
    },

    onShow:function(){
        console.log('onShow---------')
    },

    onHide:function(){
         console.log('onHide---------')
    }
})