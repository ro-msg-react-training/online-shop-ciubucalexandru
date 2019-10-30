import React, { useState, useEffect } from 'react';
import RoundedButton from '../RoundedButton/RoundedButton';
import { ZERO, CAROUSEL_INTERVAL_CHANGE } from '../../../util/util';
import CarouselViewDumb from '../dumb/CarouselViewDumb';

const CarouselViewSmart: React.FC = () => {

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

    const imageIndexes: number[] = initializeImageIndexes(images.length);
    const [ currentIndex, setCurrentIndex ] = useState(ZERO);
        
    useEffect(() => {
        const interval = setInterval(() => handleNextPhoto(), CAROUSEL_INTERVAL_CHANGE);
        return () => clearInterval(interval);
    });

    const handleNextPhoto = (): void => {
        currentIndex >= images.length - 1 ? setCurrentIndex(ZERO) : setCurrentIndex(currentIndex + 1);
    }

    const handlePreviousPhoto = (): void => {
        currentIndex <= ZERO ? setCurrentIndex(images.length - 1) : setCurrentIndex(currentIndex - 1);
    }

    const imageButtons = imageIndexes.map((value) => {
            return <RoundedButton imageIndex={value} currentIndex={currentIndex}
                    onClickEvent={(e) => setCurrentIndex(e)} text={""} key={value} />
    });

    return (
        <CarouselViewDumb
            currentIndex={currentIndex}
            images={images}
            imageButtons={imageButtons}
            handleNextPhoto={() => handleNextPhoto()}
            handlePreviousPhoto={() => handlePreviousPhoto()}
        />
    );
}

const initializeImageIndexes = (imagesSize: number) => {
    const indexesArray: number[] = [];
    for (let i = 0; i < imagesSize; i++) {
        indexesArray.push(i);
    }
    return indexesArray;
}

export default CarouselViewSmart;
