import { prisma } from '../../prisma.js';
import { hash } from 'argon2';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR/index.js';

export const create = async (req, res) => {
  const { name, email, password } = req.body;
  
  const date = format(new Date(), 'yyyy-MM-dd HH:mm:ss', { locale: ptBR });
  
  const passwordHash = await hash(password);
  
  try {
    await prisma.user.create({
      data: {
        name,
        email,
        passwordHash,
        createdAt: date,
      },
    });
    
    console.log("entrou aqui")
    return res.status(201).json({ message: 'criado com sucesso' });
  } catch(error) {console.log(error)}
};
