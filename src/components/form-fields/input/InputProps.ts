import { InputHTMLAttributes } from 'react';
import { FormFieldParentProps } from '../form-filed-parent';

export type InputProps = FormFieldParentProps &
    InputHTMLAttributes<HTMLInputElement> & {
        icon?: React.ReactNode;
    };
