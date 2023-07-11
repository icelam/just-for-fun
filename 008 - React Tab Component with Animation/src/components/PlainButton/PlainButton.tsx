import { memo, forwardRef } from 'react';
import classnames from 'classnames';
import { bem } from '../../utils';

export type PlainButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'type'
>;

const PlainButton = forwardRef<HTMLButtonElement, PlainButtonProps>(
  ({ className, children, ...props }, ref) => (
    <button
      ref={ref}
      type="button"
      className={classnames(className, bem('plain-button'))}
      {...props}
    >
      {children}
    </button>
  ),
);

export default memo(PlainButton);
