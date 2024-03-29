import React from 'react';
import { StyleSheet, Pressable, Image } from 'react-native';
import { View, Text } from '../../components/Themed';
import { useRouter } from 'expo-router';
import { MotiView, MotiText } from 'moti';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
//* Styling
import Colors from '../../constants/Colors';

export default function Header() {
    const router = useRouter();
    const [active, setActive] = React.useState('groups');

    const handleActive = (option: string) => {
        setActive(option);
    }

    return(
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <Pressable>
                    <MaterialCommunityIcons name="account-group" size={30} color={Colors.dark.text} />
                </Pressable>
                <Image style={styles.logo} source={require( '../../assets/images/uggroups_logo.png')} />
            </View>
            <View style={styles.findControls}>
                <Pressable style={styles.optionContainer} onPress={() => handleActive('groups')}>
                    <MotiText 
                        style={[styles.optionText, { color: active === 'groups' ? '#fff' : Colors.pallete.inactive }]}
                    >
                        Mis Grupos
                    </MotiText>
                    {active === 'groups' && <DotSelector selector={active} />}
                </Pressable>
                <Pressable style={styles.optionContainer} onPress={() => handleActive('discover')}>
                    <MotiText 
                        style={[styles.optionText, { color: active === 'discover' ? '#fff' : Colors.pallete.inactive }]}
                    >
                        Descubrir
                    </MotiText>
                    {active === 'discover' && <DotSelector selector={active} />}
                </Pressable>
            </View>
        </View>
    );
}

function DotSelector({ selector }: { selector: string }) {
    return(
        <MotiView 
            style={styles.dot}
            from={{ transform: [{ translateX: selector === 'groups' ? 90 : -90 }]}}
            animate={{ transform: [{ translateX: 0 }] }}
            transition={{ type: 'spring' }}>
        </MotiView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 80,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.dark.background,
        paddingVertical: 10,
        paddingHorizontal: '5%',
    },
    subContainer: {
        width: '60%',
        marginRight: "40%",
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    logo: {
        height: 28,
        width: 75,
    },
    findControls: {
        width: '100%',
        height: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
    },
    optionContainer: {
        height: 40,
        flexDirection: 'column',
        alignItems: 'center',
    },
    optionText: {
        fontSize: 12.5,
        fontWeight: 'bold',
        fontFamily: 'Basement-Grotesque',
        letterSpacing: 0.25,
        marginHorizontal: 15,
    },
    dot: {
        width: 7,
        height: 7,
        borderRadius: 50,
        position: 'absolute',
        marginTop: 22,
        backgroundColor: Colors.pallete.primary,
    },
});
