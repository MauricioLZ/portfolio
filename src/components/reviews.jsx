import reviews from "../data/reviews-data";
import materias from "../img/materias/materias"

function Reviews()
{
    return (
        <div className="reviews">
            <h2>References</h2>
            <div className="reviewsList">
                {reviews.map((review, index) => (
                    <div className="reviewEntry" key={index} id={index}>
                        <img src={materias[index]}></img>
                        <h4>{review.author}</h4>
                        <p>"{review.text}"</p>
                    </div>
                ))}
            </div>
        </div> 
    );
}

export default Reviews;