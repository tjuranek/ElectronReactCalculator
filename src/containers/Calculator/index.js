/** @jsx jsx */
import { jsx } from '@emotion/core'
import { createStyles } from './styles';

const Calculator = () => {
    return (
        <div css={theme => createStyles(theme).container}>
            <div css={theme => createStyles(theme).content}> test </div>
        </div>
    )
};

export default Calculator;