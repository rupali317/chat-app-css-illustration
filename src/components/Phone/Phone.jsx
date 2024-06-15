import { PhoneBody } from "../PhoneBody";
import { PhoneHeader } from "../PhoneHeader/PhoneHeader";

export const Phone = () => {
  return (
    <section>
      <div className="phone-header"></div>
      <PhoneHeader />
      <PhoneBody />
    </section>
  );
};
