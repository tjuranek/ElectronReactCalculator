/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useTheme } from "emotion-theming";

export const Button = props => {
  const {
    borderRadius = "none",
    backgroundColor,
    color,
    onClick,
    text
  } = props;

  const theme = useTheme();
  const styles = {
    button: {
      border: "none",
      borderRadius: borderRadius,
      backgroundColor: backgroundColor,
      color: color,
      width: "100%",
      fontSize: "1.25rem",
      height: "100%",
      padding: "1rem",
      "&:focus": {
        outline: "none"
      },
      "&:hover": {
        fontSize: "1.5rem"
      }
    }
  };

  return (
    <button css={styles.button} onClick={onClick} value={text}>
      {text}
    </button>
  );
};
