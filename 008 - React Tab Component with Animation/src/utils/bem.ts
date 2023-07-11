const bem = (
  component: string,
  options: {
    element?: string;
    modifier?: string;
    isSelector?: boolean;
  } = {},
): string => {
  if (!component) {
    return '';
  }

  let result = `${component}`;
  const { element, modifier, isSelector } = options;

  if (element) {
    result += `__${element}`;
  }

  if (modifier) {
    result += `--${modifier}`;
  }

  if (isSelector) {
    result = `.${result}`;
  }

  return result;
};

export default bem;
