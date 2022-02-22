import { View, Text, TextInput, SafeAreaView, FlatList, Image, TouchableOpacity, ActivityIndicator, Keyboard } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';


import api from '../api';
import { Movie } from '../types';
import styles from '../styles';
import actionCreators from '../redux/moviesActions';

let timer: any;

const Home = () => {
    const [search, setSearch] = React.useState<string>();
    const [searching, setSearching] = React.useState<boolean>(false);
    const movies = useSelector((state: any) => state.movies);
    const dispatch = useDispatch();

    const { selectMovie, selectMovies } = bindActionCreators(actionCreators, dispatch)

    const onSearch = async (name: string) => {
        setSearch(name);
        clearTimeout(timer);
        
        if (!name) return;
        
        timer = setTimeout(async () => {
            setSearching(true);
            Keyboard.dismiss();
            const result: Movie[] = await api.searchMovie(name);
            const ids: string[] = result.map((movie: Movie) => movie.imdbID)
            const movies: any = await api.parseMoviesDetails(ids);
            setSearching(false);
            selectMovies(movies);
        }, 1000)        
    }

    const formatMovieType = (movieType: string) => movieType.slice(0, 1).toUpperCase() + movieType.slice(1)

    return (
        <LinearGradient style={{ flex: 1 }} colors={['#D3CCE3', '#E9E4F0']}>
        
            <SafeAreaView style={styles.page}>
                <TextInput
                    style={styles.input}
                    onChangeText={onSearch}
                    value={search}
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholder="Search movie by title..."
                />

                {searching? <ActivityIndicator />
                :movies && movies.length? <FlatList
                    data={movies}
                    renderItem={(item: any) => {
                        const movie: Movie = item.item;
                        return <LinearGradient style={[styles.shadowContainer, { margin: 8, borderRadius: 8 }]} colors={['#8EC5FC', '#E0C3FC']} >
                                <TouchableOpacity onPress={() => selectMovie(movie)} style={[styles.searchCard, { opacity: searching? 0.5 : 1 }]}>
                                    <Image source={{ uri: movie.Poster }} style={styles.searchImage} />
                                    <View style={styles.searchCardContent}>
                                        <Text style={styles.searchTitle}>{movie.Title}</Text>
                                        <View style={styles.row}>  
                                            <Text style={styles.movieTypeText}>{formatMovieType(movie.Type)}</Text>
                                            <Text>⭐️ {movie.imdbRating}</Text>
                                        </View>
                                        <View style={styles.row}>  
                                            <Text>{movie.Genre}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </LinearGradient>
                    }}
                    keyExtractor={item => item.imdbID}
                />
                :movies && !movies.length? <Text style={styles.textNoMoviesFound}>No movies found</Text>
                :<Text style={styles.textNoMoviesFound}>Enter the movie title 👆</Text>
                }

            </SafeAreaView>
        </LinearGradient>
    );
};

export default Home;
