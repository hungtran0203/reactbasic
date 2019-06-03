import React, { useState, useCallback, useEffect } from 'react'
import { withStatement } from '@babel/types';


class COMP1 extends React.Component {
  state = {
    state1: true,
    isOpen: false,
  }

  constructor(props, context) {

  }

  setIsOpen = (val) => {
    this.setState({ isOpen: val});
  }

  componentDidCatch() {

  }

  handleOnclick = () => {
    console.log('click')
  }

  render() {
    return this.props.render(this.props, props);
    return (
      <div>
        <div>{this.state.state1}</div>
        <button onClick={this.handleOnclick}>btn</button>
      </div>
    )
  }
}


const COMP2 = (props, context) => {
  // const [ isOpen, setIsOpen ] = useState(false);
  const { isOpen, setIsOpen } = props;
  
  const handleOnclick = useCallback((e) => {
    console.log('isOpen', isOpen);
    console.log('click')
  }, [isOpen]);

  useEffect(() => {
    console.log('run effect')



    return () => {
      console.log('on unmount')
    }
  }, [isOpen])

  useEffect(() => {
    console.log('run effect')


    
    return () => {
      console.log('on unmount')
    }
  }, [state1])

  return (
  <div>
    {props.state1}
    <button onClick={handleOnclick}></button>
  </div>)
}


const COMP3 = (props) => {

  const userContextData = getDataFromContext();
  const hocProps = { isOpen: !!userContextData  };

  
}



const fn = (ctxArgs) => (args) => {
  console.log(ctxArgs, args);
}

const fn2 = (ctxtAgrs, args) => {
  console.log(ctxArgs, args);
}

// recompose

const withState = (config) => BaseComponet => {
  const props = {};
  return <BaseComponet {...props} />
}

const hoc2 = (BaseComponet) => {

};

const ehancer_hoc = withState('isOpen', 'setIsOpen', false)
const UICOMPONENT = (props) => {
  return <div>{props}</div>
}

ehancer_hoc(UICOMPONENT)


const RENDERPROP = ({ render }) => {
  const [ isOpen, setIsOpen] = useState(false);

  const calcProps = {};



  return <div>{
    render({ isOpen, setIsOpen })}
    </div>
}


const renderFunction = (isOpen, setIsOpen) => {
  return (<div>{isOpen}</div>)
};


const Ren = () => {
  <RENDERPROP render={renderFunction}
}