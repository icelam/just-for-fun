import { FC } from 'react';

interface FormControlProps {
  label: string;
  id: string;
}

const withFormControl = <T, >(Component: FC<T>) => {
  const ComputedComponent: FC<T & FormControlProps> = ({
    label,
    id,
    ...props
  }) => {
    return (
      <div className="form-control">
        <label className="form-control__label" htmlFor={id}>
          {label}
        </label>
        <Component id={id} {...(props as T)} />
      </div>
    );
  };

  return ComputedComponent;
};

export default withFormControl;
