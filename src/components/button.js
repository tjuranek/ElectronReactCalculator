/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useTheme } from 'emotion-theming';


const Button = (props) => {
    const { text } = props;

    const theme = useTheme();
    const styles = {
      button: {
        backgroundColor: theme.colors.secondary,
        padding: '1rem'
      }
    };

  return (
    <button css={styles.button}>some text</button>
  )   
};

export default Button;