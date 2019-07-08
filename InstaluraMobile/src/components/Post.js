import React, { Component } from 'react';
import {
    Text,
    Image,
    Dimensions,
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

const width = Dimensions.get('screen').width;

export default class Post extends Component {

    constructor(props) {
        super(props);
        this.state = {
            foto: { ...this.props.foto, likers: [{}] }
        }
    }

    carregaIcon(liked) {
        return liked ? require('../../resources/images/liked.png') : require('../../resources/images/heart.png')
    }

    like() {
        const fotoAtt = {
            ...this.state.foto,
            liked: !this.state.foto.liked
        }
        this.setState({
            foto: fotoAtt
        })
    }

    exibeLikes(likers) {
        if (likers.length <= 0)
            return;
        return (
            <Text style={styles.like}>{likers.length} {likers.length > 1 ? 'curtidas' : 'curtida'} </Text>
        )
    }

    exibeLegenda(foto) {
        if(foto.comentario === '')
            return;
        return (
            <View style={styles.comentario}>
                <Text style={styles.userComent}>{foto.loginUsuario}</Text>
                <Text>{foto.comentario}</Text>
            </View>
        )
    }

    render() {

        const { foto } = this.state;

        return (
            <View>

                <View style={styles.cabecalho}>
                    <Image source={{ uri: foto.urlPerfil }} style={styles.fotoDePerfil} />
                    <Text>{foto.loginUsuario}</Text>
                </View>

                <Image source={{ uri: foto.urlFoto }} style={styles.foto} />

                <View style={styles.rodape}>

                    <TouchableOpacity onPress={this.like.bind(this)}>
                        <Image style={styles.btnLike} source={this.carregaIcon(foto.liked)} />
                    </TouchableOpacity>

                    {this.exibeLikes(foto.likers)}
                    {this.exibeLegenda(foto)}

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    cabecalho: {
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    fotoDePerfil: {
        marginRight: 10,
        borderRadius: 20,
        width: 40,
        height: 40
    },
    foto: {
        width,
        height: width
    },
    btnLike: {
        width: 30,
        height: 30,
        marginBottom: 5
    },
    rodape: {
        margin: 10
    },
    like: {
        fontWeight: 'bold',
        marginBottom: 5
    },
    comentario: {
        flexDirection: 'row'
    },
    userComent: {
        fontWeight: 'bold',
        marginRight: 5
    }
});
