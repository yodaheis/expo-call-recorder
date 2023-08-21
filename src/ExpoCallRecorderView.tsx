import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoCallRecorderViewProps } from './ExpoCallRecorder.types';

const NativeView: React.ComponentType<ExpoCallRecorderViewProps> =
  requireNativeViewManager('ExpoCallRecorder');

export default function ExpoCallRecorderView(props: ExpoCallRecorderViewProps) {
  return <NativeView {...props} />;
}
