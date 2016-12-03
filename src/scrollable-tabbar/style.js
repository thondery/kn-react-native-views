'use strict';

import { StyleSheet, Dimensions, Platform } from 'react-native'

export const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    height: 64,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 22,
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    backgroundColor: '#F7F7F7',
    borderBottomColor: '#DDD'
  },
  navsView: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: 40
  },
  btnStyle: {
    height: 40,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center'
  }
})