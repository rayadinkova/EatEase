import "../Log/Log.css";

export const Log = (log) => {
  return (
    <>
      {/* experiment - trying to fetch data from firebase, later I deleted it cause it was unsuccessful
      and implemented create and delete successfuly in the Goals page instead, using another method with npm install firebase*/}
      <div>
        <h2 className="log-h2">{log.food}</h2>
      </div>
    </>
  );
};
