import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { DialogOverlay, DialogContent, DialogTitle, IconButton, Fieldset, Label } from './styles';
import { FiX } from "react-icons/fi";
import { getData } from '../../api';

export const BookingPopUp = ({data}) => {

    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <p>{data.event.user.name}</p>
            </Dialog.Trigger>
            <Dialog.Portal>
                <DialogOverlay/>
                <DialogContent>
                    <DialogTitle>Horario de Agendamento</DialogTitle><br/>
                    <Fieldset>
                        <Label htmlFor="name">Nome do reservante</Label>
                        <p>{data.event.user.name}</p>
                    </Fieldset>
                    <Fieldset>
                        <Label>RA</Label>
                        <p>{data.event.user.ra}</p>
                    </Fieldset>
                    <Fieldset>
                        <Label>Número de Pessoas</Label>
                        <p>{data.event.pnumber}</p>
                    </Fieldset>
                    <Fieldset>
                        <Label>Uso de ferramentas</Label>
                        <p>{data.event.tools}</p>
                    </Fieldset>
                    <Fieldset>
                        <Label>Dia</Label>
                        <p>{data.event.day}</p>
                    </Fieldset>
                    <Fieldset>
                        <Label>Horário</Label>
                        <p>{data.event.time}</p>
                    </Fieldset>
                    <Dialog.Close asChild>
                        <IconButton aria-label="Fechar">
                            <FiX size={"3rem"} color={"#063859"}/>
                        </IconButton>
                    </Dialog.Close>
                </DialogContent>
            </Dialog.Portal>
        </Dialog.Root>
    )
}