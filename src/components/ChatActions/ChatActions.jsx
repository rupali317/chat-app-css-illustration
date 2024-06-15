export const ChatActions = () => {
  return (
    <div>
      <input
        type="text"
        placeholder="Type a message..."
        aria-label="Type a message"
      ></input>
      <button aria-label="Send message">
        <img src="/images/right-arrow.svg" alt="" role="presentation" />
      </button>
    </div>
  );
};
