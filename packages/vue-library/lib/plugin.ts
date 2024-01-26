import { Plugin } from 'vue';
import { applyPolyfills, defineCustomElements } from '@demiend/component-library/loader';

export const ComponentLibrary: Plugin = {
  async install() {
    applyPolyfills().then(() => {
      defineCustomElements();
    });
  },
};
