import {
    getContrastDefaultColorFromPaletteColor,
    getHexFromPaletteColor
} from '../../../../../utils/styles/styles_utils';

export const styles = (theme) => {
    const { miscellaneous: { spacing } } = theme;
    return ({
        field: {
            '&:first-child': {
                marginTop: 0
            },
            '&:last-child': {
                marginBottom: 0
            }
        },
        valueSliderContainer: {
            display: 'flex',
            alignItems: 'center',
            margin: [spacing * 3, 0, spacing * 2]
        },
        sliderValue: {
            width: spacing * 10
        },
        bolden: {
            fontWeight: 500
        },
        sliderPopperCard: {
            backgroundColor: getHexFromPaletteColor(theme, 'primary'),
            color: getHexFromPaletteColor(theme, getContrastDefaultColorFromPaletteColor(theme, 'primary'))
        },
        sliderPopperCardArrowContainer: {
            '& > svg': {
                '& > g > path': {
                    fill: getHexFromPaletteColor(theme, 'primary')
                }
            }
        }
    });
};
