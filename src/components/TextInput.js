import Classes from '../styles/TextInput.module.css';
export default function TextInput({ icon, ...rest }) {
    return (<div className={Classes.textInput}>
        <input {...rest} />
        <span className="material-icons-outlined"> {icon} </span>
    </div>);
}