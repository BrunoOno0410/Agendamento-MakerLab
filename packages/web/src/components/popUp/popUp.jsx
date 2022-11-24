import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { DialogOverlay, DialogContent, DialogTitle, DialogDescription, Flex, Button, IconButton, Fieldset, Label, Input, Select} from './styles';
import { FiX, FiPlus } from "react-icons/fi";

export const PopUp = () => {
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <FiPlus size={"3rem"} color={"#063859"}/>
            </Dialog.Trigger>
            <Dialog.Portal>
                <DialogOverlay />
                <DialogContent>
                    <DialogTitle>Horario de Agendamento</DialogTitle>
                    <DialogDescription>
                        Escolha data e horário para agendar o local
                    </DialogDescription>
                    <Fieldset>
                        <Label htmlFor="name">Nome do reservante</Label>
                        <Input id="name" placeholder='Nome'/>
                    </Fieldset>
                    <Fieldset>
                        <Label>RA</Label>
                        <Input id="RA" placeholder='Seu RA'/>
                    </Fieldset>
                    <Fieldset>
                        <Label>Número de Pessoas</Label>
                        <Input id="NumPessoas" placeholder='Quantas pessoas' />
                    </Fieldset>
                    <Fieldset>
                        <Label>Uso de ferramentas</Label>
                        <Select>
                            <option>Sim</option>
                            <option>Não</option>
                        </Select>
                    </Fieldset>
                    <Fieldset>
                        <Label>Dia</Label>
                        <Input id="Data" placeholder='Dia'/>
                    </Fieldset>
                    <Fieldset>
                        <Label>Horário</Label>
                        <Input id="Horario" placeholder='Horario' />
                    </Fieldset>
                    <Flex css={{ marginTop: 25, justifyContent: 'flex-end' }}>
                        <Dialog.Close asChild>
                            <Button variant="green">Confirmar</Button>
                         </Dialog.Close>
                    </Flex>
                    <Dialog.Close asChild>
                        <IconButton aria-label="Close">
                            <FiX size={"3rem"} color={"#063859"}/>
                        </IconButton>
                    </Dialog.Close>
                </DialogContent>
            </Dialog.Portal>
        </Dialog.Root>
    )
}