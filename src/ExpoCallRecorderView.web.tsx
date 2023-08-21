import * as React from 'react';

import { ExpoCallRecorderViewProps } from './ExpoCallRecorder.types';

export default function ExpoCallRecorderView(props: ExpoCallRecorderViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
