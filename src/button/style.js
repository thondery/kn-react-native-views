'use strict';

import { StyleSheet, Dimensions, Platform } from 'react-native'

export const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#f60'
  },
  labelStyle: {
    fontSize: 18,
    color: '#fff'
  }
})