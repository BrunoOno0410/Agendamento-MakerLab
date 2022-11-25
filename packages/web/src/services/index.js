import ptBR from 'date-fns/locale/pt-BR/index.js';
import { format } from 'date-fns';

export const getWeekAndYear = () => {
    const [week, year] = format(new Date(), 'w yyyy', { locale: ptBR }).split(' ');

  function getDateOfISOWeek(w, y) {
    var simple = new Date(y, 0, 1 + (w - 1) * 7);
    var dow = simple.getDay();
    var ISOweekStart = simple;
    if (dow <= 4)
        ISOweekStart.setDate(simple.getDate() - simple.getDay() + 1);
    else
        ISOweekStart.setDate(simple.getDate() + 8 - simple.getDay());
    return ISOweekStart;
  }

  return {week, year, getDateOfISOWeek}
}
