import dayjs from "dayjs"
import LocalizedFormat from 'dayjs/plugin/localizedFormat'
import 'dayjs/locale/id'

dayjs()
  .locale('id')
  .format()

dayjs.extend(LocalizedFormat)

export const convertDate = date => {
  return dayjs(date, { locale: 'id' }).format('LL')
}