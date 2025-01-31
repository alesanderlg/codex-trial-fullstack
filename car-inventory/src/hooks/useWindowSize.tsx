import { useEffect, useState } from 'react'

interface WindowSize {
    width: number
    height: number
}

const useWindowSize = (): WindowSize => {
    const [windowSize, setWindowSize] = useState<WindowSize>({
        width: 0,
        height: 0,
    })

    useEffect(() => {
        const handler = () => {
            setWindowSize({
                width: window.innerWidth > 1920 ? window.innerWidth : 1920,
                height: window.innerHeight,
            })
        }

        handler()
        window.addEventListener('resize', handler)

        return () => {
            window.removeEventListener('resize', handler)
        }

    }, [])

    return windowSize
}

export default useWindowSize