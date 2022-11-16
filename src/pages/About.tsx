export const About = () => {
  return (
    <div className="p-4 mb-4 bg-light rounded-2">
      <h1 className="text-center">Task Description</h1>
      <p>
        You need to write a small application in React + Typescript. The application is
        written only through function components and hooks, it is forbidden to use
        classes.
      </p>
      <p>The following features in application must be implemented:</p>
      <ol>
        <li>A table that can contain an arbitrary number of rows (from 5 to 15).</li>
        <li>The data in the table must be loaded from the server.</li>
        <li>Use "Infinite Loader" to load new data.</li>
        <li>State manager (or lack thereof, justify the choice or lack of a tool).</li>
        <li>In the form of creating a new record in the table, there must be at least 5 inputs.
          <ul>
            <li>Keep in mind that there can be any number of rows.</li>
            <li>Inputs must contain validation (at least mandatory or complex like a valid email address)</li>
            <li>Must have appropriate checks before submitting (disable buttons orothers)</li>
            <li>The server may not accept the form and return errors (you may not implement it, but describe the implementation)</li>
          </ul>
        </li>
        <li>The form must be submitted via the API. The entry is made in the table.</li>
        <li>
          Add any animation (for example popup with a form, use something more complicated than simple CSS animations)
        </li>
        <li>Upload code to github.</li>
      </ol>
      <p>
        The use of any third-party libraries is allowed (but you will need to justify their
        use).
      </p>
      <p>
        For UI you can use any component library or framework (bootstrap, chakra,
        material, etc.).
      </p>
      <p>
        For the API, you can use https://github.com/typicode/json-server db file must be
        attached to the project.
      </p>
    </div>
  )
}