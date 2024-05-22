import * as React from 'react';
import { TouchableOpacity, View, StyleSheet, GestureResponderEvent } from 'react-native';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({
  width = '100%',
  height = 50, // default height in pixels
  borderRadius = 25,
  backgroundColor = '#0743A1', // default background color
  children,
  onPress, // Accept onPress as a prop
  isDisable,
  background = '#0743A1',
  id,
  marginTop,
  padding,
  borderWidth = 2, // default border width in pixels
  borderColor = '#0743A1',
  borderStyle = 'solid',
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          width,
          height,
          borderRadius,
          backgroundColor: background,
          borderColor,
          borderWidth,
          borderStyle,
          opacity: isDisable ? 0.2 : 1,
          marginTop,
          padding,
        },
        isDisable ? styles.disabledButton : {},
      ]}
      onPress={onPress} // Pass onPress directly
      disabled={isDisable}
      accessibilityLabel={id}
    >
      <View style={styles.centerHorizontalAndVertical}>{children}</View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  centerHorizontalAndVertical: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  disabledButton: {
    opacity: 0.2,
  },
});

export default Button;
