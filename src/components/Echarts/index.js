import React, { Component } from 'react';
import { WebView, View, StyleSheet, Platform } from 'react-native';
import renderChart from './renderChart';
import echarts from './echarts.min';

export default class App extends Component {
  componentWillReceiveProps(nextProps) {
    if(nextProps.option !== this.props.option) {
      this.refs.chart.reload();
    }
  }

  render() {
    return (
      <View style={{flex: 1, height: this.props.height || 400,}}>
        {Platform.OS === 'ios' ?
            <WebView
                ref="chart"
                scrollEnabled={false}
                injectedJavaScript={renderChart(this.props)}
                style={{
                    height: this.props.height || 400,
                  }}
                source={require('./tpl.html')}
            />:
            <WebView
                ref="chart"
                scrollEnabled={false}
                injectedJavaScript={renderChart(this.props)}
                style={{
                    height: this.props.height || 400,
                  }}
                source={{uri: 'file:///android_asset/tpl.html'}}
            />
        }
      </View>
    );
  }
}
