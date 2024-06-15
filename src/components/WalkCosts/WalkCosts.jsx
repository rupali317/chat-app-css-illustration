export const WalkCosts = (props) => {
  return (
    <div>
      <span>{props.content.message}</span>
      <em>{`${props.content.currency}${props.content.price}`}</em>
    </div>
  );
};
