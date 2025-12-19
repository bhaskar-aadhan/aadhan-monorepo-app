import React from 'react'
import dayjs from 'dayjs'

const useGenerateDateEntities = (count: number = 100) => {

    const yearsData = React.useCallback(() => {
        const years = generateYears(count)
        return years
    }, [])

    const monthsData = React.useCallback(() => {
        const formated = monthValues.map((item) => {
            return {
                label: item?.toString(),
                key: item?.toString()
            }
        })
        return formated
    }, [])

    return { yearsData, monthsData }
}

export default useGenerateDateEntities

const generateYears = (count = 100, startYear = dayjs().year(), isString = true) => Array.from({ length: count }, (_, i) => ({ key: isString ? (startYear - i).toString() : startYear - i, label: isString ? (startYear - i).toString() : startYear - i }));

const monthValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
