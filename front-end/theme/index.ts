import { createMuiTheme } from '@material-ui/core/styles';
import { red, indigo } from '@material-ui/core/colors';

export default createMuiTheme({
  palette: {
    primary: red,
    secondary: indigo,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});
