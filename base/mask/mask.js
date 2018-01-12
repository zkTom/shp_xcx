'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function hexToRgb(hex) {
  var color = [];
  var rgb = [];

  hex = hex.replace(/#/, '');

  if (hex.length === 3) {
    var tmp = [];

    for (var i = 0; i < 3; i++) {
      tmp.push(hex.charAt(i) + hex.charAt(i));
    }

    hex = tmp.join('');
  }

  for (var _i = 0; _i < 3; _i++) {
    color[_i] = '0x' + hex.substr(_i * 2, 2);
    rgb.push(parseInt(Number(color[_i])));
  }

  return rgb.join(',');
}

exports.default = Component({
  properties: {
    status: {
      type: String,
      value: 'hide',
      observer: function observer(status) {
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
    },
    opacity: {
      type: [String, Number],
      value: 0.6
    },
    backgroundColor: {
      type: String,
      value: '#000000'
    },
    locked: {
      type: [String],
      value: 'hide'
    },
    contentAlign: {
      type: String,
      value: 'tl'
    },
    __positionStyle: {
      type: String,
      value: 'top:0; left:0'
    }
  },

  data: {
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
    show: function show() {
      this.setData({
        status: 'show'
      });
    },
    hide: function hide() {
      this.setData({
        status: 'hide'
      });
    },

    omMaskTap: function omMaskTap(event) {
      var data = this.data;
      var detail = event.detail;
      var option = {};

      if (data.locked && data.locked !== 'true') {
        this.setData({
          status: 'hide'
        });
        this.triggerEvent('masktap', detail, option);
      }
    }
  },

  attached: function attached() {
    var data = this.data;

    this.setData({
      backgroundColor: hexToRgb(data.backgroundColor)
    });

    var contentAlignStyle = void 0;

    switch (data.contentAlign) {
      case 'tl':
        {
          contentAlignStyle = 'top:0; left:0';
          break;
        }

      case 'tr':
        {
          contentAlignStyle = 'top:0; right:0';
          break;
        }

      case 'bl':
        {
          contentAlignStyle = 'bottom:0; left:0';
          break;
        }

      case 'br':
        {
          contentAlignStyle = 'bottom:0; right:0';
          break;
        }

      case 'cc':
        {
          contentAlignStyle = 'top: 50%; left: 50%; transform: translate(-50%, -50%);';
          break;
        }
    }

    this.setData({
      __positionStyle: contentAlignStyle
    });
  }
});
