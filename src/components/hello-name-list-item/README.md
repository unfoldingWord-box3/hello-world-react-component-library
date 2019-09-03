### Simple example

```js
<HelloNameListItem name="World" />
```

### Complex example

In order to customize the styles and theme of this component, best practices of MuiThemeProvider should be used.

https://v3.material-ui.com/customization/themes/

Ignore the error in this example.

```
import { createMuiTheme } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#59B7E7',
      main: '#31ADE3',
      dark: '#014263',
      contrastText: '#FFF'
    },
  },
});

// this should wrap the root of your MUI components not just a single component...
<MuiThemeProvider theme={theme}>
  <HelloNameListItem name="🍕" />
</MuiThemeProvider>
```