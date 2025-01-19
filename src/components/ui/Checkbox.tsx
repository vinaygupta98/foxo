import { Check } from 'lucide-react-native';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { cn } from '../../lib/utils';
interface ICheckboxProps {
  checked?: boolean;
  className?: string;
  onChange: (status: boolean) => void;
}

const Checkbox = React.forwardRef(
  ({className, ...props}: ICheckboxProps, ref) => {
    return (
      <TouchableOpacity
        ref={ref}
        className={cn(
          'web:peer h-4 w-4 native:h-[20] native:w-[20] shrink-0 rounded-sm native:rounded border border-white web:ring-offset-background web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          props.checked ? 'bg-[#006b4f]' : 'bg-white',
          className,
        )}
        onPress={() => props.onChange(!props.checked)}
        {...props}>
        <View className={cn('items-center justify-center h-full w-full')}>
          {props.checked && <Check size={12} strokeWidth={3.5} color="white" />}
        </View>
      </TouchableOpacity>
    );
  },
);

export default Checkbox;
