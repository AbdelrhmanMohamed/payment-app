import {StyleSheet} from 'react-native';


export default StyleSheet.create({
  root: {padding: 20, minHeight: 300},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 20, writingDirection:'ltr', flexDirection:"row-reverse"},
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: 'red',
    textAlign: 'center',
    writingDirection:'rtl'
  },
  focusCell: {
    borderColor: '#000',
    borderWidth:4
  },
});