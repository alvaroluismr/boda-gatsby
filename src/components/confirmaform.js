import React from "react"

class Confirmaform extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            nombre: ''
        };
    }

    handleInputChange = event => {
        const target = event.target
        const value = target.value
        const name = target.name
    
        this.setState({
          [name]: value,
        })
      }

      handleSubmit = event => {
        event.preventDefault();
        alert(`Mandao!`);
      }

    render() {
        return (
            <div style={{ backgroundColor: '#F7F7F7' }}>
                <form /*onSubmit={this.handleSubmit}*/ name="confirmacion" method="POST" netlify >
                    <label>
                        Nombre:
                        <input type="text" name="nombre" value={this.state.nombre} onChange={this.handleInputChange} />
                    </label>
                    <fieldset style={{ border: '2px groove', margin: '5px', padding: '2px 5px' }}>
                        <legend>Autobuses</legend>
                        <input type="checkbox" name="bus1" value="bus1" /> - Conil - El Colorado - Cádiz <br></br>
                        <input type="checkbox" name="bus2" value="bus2" /> - Cádiz - Finca Alboreá <br></br>
                        <input type="checkbox" name="bus3" value="bus3" /> - Finca Alboreá - El Colorado - Cádiz <br></br>
                    </fieldset>
                    <fieldset style={{ border: '2px groove', margin: '5px', padding: '2px 5px' }}>
                        <legend>Menú</legend>
                        <input type="checkbox" name="menu1" value="Vegano" /> - Vegano <br />
                        <input type="checkbox" name="menu2" value="Celiaco" /> - Celiaco <br />
                        <input type="checkbox" name="menu3" value="Intolerante" /> - Intolerancia - Indique cual <input type="text" name="menu3opt" value="" /><br />
                        <input type="checkbox" name="menu4" value="Alergia" /> - Alergias - Indique cual <input type="text" name="menu3opt" value="" /><br />
                        <input type="checkbox" name="menu5" value="Otros" /> - Otros - <input type="text" name="menu3opt" value="" /><br />
                    </fieldset>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        );
    }
}

export default () => {
    return (<Confirmaform />)
}