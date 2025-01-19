import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { cn } from '../../lib/utils';
interface ISwitchProps {
  value?: boolean;
  onChange: (status: boolean) => void;
}

const Switch = React.forwardRef(({value, ...props}: ISwitchProps, ref) => {
  const animatedStyle = useAnimatedStyle(() => {
    return {transform: [{translateX: withTiming(value ? 30 : 0)}]};
  });
  return (
    <View>
      <TouchableOpacity
        onPress={() => props.onChange(!value)}
        className={cn(
          `w-20 h-10 rounded-full ${
            value ? 'bg-secondary' : 'bg-gray-300'
          } border-2 flex-row items-center pl-1.5 focus:border-tertiary`,
        )}>
        <Animated.View
          className={cn('w-7 h-7 rounded-full',value ? 'bg-white' : 'bg-black/60')}
          style={[animatedStyle]}
        />
      </TouchableOpacity>
    </View>
  );
});


export default Switch;

