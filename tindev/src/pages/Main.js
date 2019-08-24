import React, { useState, useEffect } from 'react';
import { Text, 
    View,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

import logo from '../assets/logo.png';
import like from '../assets/like.png';
import dislike from '../assets/dislike.png';
import api from '../services/api.js';

export default Main = ( { navigation } ) => {
    const id = navigation.getParam('user');
    const [users, setUsers] = useState([]); 
    console.log(id);
    
    useEffect(() => {
        async function loadUsers() {
            const response = await api.get('/devs', {
                headers: {user: id}
            });

           setUsers(response.data); 
        }
    
        loadUsers();
    }, [id]);

    async function handleLike(id){
     await api.post(`/devs/${id}/likes`, null, {
        headers: {user: id}
     });

     setUsers(users.filter(user => user._id !== id));
    }

    async function handleDislike(id){
     await api.post(`/devs/${id}/dislikes`, null, {
        headers: {user: id}
     });

     setUsers(users.filter(user => user._id !== id));
    }
    return(
        <View style={styles.container}>
            <Image style={styles.logo} source={logo} />
            <View style={styles.cardContainer}>
                { users.map((user, index) => (
                    <View key={user._id} style={[styles.card, { zIndex: user.length - index }]}>
                        <Image style={styles.avatar} source={ { uri: user.avatar } } />
                        <View style={styles.footer}>
                            <Text style={styles.name}>{user.name}</Text>
                            <Text style={styles.bio} numberOfLines={3}>{user.bio}</Text>
                        </View>
                    </View>
                )) }
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button}>
                    <Image source={dislike} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Image source={like} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    logo: {
        marginTop: 10,
    },
    container: {
        backgroundColor: '#f5f5f5',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    cardContainer: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        maxHeight: 500,
    },

    card: {
       borderWidth: 1,
       borderColor: '#DDD',
       borderRadius: 8,
       margin: 30,
       overflow: 'hidden',
       position: 'absolute',
       top: 0,
       bottom: 0,
       left: 0,
       right: 0,
       elevation: 2 
    },

    avatar: {
        flex: 1,
        height: 200,
    },

    footer: {
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 20
    },

    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333'
    },

    bio: {
        fontSize: 14,
        color: '#999',
        marginTop: 5,
        lineHeight: 18,
    },

    buttonsContainer: {
        marginBottom: 30,
        flexDirection: 'row'
    },

    button: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        elevation: 2,
        //Only IOS
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: 2,
        }
    },
});