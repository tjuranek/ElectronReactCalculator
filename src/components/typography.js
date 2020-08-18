/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useTheme } from 'emotion-theming';

const Typography = (props) => {
    const { text } = props;

    const theme = useTheme();
    const styles = {
        typography: {
            color: theme.colors.primary
        }
    };

    return <div css={styles.typography}>{text}</div>
};

export default Typography;