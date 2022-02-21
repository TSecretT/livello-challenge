import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    page: {
        flex: 1,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    searchCard: {
        padding: 8,
        display: "flex",
        flexDirection: "row",
    },
    searchCardContent: {
        display: "flex",
        flexDirection: "column",
        flex: 1,
    },
    shadowContainer: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
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
        maxWidth: "70%",
    },
    textNoMoviesFound: {
        width: "100%",
        textAlign: "center",
        fontSize: 24,
        marginTop: 100
    },
    movieTypeText: {
        color: "rgb(50, 50, 50)"
    },
    row: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 4
    },
    movieCard: {
        height: "auto",
        borderRadius: 8,
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        backgroundColor: "pink",
    },
    movieImage: {
        width: "30%",
        height: 170,
    },
    content: {
        padding: 16,
        marginVertical: 16
    },
    header: {
        fontWeight: "bold",
        color: "black",
        fontSize: 24,
        marginBottom: 8
    },
    description: {
        color: "rgb(20, 20, 20)",
    },
    btnBack: {
        width: 60,
        padding: 8,
        margin: 8,
    },
    btnBackText: {
        width: "100%",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 40
    },
    ratingSource: {
        fontWeight: "600",
    },
    ratingValue: {
        fontWeight: "bold",
        fontSize: 18
    }
});