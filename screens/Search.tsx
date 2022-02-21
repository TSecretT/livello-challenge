import { View, Text, TextInput, SafeAreaView, FlatList, Image } from 'react-native';
import React from 'react';

import api from '../api';
import { Movie } from '../types';
import styles from '../styles';

let timer: any;

const Home = () => {
    const [search, setSearch] = React.useState<string>();
    const [movies, setMovies] = React.useState<Movie[]>();
    const [searching, setSearching] = React.useState<boolean>(false);

    const onSearch = async (name: string) => {
        setSearch(name);
        clearTimeout(timer);
        
        if (!name) return;
        
        timer = setTimeout(async () => {
            setSearching(true);
            const result: Movie[] = await api.searchMovie(name);
            const ids: string[] = result.map((movie: Movie) => movie.imdbID)
            const movies: any = await api.parseMoviesDetails(ids);
            setMovies(movies);
            setSearching(false);
        }, 1000)        
    }

    const formatMovieType = (movieType: string) => movieType.slice(0, 1).toUpperCase() + movieType.slice(1)

    return (
        <SafeAreaView style={styles.page}>

            <TextInput
                style={styles.input}
                onChangeText={onSearch}
                value={search}
                placeholder="Search movie by title..."
            />

            {movies && movies.length? <FlatList
                data={movies}
                renderItem={(item: any) => {
                    const movie: Movie = item.item;
                    return <View style={[styles.searchCard, { opacity: searching? 0.5 : 1 }]}>
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
                        </View>
                }}
                keyExtractor={item => item.imdbID}
            />
            :
            <Text style={styles.textNoMoviesFound}>No movies found</Text>
            }

        </SafeAreaView>
    );
};

export default Home;
