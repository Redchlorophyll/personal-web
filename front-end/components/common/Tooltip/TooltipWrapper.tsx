import React, { ReactNode, useEffect, useState } from 'react';
import TooltipContent from './TooltipContent';

type tooltipWrapperProps = {
    content?: ReactNode
    tooltipContent?: ReactNode
    direction?: 'top' | 'bottom' | 'left' | 'right'
}

type tooltipDirection = 'top' | 'bottom' | 'left' | 'right';

const defaultProps: tooltipWrapperProps = {
    direction: 'bottom',
}

const Tooltip: React.FunctionComponent<tooltipWrapperProps> = (props) =>  {
  const [ tooltipDirection, setTooltipDirection ] = useState<tooltipDirection>('top');

  useEffect(() => {
    console.log(document.getElementById('tooltip-wrapper')?.firstChild);
    tipDirection(props.direction || 'bottom')
  }, []);

  const tipDirection = (tip: tooltipDirection) => {
    if (tip === 'top') setTooltipDirection('bottom');
    if (tip === 'bottom') setTooltipDirection('top');
    if (tip === 'left') setTooltipDirection('right');
    if (tip === 'right') setTooltipDirection('left');
  }

  return (
    <div 
    className='group bg-red-700 relative hover:bg-yellow-700 cursor-pointer w-fit'
    id="tooltip-wrapper">
        <div>
        { props.content }
        </div>
        <div className='absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all ease-in-out duration-300'>
            <TooltipContent tipLocation={tooltipDirection}>{props.tooltipContent}</TooltipContent>
        </div>
    </div>
  )
}

Tooltip.defaultProps = defaultProps;

export default Tooltip;
