import './footer.css';

const Rodape = (props) => {
    return (
        <footer className='footer'>
            <div className='info'>
                <a href="https://www.linkedin.com/in/inácio-kunz-b6366034b/"><img src="/imagens/lk.png" alt="Logo do Organo" /></a>
                <a href="https://github.com/IK-2006"><img src="/imagens/git.png" alt="Logo do Organo" /></a>
                <a href="https://www.instagram.com/inaciokunz/"><img src="/imagens/ig.png" alt="Logo do Organo" /></a>
            </div>
            <div className='logo'>
                <img src="/imagens/logo.png" alt="Logo do Organo" />
            </div>
            <div className='desenvolvedor'>
            <p>Desenvolvido por Inácio dos Santos Kunz</p>
            </div>
        </footer>);
}

export default Rodape;