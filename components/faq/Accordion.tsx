import React, { useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import styles from '../../styles/Accordion.module.css';

interface Props {
  content: string,
  title: string,
}


export const Accordion = ({ title, content }: Props) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className={`${styles.accordion} py-[20px] border-[#EAECF0] border-solid border-b`} >
      <div className={clsx('accordion-title', styles.accordionTitle, { isActive })} onClick={() => setIsActive(!isActive)}>
        <div className='flex justify-between align-center' >
          <p className='cursor-pointer text-sm font-bold text-font-03 w-[calc(100% - 20px)'>{title}</p>
          {
            isActive ?
              <Image alt="call" src="/svgs/minus-circle.svg" width={18} height={18} />
              : <Image alt="call" src="/svgs/plus-circle.svg" width={18} height={18} />
          }
        </div>
      </div>
      <div className={clsx('text-xs text-grey ', styles.accordionContent, { [styles.accordionContentIsActive]: isActive })}>{content}</div>
    </div>
  )
}

export default Accordion
