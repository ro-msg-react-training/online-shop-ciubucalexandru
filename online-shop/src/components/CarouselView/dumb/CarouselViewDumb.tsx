import React from 'react';
import RoundedButton from '../RoundedButton/RoundedButton';
import { ZERO, INDEX_NOT_NEEDED } from '../../../util/util';
import "./CarouselViewDumb.scss";

interface ICarouselViewDumbProps {
    currentIndex: number;
    images: string[];
    imageButtons: any[];
    handlePreviousPhoto: () => void;
    handleNextPhoto: () => void;
}

const CarouselViewDumb: React.FC<ICarouselViewDumbProps> = (props: ICarouselViewDumbProps) => {
    return (
        <div className="rowFlex">
            <RoundedButton imageIndex={ZERO} currentIndex={INDEX_NOT_NEEDED}
                onClickEvent={() => props.handlePreviousPhoto()}  text={"Prev"}/>
            <div className="centeredFlex">
                <div className="box imageContainer">
                    <figure className="image">
                        <img src={props.images[props.currentIndex]} alt={"Image " + props.currentIndex}/>
                    </figure>
                </div>
                <div className="field is-grouped is-grouped-centered">
                    {props.imageButtons}
                </div>
            </div>
            <RoundedButton imageIndex={ZERO} currentIndex={INDEX_NOT_NEEDED}
                onClickEvent={() => props.handleNextPhoto()}  text={"Next"}/>
        </div>
    );
}

export default CarouselViewDumb;
