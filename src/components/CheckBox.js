export default function CheckBox({ text, className, ...rest }) {
    return (
        <label className={className}>
            <input {...rest} />
            <span>{text}</span>
        </label>
    );

}