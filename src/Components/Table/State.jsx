const State = () => {

  return (
    <div className="container">
      <div className="row text-decoration-none">
        <a href="/#" className="px-2 mb-2 col">
          All
          <span className="px-2 text-white bg-primary rounded-circle">
            3
          </span>
          <span className="span"></span>
        </a>

        <a href="/#" className="px-2 text-gray col mb-2">
          Open
          <span className="px-2 text-white bg-gray rounded-circle">3</span>
        </a>
        <a href="/#" className="px-2 text-gray col mb-2">
          Closed
          <span className="px-2 text-white bg-gray rounded-circle">
            0
          </span>
        </a>
        <a href="/#" className="px-2 text-gray col mb-2">
          Archived
          <span className="px-2 text-white bg-gray rounded-circle">0</span>
        </a>
      </div>
      <div className="space"></div>
    </div>
  );
};

export default State;
