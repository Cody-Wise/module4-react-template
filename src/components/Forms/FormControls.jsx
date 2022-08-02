/* eslint-disable react/prop-types */
import { forwardRef } from 'react';
import classNames from 'classnames';
import styles from './FormControls.css';

function FormControl({ label, children, className: customClassName }) {
  const className = classNames(styles.FormControl, customClassName);

  return (
    <label className={className}>
      <Label text={label} />
      {children}
    </label>
  );
}

function Label({ text, text2 }) {
  return (
    <>
      <span className="label-text">{text}</span>
      <span className="label-text">{text2}</span>
    </>
  );
}

export function CheckboxControl({ label, label2, text, text2, ...rest }) {
  return (
    <div className={styles.FormControl}>
      <Label text={label} text2={label2} />
      <label className={styles.CheckboxLabel}>
        <input type="checkbox" {...rest} />
        {text}
        <input type="checkbox" {...rest} />
        {text2}
      </label>
    </div>
  );
}

export const InputControl = forwardRef(
  ({ label, className, value, ...rest }, ref) => {
    return (
      <FormControl label={label} className={className}>
        <input ref={ref} value={value || ''} {...rest} />
      </FormControl>
    );
  }
);

InputControl.displayName = 'InputControl';

export function SelectControl({ label, children, ...rest }) {
  return (
    <FormControl label={label}>
      <select {...rest}>{children}</select>
    </FormControl>
  );
}

export function TextAreaControl({ label, ...rest }) {
  return (
    <FormControl label={label}>
      <textarea {...rest}></textarea>
    </FormControl>
  );
}

export function FormButton({ children }) {
  return <button className={styles.FormButton}>{children}</button>;
}

export function Fieldset({ legend, children }) {
  return (
    <fieldset className={styles.Fieldset}>
      <legend>{legend}</legend>
      {children}
    </fieldset>
  );
}

export function FormControls() {
  return <div>FormControls</div>;
}
