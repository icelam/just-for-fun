import { FC, PropsWithChildren } from 'react';
import { bem } from '../../utils';

export interface PreviewWrapperProps {
  title?: string;
}

const componentName = 'preview-wrapper';

const PreviewWrapper: FC<PropsWithChildren<PreviewWrapperProps>> = ({ children, title }) => (
  <div className={bem(componentName)}>
    <div className={bem(componentName, { element: 'title' })}>
      <div className={bem(componentName, { element: 'controls' })}>
        <div className={bem(componentName, { element: 'close-button' })}></div>
        <div
          className={bem(componentName, { element: 'minimize-button' })}
        ></div>
        <div
          className={bem(componentName, { element: 'fullscreen-button' })}
        ></div>
      </div>
      <span>{title}</span>
    </div>
    {children}
  </div>
);

export default PreviewWrapper;
