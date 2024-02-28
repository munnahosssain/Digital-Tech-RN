import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
    ActivityIndicator,
    SafeAreaView,
    View,
    StyleSheet,
    ScrollView,
    Image,
    useWindowDimensions,
    Pressable,
} from 'react-native';
import {fetchProducts, selectStatus} from '../store/productSlice';
import BannerTitle from '../components/text/BannerTitle';
import {colors, spacing} from '../theme';
import Text from '../components/text/text';
import {AntDesign} from '@expo/vector-icons';

const CategoryBox = ({title, image, onPress}) => {
    return (
        <Pressable
            onPress={onPress}
            style={{
                marginVertical: spacing[4],
                marginHorizontal: spacing[5],
                borderRadius: spacing[4],
                backgroundColor: colors.white,
                alignItems: 'center',
                padding: spacing[5],
                marginTop: spacing[9],
            }}>
            <Image source={image} style={{top: -60}} />
            <View
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    top: -35,
                }}>
                <Text preset="h6">{title}</Text>
            </View>
            <View
                style={{
                    top: -20,
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: spacing[4],
                }}>
                <Text centered preset="subtitle" textColor="#7c7c7c">
                    SHOP
                </Text>
                <AntDesign name="right" color={colors.lightOrange} size={14} />
            </View>
        </Pressable>
    );
};

export default function Home() {
    const dispatch = useDispatch();
    const status = useSelector(selectStatus);
    const {width, height} = useWindowDimensions();

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProducts());
        }
    }, []);

    if (status === 'loading') {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <ActivityIndicator />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <BannerTitle />
                <View style={styles.bgImage}>
                    <Image
                        source={require('../../assets/images/home-banner.png')}
                    />
                    <View style={styles.overrideText}>
                        <Text preset="h2" centered white>
                            WELCOME
                        </Text>
                        <Text
                            textColor={colors.gray}
                            centered
                            style={{
                                width: width - 20,
                                alignSelf: 'center',
                                marginTop: spacing[5],
                            }}>
                            Experience natural, lifelike audio and exceptional
                            build quality made for the passionate music
                            enthusiast.
                        </Text>
                    </View>
                </View>
                <View style={{paddingVertical: spacing[8]}}>
                    <CategoryBox
                        title="HEADPHONES"
                        image={require('../../assets/images/home-headphone.png')}
                    />
                    <CategoryBox
                        title="SPEAKERS"
                        image={require('../../assets/images/home-speaker.png')}
                    />
                    <CategoryBox
                        title="EARPHONES"
                        image={require('../../assets/images/home-earphone.png')}
                    />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 35,
    },
    bgImage: {
        width: '100%',
        alignSelf: 'center',
        backgroundColor: colors.black,
    },
    overrideText: {
        position: 'absolute',
        width: '100%',
        top: 200,
    },
});
