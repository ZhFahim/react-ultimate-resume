import React from 'react';

import { createUseStyles } from 'react-jss';

import { Tooltip, Typography } from '@wld/ui';

import { styles } from './language_column_styles';

const useStyles = createUseStyles(styles);

const LanguageColumnComponent = ({ component: Component = 'div', color, style, value, children, itemsSize }) => {
    const classes = useStyles({ value, color, itemsSize });

    return (
        <Tooltip title={`${value}%`}>
            <Component className={classes.container} style={style}>
                <Typography variant="h2" color="light" customClasses={{ container: classes.typography }}>
                    {children}
                </Typography>
            </Component>
        </Tooltip>
    );
};

export const LanguageColumn = LanguageColumnComponent;
