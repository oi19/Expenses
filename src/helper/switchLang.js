import RNRestart from 'react-native-restart';
import { I18nManager } from 'react-native';
import strings from '../localization/index'
import en from '../localization/en'

// import i18n from '{universe:i18n}';

export const switchLang = (lang) => {
    // console.log(strings)
    if (I18nManager.isRTL && lang !== 'ar') {
        console.log('english language')
        I18nManager.forceRTL(false)
        RNRestart.Restart()
    } else {
        console.log('arabic language')

        I18nManager.forceRTL(true)
        RNRestart.Restart()
    }
   

}