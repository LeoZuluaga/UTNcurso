import "../styles/components/pages/HomePage.css"
const HomePage = (props) => {
    return (
        <main class="holder">
        <div>
            <img src="img/isla.jpg" width="1000" height="450" alt=""/>
        </div>
        <div class="columnas">
            <section class="bienvenidos">
                <h2>Bienvenidos</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi ipsa eos facere beatae saepe! Sit reprehenderit obcaecati fugit rem accusamus saepe veritatis. Deserunt ab tempore ducimus quis debitis consectetur beatae!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dignissimos quibusdam voluptates excepturi, ut nisi provident consectetur repellat asperiores placeat quae, impedit quidem neque laudantium quam rerum ab! Quo, a.
                </p>
            </section>
            <section class="testimonios">
                <h2>Testimonios</h2>
                <div class="testimonio">
                    <span class="cita">Simplemente Excelente</span>
                    <span class="autor">Agustin Hernandez - herni.com</span>
                </div>

            </section>
        </div>

    </main>

    );
}

export default HomePage;