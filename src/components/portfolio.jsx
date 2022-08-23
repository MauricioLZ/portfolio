import itemData from "../data/itemData";

function Portfolio()
{
    return (
        <section id="Portfolio">
            <div className="portfolioImgGrid">
            {itemData.map((item, index) => (
                <img
                key={index}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                />
            ))}
            </div>
        </section>
    );
}

export default Portfolio;