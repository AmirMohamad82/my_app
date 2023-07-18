import NewTask from "../TaskCard/NewTask";

const Table = ({ onAdd }) => {
  return (
    <>
      <div className="row container">
        <div className="col-8 text">
          <p>
            Today's Task <br />
            <span>Wednesday , 11 May</span>
          </p>
        </div>
        <div className="col-4 r">
          <button
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#myModal"
          >
            + New Task
          </button>
        </div>
      </div>
      <div className="modal fade" id="myModal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Add task</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <NewTask onAdd={onAdd} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
