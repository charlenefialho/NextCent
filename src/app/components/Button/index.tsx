import React, { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement>{
    children: React.ReactNode;
    disabled?: boolean;
    variant?:'primary'|'secondary'|'tertiary'
}

function getVariant(variant: IButtonProps['variant'], disabled:IButtonProps['disabled']){
    switch(variant){
        case 'primary':
          return disabled ? 'bg-disabled text-disabled' : 'bg-primary text-white';
        case 'secondary':
            return disabled? 'bg-disabled text-disabled' : 'bg-neutral-white text-primary border border-primary';
        case 'tertiary':
            return disabled?'bg-disabled text-disabled': 'bg-neutral-white text-primary';
        default:
            return disabled? '':'';
    }
}

export function Button({variant='primary',children, className, disabled=false, ...rest}: IButtonProps){
    return(
        <button className={twMerge(` rounded-md ${getVariant(variant,disabled)} `,className)} disabled={disabled} {...rest}>{children}</button>
    )
}