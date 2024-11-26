"use client"
import { addOne, subtractOne, addCustom, subtractCustom } from '@/lib/features/Counter/counterSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hook';
import React, { useState } from 'react'
import { HiMiniMinus, HiMiniPlus } from "react-icons/hi2";

export default function CounterPage() {
  const dispatch = useAppDispatch()
  const countValue = useAppSelector(state => state.counterSlice.count)
  const [inputValue, setInputValue] = useState<number>(0)

  const handleMinusClick = () => {
    const numberValue = Number(inputValue);

    if (numberValue === 0) {
      dispatch(subtractOne())
    } else if (numberValue > 0) {
      dispatch(subtractCustom(numberValue))
    } else {
      dispatch(addCustom(Math.abs(numberValue)))
    }
  }

  const handlePlusClick = () => {
    const numberValue = Number(inputValue);

    if (numberValue === 0) {
      dispatch(addOne())
    } else {
      dispatch(addCustom(numberValue))
    }
  }

  return (
    <div className='w-full flex flex-col items-center gap-10'>
      <h1 className='text-3xl font-bold tracking-wide'>COUNTER APPLICATION</h1>
      <section className='w-40 flex flex-col items-center justify-center gap-4'>
        <div className='w-full h-12 flex items-center justify-center font-mono font-medium text-2xl border border-third/20 rounded-md custom-shadow'>
          {countValue}
        </div>
        <div className='flex gap-4'>
          <button
            onClick={handleMinusClick}
            className='custom-shadow size-8 flex items-center justify-center border-third/40 border-2 border-b-4 rounded-md transition-all active:border-b'
          >
            <HiMiniMinus className='size-6' />
          </button>
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(Number(e.target.value))}
            className='custom-shadow w-full pl-8 bg-third/20 outline-none rounded-sm font-mono font-semibold text-lg'
          />
          <button
            onClick={handlePlusClick}
            className='custom-shadow size-8 flex items-center justify-center border-third/40 border-2 border-b-4 rounded-md transition-all active:border-b'
          >
            <HiMiniPlus className='size-6' />
          </button>
        </div>
      </section>
      <span
      className='w-60 text-xs text-third/50 text-center'
      >* If the value inside the input is 0 or empty, it increases or decreases by one. If it's different from 0 or empty, it changes by that value.</span>
    </div>
  )
}
