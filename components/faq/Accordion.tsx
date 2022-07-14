import React, { useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import styles from '../../styles/Accordion.module.css'

interface Props {
  content: string
  title: string
  index: number
  activeIndex: number
  setActiveIndex: Function
}

export const Accordion = ({ title, content, index, activeIndex, setActiveIndex }: Props) => {
  const handleSetIndex = (index: number) => activeIndex !== index && setActiveIndex(index)

  return (
    <div className={`${styles.accordion} py-[20px] border-[#EAECF0] border-solid border-b`}>
      <div
        className={clsx('accordion-title', styles.accordionTitle)}
        onClick={() => handleSetIndex(activeIndex === index ? 0 : index)}
      >
        <div className="flex justify-between align-center">
          <p className="cursor-pointer text-sm font-bold text-font-03 w-[calc(100% - 20px)]">
            {title}
          </p>
          {activeIndex === index ? (
            <Image
              alt="minus"
              className="cursor-pointer"
              src="/svgs/minus-circle.svg"
              width={18}
              height={18}
            />
          ) : (
            <Image
              alt="plus"
              className="cursor-pointer"
              src="/svgs/plus-circle.svg"
              width={18}
              height={18}
            />
          )}
        </div>
      </div>
      <div
        className={clsx('text-xs text-grey ', styles.accordionContent, {
          [styles.accordionContentIsActive]: activeIndex === index,
        })}
      >
        {content}
      </div>
    </div>
  )
}

export default Accordion
