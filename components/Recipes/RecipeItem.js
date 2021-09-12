import Image from 'next/image';

const RecipeItem = (props) => {
  return (
    <ul>
      <div>
        <h4>{props.title}</h4>
        <p>{props.difficulty}</p>
      </div>
      <div>
        <img src={props.image} alt={props.title} />
        <p>{props.time}</p>
      </div>
      <div>
        <p>{props.description}</p>
      </div>
    </ul>
  );
};

export default RecipeItem;