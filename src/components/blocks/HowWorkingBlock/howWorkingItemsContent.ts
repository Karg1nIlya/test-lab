import { deliveryTruck, moneyBags, secure, waiting } from "../../../data/dataImg";
import { IHowWorkingBlock } from "../../../models/IBlocks";

export const howWorkingItems: IHowWorkingBlock[] = [
    {
        img: waiting,
        title: 'Прочитай задание внимательно',
        desc: 'Думаю у тебя не займет это больше двух-трех минут'
    },
    {
        img: deliveryTruck,
        title: 'Изучи весь макет заранее',
        desc: 'Подумай как это будет работать на разных разрешениях и при скролле'
    },
    {
        img: secure,
        title: 'Сделай хорошо',
        desc: 'Чтобы мы могли тебе доверить подобные задачи в будущем'
    },
    {
        img: moneyBags,
        title: 'Получи предложение',
        desc: 'Ну тут все просто, не я придумал правила, но думаю так и будет)))'
    },
]
