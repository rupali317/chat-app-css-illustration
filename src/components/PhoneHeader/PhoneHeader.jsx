import { contacts } from "./data";

export const PhoneHeader = () => {
  const contact = contacts.map((item) => {
    return (
      <div key={item.id}>
        <img src={item.src} alt={`Avatar of ${item.name}`} />
        <em>{item.name}</em>
        <span>{item.status}</span>
      </div>
    );
  });

  return (
    <div>
      <a href="#go-back" aria-label="Go back to dog walker overview page">
        {/* RRC -> Go back to the loading screen for few seconds? */}
        <img src="/images/left-arrow.svg" alt="" role="presentation" />
      </a>
      {contact}
      <button aria-label="Show more options">
        <img src="/images/kebab-menu.svg" alt="" role="presentation" />
      </button>
    </div>
  );
};
