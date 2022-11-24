// import { prisma } from '../../prisma';
import ptBR from 'date-fns/locale/pt-BR/index.js';
import { prisma } from '../../prisma.js';
import { format } from 'date-fns';

export const create = async (req, res) => {
  const { name, eventDate, user } = req.body;
  const { content } = req.body.content ? req.body : '';

  const date = format(new Date(), 'yyyy-MM-dd HH:mm:ss', { locale: ptBR });

  const weekAndYear = format(new Date(date), 'w-yyyy');

  const dayOfWeek = format(new Date(date), 'eee');

  let weekRow = await prisma.week.findUnique({
    where: {
      weekAndYear,
    },
  });

  if ((weekRow != null) & (weekRow != undefined)) {
    if (weekRow.events[dayOfWeek]) {
      weekRow.events[dayOfWeek].push({
        name,
        eventDate,
        content,
        user,
      });
    } else {
      weekRow.events[dayOfWeek] = [
        {
          name,
          eventDate,
          content,
          user,
        },
      ];
    }

    try {
      await prisma.week.update({
        where: {
          weekAndYear,
        },
        data: {
          events: {
            ...weekRow.events,
          },
        },
      });
    } catch {}
    return res.status(201).json({ message: 'criado com sucesso!' });
  } else {
    let event = {};

    try {
      event[dayOfWeek] = [
        {
          name,
          eventDate,
          content,
          user,
        },
      ];

      await prisma.week
        .create({
          data: {
            weekAndYear,
            month: parseInt(format(new Date(date), 'MM')),
            year: parseInt(format(new Date(date), 'yyyy')),
            events: event,
          },
        })
        .catch(error => {
          console.log(error);
          return res.status(401).json({
            type: 'error',
            message: 'Dados incorretos',
          });
        });
    } catch (error) {
      throw new Error(error);
    }
  }
  return res.status(201).json({ message: 'criado com sucesso!' });
};

export const get = async (req, res) => {
  const weekAndYear = req.params.week_and_year;

  try {
    const week = await prisma.week.findUnique({
      where: {
        weekAndYear,
      },
      select: {
        events: true,
      },
    });
    return res.status(200).json(week.events);
  } catch {}
};
