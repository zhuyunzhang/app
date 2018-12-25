
import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    processColor,
    Dimensions
} from 'react-native';

import {PieChart} from 'react-native-charts-wrapper';

class RechargeList extends React.Component {

    constructor() {
        super();

        this.state = {
            data: {
                dataSets: [{
                    values: [
                        {value: 20, label: '补贴'}
                        ,{value: 80, label: '充值'}
                      ],
                    label: '',
                    config: {
                        // sliceSpace: 0,
                        //selectionShift: 0,
                        valueTextSize: 14,
                        valueTextColor:processColor('#0F0F0F'),
                        valueFormatter: 'largeValue',
                        colors: [processColor('#41babc'), processColor('red'),processColor('blue'),processColor('#EE1289'),processColor('#98FB98')]
                      }
                }],
            },
            description: {
                text: ''

            },
            legend: {
                enabled: false,
                textSize: 15,
                form: 'CIRCLE',
                horizontalAlignment: "RIGHT",
                verticalAlignment: "CENTER",
                orientation: "VERTICAL",
                wordWrapEnabled: true
              }
        };
    }



    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{height:80,marginTop: 15}}>

                </View>


                <View>
                    <PieChart
                        style={{ height: Dimensions.get('window').width * 0.6}}
                        logEnabled={true}
                        data={this.state.data}
                        legend={this.state.legend}
                        drawEntryLabels={true}
                        rotationEnabled={true}
                        usePercentValues={true}
                        rotationAngle={0}
                        styledCenterText={{
                            text:"100元",
                            color: processColor('#7f7f7f'),
                            size: 19
                        }}
                        chartDescription={this.state.description}
                        rotationAngle={162}
                        centerTextRadiusPercent={400}
                        holeRadius={45}
                        transparentCircleColor={processColor('#FFF')}
                        maxAngle={360}
                    />
                </View>
            </View>
        );
    }
}

export default RechargeList;