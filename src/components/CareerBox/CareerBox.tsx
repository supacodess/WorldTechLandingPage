import React from 'react'
import Button from '../Common/Button/Button'

function CareerBox(
  {font, item, isLoading}: {font: any, item: any, isLoading: boolean}
  ) {
  return (
    <div className='w-full text-start flex gap-2 border-2 border-primary p-2 px-4 items-center justify-between'>
      <div>
        <h3 className={`${font.className} text-xl text-primary`}>{item.title.toUpperCase()}</h3>
        <span className={`${font.className} flex items-center gap-2 text-sm`}>
          <p>{item.level.toUpperCase()}</p>
          <p className='text-primary'>|</p>
          <p>{item.timing.toUpperCase()}</p>
        </span>
      </div>
      <Button label="SEE MORE" isLoadingLabel='Please Wait ' url='hello' isLoading={isLoading} />
    </div>
  )
}

export default CareerBox
