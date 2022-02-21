import { SafeAreaView, TouchableOpacity, View, Image, Text, ScrollView } from 'react-native';
import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { LinearGradient } from 'expo-linear-gradient';

import styles from '../styles';
import actionCreators from '../redux/moviesActions';



const Movie = ({ movie }: any) => {

    const dispatch = useDispatch();
    const { selectMovie } = bindActionCreators(actionCreators, dispatch)

    return (
        <LinearGradient style={{ flex: 1}} colors={['#fb9b9b', '#babaff']}>
            <SafeAreaView style={{ flex: 1}}>
                <ScrollView style={[styles.page]}>

                    <TouchableOpacity onPress={() => selectMovie(null)} style={styles.btnBack}>
                        <Text style={styles.btnBackText}>👈</Text>
                    </TouchableOpacity>

                    <View style={{ ...styles.row, justifyContent: "space-evenly" }}>
                        <Image source={{ uri: movie.Poster }} style={[styles.searchImage, styles.movieImage]} />                
                        <View>
                            <Text style={styles.searchTitle}>{movie.Title}</Text>
                            <Text>by {movie.Director}</Text>
                        </View>
                    </View>

                    <View style={styles.content}>
                        <Text style={styles.header}>Ratings ⭐️</Text>
                        {movie.Ratings.map((rating: any, i: number) => <View key={i} style={{ ...styles.row, marginVertical: 8 }}>
                            <Text style={styles.ratingSource}>{rating.Source}: </Text>
                            <Text style={styles.ratingValue}>{rating.Value}</Text>
                            </View>
                        )}
                        
                    </View>
                    
                    <View style={styles.content}>
                        <Text style={styles.header}>Plot 📝</Text>
                        <Text style={styles.description}>{movie.Plot}</Text>
                    </View>

                    <View style={styles.content}>
                        <Text style={styles.header}>Actors 👦🏻👩🏻</Text>
                        <Text style={styles.description}>{movie.Actors}</Text>
                    </View>

                    <View style={styles.content}>
                        <Text style={styles.header}>Awards 🏆</Text>
                        <Text style={styles.description}>{movie.Awards}</Text>
                    </View>

                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    );
};

export default Movie;
