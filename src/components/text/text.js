import React from 'react';
import { presets } from './test.preset';
import { Text as ReactNativeText, StyleSheet } from 'react-native';

export default function Text(props) {
    const {
        preset = 'default',
        children,
        style: styleOverride,
        textColor,
        centered,
        white,
        uppercase,
        ...rest
    } = props;

    const style = presets[preset] || presets.base;
    const styles = [style, styleOverride]

    return (
        <ReactNativeText
            {...rest}
            style={[
                styles,
                textColor && { color: textColor },
                centered && { textAlign: 'center' },
                white && { color: '#fff' },
                uppercase && { textTransform: 'uppercase' },
            ]}>
            {children}
        </ReactNativeText>
    )
}
