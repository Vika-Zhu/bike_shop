export function ModalHome(){
    return(   
        <div className="modal-home">
        <div className="modal-home__container">
            <div className="modal-home__content">
                <button className="modal__close modal-home__close svg"></button>
                <div className="block__start start">
                    <div className="start__items">
                        <div className="start__item item-start_1">
                            <div className="item__img">
                                <img src="img/home/vote-table.png" alt=""/>
                            </div>
                            <div className="start__btn">
                                <a className="btn" href="">VOTING</a>
                            </div>
                        </div>
                        <div className="start__item item-start_2">
                            <div className="item__img">
                                <img src="img/home/pet-breeds.png" alt=""/>
                            </div>
                            <div className="start__btn">
                                <a className="btn" href="">BREEDS</a>
                            </div>
                        </div>
                        <div className="start__item item-start_3">
                            <div className="item__img">
                                <img src="img/home/images-search.png" alt=""/>
                            </div>
                            <div className="start__btn">
                                <a className="btn" href="">GALLERY</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>)
}