import React from 'react';
import {colors} from '../../theme/colors';
import {View, StyleSheet, Image} from 'react-native';

export default function BannerTitle() {
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/images/audiophile.png')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.black,
    },
});
