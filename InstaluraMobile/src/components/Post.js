import React, { Component } from 'react';
import {
    Text,
    Image,
    Dimensions,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from 'react-native';

const width = Dimensions.get('screen').width;

export default class Post extends Component {

    constructor(props) {
        super(props);
        this.state = {
            foto: this.props.foto,
            valorComentario: ''
        }
    }

    carregaIcon(liked) {
        return liked ? require('../../resources/images/liked.png') : require('../../resources/images/heart.png')
    }

    like() {
        const { foto } = this.state;
        let novaLista = [];
        if (!foto.liked) {
            novaLista = [
                ...foto.likers,
                { login: 'meuUsuario' }
            ]
        } else {
            novaLista = foto.likers.filter(liker => {
                return liker.login !== 'meuUsuario'
            })
        }
        const fotoAtt = {
            ...foto,
            liked: !foto.liked,
            likers: novaLista
        }
        this.setState({ foto: fotoAtt })
    }

    exibeLikes(likers) {
        if (likers.length <= 0)
            return;
        return (
            <Text style={styles.like}>{likers.length} {likers.length > 1 ? 'curtidas' : 'curtida'} </Text>
        )
    }

    exibeLegenda(foto) {
        if (foto.comentario === '')
            return;
        return (
            <View style={styles.comentario}>
                <Text style={styles.userComent}>{foto.loginUsuario}</Text>
                <Text>{foto.comentario}</Text>
            </View>
        )
    }

    addComentario() {
        if (this.state.valorComentario === '')
            return

        const novaLista = [...this.state.foto.comentarios, {
            id: this.state.valorComentario,
            login: 'meuUsuario',
            texto: this.state.valorComentario
        }];

        const fotoAtt = {
            ...this.state.foto,
            comentarios: novaLista
        }

        this.setState({ foto: fotoAtt, valorComentario: '' });
        this.inputComentario.clear();
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

                    {foto.comentarios.map(comentario =>
                        <View style={styles.comentario} key={comentario.id}>
                            <Text style={styles.tituloComentario}>{comentario.login}</Text>
                            <Text>{comentario.texto}</Text>
                        </View>
                    )}

                    <View style={styles.novoComentario}>
                        <TextInput style={styles.input}
                            placeholder="Adicione um comentário"
                            ref={input => this.inputComentario = input}
                            onChangeText={texto => this.setState({ valorComentario: texto })} />
                        <TouchableOpacity onPress={this.addComentario.bind(this)}>
                            <Image style={styles.icone}
                                source={require('../../resources/images/send.png')} />
                        </TouchableOpacity>
                    </View>

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
    tituloComentario: {
        fontWeight: 'bold',
        marginRight: 5
    },
    userComent: {
        fontWeight: 'bold',
        marginRight: 5
    },
    input: {
        flex: 1,
        height: 40
    },
    icone: {
        width: 20,
        height: 20
    },
    novoComentario: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
});
