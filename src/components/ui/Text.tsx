import * as React from 'react';
import { Text as RNText, TextProps } from 'react-native';
import { cn } from '../../lib/utils';

const Text = React.forwardRef<React.ElementRef<typeof RNText>, TextProps>(
  ({className, ...props}, ref) => {
    return (
      <RNText
        className={cn('text-base text-foreground web:select-text', className)}
        ref={ref}
        {...props}
      />
    );
  },
);

export default Text;
