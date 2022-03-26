import Item from "./Item";

const List = ({ listData, deleteData, submittingStatus }) => {
  //   console.log("listData", listData);
  return (
    <div className="list">
      {listData.map((item) => {
        const { note, date, time, id } = item;
        return (
          <Item
            key={id}
            id={id}
            noteData={note}
            dateData={date}
            timeData={time}
            deleteData={deleteData}
            submittingStatus={submittingStatus}
          />
        );
      })}
    </div>
  );
};

export default List;
