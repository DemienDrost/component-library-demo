import { applyPolyfills, defineCustomElements } from '@demiend/component-library/loader';
import '@demiend/component-library/dist/stencil-library/stencil-library.css';

import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

if (ExecutionEnvironment.canUseDOM) {
  applyPolyfills().then(() => {
    console.log('applyPolyfills ok');
    defineCustomElements(window, {
      resourcesUrl: '/',
    });
  });
}
