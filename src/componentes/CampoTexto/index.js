import './CampoTexto.css';



const CampoTexto = (props) => {

    const placeholderModificado = `${props.placeholder}...`;

    const Digitar = (evento) => {
        props.Alterado(evento.target.value);
    }


    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={Digitar} required={props.obrigatorio} placeholder={props.placeholder} type="text" />
        </div>
    );
}

export default CampoTexto;