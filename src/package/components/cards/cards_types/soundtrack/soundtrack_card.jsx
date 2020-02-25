import React, { useCallback, useContext, useMemo } from 'react';

import { ProfileCard } from '../../../commons/profile_card/profile_card';
import { SoundtrackFront } from './soundtrack_front/soundtrack_front';
import { SoundtrackBack } from './soundtrack_back/soundtrack_back';
import { FlatObjectToJsonResume, JsonResumeToFlatObject } from '../../utils/data_mapping';
import { SoundtrackCardEditDialog } from './edit_dialog/soundtrack_card_edit_dialog';
import { SoundtrackMapping } from './data/mapping';
import { DeveloperProfileContext } from '../../../../utils/context/contexts';

const SoundtrackCardComponent = ({ variant, side }) => {
    const { data, isEditing, onEdit } = useContext(DeveloperProfileContext);
    const mappedData = useMemo(() => JsonResumeToFlatObject(data, SoundtrackMapping), [data]);

    const onDialogEdited = useCallback(editedData => {
        onEdit(FlatObjectToJsonResume(editedData, SoundtrackMapping));
    }, []);

    return (
        <ProfileCard
            isEditingProfile={isEditing}
            data={mappedData}
            sides={{
                front: SoundtrackFront,
                back: SoundtrackBack
            }}
            editDialog={{
                component: SoundtrackCardEditDialog,
                onEdit: onDialogEdited
            }}
            variant={variant}
            side={side}
            isTransitionUnique={false}
        />
    );
};

export const SoundtrackCard = SoundtrackCardComponent;