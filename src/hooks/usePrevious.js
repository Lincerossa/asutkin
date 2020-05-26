import  { useEffect, useRef } from 'react'

export default (value)  => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}