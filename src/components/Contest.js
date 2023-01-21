import React from "react";

const Contest = ({ data }) => {
  function msToTime(duration) {
    var minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    return hours + " hours " + minutes + " minutes";
  }
  let startTime = parseInt(data.start_time.slice(11, 13));
  let ampm = "";
  if (startTime >= 12) {
    ampm = "PM";
  } else {
    ampm = "AM";
  }
  if (startTime > 12) {
    startTime = startTime % 12;
  }
  return (
    <div className=" p-3  mt-4 contest">
      <div className="details">
        <a href={data.url} target="_blank" rel="noreferrer">
          <p className="names">{data.name}</p>
          <p>Start date: {data.start_time.slice(0, 10)}</p>
          <p>
            Start time:{" "}
            {startTime +
              ":" +
              data.start_time.slice(14, 16) +
              ":" +
              data.start_time.slice(17, 19) +
              " " +
              ampm}
          </p>
          <p>Duration: {msToTime(data.duration)}</p>
        </a>
      </div>
    </div>
  );
};

export default Contest;
