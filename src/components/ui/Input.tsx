import * as React from 'react';
import { TextInput, type TextInputProps } from 'react-native';
import { cn } from '../../lib/utils';

const Input = React.forwardRef<
  React.ElementRef<typeof TextInput>,
  TextInputProps
>(({className, ...props}, ref) => {
  const [focusStatus, setFocusStatus] = React.useState(false);
  return (
    <TextInput
      ref={ref}
      onFocus={e => {
        typeof props?.onFocus === 'function' && props?.onFocus(e);
        setFocusStatus(true);
      }}
      onBlur={e => {
        typeof props?.onBlur === 'function' && props?.onBlur(e);
        setFocusStatus(false);
      }}
      className={cn(
        'rounded-md border-2 border-white bg-white text-black px-3 text-base lg:text-sm native:text-lg native:leading-[1.25]',
        props.editable === false && 'opacity-50',
        focusStatus && 'border-2 border-tertiary',
        className,
      )}
      placeholderTextColor={'lightgray'}
      {...props}
    />
  );
});

export default Input;
