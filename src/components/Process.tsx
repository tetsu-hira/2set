import { useState, useEffect } from "react";
import * as React from "react";
// import ExcelJS from "exceljs";
// import File from "./File";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
// import Select from 'react-select';
// import ReactDOM from "react-dom";

type Pro = {
  id: number;
  name: any;
  gross: number;
  point: number;
  score: number;
};

type Scr = {
  name: any;
  time1: number;
  time2: number;
  count: number;
  marks: number;
};

const Process: React.FC = () => {
  const [plan, setPlan] = useState<Scr[]>([]);
  const [time1, setTime1] = useState<number>(0);
  const [time2, setTime2] = useState<number>(0);
  const [list, setList] = useState<Pro[]>([]);
  const [data, setData] = useState<any>();
  const [count, setCount] = useState<number>(0);
  const [win, setWin] = useState<number>(0);
  const [lose, setLose] = useState<number>(0);
  const [drawWin, setDrawWin] = useState<number>(0);
  const [drawDraw, setDrawDraw] = useState<number>(0);
  const [drawLose, setDrawLose] = useState<number>(0);
  const [sort, setSort] = useState<any>("");

  const [title, setTitle] = useState<string>("");
  const [name, setName] = useState<string>("");

  const changeTitle = (e: any) => {
    setName(e.target.value);
    console.log(e);
  };
  const onTitle = () => {
    setTitle(name);
  };

  useEffect(() => {
    // Update the document title using the browser API
    if (title === "") {
      document.title = "2setMatch";
    } else {
      document.title = title;
    }
  });

  const changeData = (e: any) => {
    setData(e.target.value);
    // setCount(Math.random());
  };
  const changeWin = (e: any) => {
    setWin(e.target.value);
    setLose(0);
  };
  const changeDrawWin = (e: any) => {
    setDrawWin(e.target.value);
  };
  const changeDrawDraw = (e: any) => {
    setDrawDraw(e.target.value);
  };
  const changeDrawLose = (e: any) => {
    setDrawLose(e.target.value);
  };
  const addList = () => {
    setList([
      ...list,
      {
        id: data,
        name: data,
        gross: 0,
        point: 0,
        score: 0,
      },
    ]);
    setData("");
  };

  // ????????????????????????????????????????????????
  const handleRemoveTask = (index: number) => {
    const delTeam: any = plan.find((elem) => plan[index] === elem);
    const newPlan = [...plan];
    newPlan.splice(index, 1);
    setPlan(newPlan);
    const result: any = newPlan.filter((plans) => {
      return plans.name === delTeam.name;
    });
    const result1: any = list.find((elem) => elem.name === delTeam.name);
    const result2 = result.length;
    result1.gross = result2;
  };

  // ??????????????????????????????
  const addPlan = (index: number) => {
    const addName: any = list.find((elem) => list[index] === elem);
    setPlan([
      ...plan,
      { name: addName.name, time1: 0, time2: 0, count: 0, marks: 0 },
    ]);
    const result: any = plan.filter((plans) => {
      return plans.name === list[index].name;
    });
    const result1 = result.length + 1;
    list[index].gross = result1;
  };

  const addTime1 = (index: number, minute: number) => {
    const targetPlan: any = plan.find((elem) => plan[index] === elem);
    targetPlan.time1 = targetPlan.time1 + minute;
    setTime1(targetPlan.time1);
    // ????????????????????????????????????
    if (index % 2 === 0) {
      const nextPlan: any = plan.find((elem) => plan[index + 1] === elem);
      targetPlan.count =
        targetPlan.time1 + targetPlan.time2 - (nextPlan.time1 + nextPlan.time2);
      nextPlan.count =
        nextPlan.time1 + nextPlan.time2 - (targetPlan.time1 + targetPlan.time2);
      setCount(targetPlan.count);
      if (
        targetPlan.time1 > nextPlan.time1 &&
        targetPlan.time2 > nextPlan.time2
      ) {
        targetPlan.marks = Number(win);
        nextPlan.marks = Number(lose);
      } else if (
        targetPlan.time1 < nextPlan.time1 &&
        targetPlan.time2 < nextPlan.time2
      ) {
        targetPlan.marks = Number(lose);
        nextPlan.marks = Number(win);
      } else if (
        (targetPlan.time1 < nextPlan.time1 &&
          targetPlan.time2 > nextPlan.time2) ||
        (targetPlan.time1 > nextPlan.time1 && targetPlan.time2 < nextPlan.time2)
      ) {
        if (
          targetPlan.time1 + targetPlan.time2 >
          nextPlan.time1 + nextPlan.time2
        ) {
          targetPlan.marks = Number(drawWin);
          nextPlan.marks = Number(drawLose);
        } else if (
          targetPlan.time1 + targetPlan.time2 <
          nextPlan.time1 + nextPlan.time2
        ) {
          targetPlan.marks = Number(drawLose);
          nextPlan.marks = Number(drawWin);
        } else {
          targetPlan.marks = Number(drawDraw);
          nextPlan.marks = Number(drawDraw);
        }
      } else {
        targetPlan.marks = Number(lose);
        nextPlan.marks = Number(lose);
      }
    } else {
      const prevPlan: any = plan.find((elem) => plan[index - 1] === elem);
      targetPlan.count =
        targetPlan.time1 + targetPlan.time2 - (prevPlan.time1 + prevPlan.time2);
      prevPlan.count =
        prevPlan.time1 + prevPlan.time2 - (targetPlan.time1 + targetPlan.time2);
      setCount(targetPlan.count);
      if (
        targetPlan.time1 > prevPlan.time1 &&
        targetPlan.time2 > prevPlan.time2
      ) {
        targetPlan.marks = Number(win);
        prevPlan.marks = Number(lose);
      } else if (
        targetPlan.time1 < prevPlan.time1 &&
        targetPlan.time2 < prevPlan.time2
      ) {
        targetPlan.marks = Number(lose);
        prevPlan.marks = Number(win);
      } else if (
        (targetPlan.time1 < prevPlan.time1 &&
          targetPlan.time2 > prevPlan.time2) ||
        (targetPlan.time1 > prevPlan.time1 && targetPlan.time2 < prevPlan.time2)
      ) {
        if (
          targetPlan.time1 + targetPlan.time2 >
          prevPlan.time1 + prevPlan.time2
        ) {
          targetPlan.marks = Number(drawWin);
          prevPlan.marks = Number(drawLose);
        } else if (
          targetPlan.time1 + targetPlan.time2 <
          prevPlan.time1 + prevPlan.time2
        ) {
          targetPlan.marks = Number(drawLose);
          prevPlan.marks = Number(drawWin);
        } else {
          targetPlan.marks = Number(drawDraw);
          prevPlan.marks = Number(drawDraw);
        }
      } else {
        targetPlan.marks = Number(lose);
        prevPlan.marks = Number(lose);
      }
    }
    // ??????????????????????????????
    for (let i = 0; i < list.length; i++) {
      const countPlan: any = list.find((elem) => list[i] === elem);
      // ????????????????????????total?????????
      const sumCount: any = plan.filter((plans) => {
        return plans.name === countPlan.name;
      });
      const total = sumCount.reduce(function (sum: number, element: any) {
        return sum + element.count;
      }, 0);
      // ?????????list?????????
      const update: any = list.find((elem) => elem.name === countPlan.name);
      update.score = total;
      // ????????????????????????amount?????????
      const sumMarks: any = plan.filter((plans) => {
        return plans.name === countPlan.name;
      });
      const amount = sumMarks.reduce(function (sum: number, element: any) {
        return sum + element.marks;
      }, 0);
      // ?????????list?????????
      const overwrite: any = list.find((elem) => elem.name === countPlan.name);
      overwrite.point = amount;
    }
    // ????????????????????????
    // ????????????????????????????????????
    console.log("???????????????????????????");
    console.log(time1);
    console.log(count);
  };
  const addTime2 = (index: number, minute: number) => {
    const targetPlan: any = plan.find((elem) => plan[index] === elem);
    targetPlan.time2 = targetPlan.time2 + minute;
    setTime2(targetPlan.time2);
    // ????????????????????????????????????
    if (index % 2 === 0) {
      const nextPlan: any = plan.find((elem) => plan[index + 1] === elem);
      targetPlan.count =
        targetPlan.time1 + targetPlan.time2 - (nextPlan.time1 + nextPlan.time2);
      nextPlan.count =
        nextPlan.time1 + nextPlan.time2 - (targetPlan.time1 + targetPlan.time2);
      setCount(targetPlan.count);
      if (
        targetPlan.time1 > nextPlan.time1 &&
        targetPlan.time2 > nextPlan.time2
      ) {
        targetPlan.marks = Number(win);
        nextPlan.marks = Number(lose);
      } else if (
        targetPlan.time1 < nextPlan.time1 &&
        targetPlan.time2 < nextPlan.time2
      ) {
        targetPlan.marks = Number(lose);
        nextPlan.marks = Number(win);
      } else if (
        (targetPlan.time1 < nextPlan.time1 &&
          targetPlan.time2 > nextPlan.time2) ||
        (targetPlan.time1 > nextPlan.time1 && targetPlan.time2 < nextPlan.time2)
      ) {
        if (
          targetPlan.time1 + targetPlan.time2 >
          nextPlan.time1 + nextPlan.time2
        ) {
          targetPlan.marks = Number(drawWin);
          nextPlan.marks = Number(drawLose);
        } else if (
          targetPlan.time1 + targetPlan.time2 <
          nextPlan.time1 + nextPlan.time2
        ) {
          targetPlan.marks = Number(drawLose);
          nextPlan.marks = Number(drawWin);
        } else {
          targetPlan.marks = Number(drawDraw);
          nextPlan.marks = Number(drawDraw);
        }
      } else {
        targetPlan.marks = Number(lose);
        nextPlan.marks = Number(lose);
      }
    } else {
      const prevPlan: any = plan.find((elem) => plan[index - 1] === elem);
      targetPlan.count =
        targetPlan.time1 + targetPlan.time2 - (prevPlan.time1 + prevPlan.time2);
      prevPlan.count =
        prevPlan.time1 + prevPlan.time2 - (targetPlan.time1 + targetPlan.time2);
      setCount(targetPlan.count);
      if (
        targetPlan.time1 > prevPlan.time1 &&
        targetPlan.time2 > prevPlan.time2
      ) {
        targetPlan.marks = Number(win);
        prevPlan.marks = Number(lose);
      } else if (
        targetPlan.time1 < prevPlan.time1 &&
        targetPlan.time2 < prevPlan.time2
      ) {
        targetPlan.marks = Number(lose);
        prevPlan.marks = Number(win);
      } else if (
        (targetPlan.time1 < prevPlan.time1 &&
          targetPlan.time2 > prevPlan.time2) ||
        (targetPlan.time1 > prevPlan.time1 && targetPlan.time2 < prevPlan.time2)
      ) {
        if (
          targetPlan.time1 + targetPlan.time2 >
          prevPlan.time1 + prevPlan.time2
        ) {
          targetPlan.marks = Number(drawWin);
          prevPlan.marks = Number(drawLose);
        } else if (
          targetPlan.time1 + targetPlan.time2 <
          prevPlan.time1 + prevPlan.time2
        ) {
          targetPlan.marks = Number(drawLose);
          prevPlan.marks = Number(drawWin);
        } else {
          targetPlan.marks = Number(drawDraw);
          prevPlan.marks = Number(drawDraw);
        }
      } else {
        targetPlan.marks = Number(lose);
        prevPlan.marks = Number(lose);
      }
    }
    // ??????????????????????????????
    for (let i = 0; i < list.length; i++) {
      const countPlan: any = list.find((elem) => list[i] === elem);
      // ????????????????????????total?????????
      const sumCount: any = plan.filter((plans) => {
        return plans.name === countPlan.name;
      });
      const total = sumCount.reduce(function (sum: number, element: any) {
        return sum + element.count;
      }, 0);
      // ?????????list?????????
      const update: any = list.find((elem) => elem.name === countPlan.name);
      update.score = total;
      // ????????????????????????amount?????????
      const sumMarks: any = plan.filter((plans) => {
        return plans.name === countPlan.name;
      });
      const amount = sumMarks.reduce(function (sum: number, element: any) {
        return sum + element.marks;
      }, 0);
      // ?????????list?????????
      const overwrite: any = list.find((elem) => elem.name === countPlan.name);
      overwrite.point = amount;
    }
    // ????????????????????????
    // ????????????????????????????????????
    console.log(time2);
    console.log(count);
  };

  /* ???????????????????????????
  const handleClickDownloadButton = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    format:  "xlsx" | "csv"
  ) => {
    e.preventDefault();

    const workbook = new ExcelJS.Workbook();
    workbook.addWorksheet("sheet1");
    const worksheet = workbook.getWorksheet("sheet1");

    worksheet.columns = [
      { header: "No.", key: "", width: 10 },
      { header: "??????", key: "name", width: 20},
      { header: "??????", key: "time1", width: 20}
    ];

    worksheet.addRows(plan);

    const uint8Array =
      format === "xlsx"
        ? await workbook.xlsx.writeBuffer() //xlsx?????????
        : await workbook.csv.writeBuffer(); //csv?????????
    const blob = new Blob([uint8Array], { type: "application/octet-binary "});
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "NewFile." + format; //???????????????????????????????????????????????????
    a.click();
    a.remove();
  };
  */

  // const handleOnDragEnd = (result:any) => {
  //   const items = Array.from(plan);
  //   const [reorderedItem] = items.splice(result.source.index, 1);
  //   items.splice(result.destination.index, 0, reorderedItem);

  //   setPlan(items);
  // }

  // ?????????????????????
  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  // ?????????????????????
  const goBottom = () => {
    var elm = document.documentElement;
    //scrollHeight ?????????????????? clientHeight ?????????????????????
    var bottom = elm.scrollHeight - elm.clientHeight;
    //?????????????????????
    window.scrollTo({
      behavior: "smooth", // ????????????????????????????????????
      left: 0, // ????????????????????????
      top: bottom, // ????????????????????????
    });
  };

  // ????????????????????????
  const sortGross = () => {
    let newList: any;
    newList = list.sort((el1, el2) => {
      if (el1["gross"] < el2["gross"]) {
        return 1;
      }
      if (el1["gross"] > el2["gross"]) {
        return -1;
      }
      return 0;
    });
    setSort("gross");
    console.log(sort);
    setList(newList);
  };
  const sortPoint = () => {
    let newList: any;
    newList = list.sort((el1, el2) => {
      if (el1["point"] < el2["point"]) {
        return 1;
      }
      if (el1["point"] > el2["point"]) {
        return -1;
      }
      return 0;
    });
    setSort("point");
    setList(newList);
  };
  const sortScore = () => {
    let newList: any;
    newList = list.sort((el1, el2) => {
      if (el1["score"] < el2["score"]) {
        return 1;
      }
      if (el1["score"] > el2["score"]) {
        return -1;
      }
      return 0;
    });
    setSort("score");
    setList(newList);
  };

  // let sortedLists = useMemo(() => {
  //   let _sortedLists = list.name;
  //   if (sort.key) {
  //     _sortedLists = _sortedLists.sort((a, b) => {
  //       a = a[sort.key];
  //       b = b[sort.key];

  //       if(a === b) {
  //         return 0;
  //       }
  //       if(a > b) {
  //         return 1 * sort.order;
  //       }
  //       if(a < b) {
  //         return -1 * sort.order;
  //       }
  //     });
  //   }
  //   return _sortedLists;
  // }, [sort]);

  // ?????????????????????
  // console.log(list);

  return (
    <>
      <div className="Header">
        {!title ? (
          <div className="WebTitle">2setMatch</div>
        ) : (
          <div className="WebTitle">{title}</div>
        )}
      </div>
      <div className="Process">
        <div className="ProcessContainer">
          <div className="ProcessMain">
            <div className="ProcessList">
              {list.length > 0 && (
                <div>
                  <h1 className="teamList">?????????????????????</h1>
                  <p>Q???????????????P???????????????S???????????????</p>
                  <div className="ProcessList__Border">
                    <div className="Head">
                      <div className="name">TeamName</div>
                      <button className="gross" onClick={sortGross}>
                        Q
                      </button>
                      <button className="point" onClick={sortPoint}>
                        P
                      </button>
                      <button className="score" onClick={sortScore}>
                        S
                      </button>
                      <div className="space"></div>
                    </div>
                    <ul className="Item">
                      {list.map((item: Pro, idx: number) => (
                        <li className="ItemList" key={item.name}>
                          <div className="ItemList__data">
                            <div className="name">{item.name}</div>
                            <div className="gross">{item.gross}</div>
                            <div className="point">{item.point}</div>
                            <div className="score">{item.score}</div>
                            <button
                              className="AddPlan"
                              onClick={() => addPlan(idx)}
                            >
                              ??????
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
              {!title && (
                <div>
                  <h1>????????????????????????</h1>
                  <div className="Form">
                    <div className="FormContent">
                      <input
                        className="FormContent__name"
                        type="text"
                        id="name"
                        onChange={changeTitle}
                      ></input>
                      <button
                        className="FormContent__button"
                        type="submit"
                        onClick={onTitle}
                      >
                        ??? ???
                      </button>
                    </div>
                  </div>
                </div>
              )}
              <h1>????????????????????????</h1>
              <div className="Insert">
                <div className="InsertContent">
                  <div className="InsertContent__text">??????</div>
                  <input
                    className="InsertContent__entry"
                    type="number"
                    id="win"
                    onChange={changeWin}
                  ></input>
                </div>
                <div className="InsertContent">
                  <div className="InsertContent__text">??????</div>
                  <input
                    className="InsertContent__entry"
                    type="number"
                    id="draw_win"
                    onChange={changeDrawWin}
                  ></input>
                </div>
                <div className="InsertContent">
                  <div className="InsertContent__text">??????</div>
                  <input
                    className="InsertContent__entry"
                    type="number"
                    id="draw_draw"
                    onChange={changeDrawDraw}
                  ></input>
                </div>
                <div className="InsertContent">
                  <div className="InsertContent__text">??????</div>
                  <input
                    className="InsertContent__entry"
                    type="number"
                    id="draw_lose"
                    onChange={changeDrawLose}
                  ></input>
                </div>
              </div>
              <h1>????????????????????????</h1>
              <div className="Form">
                <div className="FormContent">
                  <input
                    className="FormContent__name"
                    type="text"
                    id="name"
                    value={data}
                    onChange={changeData}
                  ></input>
                  <button
                    className="FormContent__button"
                    type="submit"
                    onClick={addList}
                  >
                    ??? ???
                  </button>
                </div>
              </div>
              {list.length > 0 && (
                <div className="upButton" onClick={returnTop}></div>
              )}
              {list.length > 0 && (
                <div className="downButton" onClick={goBottom}></div>
              )}
            </div>
            {plan.length > 0 && (
              <div className="Result">
                <h1 className="title">???????????????</h1>
                <div className="Result__Border">
                  {plan.map((item, idx: number) => (
                    <>
                      <div
                        className={idx % 2 === 0 ? "Flex left" : "Flex right"}
                        key={idx}
                      >
                        <div className="FlexNumber">
                          {idx % 2 === 0 && (
                            <div className="FlexNumber__item">
                              ???{idx / 2 + 1}??????
                            </div>
                          )}
                        </div>
                        <div className="FlexCross">
                          {idx % 2 !== 0 && (
                            <div className="FlexCross__item">-</div>
                          )}
                          {idx % 2 !== 0 && (
                            <div className="FlexCross__item">-</div>
                          )}
                        </div>
                        <div className="FlexCount">
                          {idx % 2 === 0 && (
                            <div className="FlexCount__Button">
                              <button
                                className="SubCount top"
                                onClick={() => addTime1(idx, -1)}
                              >
                                <div className="CountText">-</div>
                              </button>
                              <button
                                className="AddCount top"
                                onClick={() => addTime1(idx, 5)}
                              >
                                <div className="CountText">+</div>
                              </button>
                            </div>
                          )}
                          {idx % 2 !== 0 && (
                            <div className="FlexCount__Point">
                              <div className="ResultTime">{item.time1}</div>
                            </div>
                          )}
                          {idx % 2 === 0 && (
                            <div className="FlexCount__Button">
                              <button
                                className="SubCount bottom"
                                onClick={() => addTime2(idx, -1)}
                              >
                                <div className="CountText">-</div>
                              </button>
                              <button
                                className="AddCount bottom"
                                onClick={() => addTime2(idx, 5)}
                              >
                                <div className="CountText">+</div>
                              </button>
                            </div>
                          )}
                          {idx % 2 !== 0 && (
                            <div className="FlexCount__Point">
                              <div className="ResultTime">{item.time2}</div>
                            </div>
                          )}
                        </div>
                        <div className="FlexName">
                          <div className="ResultName">
                            <p className="ResultName__text">{item.name}</p>
                          </div>
                          <button
                            className="DeleteButton"
                            onClick={() => handleRemoveTask(idx)}
                          >
                            ??????
                          </button>
                        </div>
                        <div className="FlexCount">
                          {idx % 2 !== 0 && (
                            <div className="FlexCount__Button">
                              <button
                                className="SubCount top"
                                onClick={() => addTime1(idx, -1)}
                              >
                                <div className="CountText">-</div>
                              </button>
                              <button
                                className="AddCount top"
                                onClick={() => addTime1(idx, 5)}
                              >
                                <div className="CountText">+</div>
                              </button>
                            </div>
                          )}
                          {idx % 2 === 0 && (
                            <div className="FlexCount__Point">
                              <div className="ResultTime">{item.time1}</div>
                            </div>
                          )}
                          {idx % 2 !== 0 && (
                            <div className="FlexCount__Button">
                              <button
                                className="SubCount bottom"
                                onClick={() => addTime2(idx, -1)}
                              >
                                <div className="CountText">-</div>
                              </button>
                              <button
                                className="AddCount bottom"
                                onClick={() => addTime2(idx, 5)}
                              >
                                <div className="CountText">+</div>
                              </button>
                            </div>
                          )}
                          {idx % 2 === 0 && (
                            <div className="FlexCount__Point">
                              <div className="ResultTime">{item.time2}</div>
                            </div>
                          )}
                        </div>
                      </div>
                      {idx % 2 === 0 && (
                        <div className="Cross">
                          <div className="Cross__item">
                            <div className="Cross__text">-</div>
                          </div>
                          <div className="Cross__item">
                            <div className="Cross__text">-</div>
                          </div>
                        </div>
                      )}
                    </>
                  ))}
                </div>
                <div>
                  {/* <button onClick={(e) => handleClickDownloadButton(e, "xlsx")}>
                  Excel??????
                </button> */}
                  {/* <button onClick={(e) => handleClickDownloadButton(e, "csv")}>
                  CSV??????
                </button> */}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Process;
