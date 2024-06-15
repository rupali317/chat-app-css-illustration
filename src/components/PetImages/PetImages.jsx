export const PetImages = (props) => {
  const imageList = props.content.message.map((item) => {
    return <img key={item.id} src={item.src} alt={item.name} />;
  });
  return <div>{imageList}</div>;
};
