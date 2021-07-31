import React from "react";

export class Formu extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            fistname: "",
            lastname: "",
            cel: "",
            email: "",
            direction: "",
            age: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){

        const value = event.target.value;
        const name = event.target.name

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event){

        alert(
            this.state.fistname + " " + this.state.lastname + 
            " tus cedula es: " + this.state.cel + 
            ", tu correo es: " + this.state.email +
            ", tu direccion: " + this.state.direction +
            ", y tu edad es: " + this.state.age
        );
        event.preventDefault();
    }

    render(){

        let st = this.state

        return(
            <form className="form" onSubmit={this.handleSubmit}>
                <label> 
                    Nombre: 
                    <input 
                        type="text" 
                        value={st.fistname} 
                        onChange={this.handleChange}
                        name="fistname"
                        required
                    />
                </label>
                <label> 
                    Apellido: 
                    <input 
                        type="text" 
                        value={st.lastname} 
                        onChange={this.handleChange}
                        name="lastname"
                        required
                    />
                </label>
                <label> 
                    Celular: 
                    <input 
                        type="tel" 
                        value={st.cel} 
                        onChange={this.handleChange}
                        name="cel"
                        required
                    />
                </label>
                <label> 
                    Correo: 
                    <input 
                        type="email" 
                        value={st.email} 
                        onChange={this.handleChange}
                        name="email"
                        required
                    />
                </label>
                <label> 
                    Dirección: 
                    <input 
                        type="text" 
                        value={st.direction} 
                        onChange={this.handleChange}
                        name="direction"
                        required
                    />
                </label>
                <label> 
                    Edad: 
                    <input 
                        type="number" 
                        value={st.age} 
                        onChange={this.handleChange}
                        name="age"
                        required
                    />
                </label>
                <input type="submit" value="Enviar" />
            </form>
        );
    }
}