import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoCallRecorder.web.ts
// and on native platforms to ExpoCallRecorder.ts
import ExpoCallRecorderModule from './ExpoCallRecorderModule';
import ExpoCallRecorderView from './ExpoCallRecorderView';
import { ChangeEventPayload, ExpoCallRecorderViewProps } from './ExpoCallRecorder.types';

// Get the native constant value.
export const PI = ExpoCallRecorderModule.PI;

export function hello(): string {
  return ExpoCallRecorderModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoCallRecorderModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoCallRecorderModule ?? NativeModulesProxy.ExpoCallRecorder);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoCallRecorderView, ExpoCallRecorderViewProps, ChangeEventPayload };
