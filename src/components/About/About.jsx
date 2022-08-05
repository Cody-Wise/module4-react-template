import {
  InputControl,
  SelectControl,
  TextAreaControl,
  CheckboxControl,
  FormButton,
  Fieldset,
} from '../Forms/FormControls.jsx';

import styles from './About.css';

export default function About() {
  return (
    <section className={styles.About}>
      <form>
        <Fieldset legend="Create Account">
          <InputControl
            label="Email"
            name="email"
            placeholder="enter your email"
            type="email"
            required
          />

          <InputControl
            className={styles.PasswordControl}
            label="Password"
            name="password"
            placeholder="choose a password"
            type="password"
            required
          />
        </Fieldset>

        <SelectControl label="Type">
          <option>Ninja</option>
          <option>Viking</option>
          <option>Druid</option>
        </SelectControl>

        <CheckboxControl label="Easy Mode?" text="Yes" text2="No" />

        <TextAreaControl label="Bio" placeholder="Tell us about yourself" />

        <FormButton>Submit</FormButton>
      </form>
    </section>
  );
}
