import React from "react";
import { View, StyleSheet, Text, Pressable, Image, Dimensions } from "react-native";

const { width } = Dimensions.get('window');
const cardWidth = width * 0.9;

const GoalItem = (props) => {
    return (
        <Pressable
            onPress={props.onDeleteItem.bind(this, props.id)}
            style={({ pressed }) => [styles.pressableContainer, pressed && styles.pressedItem]}
        >
            <View style={styles.goalItemContainer}>
                {props.photoUri ? (
                    <View style={styles.cardWithPhoto}>
                        <Image
                            source={{ uri: props.photoUri }}
                            style={styles.photo}
                        />
                        <View style={styles.textContainer}>
                            <Text style={styles.goalItemText}>
                                {props.text}
                            </Text>
                            <Text style={styles.tipText}>Silmek için karta basın</Text>
                        </View>
                    </View>
                ) : (
                    <View style={styles.cardWithoutPhoto}>
                        <Text style={styles.goalItemText}>
                            {props.text}
                        </Text>
                        <Text style={styles.tipText}>Silmek için karta basın</Text>
                    </View>
                )}
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    pressableContainer: {
        width: cardWidth,
        marginVertical: 8,
        alignSelf: 'center',
        borderRadius: 15,
        overflow: 'hidden',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    goalItemContainer: {
        width: '100%',
        backgroundColor: '#fff',
    },
    cardWithPhoto: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        backgroundColor: '#5cd85a',
        borderRadius: 15,
    },
    cardWithoutPhoto: {
        padding: 16,
        backgroundColor: '#5cd85a',
        borderRadius: 15,
    },
    textContainer: {
        flex: 1,
        marginLeft: 12,
    },
    goalItemText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    photo: {
        width: 80,
        height: 80,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'white',
    },
    pressedItem: {
        opacity: 0.7,
        transform: [{ scale: 0.98 }],
    },
    tipText: {
        fontSize: 11,
        color: 'rgba(255, 255, 255, 0.8)',
        marginTop: 4,
    }
});

export default GoalItem;