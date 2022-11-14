import {useState} from 'react'

function RecordCreator(props: any) {
  const [record, setRecord] = useState([])

  function submitHandler(event: any) {
    event.preventDefault()
  }
  
  async function createRecordHandler() {
    // 
  }

  return (
    <div className="p-4 mb-4 bg-light rounded-2 border border-secondary">
      <h3 className="text-center">Record Creator</h3>
      <form 
        className="d-flex flex-column"
        onSubmit={submitHandler}
      >
        <div className="form-group mb-4">
          <label htmlFor="postId">Post id</label>
          <input type="number" className="form-control" id="postId" min={0} />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="name">Title</label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="exampleFormControlInput1">Email address</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="body">Description</label>
          <textarea className="form-control" id="body" rows={3}></textarea>
        </div>
        <div className="d-flex justify-content-center">
          <button 
            className="btn btn-primary px-4" 
            disabled={record.length === 0}
            onSubmit={createRecordHandler}
          >Add Record</button>
        </div>
      </form>
    </div>
  )
}

export {RecordCreator}