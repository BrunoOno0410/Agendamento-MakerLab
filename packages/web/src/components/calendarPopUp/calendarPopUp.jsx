import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { DialogOverlay, DialogContent } from './styles';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { getWeek } from 'date-fns';

export const CalendarPopUp = ({month, setWeekState}) => {
    const setWeek = (date) => {
        const week = getWeek(new Date(date))
        setWeekState(parseInt(week)-1)
    }

    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <h3>{month}</h3>
            </Dialog.Trigger>
            <Dialog.Portal>
                <DialogOverlay />
                <DialogContent>
                    <Calendar onChange={setWeek}/>
                </DialogContent>
            </Dialog.Portal>
        </Dialog.Root>
    )
}