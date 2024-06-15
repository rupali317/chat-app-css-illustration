import { PhoneBody } from "../PhoneBody";
import { PhoneHeader } from "../PhoneHeader/PhoneHeader";

export const Phone = () => {
  return (
    <section>
      <div class="phone-header"></div>
      <PhoneHeader />
      <PhoneBody />
    </section>
  );
};
