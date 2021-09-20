function Intro(props) {
    return (
        <main className="flow">
            <div className="wrapper">
                <p>
                    Haciendo uso de los servicios de{" "}
                    <a href="https://agify.io/">agify.io</a>, esta aplicación
                    predice la edad de una persona a partir de su nombre.
                </p>
                <p>
                    Al hacer click en el botón al final de esta página, accederá
                    a un formulario en el que puede poner uno o más nombres
                    separados por comas. Si lo desea, puede también añadir un
                    código de país para hacer más precisa la predicción. Al
                    enviar el formulario, tendrá a su disposición una lista en
                    la que se indiquan los nombres que mandó y sus respectivas
                    edades. ¡Espero que sea de su agrado!
                </p>
                <button className="btn" onClick={props.clickHandler}>
                    Seguir al formulario...
                </button>
            </div>
        </main>
    );
}

export default Intro;
