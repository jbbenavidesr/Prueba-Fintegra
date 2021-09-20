function AgePredictor() {
    return (
        <main>
            <div className="wrapper">
                <form>
                    <div>
                        <label for="names">
                            Nombres (Si es más de uno, separalos con comas)
                        </label>
                        <input type="text" name="names" />
                    </div>
                    <div>
                        <label for="country">País (En inglés)</label>
                        <input type="text" name="country" />
                    </div>
                    <button className="btn">Calcular edad</button>
                </form>
                <hr />
            </div>
            <div className="wrapper"></div>
        </main>
    );
}

export default AgePredictor;
