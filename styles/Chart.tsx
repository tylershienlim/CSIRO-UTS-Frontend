import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {DataPoint, Data} from './Data';
import * as d3 from 'd3';
import { Canvas, Path, runTiming, Text as SKText, useValue, useComputedValue, Skia } from '@shopify/react-native-skia';

const CANVAS_HEIGHT = 400;
const CANVAS_WIDTH = 370;

export const Chart = () =>{
    const CHART_MARGIN = 20;
    const CHART_WIDTH = CANVAS_WIDTH - 2;
    const CHART_HEIGHT = CANVAS_HEIGHT - 2 * CHART_MARGIN;
    const CHART_BAR_WIDTH = 10;

    const xDomain = Data.map((xDataPoint: DataPoint) => xDataPoint.date);
    const xRange = [0,CHART_WIDTH];
    const x = d3.scalePoint().domain(xDomain).range(xRange).padding(1);

    const yDomain = [0, d3.max(Data, (yDataPoint: DataPoint) => yDataPoint.attacks)];
    const yRange = [0, CHART_HEIGHT];
    const y = d3.scaleLinear().domain(yDomain).range(yRange);

    const chartPath = useComputedValue(() =>{
        const newPath = Skia.Path.Make();
        
        Data.forEach((dataPoint: DataPoint) => {
            const bar = Skia.XYWHRect(
                x(dataPoint.date) - CHART_BAR_WIDTH / 2,
                CHART_HEIGHT,
                CHART_BAR_WIDTH,
                y(dataPoint.attacks) * -1
            )

            const roundedBar = Skia.RRectXY(bar, 10, 10);
            newPath.addRRect(roundedBar);
        });

        return newPath;
        }, []);

        return(
            <View style={styles.container}>
            <Canvas style={styles.canvas}>
                <Path path={chartPath} color="green"/>
            </Canvas>
            </View>
        );
};

const styles = StyleSheet.create({
    canvas: {
        height: CANVAS_HEIGHT,
        width: CANVAS_WIDTH,
        
    },

    container: {
        flex: 1,
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00AFDB',
    },

})