import Carousel from 'react-multi-carousel';
import { Image } from 'semantic-ui-react'
import 'react-multi-carousel/lib/styles.css';

const images = [
    {
        className: 'img',
        src: "https://cdn.pixabay.com/photo/2017/02/14/03/03/ama-dablam-2064522_1280.jpg"
    },
    {
        className: 'img',
        src: "https://media.istockphoto.com/id/1408483456/photo/aerial-view-of-gergeti-trinity-church-at-sunrise-in-georgia.jpg?s=2048x2048&w=is&k=20&c=scFeNO3-E5tyuboWShjqY7SrevgqEtT8_aUZCCjWCYg="
    },
    {
        className: 'img',
        src: "https://media.istockphoto.com/id/547230916/photo/ruins-of-the-corfe-castle-in-county-dorset-uk.jpg?s=2048x2048&w=is&k=20&c=s6JIb9CSFpen_b8tNq4kWbDsIjc91Zcf5Bv54JaZNiQ="
    },
    {
        className: 'img',
        src: "https://media.istockphoto.com/id/535701375/photo/fantastic-summer-sunrise-on-the-tofane-mountain-range.jpg?s=2048x2048&w=is&k=20&c=LNSsOlijiA6o2R9S_YUwMPc7msHSpaDODlLtVirRKLA="
    },
    {
        className: 'img',
        src: "https://media.istockphoto.com/id/535629789/photo/sunny-summer-view-of-the-piana-mountain-range.jpg?s=2048x2048&w=is&k=20&c=7dI2SIDiOMPj82OPYKwNUqZ7CqF0chTMnKVJNDe_fLw="
    },
    {
        className: 'img',
        src: "https://media.istockphoto.com/id/827106748/photo/stunning-summit-of-mount-wellington-hobart-tasmania.jpg?s=2048x2048&w=is&k=20&c=DCfLU1nSObtDBJ1LDjY1G4LXl6GzIkTJqMQ1mX1rAGo="
    }
]

function Slider() {
    return (

        <Carousel
            additionalTransfrom={0}
            centerMode={false}
            arrows={false}
            className=""
            containerClass="container"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite={false}
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={true}
            responsive={{
                desktop: {
                    breakpoint: {
                        max: 3000,
                        min: 1024
                    },
                    items: 4,
                    partialVisibilityGutter: 10
                },
                mobile: {
                    breakpoint: {
                        max: 844,
                        min: 0,
                    },
                    items: 1,
                    partialVisibilityGutter: 10
                },
                tablet: {
                    breakpoint: {
                        max: 1024,
                        min: 464,
                    },
                    items: 2,
                    partialVisibilityGutter: 30
                }
            }}
            rewind={false}
            rewindWithAnimation={false}
            shouldResetAutoplay
            showDots={true}
            sliderClass="slider"
            slidesToSlide={1}
            swipeable
        >
            {images.map((img, index) => {
                return <Image key={index} className={img.className} src={img.src} />
            })}
        </Carousel>
    )
}

export default Slider