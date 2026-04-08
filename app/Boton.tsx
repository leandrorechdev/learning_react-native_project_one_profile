import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface BotonProps {
    title: string
    onPress: () => void
}

export default function Boton({ title, onPress } : BotonProps) {
    return (
        <TouchableOpacity
        style = {styles.boton}
        onPress={onPress}
        activeOpacity={0.7}
        >
            <Text style={styles.textoBoton}>{title}</Text>
            
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    boton: {
        backgroundColor: "#007AFF",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 20,
        elevation: 2,
        width: '100%' 
    },
    textoBoton: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },
});

