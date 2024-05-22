import { ReactNode } from 'react';
import { ViewStyle } from 'react-native';

export interface ButtonProps {
  height?: ViewStyle['height'];
  width?: ViewStyle['width'];
  backgroundColor?: ViewStyle['backgroundColor'];
  borderRadius?: ViewStyle['borderRadius'];
  children: ReactNode;
  onPress?: (event: any) => void;
  isDisable?: boolean;
  isLoading?: boolean;
  background?: ViewStyle['backgroundColor'];
  id?: string;
  marginTop?: ViewStyle['marginTop'];
  padding?: ViewStyle['padding'];
  borderWidth?: ViewStyle['borderWidth'];
  borderColor?: ViewStyle['borderColor'];
  borderStyle?: ViewStyle['borderStyle'];
}
