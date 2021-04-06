import React, { Component } from 'react';
import WrapperContainer from '../../../Component/WrapperContainer';
import { BarChart } from "react-native-chart-kit";
import { width } from '../../../styles/responsiveSize';
import colors from '../../../styles/colors';
import commonStyles from '../../../styles/commonStyles';


export default class BarGraph extends Component {


    data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            { data: [20, 45, 28, 80, 99, 43] }
        ]
    };

    chartConfig = {
        backgroundGradientFrom: colors.theme2Color,
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: colors.themeColor,
        backgroundGradientToOpacity: 0.6,
        color: (opacity = 1) => colors.black,
        strokeWidth: 3, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    };

    render() {
        return (
            <WrapperContainer>
                <BarChart
                    style={{ ...commonStyles.center, flex: 1 }}
                    data={this.data}
                    width={width}
                    height={220}
                    yAxisLabel="$"
                    chartConfig={this.chartConfig}
                    verticalLabelRotation={30}
                />
            </WrapperContainer>
        )
    }
}