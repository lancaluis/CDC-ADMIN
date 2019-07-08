import React from 'react';
import './styles.css';

class SearchBar extends React.Component {

    onInputChange(event) {
        
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Pesquisar imagens</label>
                        <input type="text" onChange={this.onInputChange} 
                               placeholder="Filmes, plantas, comidas..." />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;