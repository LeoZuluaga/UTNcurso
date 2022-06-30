import "../styles/components/pages/NovedadesPage.css"
const NovedadesPage = (props) => {
    return (
        <main class="holder">
        <h2>Servicios</h2>
        <div class="servicio">
            <img src="img/nuevayork.jpg" alt=""/>
            <div class="info">
                <h4>Nueva York</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, doloremque quis ducimus esse illum dolores maxime iusto libero cupiditate temporibus magnam necessitatibus! Nisi inventore sapiente eveniet soluta, ducimus autem saepe!</p>
            </div>
        </div>
        <div class="servicio">
            <img src="img/tokyo.jpg" alt=""/>
            <div class="info">
                <h4>Tokio</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, doloremque quis ducimus esse illum dolores maxime iusto libero cupiditate temporibus magnam necessitatibus! Nisi inventore sapiente eveniet soluta, ducimus autem saepe!</p>
            </div>
        </div>
        <div class="servicio">
            <img src="img/paris.jpg" alt=""/>
            <div class="info">
                <h4>Paris</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, doloremque quis ducimus esse illum dolores maxime iusto libero cupiditate temporibus magnam necessitatibus! Nisi inventore sapiente eveniet soluta, ducimus autem saepe!</p>
            </div>
        </div>
    </main>
    );
}

export default NovedadesPage;