import { FormFieldParentProps } from '../form-filed-parent';
import { TextareaHTMLAttributes } from 'react';

export type TextareaProps = FormFieldParentProps &
    TextareaHTMLAttributes<HTMLTextAreaElement>;
