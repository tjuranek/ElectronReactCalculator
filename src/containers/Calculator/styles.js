export const createStyles = (theme) => {
    return {
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
    }
}; 