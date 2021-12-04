import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

export const Chart = ({ width = 600, height = 600, data }) => {
  const barChart = useRef();

  useEffect(() => {
    const margin = { top: 10, left: 50, bottom: 40, right: 10 };
    const iwidth = width - margin.left - margin.right;
    const iheight = height - margin.top - margin.bottom;

    const svg = d3.select(barChart.current);
    svg.attr("width", width);
    svg.attr("height", height);

    let g = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const y = d3.scaleLinear().domain([0, 500]).range([iheight, 0]);

    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.name))
      .range([0, iwidth])
      .padding(0.1);

    const bars = g.selectAll("rect").data(data);

    // Continue with implementation. Don't forget the tooltip

    g.append("g").classed("y--axis", true).call(d3.axisLeft(y));

    const toolDiv = d3
      .select("#chartArea")
      .append("div")
      .style("visibility", "hidden")
      .style("position", "absolute")
      .style("background-color", "white");
    bars
      .enter()
      .append("rect")
      .style("fill", "steelBlue")
      .attr("x", (d) => x(d.name))
      .attr("y", (d) => y(d.stock))
      .attr("height", (d) => iheight - y(d.stock))
      .attr("width", (d) => x.bandwidth())
      .join()
      .on("mouseover", (e, d) => {
        toolDiv.style("visibility", "visible").text(`${d.name}`);
      });
  });

  return (
    <div id="chartArea">
      <svg ref={barChart}></svg>
    </div>
  );
};
