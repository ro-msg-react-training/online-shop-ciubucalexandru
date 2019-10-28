import React, { useState, useEffect } from 'react';
import './CarouselView.scss';
import RoundedButton from './RoundedButton/RoundedButton';

const CarouselView: React.FC = () => {

    const imageIndexes: number[] = [0, 1, 2, 3, 4];
    const images: string[] = [
        "https://image.ceneostatic.pl/data/products/55424289/i-apple-iphone-x-64gb-srebrny.jpg",
        "https://computermania.com.bd/wp-content/uploads/2018/07/asus_rog_strix_scar__dY7RE-720x720.jpg",
        "https://au-images.shop.samsung.com/medias/galaxy-S10-mob-category.png?context=bWFzdGVyfGltYWdl" +
            "c3wyODA3NTd8aW1hZ2UvcG5nfGltYWdlcy9oMGYvaDY5LzkxMjg0NDQ3NTU5OTgucG5nfGE2MDY0YzQ3MGNlOTk3YmVjNz" +
            "g5NTNkNzY2NGJiYmU0MTQ0MzgyNzcwYjQ1MjcwNGE0MDg1Mjg2NzFkYTQ2Nzg",
        "https://oyster.ignimgs.com/wordpress/stg.ign.com/2018/10/Deluxe-720x720.jpg",
        "https://oyster.ignimgs.com/wordpress/stg.ign.com/2015/01/71SbdTSMoeL._SL1200_-720x720.jpg" +
            "?fit=bounds&width=640&height=480",
    ];

    const [ currentIndex, setCurrentIndex ] = useState(0);
        
    useEffect(() => {
        const interval = setInterval(() => handleNextPhoto(), 3000);
        return () => clearInterval(interval);
    });

    function handleNextPhoto() {
        currentIndex >= 4 ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1);
    }

    function handlePreviousPhoto() {
        if (currentIndex <= 0) {
            setCurrentIndex(4);
        } else {
            setCurrentIndex(currentIndex - 1);
        }
    }

    const imageButtons = imageIndexes.map((value) => {
            return <RoundedButton imageIndex={value} currentIndex={currentIndex}
                    onClickEvent={(e) => setCurrentIndex(e)} text={""} key={value} />
    });

    return (
        <div className="rowFlex">
            <RoundedButton imageIndex={0} currentIndex={-1}
                onClickEvent={() => handlePreviousPhoto()}  text={"Prev"}/>
            <div className="centeredFlex">
                <div className="box imageContainer">
                    <figure className="image">
                        <img src={images[currentIndex]} alt={"Image " + currentIndex}/>
                    </figure>
                </div>
                <div className="field is-grouped is-grouped-centered">
                    {imageButtons}
                </div>
            </div>
            <RoundedButton imageIndex={0} currentIndex={-1}
                onClickEvent={() => handleNextPhoto()}  text={"Next"}/>
        </div>
    );
}

export default CarouselView;
