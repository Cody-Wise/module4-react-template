/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
// import { forwardRef } from 'react';
// import classNames from 'classnames';
// import styles from './FormControls.css';

// function FormControl({ label, children, className: customClassName }) {
//   const className = classNames(styles.FormControl, customClassName);

//   return (
//     <label className={className}>
//       <Label text={label} />
//       {children}
//     </label>
//   );
// }

// function Label({ text, text2 }) {
//   return (
//     <>
//       <span className="label-text">{text}</span>
//       <span className="label-text">{text2}</span>
//     </>
//   );
// }

// export function CheckboxControl({ label, label2, text, text2, ...rest }) {
//   return (
//     <div className={styles.FormControl}>
//       <Label text={label} text2={label2} />
//       <label className={styles.CheckboxLabel}>
//         <input type="checkbox" {...rest} />
//         {text}
//         <input type="checkbox" {...rest} />
//         {text2}
//       </label>
//     </div>
//   );
// }

// export const InputControl = forwardRef(
//   ({ label, className, value, ...rest }, ref) => {
//     return (
//       <FormControl label={label} className={className}>
//         <input ref={ref} value={value || ''} {...rest} />
//       </FormControl>
//     );
//   }
// );

// InputControl.displayName = 'InputControl';

// export function SelectControl({ label, children, ...rest }) {
//   return (
//     <FormControl label={label}>
//       <select {...rest}>{children}</select>
//     </FormControl>
//   );
// }

// export function TextAreaControl({ label, ...rest }) {
//   return (
//     <FormControl label={label}>
//       <textarea {...rest}></textarea>
//     </FormControl>
//   );
// }

// export function FormButton({ children }) {
//   return <button className={styles.FormButton}>{children}</button>;
// }

// export function Fieldset({ legend, children }) {
//   return (
//     <fieldset className={styles.Fieldset}>
//       <legend>{legend}</legend>
//       {children}
//     </fieldset>
//   );
// }

// export function FormControls() {
//   return <div>FormControls</div>;
// }

/* eslint-disable no-prototype-builtins */
import { Children, cloneElement, forwardRef } from 'react';
import classNames from 'classnames';
import styles from './FormControls.css';

function FormControl({ label, children, className: customClassName }) {
  const className = classNames(styles.FormControl, customClassName);

  return (
    <label className={className}>
      <LabelText text={label} />
      {children}
    </label>
  );
}

function LabelText({ text, as: Tag = 'span' }) {
  if (!text) return null;

  const className = classNames(styles.Label, 'label-text');
  return <Tag className={className}>{text}</Tag>;
}

function Option({ text, type, ...rest }) {
  return (
    <label className={styles.CheckboxLabel}>
      <input type={type} {...rest} />
      {text}
    </label>
  );
}

export function CheckboxOption(props) {
  return <Option type="checkbox" {...props} />;
}

export function RadioOption(props) {
  return <Option type="radio" {...props} />;
}

export function CheckboxControl({ label, ...rest }) {
  return (
    <div className={styles.FormControl}>
      <LabelText text={label} />
      <CheckboxOption {...rest} />
    </div>
  );
}

export function OptionGroupControl({
  label,
  name,
  onChange,
  size = '100px',
  children,
}) {
  return (
    <div className={styles.FormControl}>
      <fieldset>
        <LabelText text={label} as="legend" />
        <div
          className={styles.Options}
          style={{
            gridTemplateColumns: `repeat(
            auto-fill,
            minmax(${size}, 1fr)
          )`,
          }}
        >
          {Children.map(children, (child) =>
            cloneElement(child, { name, onChange })
          )}
        </div>
      </fieldset>
    </div>
  );
}

const verifyValue = (props) => {
  if (Object.prototype.hasOwnProperty.call(props, 'value'))
    props.value = props.value ?? '';
};

export const InputControl = forwardRef((props, ref) => {
  const { label, className, children, ...rest } = props;
  verifyValue(rest);

  return (
    <FormControl label={label} className={className}>
      <input ref={ref} {...rest} />
      {children}
    </FormControl>
  );
});

InputControl.displayName = 'InputControl';

export const SelectControl = forwardRef((props, ref) => {
  const { label, children, ...rest } = props;
  verifyValue(rest);

  return (
    <FormControl label={label}>
      <select ref={ref} {...rest}>
        {children}
      </select>
    </FormControl>
  );
});

SelectControl.displayName = 'SelectControl';

export const TextAreaControl = forwardRef((props, ref) => {
  const { label, ...rest } = props;
  verifyValue(rest);

  return (
    <FormControl label={label}>
      <textarea ref={ref} {...rest}></textarea>
    </FormControl>
  );
});

TextAreaControl.displayName = 'TextAreaControl';

export function FormButton({
  children,
  icon = false,
  className: customClassName,
  ...rest
}) {
  const className = classNames(styles.FormButton, customClassName, {
    [styles.Icon]: icon,
  });

  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
}

export function FormButtonControl(props) {
  return <FormButton className={styles.FormControl} {...props} />;
}

export function Fieldset({ legend, children }) {
  return (
    <fieldset className={styles.Fieldset}>
      <legend>{legend}</legend>
      {children}
    </fieldset>
  );
}
