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
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Nombre:
                        <input type="text" name="nombre" value={this.state.nombre} onChange={this.handleInputChange} />
                    </label>
                    <fieldset style={{ border: '2px groove', margin: '5px', padding: '2px 5px' }}>
                        <legend>Autobuses</legend>
                        <input type="checkbox" name="" value="" /> - Conil - El Colorado - Cádiz <br></br>
                        <input type="checkbox" name="" value="" /> - Cádiz - Finca Alboreá <br></br>
                        <input type="checkbox" name="" value="" /> - Finca Alboreá - El Colorado - Cádiz <br></br>
                    </fieldset>
                    <fieldset style={{ border: '2px groove', margin: '5px', padding: '2px 5px' }}>
                        <legend>Menú</legend>
                        <input type="checkbox" name="" value="" /> - Vegetariano <br />
                        <input type="checkbox" name="" value="" /> - Celiaco <br />
                        <input type="checkbox" name="" value="" /> - Intolerancia - Indique cual <input type="text" name="" value="" /><br />
                        <input type="checkbox" name="" value="" /> - Alergias - Indique cual <input type="text" name="" value="" /><br />
                        <input type="checkbox" name="" value="" /> - Otros - <input type="text" name="" value="" /><br />
                    </fieldset>
                    <input type="submit" value="Enviar" />
                </form>
            </div>
        );
    }
}

export default () => {
    return (<Confirmaform />)
}