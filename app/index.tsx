import { useState } from "react";
import {
    Alert,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Boton from "./Boton"

export default function Perfil() {
    const [nombre, setNombre] = useState("Leandro Rech");
    const [bio, setBio] = useState("Aprendiendo React Native");

    const saludarUsuario = (nombre: string) => {
        Alert.alert(`Te damos la bienvenida ${nombre}`);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <Text style={styles.titulo}>Mi Perfil</Text>

                <View style={styles.header}>
                    <Image
                        source={{
                            uri: "https://cunadelfutsal.com/wp-content/uploads/2019/10/Leandro-Rech-arquero-Banco.png",
                        }}
                        style={styles.avatar}
                    />
                    <Text style={styles.nombreDisplay}>{nombre}</Text>
                    <Text style={styles.bioDisplay}>{bio}</Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.sectionTitle}>Editar Información</Text>

                    <Text style={styles.label}>Nombre</Text>
                    <TextInput
                        style={styles.input}
                        value={nombre}
                        onChangeText={setNombre}
                        placeholder="Nombre"
                    />

                    <Text style={styles.label}>Biografía</Text>
                    <TextInput
                        style={[styles.input, styles.textArea]}
                        value={bio}
                        onChangeText={setBio}
                        placeholder="Breve descripción sobre vos..."
                        multiline={true}
                        numberOfLines={3}
                    />
                </View>
                <View>
                    <Boton title="Recibe tu saludo" onPress={() => saludarUsuario(nombre)}></Boton>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    scrollContent: {
        paddingBottom: 40,
        alignItems: "center",
    },
    titulo: {
        fontWeight: "700",
        fontSize: 32,
        marginVertical: 20,
        color: "#333",
    },
    header: {
        alignItems: "center",
        marginBottom: 30,
    },
    avatar: {
        width: 140,
        height: 140,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: "#f0f0f0",
    },
    nombreDisplay: {
        fontWeight: "600",
        fontSize: 24,
        marginTop: 15,
    },
    bioDisplay: {
        fontSize: 16,
        color: "#666",
        textAlign: "center",
        paddingHorizontal: 20,
    },
    card: {
        width: "90%",
        backgroundColor: "#fcfcfc",
        padding: 20,
        borderRadius: 15,
        elevation: 3, // Sombra en Android
        shadowColor: "#000", // Sombra en iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "600",
        marginBottom: 20,
        color: "#444",
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
        paddingBottom: 5,
    },
    label: {
        fontWeight: "600",
        marginBottom: 8,
        color: "#555",
        fontSize: 14,
    },
    input: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#e0e0e0",
        padding: 12,
        borderRadius: 8,
        marginBottom: 20,
        fontSize: 16,
    },
    textArea: {
        height: 80,
        textAlignVertical: "top",
    },
});
