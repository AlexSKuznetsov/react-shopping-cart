import React from 'react';
import { useSelector } from 'react-redux';

export default function Cart() {
  const item = useSelector((state) => state.items);
  return <>{item.map(el => <p key={el.key}>{el.name}</p>)}</>;
}
