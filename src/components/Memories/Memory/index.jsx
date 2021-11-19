import "./styles.scss";

const Memory = ({memory}) => {
  const date = new Date(memory.date);

  return (
    <div className="home-memory">
      <div className="home-memory__header">
        <span className="home-memory__header_title">{memory.title}</span>
      </div>
      <div className="home-memory__main">
        <p className="home-memory__description">{memory.description}</p>
      </div>
      <div className="home-memory__footer">
        <p className="home-memory__footer_date">{date.toLocaleDateString()}</p>
        <p className="home-memory__footer_date">{date.toLocaleTimeString()}</p>
      </div>
    </div>
  );
}

export default Memory;