/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useTheme } from 'emotion-theming';
import { Button } from '../components/button';
import { Typography } from '../components/typography'

export const Calculator = () => {
	const theme = useTheme();
	const styles = {
		container: {
			display: 'grid',
            gridTemplateRows: '1fr 2fr 1fr',
			gridTemplateColumns: '1fr 2fr 1fr',
			gridTemplateAreas: `
				'. . .'
				'. content .'
				'. . .'
			`,
			height: '100vh',
			width: '100vw',
		},
		content: {
			alignSelf: 'center',
			backgroundColor: theme.colors.primary,
			gridArea: 'content'
		}
	};

    return (
        <div>
            <Typography backgroundColor={theme.colors.primary} color={theme.colors.white} text={'2,048'} />
        </div>
    )
};