import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    page: {
        marginBottom: 100,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    searchCard: {
        borderRadius: 8,
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        backgroundColor: "#42a7f5",
    },
    searchCardContent: {
        display: "flex",
        flexDirection: "column",
        flex: 1,
    },
    searchImage: {
        width: 50,
        height: 100,
        borderRadius: 8,
        margin: 4,
        marginRight: 8
    },
    searchTitle: {
        color: "black",
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "left",
        maxWidth: "90%",
    },
    textNoMoviesFound: {
        width: "100%",
        textAlign: "center",
        fontSize: 24,
        marginTop: 100
    },
    movieTypeText: {
        color: "white"
    },
    row: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        flex: 1
    }
});