export default function CheckBox({ text, ...rest }) {
    return (
        <label>
            <input {...rest} />
            <span>{text}</span>
        </label>
    );

}