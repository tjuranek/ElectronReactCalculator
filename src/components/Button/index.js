/** @jsx jsx */
import { jsx } from '@emotion/core'
import { createStyles } from './styles';

const Button = (props) => {
    const { text } = props;

    return <button css={theme => createStyles(theme)}>{text}</button>
};

export default Button;