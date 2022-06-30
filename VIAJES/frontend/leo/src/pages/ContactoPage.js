import "../styles/components/pages/ContactoPage.css"
const ContactoPage = (props) => {
    return (
        <main class="holder contacto">
        <div>
            <h2>Contacto Rápido</h2>
            <form action="" method="" class="formulario">
                <p>
                    <label for="nombre">Nombre</label>
                    <input type="text" name=""/>
                </p>
                <p>
                    <label for="email">Email</label>
                    <input type="text" name=""/>
                </p>
                <p>
                    <label for="telefono">Telefono</label>
                    <input type="text" name=""/>
                </p>
                <p>
                    <label for="mensaje">Mensaje</label>
                    <textarea name=""></textarea>
                </p>
                <p>
                    <input class="sub" type="submit" value="Enviar"/>
                </p>

                
            </form>
        </div>
        <div class="datos">
            <h2>Otras vias de comunicación</h2>
            <p>Tambien puede contactarse con nosotros usando los siguientes</p>
            <ul>
                <li>Telefono: 1162379179</li>
                <li>Email: leoneletem@gmail.com</li>
                <li>Facebook:</li>
                <li>Twitter</li>
                <li>Skype</li>
            </ul>
        </div>

    </main>
    );
}

export default ContactoPage;