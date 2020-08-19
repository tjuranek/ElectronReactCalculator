/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useTheme } from 'emotion-theming';


export const Button = (props) => {
    const { backgroundColor, onClick, text, textColor } = props;

    const theme = useTheme();
    const styles = {
      button: {
        backgroundColor: backgroundColor,
        color: textColor,
        width: '100%',
        height: '100%'
      }
    };

  return (
    <button css={styles.button} onClick={onClick} value={text}>{text}</button>
  )   
};