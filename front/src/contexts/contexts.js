import { createContext, useState } from 'react'

const DateContext = createContext({
    state: { selectedDate: '' },
    action: {
        setSelectedDate: () => {},
    },
})

const DateProvider = ({ children }) => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    const value = {
        state: { selectedDate },
        action: { setSelectedDate },
    }
    return <DateContext.Provider value={value}>{children}</DateContext.Provider>
}
const { DateConsumer } = DateContext

export { DateProvider, DateConsumer }
export default DateContext
