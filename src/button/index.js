'use strict'

import React, { Component, PropTypes } from 'react'
import {  
  View, 
  Text,
  TouchableOpacity
} from 'react-native'
import styles from './style'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class Button extends Component {

  static propTypes = {
    style: View.propTypes.style,
    label: PropTypes.string,
    labelStyle: Text.propTypes.style,
    icon: PropTypes.string,
    iconColor: PropTypes.string,
    iconSize: PropTypes.number,
    viewControl: PropTypes.node,
    onPress: PropTypes.func
  }

  static defaultProps = {
    style: {},
    label: undefined,
    labelStyle: {},
    icon: undefined,
    iconColor: '#fff',
    iconSize: 20,
    viewControl: null,
    onPress: () => null
  }

  render() {
    let { style, label, labelStyle, icon, iconColor, iconSize, viewControl, onPress } = this.props
    if (viewControl) {
      return (
        <TouchableOpacity onPress={onPress.bind(this)}
                          style={[styles.container, style]}>
          <viewControl />
        </TouchableOpacity>
      )
    }
    else {
      return (
        <TouchableOpacity onPress={onPress.bind(this)}
                          style={[styles.container, style]}>
          {icon ? <Icon name={icon} 
                        size={iconSize} 
                        color={iconColor} 
                        style={{marginRight: 4}} /> : null}
          <Text style={[styles.labelStyle, labelStyle]}>{label}</Text>
        </TouchableOpacity>
      )
    }
  }

}