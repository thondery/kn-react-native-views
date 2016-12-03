'use strict';

import React, { Component, PropTypes } from 'react'
import { 
  View, 
  Text,
  Animated,
  TouchableOpacity
} from 'react-native'
import Button from 'react-native-scrollable-tab-view/Button'
import styles, { width, height } from './style'

export default class extends Component {

  static propTypes = {
    goToPage: PropTypes.func,
    activeTab: PropTypes.number,
    tabs: PropTypes.array,
    underlineColor: PropTypes.string,
    underlineHeight: PropTypes.number,
    backgroundColor: PropTypes.string,
    activeTextColor: PropTypes.string,
    inactiveTextColor: PropTypes.string,
    style: View.propTypes.style,
    textStyle: Text.propTypes.style,
    tabStyle: View.propTypes.style,
    renderTabName: PropTypes.func,
    tabWidth: PropTypes.number,
    leftMenu: PropTypes.node,
    rightMenu: PropTypes.node
  }

  static defaultProps = {
    activeTextColor: '#f60',
    inactiveTextColor: '#666',
    underlineColor: '#f60',
    backgroundColor: null,
    style: null,
    underlineHeight: 4,
    tabWidth: 50,
    leftMenu: null,
    rightMenu: null
  }

  renderTabName(name, page, isTabActive) {
    let { activeTextColor, inactiveTextColor, textStyle } = this.props
    let textColor = isTabActive ? activeTextColor : inactiveTextColor
    let fontWeight = isTabActive ? 'bold' : 'normal'
    return (
      <Text style={[{fontSize: 16, color: textColor, fontWeight}, textStyle]}>
        {name}
      </Text>
    )
  }

  renderTabOption(name, page) {
    let isTabActive = this.props.activeTab === page
    return (
      <Button key={name}
              style={[styles.btnStyle, {width: this.props.tabWidth}]}
              accessible={true}
              accessibilityLabel={name}
              accessibilityTraits='button'
              onPress={() => this.props.goToPage(page)} >
              {this.renderTabName(name, page, isTabActive)}
      </Button>
    )
  }

  renderLeftComponent () {
    let { leftMenu } = this.props
    return leftMenu
  }

  renderRightComponent () {
    let { rightMenu } = this.props
    return rightMenu
  }

  render () {
    let { 
      style,
      tabs, 
      tabWidth,
      navigator, 
      scrollValue,
      containerWidth,
      underlineHeight,
      underlineColor
    } = this.props
    let numberOfTabs = tabs.length
    let tabUnderlineStyle = {
      position: 'absolute',
      width: 20,
      height: underlineHeight,
      backgroundColor: underlineColor,
      borderRadius: 2,
      bottom: 0
    }
    let left = scrollValue.interpolate({
      inputRange: [0, 1], outputRange: [(tabWidth - 20) / 2, (tabWidth - 20) / 2 + tabWidth]
    })
    return (
      <View style={[styles.container, style]}>
        <View style={{flexDirection: 'row'}}>
          {this.renderLeftComponent()}
          <View style={styles.navsView}>
            {tabs.map((tab, i) => this.renderTabOption(tab, i))}
            <Animated.View style={[tabUnderlineStyle, { left } ]} />
          </View>
        </View>
        {this.renderRightComponent()}
      </View>
    )
  }
}