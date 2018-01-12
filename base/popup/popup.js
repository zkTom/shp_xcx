Component({
  behaviors: [],
  properties: {
    isShow: {
      type: Boolean,
      value: false,
      observer: function(newVal){
        if (newVal){
          this.show();
        } else {
          this.hide();
        } 
      }
    },
    animationMode: {
      type: String,
      value: 'none'
    },
    align: {
      type: String,
      value: 'center'
    },
    status: {
      type: String,
      value: 'hide',
      observer: function observer(status) {
        if (status === 'show' || status === 'hide') {
          this.setData({
            maskStatus: status
          });
        }
        if (status === 'show') {
          if (!getApp().globalData) {
            Object.assign(getApp(), { globalData: {} });
          }
          var globalData = getApp().globalData;
          var zIndex = (globalData._zIndex || 1000) + 1;
          globalData._zIndex = zIndex;
          this.setData({
            zIndex: zIndex
          });
        }
      }
    }
  },
  data: {
    maskStatus: 'hide',
    zIndex: 1000
  },
  methods: {
    toggle: function toggle(mode) {
      var status = this.data.status;
      if (typeof mode !== 'boolean') {
        mode = status !== 'show';
      }
      if (mode) {
        this.show();
      } else {
        this.hide();
      }
    },
    showMask: function showMask() {
      this.setData({
        maskStatus: 'show'
      });
    },
    hideMask: function hideMask() {
      this.setData({
        maskStatus: 'hide'
      });
    },
    show: function show() {
      var _this = this;

      if (this.data.animationMode !== 'none') {
        this.showMask();
        this.setData({
          status: 'fadeIn'
        });

        setTimeout(function () {
          _this.setData({
            status: 'show'
          });
        }, 50);
      } else {
        this.showMask();
        this.setData({
          status: 'show'
        });
      }
    },
    forceHide: function forceHide() {
      this.setData({
        status: 'hide'
      });
      this.hideMask();
    },
    popupTap: function popupTap() {
      if (this.data.locked !== 'true') {
        this.hide();
      }
    },
    hide: function hide() {
      var _this2 = this;

      if (this.data.animationMode !== 'none') {
        this.setData({
          status: 'fadeOut'
        });

        clearTimeout(this._timer);

        this._timer = setTimeout(function () {
          _this2.forceHide();
        }, 300);
      } else {
        // 没有动画
        this.forceHide();
      }
    },
    onContentTap: function onContentTap() { }
  }
});