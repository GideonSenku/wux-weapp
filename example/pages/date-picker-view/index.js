function getDateString(date = new Date) {
    return {
        year: date.getFullYear() + '',
        month: date.getMonth() + '',
        day: date.getDate() + '',
        hour: date.getHours() + '',
        minute: date.getMinutes() + '',
    }
}

const { year, month, day, hour, minute } = getDateString()

import ad from '../index/ad'

ad({
    data: {
        value1: [year, month, day, hour, minute],
        value2: [year, month, day],
        value3: [year],
        value4: [year, month],
        value5: [hour, minute],
        value6: [year, month, day, hour, minute, '1'],
        value7: [hour, minute, '1'],
        value8: ['2029', '0', '1', '0', '0'],
        lang: 'zh_CN',
    },
    onChange(e) {
        console.log(e)
        const { key, values } = e.detail
        const lang = values[key]

        this.setData({
            lang,
        })
    },
    setValue(values, key) {
        this.setData({
            [`value${key}`]: !values.tillNow ? values.value : { tillNow: true },
            [`displayValue${key}`]: values.displayValue.join(' '),
        })
    },
    onValueChange(e) {
        const { index } = e.currentTarget.dataset
        this.setValue(e.detail, index)
        console.log(`onValueChange${index}`, e.detail)
    },
})
