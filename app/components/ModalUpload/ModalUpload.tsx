export function ModalUpload(){
    return(   
    <div className="modal">
        <div className="modal__container">
            <div className="modal__content">
                <button className="modal__close svg"></button>
                <h2 className="modal__title">Upload a .jpg or .png Cat Image</h2>
                <p className="modal__text">Any uploads must comply with the <span className="red-text">upload guidelines</span> or face deletion.</p>
                <div className="modal__upload-window upload__window">
                    <p className="upload__window-instruction"><span className="bold-text">Drag here</span> your file or <span className="bold-text">Click here </span>to upload</p>
                </div>
                <p className="modal__text">No file selected</p>
                <button className="upload__btn btn">UPLOAD PHOTO</button>
                <div className="upload__status upload__status-success">Thanks for the Upload - Cat found!</div>
                <div className="upload__status upload__status-error">No Cat found - try a different one</div>
            </div>
        </div>
    </div>)
}