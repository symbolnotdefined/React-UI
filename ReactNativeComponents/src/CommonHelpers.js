
import { Dimensions, Platform, PixelRatio} from 'react-native';


const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');

/* Scaling Font Size */
//   const standardWidth = 375;
//   export const scale = function(size){
//     const K = SCREEN_WIDTH / standardWidth;
//     return K * size;
//   }

export const settings = {
    themeBg:'#2296f3',//'#0051c1',
    fontColor:'#222',
    package_text_color:'#7a7a7a',
    placeholderTextColor:'#91a1bb',
    login_placeholder_text_color:'#BBC6D8',
    borderColor:'#e7e7e7',
    pinkColor:'#2296f3',//'#ec407a',
    categoryNameColor:'#304c71',
    white: '#ffffff', // '#F8F8FF',
    vendor_seats_color:'#597191',
    borderHeight: 1,
    winWT: SCREEN_WIDTH,
    winHT: SCREEN_HEIGHT,
    statusbarListener:false,
    standardWidth:375,        // based on iphone x scale

}

export const scale = function(size){
    const K = SCREEN_WIDTH / settings.standardWidth;
    return K * size;
}

export const c={
    log: function() {
        var args = Array.prototype.slice.call(arguments);
        console.log.apply(console, args);
    },
    warn: function() {
        var args = Array.prototype.slice.call(arguments);
        console.warn.apply(console, args);
    },
    error: function() {
        var args = Array.prototype.slice.call(arguments);
        console.error.apply(console, args);
    }
}

export const scaleFont = function scale(size) {
    const scaleRatio = SCREEN_WIDTH / settings.standardWidth;
    const newSize = size * scaleRatio;
    if (Platform.OS === 'ios') {
      return Math.round(PixelRatio.roundToNearestPixel(newSize));
    } else {
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
    }
}

export const fonts = {
    family:{
        openSans:'OpenSans-Regular',
        openSansLight:'OpenSans-Light',
        openSansSemi:'OpenSans-SemiBold',
        openSansBold:'OpenSans-Bold',
        lato:'Lato-Regular',
        latoLight:'Lato-Light',
        latoBold:'Lato-Bold',
        latoBlack:'Lato-Black',
        avenirHeavy:'Avenir-Heavy',
        avenirMedium:'Avenir-Medium',
        avenirLight:'Avenir-Light',
        avenirRoman:'Avenir-Roman'
    },
    sizes: {
        title:      scaleFont(20),
        subTitle:   scaleFont(18),
        xs:         scaleFont(9),
        ten:        scaleFont(10),
        sm:         scaleFont(12),
        md:         scaleFont(15),
        lg:         scaleFont(18),
        xl:         scaleFont(21),
        xxl:        scaleFont(24),
        xxxl:       scaleFont(30),
    }
}
