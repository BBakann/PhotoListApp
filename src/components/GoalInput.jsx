import React, {useState, useEffect} from "react";
import { View, StyleSheet, TextInput, Modal, TouchableOpacity, Text, Image, Dimensions, KeyboardAvoidingView, Platform } from "react-native";

const { width, height } = Dimensions.get('window');

const GoalInput = (props) => {
    const [enteredGoalText, setEnteredGoalText] = useState('');
    const [photoUri, setPhotoUri] = useState(null);

    useEffect(() => {
        if (props.initialPhotoUri) {
            setPhotoUri(props.initialPhotoUri);
        }
    }, [props.initialPhotoUri]);

    const goalInputHandler = (enteredText) => {
        setEnteredGoalText(enteredText);
    }
    
    const addGoalHandler = () => {
        if (enteredGoalText.trim().length === 0) {
            return;
        }
        props.onAddGoal(enteredGoalText, photoUri);
        setEnteredGoalText('');
        setPhotoUri(null);
    }

    const openCamera = () => {
        props.onCancel();
        props.navigation.navigate('Camera');
    }

    return (
        <Modal 
            visible={props.visible}
            animationType="slide"
            transparent={true}
        >
            <KeyboardAvoidingView 
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.modalOverlay}
            >
                <View style={styles.inputContainer}>
                    <Text style={styles.title}>Yeni Fotoğraf Ekle</Text>
                    
                    {photoUri ? (
                        <View style={styles.photoContainer}>
                            <Image 
                                source={{ uri: photoUri }}
                                style={styles.photo}
                            />
                            <TouchableOpacity 
                                style={styles.removePhotoButton}
                                onPress={() => setPhotoUri(null)}
                            >
                                <Text style={styles.removePhotoText}>X</Text>
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <TouchableOpacity style={styles.photoButton} onPress={openCamera}>
                            <Text style={styles.photoButtonText}>Fotoğraf Çek</Text>
                        </TouchableOpacity>
                    )}
                    
                    <TextInput
                        onChangeText={goalInputHandler}
                        style={styles.textInput}
                        placeholder="Fotoğraf için açıklama yaz..."
                        placeholderTextColor="rgba(255,255,255,0.6)"
                        value={enteredGoalText}
                        multiline={true}
                        numberOfLines={3}
                    />
                    
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.cancelButton} onPress={props.onCancel}>
                            <Text style={styles.buttonText}>İptal</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity 
                            style={[styles.addButton, (!photoUri || enteredGoalText.trim().length === 0) ? styles.disabledButton : null]} 
                            onPress={addGoalHandler}
                            disabled={!photoUri || enteredGoalText.trim().length === 0}
                        >
                            <Text style={styles.buttonText}>Ekle</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.7)',
    },
    inputContainer: {
        width: width * 0.9,
        padding: 20,
        backgroundColor: '#08313a',
        borderRadius: 15,
        alignItems: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        maxHeight: height * 0.8,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 20,
    },
    textInput: {
        width: '100%',
        borderWidth: 2,
        borderColor: '#5cd85a',
        borderRadius: 10,
        padding: 12,
        color: 'white',
        fontSize: 16,
        maxHeight: 100,
        textAlignVertical: 'top',
        marginBottom: 15,
    },
    photoButton: {
        backgroundColor: '#5cd85a',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginBottom: 20,
    },
    photoButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    photoContainer: {
        position: 'relative',
        marginBottom: 20,
    },
    photo: {
        width: 200,
        height: 200,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#5cd85a',
    },
    removePhotoButton: {
        position: 'absolute',
        top: -10,
        right: -10,
        backgroundColor: 'red',
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    removePhotoText: {
        color: 'white',
        fontWeight: 'bold',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    cancelButton: {
        backgroundColor: '#ff6b6b',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
        flex: 1,
        marginRight: 10,
        alignItems: 'center',
    },
    addButton: {
        backgroundColor: '#5cd85a',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
        flex: 1,
        marginLeft: 10,
        alignItems: 'center',
    },
    disabledButton: {
        backgroundColor: '#90c99e',
        opacity: 0.7,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default GoalInput;