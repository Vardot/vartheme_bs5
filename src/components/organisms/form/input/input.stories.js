// import config from './input.config.yml';
// import input from './input.twig';
// import twigCode from '!!raw-loader!./input.twig';
// import DrupalAttribute from 'drupal-attribute';
// import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

// export default {
//   title : config.title,
//   component: input,
//   options: { showPanel: true },
//   parameters: {
//     docs: {
//       container: DocsContainer,
//       page: DocsPage,
//       source: {code: twigCode},
//       description: config.description,
//       iframeHeight: config.height
//     },
//   },
//   argTypes: {
//     size: {
//       control: { type: "select" },
//       options: config.size.options,
//       description: config.size.description,
//       defaultValue: {summary: config.size.default},
//       table: config.size.table,
//     },
//     placeholder: {
//       control: { type: 'text' },
//       description: config.placeholder.description,
//       defaultValue: {summary: config.placeholder.default},
//       table: config.placeholder.table,
//     },
//     disabled: {
//       control: { type: 'boolean' },
//       description: config.disabled.description,
//       defaultValue: {summary: config.disabled.default},
//       table: config.disabled.table,
//     }
//   },
// };

// export const Input = (args) => {
//   return (
//     input({
//       attributes: new DrupalAttribute(),
//       size: args.size ? args.size : '',
//       disabled: args.disabled ? 'disabled' : '',
//       placeholder: args.placeholder ? args.placeholder : ''
//     })
//   )
// }

// Input.args = {
//   size: "",
//   disabled: false,
//   placeholder: "Placeholder text"
// };
