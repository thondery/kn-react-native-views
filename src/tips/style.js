'use strict';

import { StyleSheet, Dimensions, Platform } from 'react-native'

export const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    width: width,
    height: 50,
    backgroundColor: '#f60',  
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10
  },
  tipsTextStyle: {
    fontSize: 16,
    color: '#fff'
  },
  buttonStyle: {
    width: 70,
    height: 30,
    backgroundColor: '#fdf6e3',
    borderRadius: 3
  },
  buttonTextStyle: {
    color: '#666',
    fontSize: 16
  }
})