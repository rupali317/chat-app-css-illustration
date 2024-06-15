export const WalkCosts = (props) => {
  return (
    <div>
      <div className="hollow-circle"></div>
      <span>{props.content.message}</span>
      <em>{`${props.content.currency}${props.content.price}`}</em>
    </div>
  );
};
