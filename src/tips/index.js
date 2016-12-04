'use strict';

import React, { Component, PropTypes } from 'react'
import { 
  View, 
  Text,
  Animated,
  Easing,
  TouchableOpacity 
} from 'react-native'
import Button from '../button'
import styles, { width, height } from './style'

export default class Tips extends Component {

  static propTypes = {
    style: View.propTypes.style,
    tipsText: PropTypes.string,
    tipsTextStyle: View.propTypes.style,
    showButton: PropTypes.bool,
    buttonLabel: PropTypes.string,
    buttonStyle: View.propTypes.style,
    buttonTextStyle: Text.propTypes.style,
    buttonPress: PropTypes.func,
    isOpen: PropTypes.bool
  }

  static defaultProps = {
    style: null,
    tipsText: '',
    tipsTextStyle: null,
    showButton: false,
    buttonLabel: '',
    buttonStyle: null,
    buttonTextStyle: null,
    buttonPress: () => null,
    isOpen: false
  }

  constructor(props) {
    super(props)
    this.state = {
      topVaule: new Animated.Value(-50)
    }
  }

  componentDidMount () {
    this.showHandle()
  }

  componentWillReceiveProps (nextProps) {
    let { isOpen } = nextProps
    if (nextProps.isOpen !== this.props.isOpen) {
      if (isOpen) {
        this.showHandle()
      }
      else {
        this.hideHandle()
      }
    }
  }

  render () {
    let { style, tipsText, tipsTextStyle, showButton, buttonLabel, buttonStyle, buttonTextStyle,  buttonPress } = this.props
    return (
      <Animated.View style={[styles.container, style, showButton ? {justifyContent: 'space-between'} : null, {top: this.state.topVaule}]}>
        <Text style={[styles.tipsTextStyle, tipsTextStyle]}>{tipsText}</Text>
        {showButton ? 
          <Button style={[styles.buttonStyle, buttonStyle]}
                  label={buttonLabel}
                  labelStyle={[styles.buttonTextStyle, buttonTextStyle]}
                  onPress={() => buttonPress()} /> 
        : null}
      </Animated.View>
    )
  }

  showHandle() {
    Animated.sequence([
      Animated.timing(this.state.topVaule, {
        toValue: 0,
        duration: 300,
        easing: Easing.linear
      })
    ])
    .start()
  }

  hideHandle() {
    Animated.sequence([
      Animated.timing(this.state.topVaule, {
        toValue: -50,
        duration: 300,
        easing: Easing.linear
      })
    ])
    .start()
  }

}