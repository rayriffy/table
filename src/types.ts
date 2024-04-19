import type { Dispatch, SetStateAction } from 'react'

export type TableSize = 'sm' | 'md'

export type StateHook<T> = [T, Dispatch<SetStateAction<T>>]
