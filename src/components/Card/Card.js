import "./Card.css";

const Card = ({border,title,tabs,content}) => {
    return (
        <div className={`card-container-${border?"border":"no-border"} container`}>
            <div className="card-title-container">
                <div className="card-title">
                    {title}
                </div>
            </div>
            {tabs}
            <div className="card-body">
                {content}
            </div>
        </div>
    );
};
  
export default Card;