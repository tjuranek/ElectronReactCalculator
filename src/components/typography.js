/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useTheme } from "emotion-theming";

export const Typography = props => {
  const { color, fontSize, paddingRight, paddingTop, text } = props;

  const theme = useTheme();
  const styles = {
    typography: {
      color: color,
      fontSize: fontSize,
      textAlign: "right",
      paddingTop: paddingTop,
      paddingRight: paddingRight
    }
  };

  return <div css={styles.typography}>{text}</div>;
};
