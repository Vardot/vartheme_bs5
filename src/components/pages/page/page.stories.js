import page from './page.twig';
import codeTwig from '!!raw-loader!./page.twig';
import DrupalAttribute from 'drupal-attribute';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

export default {
  title : 'Pages/Page',
  component: page,
  parameters: {
    docs: {
      container: DocsContainer,
      page: DocsPage,
      source: {
        code: codeTwig,
      },
    },
  },
  argTypes: {
    content: {
      content: { control: 'text' }
    }
  }
};

export const Page = (args) => {
  return (
    page({
      attributes: new DrupalAttribute(),
      page: {
        content: args.content,
      },
      props: {...args},
    })
  )
}

Page.args = {
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec dui leo. Duis pellentesque diam nec nisl varius pretium. Curabitur iaculis pretium lacus. Donec non ligula a libero tincidunt bibendum. In quis gravida dolor. In eu egestas velit, sit amet varius massa. Proin lacinia vel ipsum sit amet imperdiet. Suspendisse cursus auctor mollis. Nunc felis ex, eleifend mattis turpis vel, dictum posuere risus. Donec a scelerisque felis, sed imperdiet velit.'
};
