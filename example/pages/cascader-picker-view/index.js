import { $wuxDatePicker, $wuxPopupPicker } from '../../dist/index'
import data from '../cascader/data'

import ad from '../index/ad'

const fieldNamesOptions = [
    {
        labelT: '选项一',
        valueT: '1',
        childrenT: [{
            labelT: '选项A',
            valueT: 'A',
            childrenT: [{
                labelT: '选项B',
                valueT: 'B',
            }],
        }],
    },
    {
        labelT: '选项二',
        valueT: '2',
    },
    {
        labelT: '选项三',
        valueT: '3',
        disabledT: true,
    },
]

const imageOptions = [
    {
        label: '周一',
        value: '周一',
        children: [
            {
                label: '白天',
                labelImage: '../../assets/images/daytime.png',
                value: 'daytime',
            },
            {
                label: '夜晚',
                labelImage: '../../assets/images/night.png',
                value: 'night',
            },
        ],
    },
    {
        label: '周二',
        value: '周二',
    },
    {
        label: '周三',
        value: '周三',
    },
]

ad({
    data: {
        fieldNames: {
            label: 'labelT',
            value: 'valueT',
            disabled: 'disabledT',
            children: 'childrenT',
        },
        fieldNamesOptions,
        imageOptions,
        value1: [],
        value2: [],
        value3: [],
        options: [],
        province: [],
        loading: true,
    },
    onLoad() {
        this.setData({ options: data })
        setTimeout(() => {
            this.setData({
                province: data.map((v, i) => ({ ...v, disabled: i > 3, children: null })),
                loading: false,
            })
        }, 3000)
    },
    onValueChange1(e) {
        this.setData({ value1: e.detail.value })
        console.log('onValueChange1', e.detail)
    },
    onValueChange2(e) {
        this.setData({ value2: e.detail.value })
        console.log('onValueChange2', e.detail)
    },
    onValueChange3(e) {
        this.setData({ value3: e.detail.value })
        console.log('onValueChange3', e.detail)
    },
})
