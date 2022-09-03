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
    <div className='bg-black-100 py-1 pl-2 pr-3 shadow-md w-fit whitespace-nowrap'>
      {props.children? props.children : 'Insert Text Here'} - tip in the { props.tipLocation }
    </div>
  );
}

TooltipContent.defaultProps = defaultProps;

export default TooltipContent;