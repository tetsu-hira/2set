import React from 'react';
import { useState } from "react";
import { useEffect } from "react";




const Header: React.FC = () => {
const [ title, setTitle ] = useState<string>("→ここをクリックして大会名や部門名を入力←")

  const changeTitle = (e:any) => {
    setTitle(e.target.value);
  }
  const titleClear = () => {
    setTitle('');
  }
  const returnTitle = () => {
    if (!title) {
      setTitle("→ここをクリックして大会名や部門名を入力←");
    }
  }

  useEffect(() => {
    // Update the document title using the browser API
    document.title = title
  });

  return (
    <div className="Header">
        <input className="HeaderTitle" type="text" onChange={changeTitle} onClick={titleClear} onBlur={returnTitle} value={title} />
        <div className="WebTitle">「にせっとまっち」</div>
    </div>
  )
}


export default Header;
