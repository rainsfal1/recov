import './FormLoader.css'; // Import the CSS file

export const FormLoader = ({ top = '1.7rem' }) => {
    return (
        <div className="lds-ellipsis" style={{ top }}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}