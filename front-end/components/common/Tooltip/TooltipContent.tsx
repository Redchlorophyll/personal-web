import React, { ReactNode } from 'react'

type toolTipProps = {
    tipLocation?: 'top' | 'bottom' | 'left' | 'right'
    children?: ReactNode
}

const defaultProps: toolTipProps = {
    tipLocation: 'top',
}


const TooltipContent: React.FunctionComponent<toolTipProps> = (props) => {
  return (
      <div className={
        'bg-black-100 mt-2 py-1 pl-2 pr-4 shadow-[0_0_4px_rgba(29,171,221,0.2)] w-fit whitespace-nowrap rounded-sm ' +
        // tip styling
        'after:absolute after:left-[1px] ' +
        ( props.tipLocation == 'top'? 'after:top-1 ' : '')  +
        ( props.tipLocation == 'bottom'? 'after:-bottom-1 after:rotate-180 ' : '' ) +
        ( props.tipLocation == 'left'? 'after:top-2/4 after:left-[-6px] after:translate-y-[2px] after:-rotate-90 ' : '' ) +
        ( props.tipLocation == 'right'? 'after:top-2/4 after:left-full after:translate-x-[-2px] after:translate-y-[2px] after:rotate-90 text-left ' : '' ) +
        'after:border-b-4 after:border-b-black-500 after:w-0 after:h-0 after:border-l-4 after:border-r-4 after:border-l-black-100/0 after:border-r-black-100/0'
      }
      >
        {props.children? props.children : 'Insert Text Here'} - tip in the { props.tipLocation }
      </div>
  );
}

TooltipContent.defaultProps = defaultProps;

export default TooltipContent;