import React, {useState, useEffect} from "react";
import { View, StyleSheet, Text, FlatList, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Platform } from "react-native";
import GoalItem from '../components/GoalItem';
import GoalInput from "../components/GoalInput";

const GoalsList = ({ navigation, route }) => {
    const [modalIsVisible, setModalVisible] = useState(false);
    const [courseGoals, setCourseGoals] = useState([]);
    const [photoUri, setPhotoUri] = useState(null);

    useEffect(() => {
        if (route.params?.photoUri) {
            setPhotoUri(route.params.photoUri);
            setModalVisible(true);
        }
    }, [route.params?.photoUri]);

    const startAddGoalHandler = () => {
        setModalVisible(true);
    }
    
    const endAddGoalHandler = () => {
        setModalVisible(false);
        setPhotoUri(null);
    }

    const addGoalHandler = (enteredGoalText, photoUri) => {
        setCourseGoals(currentCourseGoals => [
            {text: enteredGoalText, id: Math.random().toString(), photoUri},
            ...currentCourseGoals,
        ]);
        endAddGoalHandler();
    }

    const deleteItemHandler = (id) => {
        setCourseGoals(currentCourseGoals => {
            return currentCourseGoals.filter((goal) => goal.id !== id);
        });
    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>FOTOĞRAFLARIM</Text>
                <TouchableOpacity 
                    style={styles.addButton}
                    onPress={startAddGoalHandler}
                >
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
            </View>

            <GoalInput 
                visible={modalIsVisible}
                onAddGoal={addGoalHandler}
                onCancel={endAddGoalHandler}
                navigation={navigation}
                initialPhotoUri={photoUri}
            />

            {courseGoals.length > 0 ? (
                <FlatList 
                    data={courseGoals}
                    renderItem={(itemData) => {
                        return (
                            <GoalItem 
                                text={itemData.item.text}
                                id={itemData.item.id}
                                photoUri={itemData.item.photoUri}
                                onDeleteItem={deleteItemHandler}
                            />
                        );
                    }}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.listContent}
                />
            ) : (
                <View style={styles.emptyContainer}>
                    <Text style={styles.emptyText}>Henüz fotoğraf eklemediniz.</Text>
                    <Text style={styles.emptySubText}>Yeni bir fotoğraf eklemek için + butonuna dokunun.</Text>
                </View>
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: '#08313a',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    headerText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
    },
    addButton: {
        backgroundColor: '#5cd85a',
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButtonText: {
        fontSize: 28,
        color: 'white',
        fontWeight: 'bold',
        marginTop: -2,
    },
    listContent: {
        paddingVertical: 10,
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 40,
    },
    emptyText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#555',
        textAlign: 'center',
    },
    emptySubText: {
        marginTop: 10,
        fontSize: 14,
        color: '#888',
        textAlign: 'center',
    }
});

export default GoalsList;