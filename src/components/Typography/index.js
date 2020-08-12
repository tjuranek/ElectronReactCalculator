/** @jsx jsx */
import { jsx } from '@emotion/core'
import { createStyles } from './styles';

const Typography = (props) => {
    const { text } = props;

    return <div css={theme => createStyles(theme)}>{text}</div>
};

export default Typography;