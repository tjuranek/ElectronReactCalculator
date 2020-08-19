/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useTheme } from 'emotion-theming';

export const Typography = (props) => {
    const { backgroundColor, color, text } = props;

    const theme = useTheme();
    const styles = {
        typography: {
            color: color,
            fontSize: '3rem',
            textAlign: 'right',
            padding: '1rem',
        }
    };

    return <div css={styles.typography}>{text}</div>
};