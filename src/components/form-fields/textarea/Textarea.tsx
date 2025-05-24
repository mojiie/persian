'use client';

import { cn } from '@/utils';
import { TextareaProps } from './TextareaProps';
import { FormFieldParent } from '../form-filed-parent';

export const Textarea = (props: TextareaProps) => {
    const { label, error, ...rest } = props;

    return (
        <FormFieldParent label={label} error={error}>
            <textarea
                className={cn(
                    'w-full h-48 resize-none border-none outline-none text-xs text-grey-900 lg:text-sm p-2 bg-transparent',
                    'placeholder:text-[0.625rem] placeholder:text-grey-700 placeholder:font-semibold lg:placeholder:text-sm',
                )}
                {...rest}
            />
        </FormFieldParent>
    );
};
