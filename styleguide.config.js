const Path = require('path');
const upperFirst = require('lodash/upperFirst');
const camelCase = require('lodash/camelCase');
const { name, version, repository } = require('./package.json');
const { styles, theme } = require('./styleguide.styles');

let sections = [];
const sectionNames = [
  'hello-name',
  'hello-names',
  'hello-name-list-item',
  'hello-names-list',
];
sectionNames.forEach(value => {
  const filename = upperFirst(camelCase(value));
  const section = {
    name: filename,
    components: () => ([
      Path.resolve(__dirname, `src/components/${value}`, `${filename}.js`),
    ]),
  };
  sections.push(section);
});

const muiThemes = {
  name: 'MUI Themes',
  content: 'src/MuiThemes.md',
};
sections.push(muiThemes);

module.exports = {
  title: `${upperFirst(camelCase(name))} v${version}`,
  ribbon: {
    url: repository.url,
    text: 'View on GitHub'
  },
  webpackConfig: require('react-scripts/config/webpack.config')('development'),
  // serverPort: 3000,
  styles,
  theme,
  getComponentPathLine: (componentPath) => {
    const dirname = Path.dirname(componentPath, '.js');
    const file = dirname.split('/').slice(-1)[0];
    const componentName = upperFirst(camelCase(file));
    return `import { ${componentName} } from "${name}";`;
  },
  usageMode: 'expand',
  exampleMode: 'expand',
  pagePerSection: true,
  sections,
};
