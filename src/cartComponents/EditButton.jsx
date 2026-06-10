import React from "react";

function EditButton({ id, onEdit}) {
    return(
        <button className="button-edit" onClick={() => onEdit(id)}>
            Edit Data
        </button>
    )
}

export default EditButton