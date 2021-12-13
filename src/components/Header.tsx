import React from 'react';
import { useState } from "react";
import { useEffect } from "react";




const Header: React.FC = () => {
  const [ title, setTitle ] = useState<string>("→この文章を消して大会名や部門名を入力←")

  const changeTitle = (e:any) => {
    setTitle(e.target.value);
  }
  const titleClear = () => {
    setTitle('');
  }
  const returnTitle = () => {
    if (!title) {
      setTitle("→この文章を消して大会名や部門名を入力←");
    }
  }

  useEffect(() => {
    // Update the document title using the browser API
    if (title === "→この文章を消して大会名や部門名を入力←") {
      document.title = "にせっとまっち";
    } else {
      document.title = title;
    }
  });

  return (
    <div className="Header">
      <div className="WebTitle">「にせっとまっち」</div>
      <input className="HeaderTitle" type="text" onChange={changeTitle} onClick={titleClear} onBlur={returnTitle} value={title} />
    </div>
  )
}


export default Header;
