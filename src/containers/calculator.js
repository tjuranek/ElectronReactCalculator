/** @jsx jsx */
import { useState } from 'react';
import { jsx } from '@emotion/core'
import { useTheme } from 'emotion-theming';
import { solve } from '../services/solver';
import { Button } from '../components/button';
import { Typography } from '../components/typography';


const createStyles = (theme) => {
	return {
		container: {
			alignItems: 'center',
			display: 'flex',
			height: '100vh',
			justifyContent: 'center',
			width: '100vw'
		},
		calculator: {
			width: '25vw',
			height: '75vh',
			backgroundColor: theme.colors.primary
		},
		row: {
			display: 'flex',
			flexDirection: 'row',
		},
		block: {
			width: '25%'
		}
	};
}

export const Calculator = () => {
	const initialState = {
		previousValue: "",
		value: "0",
	};

	const [state, setState] = useState(initialState);

	const handleInputButtonClick = (value) => {
		if (state.value.length == 1 && state.value == "0" && value != ".") {
			setState({...state, value: `${value}`});
			return;
		}
		setState({ ...state, value: state.value + value})
	};

	const handleClearEverythingButtonClick = () => {
		setState(initialState);
	};

	const handleClearLastButtonClick = () => {
		if (state.value.length == 1) {
			setState({ ...state, value: "0" });
			return;
		}

		setState({ ...state, value: state.value.slice(0, state.value.length - 1) });
	}

	const handleSolverButtonClick = () => {
		const answer = solve(state.value);
		setState({ ...state, previousValue: state.value, value: answer.toString() });
	}

	const theme = useTheme();
	const styles = createStyles(theme);

    return (
        <div>
			<div css={styles.container}>
				<div css={styles.calculator}>
					<Typography color={theme.colors.white} text={state.value} />
					<Typography color={theme.colors.ternary} text={state.previousValue} />

					<div css={styles.row}>
						<div css={styles.block}>
							<Button onClick={handleClearEverythingButtonClick} text={'CE'} />
						</div>
						<div css={styles.block}>
							<Button onClick={handleClearLastButtonClick} text={'C'} />
						</div>
						<div css={styles.block}>
							<Button onClick={(e) => handleInputButtonClick(e.target.value)} text={'%'} />
						</div>
						<div css={styles.block}>
							<Button onClick={(e) => handleInputButtonClick(e.target.value)} text={'/'} />
						</div>
					</div>

					<div css={styles.row}>
						<div css={styles.block}>
							<Button onClick={(e) => handleInputButtonClick(e.target.value)} text={'7'} />
						</div>
						<div css={styles.block}>
							<Button onClick={(e) => handleInputButtonClick(e.target.value)} text={'8'} />
						</div>
						<div css={styles.block}>
							<Button onClick={(e) => handleInputButtonClick(e.target.value)} text={'9'} />
						</div>
						<div css={styles.block}>
							<Button onClick={(e) => handleInputButtonClick(e.target.value)} text={'X'} />
						</div>
					</div>

					<div css={styles.row}>
						<div css={styles.block}>
							<Button onClick={(e) => handleInputButtonClick(e.target.value)} text={'4'} />
						</div>
						<div css={styles.block}>
							<Button onClick={(e) => handleInputButtonClick(e.target.value)} text={'5'} />
						</div>
						<div css={styles.block}>
							<Button onClick={(e) => handleInputButtonClick(e.target.value)} text={'6'} />
						</div>
						<div css={styles.block}>
							<Button onClick={(e) => handleInputButtonClick(e.target.value)} text={'-'} />
						</div>
					</div>

					<div css={styles.row}>
						<div css={styles.block}>
							<Button onClick={(e) => handleInputButtonClick(e.target.value)} text={'1'} />
						</div>
						<div css={styles.block}>
							<Button onClick={(e) => handleInputButtonClick(e.target.value)} text={'2'} />
						</div>
						<div css={styles.block}>
							<Button onClick={(e) => handleInputButtonClick(e.target.value)} text={'3'} />
						</div>
						<div css={styles.block}>
							<Button onClick={(e) => handleInputButtonClick(e.target.value)} text={'+'} />
						</div>
					</div>

					<div css={styles.row}>
						<div css={styles.block}>
							<Button onClick={(e) => handleInputButtonClick(e.target.value)} text={'0'} />
						</div>
						<div css={styles.block}>
							<Button onClick={(e) => handleInputButtonClick(e.target.value)} text={'.'} />
						</div>
						<div css={styles.block}></div>
						<div css={styles.block}>
							<Button onClick={handleSolverButtonClick} text={'='} />
						</div>
					</div>
				</div>
			</div>
        </div>
    )
};