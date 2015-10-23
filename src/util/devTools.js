import React from 'react';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';


export function renderDevTools(store) {
  if (__DEV__) {
    return (
      <DebugPanel top left bottom>
        <DevTools store={store} monitor={LogMonitor} />
      </DebugPanel>
    );
  }

  return null;
}

