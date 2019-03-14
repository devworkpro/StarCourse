import { StyleSheet } from 'react-native';

// custom modules
import {responsiveHeight, responsiveWidth } from '../../../constants/dimensions';
import { Colors } from '../../../constants'
// intreface style for no data found components


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        marginTop: responsiveHeight(7),
      },
      imageContainer: {
        flex: 1,
        elevation: 5,
        marginLeft: responsiveWidth(5),
        shadowColor: Colors.SHADOW_COLOR,
        shadowOffset: {
          height: 1,
          width: 1,
        },
        shadowOpacity: 0.4,
        shadowRadius: 5,
      },
      image: {
        height: responsiveHeight(35),
        width: responsiveWidth(90),
        borderRadius: responsiveWidth(10)
      },
      textInputContainer: {
        flex: 1.2,
        marginLeft: responsiveWidth(5),
      },
      buttonContainer: {
        flexDirection: 'row',
        marginHorizontal: responsiveWidth(8),
        marginTop: responsiveHeight(5)
      },
      button: {
        height: responsiveHeight(5),
        width: responsiveWidth(28),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
        borderRadius:5
      },
      containerStyle:{borderWidth:0,borderBottomWidth:1, color:Colors.SHADOW_COLOR},
      iconStyle:{
          height:responsiveWidth(5),
          width:responsiveWidth(5)
      }
});

export default styles;
