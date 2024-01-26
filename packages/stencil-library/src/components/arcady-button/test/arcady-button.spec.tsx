import { newSpecPage } from '@stencil/core/testing';
import { ArcadyButton } from '../arcady-button';

describe('arcady-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ArcadyButton],
      html: `<arcady-button></arcady-button>`,
    });
    expect(page.root).toEqualHtml(`
      <arcady-button>
        <mock:shadow-root>
          <button>
            <slot></slot>
          </button>
        </mock:shadow-root>
      </arcady-button>
    `);
  });

  it('renders as primary button', async () => {
    const page = await newSpecPage({
      components: [ArcadyButton],
      html: `<arcady-button variant="primary">Primary button</arcady-button>`,
    });
    expect(page.root).toEqualHtml(`
      <arcady-button variant="primary">
        <mock:shadow-root>
          <button data-variant="primary">
            <slot></slot>
          </button>
        </mock:shadow-root>
        Primary button
      </arcady-button>
    `);
  });
});
