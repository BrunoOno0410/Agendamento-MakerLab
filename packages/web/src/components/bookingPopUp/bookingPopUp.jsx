import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { DialogOverlay, DialogContent, DialogTitle, DialogDescription, Flex, Button, IconButton, Fieldset, Label, Input, Select} from './styles';
import { FiX, FiPlus } from "react-icons/fi";
import { getData } from '../../api';

export const BookingPopUp = () => {

    const data = getData()
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <p>{Object.assign(data.mon[13]).event.user.name}</p>
            </Dialog.Trigger>
            <Dialog.Portal>
                <DialogOverlay/>
                <DialogContent>
                    <DialogTitle>Horario de Agendamento</DialogTitle><br/>
                    <Fieldset>
                        <Label htmlFor="name">Nome do reservante</Label>
                        <p>{Object.assign(data.mon['08']).event.user.name}</p>
                    </Fieldset>
                    <Fieldset>
                        <Label>RA</Label>
                        <p id="RA" placeholder='Seu RA'/>
                    </Fieldset>
                    <Fieldset>
                        <Label>Número de Pessoas</Label>
                        <p id="NumPessoas" placeholder='Quantas pessoas' />
                    </Fieldset>
                    <Fieldset>
                        <Label>Uso de ferramentas</Label>
                        <p id="Uso de ferramentas"/>
                    </Fieldset>
                    <Fieldset>
                        <Label>Dia</Label>
                        <p id="Data" placeholder='Dia'/>
                    </Fieldset>
                    <Fieldset>
                        <Label>Horário</Label>
                        <p>{Object.assign(data.mon[13]).event.date}</p>
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