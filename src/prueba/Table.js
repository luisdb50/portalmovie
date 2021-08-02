import React from "react";

export class Table extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            elements: [
                "Luis", 
                "Davila", 
                "04163670629", 
                "luisdanieldb4@gmail.com",
                "Calle 10",
                "20"
            ]
        }
    }



    render(){

        let ele = this.state.elements;
        return(
            <div className="table_vp">
                <div className="table_content">
                    <p>
                        Lorem Ipsum es simplemente el texto de relleno de las imprentas 
                        y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar 
                        de las industrias desde el año 1500, cuando un impresor (N. del T. persona 
                        que se dedica a la imprenta) desconocido usó una galería de textos y los 
                        mezcló de tal manera que logró hacer un libro de textos especimen. No sólo 
                        sobrevivió 500 años, sino que tambien ingresó como texto de relleno en 
                        documentos electrónicos, quedando esencialmente igual al original. 
                        Fue popularizado en los 60s con la creación de las hojas "Letraset", las 
                        cuales contenian pasajes de Lorem Ipsum, y más recientemente con software 
                        de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones 
                        de Lorem Ipsum.
                    </p>
                    <img 
                        src="https://i.pinimg.com/originals/6c/2e/07/6c2e07660c6fcf90d6a362ced622e1ad.png" 
                        className="img">
                    </img>
                </div>
                <div className="table_div">
                    <div className="table_modal">
                        <div className="modal_div">
                            <div className="modal_content">
                                <p className="b1">Nombre</p>
                                <p className="b1">Apellido</p>
                                <p className="b1">Celular</p>
                                <p className="b1">Correo</p>
                                <p className="b1">Direccion</p>
                                <p className="b1">Edad</p>

                                <p className="b2">{ele[0]}</p>
                                <p className="b2">{ele[1]}</p>
                                <p className="b2">{ele[2]}</p>
                                <p className="b2">{ele[3]}</p>
                                <p className="b2">{ele[4]}</p>
                                <p className="b2">{ele[5]}</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        );
    }
}