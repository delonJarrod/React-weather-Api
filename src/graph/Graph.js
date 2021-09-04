import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import classes from "./Graph.module.css";
function Graph({ data }) {
  return (
    <div className="p-5 text-center">
      <div className="mt-5 mb-5">
        <h1>
          <em>
            Graph Displaying <b> Data From Api </b>
          </em>
        </h1>
      </div>
      <Bar
        data={{
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [
            {
              label: "# of Votes",
              data: data,
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
          ],
        }}
        width={100}
        height={20}
        options={{ maintainAspectRatio: true }}
      />
    </div>
  );
}
export default Graph;
