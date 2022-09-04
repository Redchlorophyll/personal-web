import React, { ReactNode, useEffect, useState, useRef, useLayoutEffect } from 'react';
import TooltipContent from './TooltipContent';

type tooltipWrapperProps = {
  children?: ReactNode
  tooltipContent?: ReactNode
  direction?: 'top' | 'bottom' | 'left' | 'right'
}

type tooltipDirection = 'top' | 'bottom' | 'left' | 'right';

const defaultProps: tooltipWrapperProps = {
    direction: 'bottom',
}

const Tooltip: React.FunctionComponent<tooltipWrapperProps> = (props) =>  {
  const [ tooltipDirection, setTooltipDirection ] = useState<tooltipDirection>('top');
  const [ halfWidth, setHalfWidth ] = useState<Number>(0);
  const tooltipWrapper = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    tipDirection(props.direction || 'bottom')
  }, [props.direction]);

  useLayoutEffect(() => {
    if (typeof tooltipWrapper.current?.clientWidth === 'number') {
      setHalfWidth(Math.trunc(tooltipWrapper.current?.clientWidth / 2))
    }
  });

  const tipDirection = (tip: tooltipDirection) => {
    if (tip === 'top') setTooltipDirection('bottom');
    if (tip === 'bottom') setTooltipDirection('top');
    if (tip === 'left') setTooltipDirection('right');
    if (tip === 'right') setTooltipDirection('left');
  }

  return (
    <div 
    className='group bg-red-700 relative hover:bg-yellow-700 cursor-pointer w-fit'
    ref={tooltipWrapper}>
        <div>
        { props.children }
        </div>
        <div 
        className={
          'absolute ' +
          (props.direction === 'top'? `-top-10 translate-x-[${halfWidth}px] ` : '') +
          (props.direction === 'bottom'? `translate-x-[${halfWidth}px] ` : '') +
          (props.direction === 'left'? '-top-3 -translate-x-full -left-2 ' : '') +
          (props.direction === 'right'? '-top-3 translate-x-2 left-full ' : '') +
          'invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all ease-in-out duration-300'
        }
        >
            <TooltipContent tipLocation={tooltipDirection}>{props.tooltipContent}</TooltipContent>
        </div>
    </div>
  )
}

Tooltip.defaultProps = defaultProps;

export default Tooltip;
