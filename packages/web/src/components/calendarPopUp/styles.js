import { styled } from "../../styles/theme";
import { keyframes } from '@stitches/react';
import { violet, blackA, mauve, green } from '@radix-ui/colors';
import * as Dialog from '@radix-ui/react-dialog';

export const overlayShow = keyframes({
    '0%': { opacity: 0 },
    '100%': { opacity: 1 },
  });

export const contentShow = keyframes({
    '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
    '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});

export const DialogOverlay = styled(Dialog.Overlay, {
    backgroundColor: blackA.blackA9,
    position: 'fixed',
    inset: 0,
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
});

export const DialogContent = styled(Dialog.Content, {
    backgroundColor: 'white',
    borderRadius: 6,
    boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90vw',
    maxWidth: '450px',
    maxHeight: '85vh',
    padding: 25,
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    '&:focus': { outline: 'none' },
});

export const DialogTitle = styled(Dialog.Title, {
    margin: 0,
    fontWeight: 500,
    color: mauve.mauve12,
    fontSize: 17,
});

export const DialogDescription = styled(Dialog.Description, {
    margin: '10px 0 20px',
    color: mauve.mauve11,
    fontSize: 15,
    lineHeight: 1.5,
});

export const Flex = styled('div', { display: 'flex' });

export const Button = styled('button', {
    all: 'unset',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    padding: '0 15px',
    fontSize: 15,
    lineHeight: 1,
    fontWeight: 500,
    height: 35,

    variants: { 
    variant: {
    violet: {
        backgroundColor: 'white',
        color: violet.violet11,
        boxShadow: `0 2px 10px ${blackA.blackA7}`,
        '&:hover': { backgroundColor: mauve.mauve3 },
        '&:focus': { boxShadow: `0 0 0 2px black` },
    },
    green: {
        backgroundColor: green.green4,
        color: green.green11,
        '&:hover': { backgroundColor: green.green5 },
        '&:focus': { boxShadow: `0 0 0 2px ${green.green7}` },
    },
    },
    },

    defaultVariants: {
        variant: 'violet',
    },
});

export const IconButton = styled('button', {
    all: 'unset',
    fontFamily: 'inherit',
    borderRadius: '100%',
    height: 25,
    width: 25,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: violet.violet11,
    position: 'absolute',
    top: 10,
    right: 10,

    '&:hover': { backgroundColor: violet.violet4 },
    '&:focus': { boxShadow: `0 0 0 2px ${violet.violet7}` },
});

export const Fieldset = styled('fieldset', {
    all: 'unset',
    display: 'flex',
    gap: 20,
    alignItems: 'center',
    marginBottom: 15,
});

export const Label = styled('label', {
    fontSize: 15,
    color: violet.violet11,
    width: 90,
    textAlign: 'right',
});

export const Input = styled('input', {
    all: 'unset',
    width: '100%',
    flex: '1',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    padding: '0 10px',
    fontSize: 15,
    lineHeight: 1,
    color: violet.violet11,
    boxShadow: `0 0 0 1px ${violet.violet7}`,
    height: 35,

    '&:focus': { boxShadow: `0 0 0 2px ${violet.violet8}` },
});