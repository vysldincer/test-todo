import React from "react";
import '../App.css';

const Form = (props) => {
    return (
        
            <form>
                <label>Yapılacak İş</label>
                <div>
                    <input value={props.textValue} onChange={props.handleChangeText} type="text" name="name" />
                    <button onClick={props.handleSaveText} type="button">Ekle</button>
                </div>

            </form>
        
    )
}

export default Form;