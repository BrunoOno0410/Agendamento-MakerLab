import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { DialogOverlay, DialogContent, DialogTitle, DialogDescription, Flex, Button, IconButton, Fieldset, Label, Input} from './styles';
import { FiX, FiPlus } from "react-icons/fi";
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export const CalendarPopUp = () => {
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <h3>Outubro</h3>
            </Dialog.Trigger>
            <Dialog.Portal>
                <DialogOverlay />
                <DialogContent>
                    <Calendar></Calendar>
                </DialogContent>
            </Dialog.Portal>
        </Dialog.Root>
    )
}